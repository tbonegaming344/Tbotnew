/*
COPYRIGHT (C) 2025 Tbone, Tbonegaming18@gmail.com All rights reserved. 
This project is about the Plants vs Zombies Heroes card game 
and showcases Unique and Viable opitimized decks for the card game
Author: Tbone Gaming 
        Tbonegaming18@gmail.com
*/
const { token, user, host, password, database } = require("./config.json");
const mysql = require(`mysql2`);
const { PermissionsBitField } = require("discord.js");
const {
  Client,
  Partials,
  ChannelType,
  EmbedBuilder,
  Collection,
  Events,
  GatewayIntentBits,
} = require("discord.js");
const client = new Client({
  partials: [Partials.Channel],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
  ],
});
const db = mysql
  .createPool({
    host: host,
    user: user,
    password: password,
    database: database,
  })
  .promise();
module.exports = db;
const prefix = "?";
client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();
const fs = require("fs");
const path = require("node:path");
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ("data" in command && "execute" in command) {
      client.slashCommands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}
fs.readdirSync("./Plants").forEach((folder) => {
  const commands = fs
    .readdirSync(`./Plants/${folder}`)
    .filter((file) => file.endsWith(".js"));

  commands.forEach((f) => {
    const command = require(`./Plants/${folder}/${f}`);
    client.commands.set(command.name, command);
  });
});
fs.readdirSync("./Zombies").forEach((folder) => {
  const commands = fs
    .readdirSync(`./Zombies/${folder}`)
    .filter((file) => file.endsWith(".js"));

  commands.forEach((f) => {
    const command = require(`./Zombies/${folder}/${f}`);
    client.commands.set(command.name, command);
  });
});
fs.readdirSync("./ZV(Misc)").forEach((folder) => {
  const commands = fs
    .readdirSync(`./ZV(Misc)/${folder}`)
    .filter((file) => file.endsWith(".js"));

  commands.forEach((f) => {
    const command = require(`./ZV(Misc)/${folder}/${f}`);
    client.commands.set(command.name, command);
  });
});

fs.readdirSync("./Events").forEach((file) => {
  const event = require(`./Events/${file}`);

  client.on(event.name, event.run);
});

client.on(Events.MessageCreate, async (message) => {
  if (message.content.toLowerCase().startsWith(prefix)) {
    if (message.author.bot) return;
    const channel = client.channels.cache.get("1050107020008771604");
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const invokedRaw = args.join("").toLowerCase();
    const invoked = invokedRaw.replace(/[^a-z0-9]+/g, ""); // normalize like DB commands
    const command =
      client.commands.get(invoked) ||
      client.commands.find((a) => a.aliases?.includes(invoked));
    if (!command)
      return channel.send(
        `${message} is not a command sent by ${message.author.username}.`
      );
    // Check if the message is from a guild (not a DM)
    if (message.guild) {
      if (
        !message.guild.members.me
          .permissionsIn(message.channel)
          .has(PermissionsBitField.Flags.SendMessages)
      ) {
        return channel.send(
          `I do not have permission to send messages in this channel. ${message.guild.name}, ${message.channel.name}, <#${message.channel.id}>`
        );
      }
    }
    try {
      await command.run(client, message, args);
    } catch (e) {
      const errEmbed = new EmbedBuilder()
        .setTitle("❌ | Error")
        .setColor("Red")
        .setDescription(
          `An error occured while running the command.\n\`\`\`ansi\n${e}\`\`\``
        );
      console.error(e);
      message.channel.send({ embeds: [errEmbed] });
    }
    //DM Commands
    if (message.channel.type === ChannelType.DM) {
      return;
    }
  }
});
client.on(Events.Debug, (stdout) => {
  if (stdout.startsWith("Hit a 429")) {
    console.log("Rate limit reached. Retrying after some time...");
  }
});
client.login(token);

