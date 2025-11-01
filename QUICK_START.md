# Quick Start: Custom Statuses Database Integration

## What Was Implemented

A complete solution to work with custom statuses from the Tbot bot, with the ability to:
- **Filter out statuses containing variables** (`${...}` template literals)
- **Store static statuses in a database** for easy querying
- **Display statuses as Discord embed fields**
- **Generate SQL queries** for database operations

## Quick Setup (3 Steps)

### 1. Run the Migration Script

This creates the database table and populates it with all 249 static custom statuses:

```bash
node Utilities/migrateCustomStatuses.js
```

### 2. Test the Discord Command

In Discord, try the new command:

```
@Tbot customstatuses
```

This displays all static custom statuses in a formatted embed.

### 3. (Optional) Integrate with ready.js

If you want to use database statuses instead of the hardcoded array, see `EXAMPLE_DB_QUERY_USAGE.js` for implementation examples.

## Files Added

| File | Purpose |
|------|---------|
| `Utilities/getStaticCustomStatuses.js` | Filters and returns static statuses (no variables) |
| `Utilities/formatStatusesAsFields.js` | Formats statuses as embed fields and generates SQL |
| `Utilities/generateStatusQueries.js` | Displays SQL queries for database setup |
| `Utilities/migrateCustomStatuses.js` | Automated database migration (recommended) |
| `Misc/customstatuses.js` | Discord command to display statuses |
| `CUSTOM_STATUSES_README.md` | Comprehensive documentation |
| `EXAMPLE_DB_QUERY_USAGE.js` | Code examples for different use cases |

## Key Features

✅ **249 static custom statuses** extracted from ready.js  
✅ **Filters out 143 dynamic statuses** containing variables  
✅ **SQL queries properly escape** single quotes and special characters  
✅ **Discord embed compatible** with field limits  
✅ **Duplicate prevention** in migration script  
✅ **Multiple usage patterns** documented with examples  

## Database Schema

```sql
CREATE TABLE customstatuses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  status_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Usage Examples

### Example 1: Get All Static Statuses (No Database)

```javascript
const getStaticCustomStatuses = require('./Utilities/getStaticCustomStatuses');
const statuses = getStaticCustomStatuses();
console.log(`Found ${statuses.length} static statuses`);
```

### Example 2: Query Random Status from Database

```javascript
const db = require("./index.js");
const [rows] = await db.query(
  "SELECT status_text FROM customstatuses ORDER BY RAND() LIMIT 1"
);
const randomStatus = rows[0].status_text;
```

### Example 3: Format as Discord Embed Fields

```javascript
const { formatStatusesAsFields } = require('./Utilities/formatStatusesAsFields');
const embed = new EmbedBuilder()
  .setTitle("Custom Statuses")
  .addFields(formatStatusesAsFields(25, 15));
```

## Command Aliases

The new Discord command can be invoked with any of these:
- `@Tbot customstatuses`
- `@Tbot statuses`
- `@Tbot status`
- `@Tbot customstatus`
- `@Tbot botstatuses`

## Excluded Status Variables

The following template variables are filtered out:
- `${randomYoutubers}` - Random YouTuber name
- `${randomDeck.name}` - Random deck from database
- `${randomStreamers}` - Random streamer name
- `${randomTourney}` - Random tournament name
- `${client.guilds.cache.size}` - Server count
- `${totalMembers}` - Total member count
- `${rows.length}` - Total deck count

## Need Help?

- Full documentation: `CUSTOM_STATUSES_README.md`
- Usage examples: `EXAMPLE_DB_QUERY_USAGE.js`
- Generate SQL queries: `node Utilities/generateStatusQueries.js`

## Summary

This implementation provides a complete, production-ready solution for managing custom statuses with database integration. The migration script makes setup easy, and multiple usage examples ensure flexibility for different use cases.
