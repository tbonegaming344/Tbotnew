const registerOrUpdateDbCommand = require("./registerOrUpdateDbCommand");
const unregisterDbCommandByKey = require("./unregisterDbCommandByKey");
/**
 * @description Scans all configured tables and synchronizes commands
 * @returns {Promise<void>} Resolves when synchronization is complete
 */
async function scanAllTablesAndSync(db, dbTables, client, dbCommandMap, dbTableColors) {
  try {
    for (const t of dbTables) {
      const [rows] = await db
        .query(`SELECT * FROM \`${t.table}\``)
        .catch(() => [[]]);
      const seenKeys = new Set();

      for (const r of rows || []) {
        const key = `${t.table}:${r.deckID ?? r.cardid ?? r.name}`;
        seenKeys.add(key);
        await registerOrUpdateDbCommand(t, r, client, dbCommandMap, dbTableColors);
      }

      // remove DB commands for rows that no longer exist
      for (const existingKey of Array.from(dbCommandMap.keys())) {
        if (!existingKey.startsWith(`${t.table}:`)) continue;
        if (!seenKeys.has(existingKey))
          await unregisterDbCommandByKey(existingKey, client, dbCommandMap);
      }
    }
  } catch (err) {
    console.error("DB command loader error:", err);
  }
}
module.exports = scanAllTablesAndSync;