const dbTables = [
  { table: "rbdecks", prefix: "rb", category: "Rustbolt(RB)" },
  { table: "zmdecks", prefix: "zm", category: "Zmech(ZM)" },
  { table: "ctdecks", prefix: "ct", category: "Beta-Carrotina/Citron" },
  { table: "gsdecks", prefix: "gs", category: "Green Shadow(GS)" },
  { table: "bcdecks", prefix: "bc", category: "Beta-Carrotina/Citron" },
  { table: "bfdecks", prefix: "bf", category: "Brain Freeze(BF)" },
  { table: "ccdecks", prefix: "cc", category: "Captain Combustible(CC)" },
  { table: "czdecks", prefix: "cz", category: "Chompzilla(CZ)" },
  { table: "ebdecks", prefix: "eb", category: "Electric Boogaloo(EB)" },
  { table: "gkdecks", prefix: "gk", category: "Grass Knuckles(GK)" },
  { table: "hgdecks", prefix: "hg", category: "Huge-Gigantacus/SuperBrainz" },
  { table: "sbdecks", prefix: "sb", category: "Huge-Gigantacus/SuperBrainz" },
  { table: "ifdecks", prefix: "if", category: "Impfinity(IF)" },
  { table: "imdecks", prefix: "im", category: "Immorticia(IM)" },
  { table: "ncdecks", prefix: "nc", category: "Night Cap(NC)" },
  { table: "ntdecks", prefix: "nt", category: "Neptuna(NT)" },
  { table: "pbdecks", prefix: "pb", category: "Professor Brainstorm(PB)" },
  { table: "rodecks", prefix: "ro", category: "Rose(RO)" },
  { table: "sfdecks", prefix: "sf", category: "Solar Flare(SF)" },
  { table: "smdecks", prefix: "sm", category: "Smash(SM)" },
  { table: "spdecks", prefix: "sp", category: "Spudow(SP)" },
  { table: "wkdecks", prefix: "wk", category: "Wall Knight(WK)" },
  { table: "guardiancards2", prefix: "gc", category: "Plant Cards" },
  // add more table entries here
];

// map table name => embed color (hex). Adjust colors as desired.
const dbTableColors = {
  rbdecks: "Orange",
  zmdecks: "Purple",
  ctdecks: "White",
  gsdecks: "White",
  bcdecks: "White",
  bfdecks: "Blue",
  ccdecks: "Green",
  czdecks: "Yellow",
  ebdecks: "Purple",
  gkdecks: "#964B00",
  hgdecks: "#000000",
  sbdecks: "#000000",
  ifdecks: "#000000",
  imdecks: "Blue",
  ncdecks: "White",
  ntdecks: "#000000",
  pbdecks: "Purple",
  rodecks: "Yellow",
  sfdecks: "Yellow",
  smdecks: "Blue",
  spdecks: "#964B00",
  wkdecks: "Yellow",
};

const dbCommandMap = new Map(); // key => { commandName, hash }

