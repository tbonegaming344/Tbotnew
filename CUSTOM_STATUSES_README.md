# Custom Statuses Database Integration

This documentation explains how to work with custom statuses in the Tbot project, including filtering out statuses with variables and storing them in a database.

## Overview

The Tbot project uses custom statuses that are displayed as bot activities. Some of these statuses contain dynamic variables (like `${randomYoutubers}`, `${randomDeck.name}`, etc.) that are interpolated at runtime. This implementation provides utilities to:

1. Filter and retrieve only static custom statuses (excluding ones with variables)
2. Generate SQL queries to store these statuses in a database
3. Display custom statuses as Discord embed fields

## Files Created

### 1. `Utilities/getStaticCustomStatuses.js`
This utility function extracts all custom statuses from the ready.js file and filters out any that contain template literal variables (`${...}`).

**Usage:**
```javascript
const getStaticCustomStatuses = require('./Utilities/getStaticCustomStatuses');
const statuses = getStaticCustomStatuses();
console.log(`Total static statuses: ${statuses.length}`);
```

### 2. `Utilities/formatStatusesAsFields.js`
Provides multiple utility functions for working with custom statuses:

**Functions:**
- `formatStatusesAsFields(maxFields, statusesPerField)` - Formats statuses as Discord embed fields
- `generateCreateTableQuery(tableName)` - Generates SQL to create the database table
- `generateInsertQuery(tableName)` - Generates SQL to insert all static statuses
- `generateSelectQuery(tableName)` - Generates SQL to retrieve all statuses

**Usage:**
```javascript
const { formatStatusesAsFields, generateInsertQuery } = require('./Utilities/formatStatusesAsFields');

// Get fields for Discord embed
const fields = formatStatusesAsFields(25, 15);

// Get SQL insert query
const insertSQL = generateInsertQuery('customstatuses');
```

### 3. `Utilities/generateStatusQueries.js`
A standalone script that displays all the SQL queries needed to work with custom statuses in a database.

**Usage:**
```bash
node Utilities/generateStatusQueries.js
```

This will output:
- CREATE TABLE query
- INSERT query with all 249 static statuses
- SELECT query to retrieve statuses

### 4. `Misc/customstatuses.js`
A new Discord bot command that displays all static custom statuses in an embed.

**Command aliases:** `customstatuses`, `statuses`, `status`, `customstatus`, `botstatuses`

**Usage in Discord:**
```
@Tbot customstatuses
@Tbot statuses
```

## Database Implementation

### Step 1: Create the Database Table

Run this SQL query in your MySQL database:

```sql
CREATE TABLE IF NOT EXISTS customstatuses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  status_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 2: Populate the Table

Generate the insert query by running:
```bash
node Utilities/generateStatusQueries.js > /tmp/status_queries.sql
```

Then extract and run the INSERT statement from the output.

### Step 3: Query from Database in Code

Example of querying statuses from the database in your code:

```javascript
const db = require("../index.js");

// Query all custom statuses from database
const [statusRows] = await db.query("SELECT id, status_text FROM customstatuses ORDER BY id");

// Use a random status
const randomStatus = statusRows[Math.floor(Math.random() * statusRows.length)];
client.user.setActivity({
  type: ActivityType.Custom,
  name: randomStatus.status_text,
});
```

## Statistics

- **Total custom statuses in ready.js:** ~392 statuses
- **Static statuses (excluding variables):** 249 statuses
- **Dynamic statuses (with variables):** ~143 statuses

## Dynamic Status Variables

The following variables are used in dynamic statuses and are excluded from the static list:
- `${randomYoutubers}` - Random YouTuber name
- `${randomDeck.name}` - Random deck name from database
- `${randomStreamers}` - Random streamer name  
- `${randomTourney}` - Random tournament name
- `${client.guilds.cache.size}` - Number of servers the bot is in
- `${totalMembers}` - Total number of members across all servers
- `${rows.length}` - Total number of decks in the system

## Integration with Existing Code

The custom statuses functionality is fully integrated with the existing Tbot codebase:
- Works with the existing database connection in `index.js`
- Follows the same command pattern as other Misc commands
- Uses the same Discord.js embed styling

## Example: Using in ready.js Event

You can optionally modify the ready.js event to load statuses from the database instead of hardcoding them:

```javascript
// At the top of ready.js, after database connection
const getStaticCustomStatuses = require("../Utilities/getStaticCustomStatuses");

// Later in the code, replace the hardcoded customStatus array:
const customStatus = getStaticCustomStatuses();

// Or query from database:
const [statusRows] = await db.query("SELECT status_text FROM customstatuses ORDER BY id");
const dbStatuses = statusRows.map(row => row.status_text);
```

## Testing

To test the implementation:

1. **Test the query generation:**
   ```bash
   node Utilities/generateStatusQueries.js
   ```

2. **Test the command:**
   In Discord, use: `@Tbot customstatuses`

3. **Test the utility functions:**
   ```bash
   node -e "const f = require('./Utilities/getStaticCustomStatuses'); console.log(f().length)"
   ```

## Notes

- All single quotes in status text are properly escaped for SQL (e.g., `don't` becomes `don''t`)
- The Discord embed field limit is 25 fields, which is respected by `formatStatusesAsFields()`
- Each field can contain up to 1024 characters, which is also respected
- The implementation maintains the original order and attribution comments from ready.js
