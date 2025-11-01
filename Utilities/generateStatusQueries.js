/**
 * Utility script to generate SQL queries for custom statuses
 * This script generates the necessary SQL to create a table and insert all static custom statuses
 */

const {
  generateCreateTableQuery,
  generateInsertQuery,
  generateSelectQuery
} = require("./formatStatusesAsFields");
const getStaticCustomStatuses = require("./getStaticCustomStatuses");

// Function to display queries
function displayQueries() {
  console.log("=".repeat(80));
  console.log("CUSTOM STATUSES DATABASE QUERIES");
  console.log("=".repeat(80));
  console.log("\n");

  // Display count
  const statuses = getStaticCustomStatuses();
  console.log(`Total static custom statuses (excluding variables): ${statuses.length}`);
  console.log("\n");

  // Create Table Query
  console.log("--- CREATE TABLE QUERY ---");
  console.log(generateCreateTableQuery());
  console.log("\n");

  // Insert Query
  console.log("--- INSERT QUERY ---");
  console.log("Note: This query inserts all static custom statuses into the database.");
  console.log(generateInsertQuery());
  console.log("\n");

  // Select Query
  console.log("--- SELECT QUERY ---");
  console.log(generateSelectQuery());
  console.log("\n");

  console.log("=".repeat(80));
  console.log("USAGE INSTRUCTIONS:");
  console.log("1. Run the CREATE TABLE query to create the customstatuses table");
  console.log("2. Run the INSERT query to populate the table with all static statuses");
  console.log("3. Use the SELECT query to retrieve all statuses from the database");
  console.log("=".repeat(80));
}

// If run directly, display the queries
if (require.main === module) {
  displayQueries();
}

module.exports = { displayQueries };
