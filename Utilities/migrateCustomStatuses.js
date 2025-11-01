/**
 * Database Migration Script for Custom Statuses
 * 
 * This script creates the customstatuses table and populates it with all static custom statuses
 * Run this script once to set up the custom statuses in your database
 * 
 * Usage: node Utilities/migrateCustomStatuses.js
 */

const {
  generateCreateTableQuery,
  generateInsertQuery
} = require("./formatStatusesAsFields");
const getStaticCustomStatuses = require("./getStaticCustomStatuses");

async function migrate() {
  try {
    // Import database connection from index.js
    const db = require("../index.js");
    
    console.log("Starting custom statuses migration...\n");
    
    // Step 1: Create the table
    console.log("Step 1: Creating customstatuses table...");
    const createTableSQL = generateCreateTableQuery("customstatuses");
    await db.query(createTableSQL);
    console.log("✓ Table created successfully\n");
    
    // Step 2: Check if table already has data
    console.log("Step 2: Checking existing data...");
    const [existingRows] = await db.query("SELECT COUNT(*) as count FROM customstatuses");
    const existingCount = existingRows[0].count;
    
    if (existingCount > 0) {
      console.log(`⚠ Warning: Table already contains ${existingCount} records`);
      console.log("Skipping insert to avoid duplicates.");
      console.log("If you want to refresh the data, manually truncate the table first:\n");
      console.log("  TRUNCATE TABLE customstatuses;\n");
      return;
    }
    console.log("✓ Table is empty, proceeding with insert\n");
    
    // Step 3: Insert all static statuses
    console.log("Step 3: Inserting static custom statuses...");
    const statuses = getStaticCustomStatuses();
    
    // Insert statuses one by one to avoid query size issues
    for (let i = 0; i < statuses.length; i++) {
      const status = statuses[i];
      await db.query(
        "INSERT INTO customstatuses (status_text) VALUES (?)",
        [status]
      );
      
      if ((i + 1) % 50 === 0) {
        console.log(`  Inserted ${i + 1}/${statuses.length} statuses...`);
      }
    }
    
    console.log(`✓ Successfully inserted ${statuses.length} statuses\n`);
    
    // Step 4: Verify the data
    console.log("Step 4: Verifying data...");
    const [verifyRows] = await db.query("SELECT COUNT(*) as count FROM customstatuses");
    const insertedCount = verifyRows[0].count;
    console.log(`✓ Verification complete: ${insertedCount} records in database\n`);
    
    // Step 5: Show sample statuses
    console.log("Step 5: Sample statuses from database:");
    const [sampleRows] = await db.query(
      "SELECT id, status_text FROM customstatuses ORDER BY RAND() LIMIT 5"
    );
    sampleRows.forEach((row) => {
      console.log(`  [${row.id}] ${row.status_text}`);
    });
    
    console.log("\n✓ Migration completed successfully!");
    console.log("\nYou can now query custom statuses from the database using:");
    console.log("  SELECT status_text FROM customstatuses ORDER BY RAND() LIMIT 1;");
    
    process.exit(0);
  } catch (error) {
    console.error("\n✗ Migration failed with error:");
    console.error(error);
    process.exit(1);
  }
}

// Run migration if executed directly
if (require.main === module) {
  migrate();
}

module.exports = migrate;