function sanitizeCommandName(s, prefix) {
  const base =
    (s || "")
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "")
      .slice(0, 32) || "deck";
  return `${prefix}${base}`;
}
function rowHash(row) {
  try {
    return require("crypto")
      .createHash("md5")
      .update(JSON.stringify(row))
      .digest("hex");
  } catch {
    return Date.now().toString();
  }
}
function buildDeckEmbedFromRow(row, tableName = null) {
  const color =
    tableName && dbTableColors[tableName] ? dbTableColors[tableName] : "Random";
  const e = new EmbedBuilder().setTitle(
    row.name || row.title || "Deck"
  );

  if (row.description && row.description.trim().length > 0) {
    e.setDescription(row.description);
  }
  if (row.footer) {
  e.setFooter({ text: row.creator })
  }
  e.addFields(
      {
        name: "Deck Type",
        value: `**__${row.type}__**` || "N/A",
        inline: true,
      },
      {
        name: "Archetype",
        value: `**__${row.archetype}__**` || "N/A",
        inline: true,
      },
      {
        name: "Deck Cost",
        value: (`${row.cost} <:spar:1057791557387956274>` || "N/A").toString(),
        inline: true,
      }
    )
    .setColor(color);
  if (
    row.image &&
    typeof row.image === "string" &&
    row.image.startsWith("http")
  )
    e.setImage(row.image);
  return e;
}
function buildCardEmbedFromRow(row, tableName = null) {
  const color =
    tableName && dbTableColors[tableName] ? dbTableColors[tableName] : "Random";
  const e = new EmbedBuilder().setTitle(
    row.title || row.card_name || row.cardid || "Card"
  );

  if (row.description && row.description.trim().length > 0) {
    e.setDescription(`**\\- ${row.description} -**`);
  }

  e.addFields(
    {
      name: "Stats",
      value: row.stats || "N/A",
      inline: true,
    }
  ).setColor(color);

  if (row.traits) {
    e.addFields({ name: "Trait", value: row.traits, inline: true });
  }
  if (row.ability) {
    e.addFields({ name: "Ability", value: row.ability, inline: true });
  }
  if(row.set_rarity){
    e.addFields({ name: "Set-Rarity", value: `**${row.set_rarity}**`, inline: true });
  }
  if(row.flavor_text){
    e.addFields({ name: "Flavor Text", value: row.flavor_text, inline: true });
  }
  if (
    row.thumbnail &&
    typeof row.thumbnail === "string" &&
    row.thumbnail.startsWith("http")
  ) {
    e.setThumbnail(row.thumbnail);
  }
  return e;
}

async function registerOrUpdateDbCommand(tableConfig, row) {
  const key = `${tableConfig.table}:${
    row.deckID ?? row.id ?? row.cardid ?? row.card_name ?? row.title ?? row.name
  }`;
  const baseName = (
    row.name ??
    row.card_name ?? "Unnamed"
  ).toString();
  const baseSan =
    baseName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "")
      .slice(0, 32) || "deck";
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
    .map((a) => a.toLowerCase().replace(/[^a-z0-9]+/g, ""));
  // include both plain and prefixed versions so users can invoke either form
  const aliasSet = new Set();
  for (const a of parsedAliases) {
    aliasSet.add(a);
  }
  const aliasesArray = Array.from(aliasSet);

  // Determine which embed to use based on row content
  let embed;
  if (row.stats) {
    // If these fields exist, treat as card
    embed = buildCardEmbedFromRow(row, tableConfig.table);
  } else {
    // Otherwise, treat as deck
    embed = buildDeckEmbedFromRow(row, tableConfig.table);
  }

  // create command module shape compatible with other commands
  const commandModule = {
    name: cmdName,
    aliases: aliasesArray,
    category: tableConfig.category,
    run: async (client, message, args) => {
      await message.channel.send({ embeds: [embed] });
    },
  };

  // set or overwrite command in client.commands
  client.commands.set(cmdName, commandModule);
  dbCommandMap.set(key, { commandName: cmdName, hash });
  console.log(
    `DB command registered: ${cmdName} (aliases: ${commandModule.aliases.join(
      ", "
    )})`
  );
}

async function unregisterDbCommandByKey(key) {
  const info = dbCommandMap.get(key);
  if (!info) return;
  client.commands.delete(info.commandName);
  dbCommandMap.delete(key);
}

async function scanAllTablesAndSync() {
  try {
    for (const t of dbTables) {
      const [rows] = await db
        .query(`SELECT * FROM \`${t.table}\``)
        .catch(() => [[]]);
      const seenKeys = new Set();

      for (const r of rows || []) {
        const key = `${t.table}:${r.deckID ?? r.cardid ?? r.name}`;
        seenKeys.add(key);
        await registerOrUpdateDbCommand(t, r);
      }

      // remove DB commands for rows that no longer exist
      for (const existingKey of Array.from(dbCommandMap.keys())) {
        if (!existingKey.startsWith(`${t.table}:`)) continue;
        if (!seenKeys.has(existingKey))
          await unregisterDbCommandByKey(existingKey);
      }
    }
  } catch (err) {
    console.error("DB command loader error:", err);
  }
}

// initial load
scanAllTablesAndSync();

// poll every 30s (adjust as needed)
setInterval(scanAllTablesAndSync, 30_000);
