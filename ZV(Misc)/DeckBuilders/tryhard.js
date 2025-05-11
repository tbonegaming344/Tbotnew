const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const db = require("../../index.js");
/**
 * The createHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function createHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#1483C9");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `tryhard`,
  aliases: [
    `tryharddecks`,
    `tryhardhelp`,
    `helptryhard`,
    `decksmadebytryhard`,
    `trydecks`,
    `helptry`,
    `tryhelp`,
    `try`,
    `decksmadebytry`,
    `trycommands`,
    `commandstry`,
    `pvztryhardhelp`,
    `pvztryhard`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Tryhards decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("View all the decks made by Tryhard")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const pvzTryHardDecks = {
      ladderDecks: ["agraves"],
      memeDecks: ["sunbandits", "ykm"],
      aggroDecks: ["agraves"],
      comboDecks: ["sunbandits", "ykm"],
      midrangeDecks: ["ykm"],
      controlDecks: ["sunbandits"],
      allDecks: ["agraves", "sunbandits", "ykm"],
    };
     /**
     * The buildDeckString function takes an array of deck names and builds a string with each deck name on a new line, prefixed with the bot mention.
     * @param {Array} decks - The array of deck names to build the string from
     * @returns {string} - The string of deck names
     */
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildCombo = buildDeckString(pvzTryHardDecks.comboDecks);
    const toBuildMeme = buildDeckString(pvzTryHardDecks.memeDecks);
    const toBuildString = buildDeckString(pvzTryHardDecks.allDecks);
    /**
     * The createButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
    function createButtons(leftButtonId, rightButtonId) {
      return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(leftButtonId)
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId(rightButtonId)
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
    }
    const comborow = createButtons("youngkenmartin", "sb");
    const sb = createButtons("helpcombo", "ykm");
    const ykm = createButtons("sunbandits", "combohelp");
    const memerow = createButtons("youngkenmartin2", "sb2");
    const sb2 = createButtons("helpmeme", "ykm2");
    const ykm2 = createButtons("sunbandits2", "memehelp");
    const alldecksrow = createButtons("youngkenmartin3", "agr");
    const agr = createButtons("helpall", "sb3");
    const sb3 = createButtons("agraves", "ykm3");
    const ykm3 = createButtons("sunbandits3", "allhelp");
    const [result] = await db.query(`select agraves, sunbandits, ykm 
from ntdecks nt
inner join rbdecks rb 
on (nt.deckinfo = rb.deckinfo)
inner join hgdecks hg
on (nt.deckinfo = hg.deckinfo)`);
    const user = await client.users.fetch("265754905828917259");
    const tryhard = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${pvzTryHardDecks.allDecks.length} total decks in tbot`,
      user.displayAvatarURL()
    );
    const memehard = createHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme Decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${pvzTryHardDecks.memeDecks.length} Meme decks in tbot`
    );
    const combohard = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo Decks made by ${user.displayName} are ${toBuildCombo}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${pvzTryHardDecks.comboDecks.length} Combo decks in tbot`
    );
    const allhard = createHelpEmbed(
      `${user.displayName} Decks`,
      `My All Decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the All Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${pvzTryHardDecks.allDecks.length} total decks in tbot`
    );
     /**
     * The createDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
    function createDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("#1483C9");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const agraves = createDeckEmbed(result, "agraves");
    const sunbandits = createDeckEmbed(result, "sunbandits");
    const youngkenmartin = createDeckEmbed(result, "ykm");
    const m = await message.channel.send({
      embeds: [tryhard],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "ladder" || value == "aggro") {
        await i.reply({ embeds: [agraves], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memehard], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [combohard], components: [comborow] });
      } else if (value == "midrange") {
        await i.reply({
          embeds: [youngkenmartin],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "control") {
        await i.reply({ embeds: [sunbandits], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [allhard], components: [alldecksrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        memehelp: { embed: memehard, component: memerow },
        helpmeme: { embed: memehard, component: memerow },
        combohelp: { embed: combohard, component: comborow },
        helpcombo: { embed: combohard, component: comborow },
        helpall: { embed: allhard, component: alldecksrow },
        allhelp: { embed: allhard, component: alldecksrow },
        agr: { embed: agraves, component: agr },
        agraves: { embed: agraves, component: agr },
        sb: { embed: sunbandits, component: sb },
        sunbandits: { embed: sunbandits, component: sb },
        sb2: { embed: sunbandits, component: sb2 },
        sunbandits2: { embed: sunbandits, component: sb2 },
        sb3: { embed: sunbandits, component: sb3 },
        sunbandits3: { embed: sunbandits, component: sb3 },
        ykm: { embed: youngkenmartin, component: ykm },
        youngkenmartin: { embed: youngkenmartin, component: ykm },
        ykm2: { embed: youngkenmartin, component: ykm2 },
        youngkenmartin2: { embed: youngkenmartin, component: ykm2 },
        ykm3: { embed: youngkenmartin, component: ykm3 },
        youngkenmartin3: { embed: youngkenmartin, component: ykm3 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
