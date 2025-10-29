/*
COPYRIGHT (C) 2025 Tbone, Tbonegaming18@gmail.com All rights reserved. 
This project is about the Plants vs Zombies Heroes card game 
and showcases Unique and Viable opitimized decks for the card game
Author: Tbone Gaming 
        Tbonegaming18@gmail.com
*/
const { token, user, host, password, database } = require("./config.json");
const scanAllTablesAndSync = require("./Utilities/scanAllTablesAndSync");
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
    GatewayIntentBits.MessageContent,
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
const fs = require("node:fs");
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
const ZombieFoldersPath = path.join(__dirname, "Zombies");
const commandFoldersZombie = fs.readdirSync(ZombieFoldersPath);
for (const folder of commandFoldersZombie) {
  const commandsPath = path.join(ZombieFoldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const commandFile of commandFiles) {
    const filePath = path.join(commandsPath, commandFile);
    const command = require(filePath);
    if (command.name) {
    client.commands.set(command.name, command);
    }
    if (command.aliases) {
        for (const alias of command.aliases) {
          client.aliases.set(alias);
        }
      }
    }
  }
const miscanelousFoldersPath = path.join(__dirname, "ZV(Misc)");
const commandFoldersMisc = fs.readdirSync(miscanelousFoldersPath);
for (const folder of commandFoldersMisc) {
  const commandsPath = path.join(miscanelousFoldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const commandFile of commandFiles) {
    const filePath = path.join(commandsPath, commandFile);
    const command = require(filePath);
    if (command.name) {
    client.commands.set(command.name, command);
    }
    if (command.aliases) {
        for (const alias of command.aliases) {
          client.aliases.set(alias);
        }
      }
    }
  }
  const PlantFoldersPath = path.join(__dirname, "Plants");
const commandFoldersPlant = fs.readdirSync(PlantFoldersPath);
for (const folder of commandFoldersPlant) {
  const commandsPath = path.join(PlantFoldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const commandFile of commandFiles) {
    const filePath = path.join(commandsPath, commandFile);
    const command = require(filePath);
    if (command.name) {
    client.commands.set(command.name, command);
    }
    if (command.aliases) {
        for (const alias of command.aliases) {
          client.aliases.set(alias);
        }
      }
    }
  }
const eventsPath = path.join(__dirname, "Events"); 
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  client.on(event.name, event.run);
}
client.on(Events.MessageCreate, async (message) => {
  if (message.content.toLowerCase().startsWith(prefix)) {
    if (message.author.bot) return;
    const channel = client.channels.cache.get("1050107020008771604");
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const invokedRaw = args.join("").toLowerCase();
    const invoked = invokedRaw.replaceAll(/[^a-z0-9]+/g, ""); // normalize like DB commands
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
  { table: "guardiancards", prefix: "gc", category: "Plant Cards" },
  {table: "guardiantricks", prefix: "gt", category: "Tricks Phase" },
  { table: "kabloomcards", prefix: "kc", category: "Plant Cards"},
  {table: "kabloomtricks", prefix: "kt", category: "Tricks Phase" },
  { table: "megagrowcards", prefix: "mgc", category: "Plant Cards"},
  {table: "megagrowtricks", prefix: "mgt", category: "Tricks Phase" },
  { table: "smartycards", prefix: "sc", category: "Plant Cards"},
  {table: "smartytricks", prefix: "st", category: "Tricks Phase" },
  { table: "solarcards", prefix: "slc", category: "Plant Cards"},
  {table: "solartricks", prefix: "slt", category: "Tricks Phase" },
  { table: "beastlycards", prefix: "bc", category: "Zombie Cards"},
  {table: "beastlytricks", prefix: "bt", category: "Tricks Phase" },
  { table: "brainycards", prefix: "brc", category: "Zombie Cards"},
  {table: "brainytricks", prefix: "brt", category: "Tricks Phase" },
  { table: "crazycards", prefix: "crc", category: "Zombie Cards"},
  {table: "crazytricks", prefix: "crt", category: "Tricks Phase" },
  { table: "heartycards", prefix: "hc", category: "Zombie Cards"},
  {table: "heartytricks", prefix: "ht", category: "Tricks Phase" },
  { table: "sneakycards", prefix: "snc", category: "Zombie Cards"},
  {table: "sneakytricks", prefix: "snt", category: "Tricks Phase" },
  {table: "deckbuilders", prefix: "db", category: "DeckBuilders" },
  {table: "helpcommands", prefix: "help", category: "Miscellaneous" }
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
  guardiancards: "#964B00",
  guardiantricks: "#964B00",
  kabloomcards: "Red",
  kabloomtricks: "Red",
  megagrowcards: "Green",
  megagrowtricks: "Green",
  smartycards2: "White",
  smartytricks: "White",
  solarcards: "Yellow",
  solartricks: "Yellow",
  beastlycards: "Blue",
  beastlytricks: "Blue",
  brainycards: "Purple",
  brainytricks: "Purple",
  crazycards: "Purple",
  crazytricks: "Purple",
  heartycards: "Orange",
  heartytricks: "Orange",
  sneakycards: "#000000",
  sneakytricks: "#000000",
};

const dbCommandMap = new Map();


// initial load
scanAllTablesAndSync(db, dbTables, client, dbCommandMap, dbTableColors);

// poll every 30s (adjust as needed)
setInterval(() => {
  scanAllTablesAndSync(db, dbTables, client, dbCommandMap, dbTableColors);
}, 30_000);
