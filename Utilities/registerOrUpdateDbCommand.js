const fs = require("node:fs");
const path = require("node:path");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const rowHash = require("./rowHash");
const buildDeckEmbedFromRow = require("./buildDeckEmbedFromRow");
const buildCardEmbedFromRow = require("./buildCardEmbedFromRow");
const sanitizeCommandName = require("./sanitizeCommandName");
const buildDeckBuilderFromRow = require("./buildDeckBuilderFromRow");
/**
 * @description Registers or updates a database command
 * @param {*} tableConfig  - The configuration for the database table
 * @param {*} row  - The database row object
 * @returns {Promise<void>} - Resolves when the command is registered or updated
 */
async function registerOrUpdateDbCommand(tableConfig, row, client, dbCommandMap, dbTableColors = {}) {
 const key = `${tableConfig.table}:${row.deckID ?? row.id ?? row.cardid ?? row.heroID ?? row.card_name ?? row.title ?? row.name ?? row.deckbuilder_name ?? row.herocommand}`;
  const baseName = (
    row.name ??
    row.card_name ?? row.deckbuilder_name ?? row.herocommand ?? "unamed"
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
    .map((a) => a.toLowerCase())
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
    if (row.herocommand) {
  try {
    const buildHelpHeroEmbed = require("./buildHelpHeroEmbed");
    const heroCommand = row.herocommand;
    const heroName = row.heroname;
    
    // Determine the deck table based on hero
    const heroTableMap = {
      'helpbc': 'bcdecks',
      'helpct': 'ctdecks', 
      'helpsf': 'sfdecks',
      'helpwk': 'wkdecks',
      'helpgs': 'gsdecks',
      'helpcz': 'czdecks',
      'helpsp': 'spdecks',
      'helpgk': 'gkdecks',
      'helpnc': 'ncdecks',
      'helpro': 'rodecks',
      'helpcc': 'ccdecks',
      'helpsb': 'sbdecks',
      'helpsm': 'smdecks',
      'helpif': 'ifdecks',
      'helprb': 'rbdecks',
      'helpeb': 'ebdecks',
      'helpbf': 'bfdecks',
      'helppb': 'pbdecks',
      'helpim': 'imdecks',
      'helpzm': 'zmdecks',
      'helpnt': 'ntdecks',
      'helphg': 'hgdecks'
    };

    const deckTable = heroTableMap[heroCommand];
    if (!deckTable) {
      console.error(`No deck table found for hero command: ${heroCommand}`);
      return;
    }

    // Fetch all decks for this hero
    const [decks] = await require("../index.js").query(`SELECT * FROM ${deckTable}`);
    
    if (!decks || decks.length === 0) {
      return message.channel.send(`No ${heroName} decks found in the database.`);
    }

    // Build embed and select menu using the utility function
    const { embed, select, deckLists, availableCategories, heroName: returnedHeroName, categoryColor, deckColor, thumbnailUrl } = 
      buildHelpHeroEmbed(row, decks);

    const m = await message.channel.send({
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(select)]
    });

    // Store data for interaction handling
    if (!client.heroHelpData) {
      client.heroHelpData = new Map();
    }
    
    const tempKey = `temp_${heroCommand}_${m.id}`;
    client.heroHelpData.set(tempKey, {
      heroName: returnedHeroName,
      heroCommand,
      deckLists,
      availableCategories,
      categoryColor,
      deckColor,
      thumbnailUrl
    });

    console.log(`Stored hero help data for message ID: ${m.id}`);
    return;
  } catch (error) {
    console.error("Error handling hero help command:", error);
    return message.channel.send("An error occurred while loading hero help data.");
  }
}
    if (row.description?.includes("Superpower") || row.set_rarity === "Token") {
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
  else if (row.deckbuilder_name){
    if (!message.channel) {
      console.error("message.channel is undefined!");
      return;
    }

    try {
      // Query all decks by this deckbuilder across all tables
      const deckbuilderName = row.deckbuilder_name;
      const allDecks = [];
      
      // Define all deck tables with their hero mappings
      const deckTables = [
        { table: "gsdecks", hero: "Green Shadow" },
        { table: "sfdecks", hero: "Solar Flare" },
        { table: "wkdecks", hero: "Wall Knight" },
        { table: "czdecks", hero: "Chompzilla" },
        { table: "spdecks", hero: "Spudow" },
        { table: "ctdecks", hero: "Citron" },
        { table: "gkdecks", hero: "Grass Knuckles" },
        { table: "ncdecks", hero: "Night Cap" },
        { table: "rodecks", hero: "Rose" },
        { table: "ccdecks", hero: "Captain Combustible" },
        { table: "bcdecks", hero: "Beta Carrotina" },
        { table: "sbdecks", hero: "Super Brainz" },
        { table: "smdecks", hero: "The Smash" },
        { table: "ifdecks", hero: "Impfinity" },
        { table: "rbdecks", hero: "Rustbolt" },
        { table: "ebdecks", hero: "Electric Boogaloo" },
        { table: "bfdecks", hero: "Brain Freeze" },
        { table: "pbdecks", hero: "Professor Brainstorm" },
        { table: "imdecks", hero: "Immorticia" },
        { table: "zmdecks", hero: "Z-Mech" },
        { table: "ntdecks", hero: "Neptuna" },
        { table: "hgdecks", hero: "Huge-Gigantacus" }
      ];

      // Query each table for decks by this deckbuilder (NOT inspired by this specific deckbuilder)
      for (const { table, hero } of deckTables) {
        try {
         const [decks] = await require("../index.js").query(
  `SELECT * FROM ${table} WHERE creator LIKE ? AND creator NOT LIKE ?`,
  [`%${deckbuilderName}%`, `%inspired by ${deckbuilderName}%`]
);
          
          for (const deck of decks) {
            allDecks.push({
              ...deck,
              hero,
              table
            });
          }
        } catch (error) {
          console.error(`Error querying ${table} for ${deckbuilderName}:`, error);
        }
      }

      console.log(`Found ${allDecks.length} decks for ${deckbuilderName}`); // Debug log

      if (allDecks.length === 0) {
        return message.channel.send(`No decks found for ${deckbuilderName}.`);
      }

      // Build embed and select menu using the utility function
      const { embed, select, deckLists, availableCategories, deckbuilderName: returnedDeckbuilderName, color, userId } = 
        buildDeckBuilderFromRow(row, allDecks, client);
      
      // Get user avatar for thumbnail
      let thumb = null;
      try {
        if (userId) {
          const user = await client.users.fetch(userId).catch(() => null);
          if (user) {
            thumb = user.displayAvatarURL();
            embed.setThumbnail(thumb);
          }
        }
      } catch (error) {
        console.error("Error fetching user for deckbuilder thumbnail:", error);
      }

      const m = await message.channel.send({
  embeds: [embed],
  components: [new ActionRowBuilder().addComponents(select)]
});

// Store the data temporarily using a different key that includes the deckbuilder name
if (!client.deckbuilderData) {
  client.deckbuilderData = new Map();
}

// Use a composite key that can be reconstructed in interactionCreate
const tempKey = `temp_${returnedDeckbuilderName.toLowerCase().replaceAll(/\s+/g, "_")}_${m.id}`;
client.deckbuilderData.set(tempKey, {
  deckbuilderName: returnedDeckbuilderName,
  deckLists,
  availableCategories,
  color: color,
  userId: userId, 
  thumb: thumb,
});
      console.log(`Stored deckbuilder data for message ID: ${m.id}`);
      return;
    } catch (error) {
      console.error("Error handling deckbuilder command:", error);
      return message.channel.send("An error occurred while loading deckbuilder data.");
    }
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