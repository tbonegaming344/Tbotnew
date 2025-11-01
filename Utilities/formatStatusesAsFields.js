const getStaticCustomStatuses = require("./getStaticCustomStatuses");

/**
 * @description Formats static custom statuses as embed fields
 * @param {number} maxFields - Maximum number of fields to include (default: 25, Discord's limit)
 * @param {number} statusesPerField - Number of statuses to include per field (default: 10)
 * @returns {Array<Object>} Array of field objects for Discord embeds
 */
function formatStatusesAsFields(maxFields = 25, statusesPerField = 10) {
  const statuses = getStaticCustomStatuses();
  const fields = [];
  
  for (let i = 0; i < statuses.length && fields.length < maxFields; i += statusesPerField) {
    const chunk = statuses.slice(i, i + statusesPerField);
    const fieldNumber = Math.floor(i / statusesPerField) + 1;
    
    fields.push({
      name: `Custom Statuses (${fieldNumber})`,
      value: chunk.map((status, idx) => `${i + idx + 1}. ${status}`).join("\n"),
      inline: false
    });
  }
  
  return fields;
}

/**
 * @description Generates SQL query to insert static custom statuses into a database table
 * @param {string} tableName - The name of the database table (default: 'customstatuses')
 * @returns {string} SQL INSERT query
 */
function generateInsertQuery(tableName = "customstatuses") {
  const statuses = getStaticCustomStatuses();
  
  // Create the query with placeholders
  const values = statuses.map((status, idx) => {
    // Escape single quotes for SQL
    const escapedStatus = status.replace(/'/g, "''");
    return `(${idx + 1}, '${escapedStatus}')`;
  }).join(",\n");
  
  return `INSERT INTO ${tableName} (id, status_text) VALUES\n${values};`;
}

/**
 * @description Generates SQL query to create a custom statuses table
 * @param {string} tableName - The name of the database table (default: 'customstatuses')
 * @returns {string} SQL CREATE TABLE query
 */
function generateCreateTableQuery(tableName = "customstatuses") {
  return `CREATE TABLE IF NOT EXISTS ${tableName} (
  id INT AUTO_INCREMENT PRIMARY KEY,
  status_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;
}

/**
 * @description Generates SQL query to select all static custom statuses
 * @param {string} tableName - The name of the database table (default: 'customstatuses')
 * @returns {string} SQL SELECT query
 */
function generateSelectQuery(tableName = "customstatuses") {
  return `SELECT id, status_text FROM ${tableName} ORDER BY id;`;
}

module.exports = {
  formatStatusesAsFields,
  generateInsertQuery,
  generateCreateTableQuery,
  generateSelectQuery
};
