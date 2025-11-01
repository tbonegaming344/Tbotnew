/**
 * EXAMPLE: Using Database Query to Fetch Custom Statuses
 * 
 * This file demonstrates how to query custom statuses from the database
 * and use them in the ready.js event or other parts of your code.
 * 
 * This is an EXAMPLE ONLY - not meant to replace existing code
 */

const { Events, ActivityType } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  async run(client) {
    const db = require("../index.js");
    
    // Original deck query (unchanged)
    const [rows] = await db.query(`
        select name FROM sbdecks    
        union all select name from ccdecks 
        union all select name from sfdecks 
        union all select name from rodecks 
        union all select name from gsdecks 
        union all select name from wkdecks 
        union all select name from czdecks 
        union all select name from spdecks 
        union all select name from ctdecks 
        union all select name from bcdecks 
        union all select name from gkdecks 
        union all select name from ncdecks 
        union all select name from hgdecks 
        union all select name from zmdecks 
        union all select name from smdecks 
        union all select name from ifdecks 
        union all select name from rbdecks 
        union all select name from ebdecks 
        union all select name from bfdecks 
        union all select name from pbdecks 
        union all select name from imdecks
        union all select name from ntdecks`);
    
    console.log(`Tbot is in ${client.guilds.cache.size} servers`);
    const totalMembers = client.guilds.cache
      .map((guild) => guild.memberCount)
      .reduce((a, b) => a + b, 0);
    
    client.user.setStatus("dnd");
    console.log(`${client.user.username} is online`);
    console.log(`${rows.length} decks are in the tbot system`);
    
    // EXAMPLE 1: Query static custom statuses from database
    // This assumes you've run the migration script (Utilities/migrateCustomStatuses.js)
    let staticCustomStatuses = [];
    try {
      const [statusRows] = await db.query(
        "SELECT status_text FROM customstatuses ORDER BY id"
      );
      staticCustomStatuses = statusRows.map(row => row.status_text);
      console.log(`Loaded ${staticCustomStatuses.length} static custom statuses from database`);
    } catch (error) {
      console.log("Could not load custom statuses from database, using fallback");
      // Fallback to utility function if database table doesn't exist
      staticCustomStatuses = require("../Utilities/getStaticCustomStatuses")();
    }
    
    // Original dynamic arrays (unchanged)
    const tourneys = [
      "Floral Federation",
      "PVZHTWJIZ",
      "Budget",
      "Gimmick",
      "Jupiter",
      "Martin Den", 
      "PVZH Revived", 
      "Quicksand", 
      "Elo",
    ];
    
    const youtubers = [
      "FryEmUp",
      "PvzTryHard",
      "Tbonegaming344",
      "CardShark73",
      "Daily_PvZ",
      "TinyGargantuar",
      "SybertoxGaming",
      "Something_From_Space",
      "stormallan",
      "creeperblade711",
      "Autony",
      "Highlight Em Up",
    ];
    
    const streamers = [
      "Tbonegaming344",
      "PvzTryHard",
      "FryEmUp",
      "CardShark73",
      "koiuyp",
      "firsthero",
      "bluzacy_hipokryta",
      "stormallan",
      "Antonio009_PVZ",
      "boris_pvzh",
      "efesman",
    ];
    
    // EXAMPLE 2: Combine static and dynamic statuses
    // Build dynamic statuses (these contain variables)
    const randomYoutubers = youtubers[Math.floor(Math.random() * youtubers.length)];
    const randomTourney = tourneys[Math.floor(Math.random() * tourneys.length)];
    const randomDeck = rows[Math.floor(Math.random() * rows.length)];
    const randomStreamers = streamers[Math.floor(Math.random() * streamers.length)];
    
    const dynamicCustomStatuses = [
      `Watching ${randomYoutubers}'s Lastest Video`,
      `Throwing in ${randomTourney}`,
      `Playing ${randomDeck.name}`,
      `@Tbot help in ${client.guilds.cache.size} servers and serving decklists to ${totalMembers} users`,
      `Watching ${randomYoutubers}'s Lastest Video`,
      `Watching ${randomStreamers}'s Lastest stream`,
      `Waiting for ${randomStreamers}'s next Stream`,
      `${rows.length} decks are in the tbot system`,
      `Craft ${randomDeck.name} today!`,
      `Waiting for ${randomYoutubers} next post`,
      `Stream Sniping ${randomStreamers}`,
    ];
    
    // EXAMPLE 3: Combine both arrays and set interval
    const allCustomStatuses = [...staticCustomStatuses, ...dynamicCustomStatuses];
    
    setInterval(() => {
      // Pick a random status from combined array
      const status = allCustomStatuses[Math.floor(Math.random() * allCustomStatuses.length)];
      
      client.user.setActivity({
        type: ActivityType.Custom,
        name: status,
      });
    }, 600_000); // Every 10 minutes
    
    // EXAMPLE 4: Alternative - Query a random status directly from database
    // This approach queries the database each time instead of loading all at once
    /*
    setInterval(async () => {
      try {
        // Get a random static status from database
        const [statusRows] = await db.query(
          "SELECT status_text FROM customstatuses ORDER BY RAND() LIMIT 1"
        );
        
        if (statusRows.length > 0) {
          const status = statusRows[0].status_text;
          client.user.setActivity({
            type: ActivityType.Custom,
            name: status,
          });
        }
      } catch (error) {
        console.error("Error fetching random status:", error);
      }
    }, 600_000);
    */
  },
};
