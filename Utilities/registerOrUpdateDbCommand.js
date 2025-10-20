const fs = require("node:fs");
const path = require("node:path");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const rowHash = require("./rowHash");
const buildDeckEmbedFromRow = require("./buildDeckEmbedFromRow");
const buildCardEmbedFromRow = require("./buildCardEmbedFromRow");
const sanitizeCommandName = require("./sanitizeCommandName");
/**
 * @description Registers or updates a database command
 * @param {*} tableConfig  - The configuration for the database table
 * @param {*} row  - The database row object
 * @returns {Promise<void>} - Resolves when the command is registered or updated
 */
async function registerOrUpdateDbCommand(tableConfig, row, client, dbCommandMap, dbTableColors = {}) {
  const key = `${tableConfig.table}:${row.deckID ?? row.id ?? row.cardid ?? 
    row.card_name ?? row.title ?? row.name}`;
  const baseName = (
    row.name ??
    row.card_name ?? "Unnamed"
  ).toString();
  const baseSan = sanitizeCommandName(baseName);
  const cmdName = baseSan;

  const hash = rowHash(row);

  const existing = dbCommandMap.get(key);
  // if unchanged, nothing to do
  if (existing && existing.hash === hash) return;

  // parse aliases from possible columns (comma-separated)
  const aliasField = (
    row.aliases ||
    row.alias ||
    row.alias_list ||
    row.aliases_list ||
    ""
  ).toString();
  const parsedAliases = aliasField
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean)
    .map((a) => a.toLowerCase().replaceAll(/[^a-z0-9]+/g, ""));
  // include both plain and prefixed versions so users can invoke either form
  const aliasSet = new Set();
  for (const a of parsedAliases) {
    aliasSet.add(a);
  }
  const aliasesArray = Array.from(aliasSet);

  // Determine which embed to use based on row content
  let embed;

  // create command module shape compatible with other commands
  const commandModule = {
    name: cmdName,
    aliases: aliasesArray,
    category: tableConfig.category,
    run: async (client, message, args) => {
      let components = [];
      if(row.description.includes("Superpower") || row.set_rarity == "Token"){
          embed = buildCardEmbedFromRow(row, tableConfig.table, dbTableColors);
          console.log("Built card embed for superpower or token"); 
          await message.channel.send({ embeds: [embed], components });
      }
      else if(row.stats && row.button && row.button2){
         const actionRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId(`cardinfo_${row.button}`)
    .setLabel(row.button)
    .setEmoji(row.button_emoji)
    .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setCustomId(`cardinfo_${row.button2}`)
    .setLabel(row.button2)
    .setEmoji(row.button_emoji2)
    .setStyle(ButtonStyle.Primary), 
    new ButtonBuilder()
    .setCustomId(`detectdecks_${row.card_name}`)
    .setLabel(`Detect ${row.card_name} Decks`)
    .setEmoji("🔍")
    .setStyle(ButtonStyle.Secondary)
  );
    components.push(actionRow);
    embed = buildCardEmbedFromRow(row, tableConfig.table, dbTableColors);
    await message.channel.send({ embeds: [embed], components });
}
      else if (row.stats && row.button) {  
        // If these fields exist, treat as card
        embed = buildCardEmbedFromRow(row, tableConfig.table, dbTableColors);
          const actionRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId(`cardinfo_${row.button}`)
      .setLabel(row.button)
      .setEmoji(row.button_emoji)
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
    .setCustomId(`detectdecks_${row.card_name}`)
    .setLabel(`Detect ${row.card_name} Decks`)
    .setEmoji("🔍")
    .setStyle(ButtonStyle.Secondary)
  );
    components.push(actionRow);
    await message.channel.send({ embeds: [embed], components });
  } else if(row.stats && !row.button){
  embed = buildCardEmbedFromRow(row, tableConfig.table, dbTableColors);
  const detectDecks = new ButtonBuilder()
    .setCustomId(`detectdecks_${row.card_name}`)
    .setLabel(`Detect ${row.card_name} Decks`)
    .setEmoji("🔍")
    .setStyle(ButtonStyle.Secondary);
    components = [new ActionRowBuilder().addComponents(detectDecks)];
      await message.channel.send({ embeds: [embed], components });
  }
      else {
        // otherwise treat as deck
        embed = buildDeckEmbedFromRow(row, tableConfig.table, dbTableColors);
        await message.channel.send({ embeds: [embed] });
      }
  },
};

  // set or overwrite command in client.commands
  client.commands.set(cmdName, commandModule);
  dbCommandMap.set(key, { commandName: cmdName, aliases: aliasesArray, hash });
  const commandsForFile = Array.from(dbCommandMap.entries()).map(([key, value]) => [
  key,
  {
    commandName: value.commandName,
    aliases: value.aliases
  }
]);

fs.writeFileSync(
  path.join(__dirname, "..", "commands.json"),
  JSON.stringify(commandsForFile, null, 1)
);
}
module.exports = registerOrUpdateDbCommand;