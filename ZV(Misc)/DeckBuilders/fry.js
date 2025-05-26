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
    .setColor("Blue");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `fryemup`,
  aliases: [
    `fryemupdecks`,
    `decksmadebyfry`,
    `frydecks`,
    `fry`,
    `fryemupdecks`,
    `helpfry`,
    `fryhelp`,
    `fryemuphelp`,
    `helpfryemup`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Fry's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("All of Fryemup Decks")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const fryEmUpDecks = {
      ladderDecks: ["frymidrose", "raiserpackage", "valkster"],
      comboDeck: ["valkster"],
      midrangeDecks: ["frymidrose", "valkster"],
      tempoDecks: ["raiserpackage"],
      allDecks: ["frymidrose", "raiserpackage", "valkster"],
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
    const toBuildLadderString = buildDeckString(fryEmUpDecks.ladderDecks);
    const toBuildMid = buildDeckString(fryEmUpDecks.midrangeDecks);
    const toBuildString = buildDeckString(fryEmUpDecks.allDecks);
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
    const ladderrow = createButtons("valkster", "fmr");
    const fmr = createButtons("ladderhelp", "rp");
    const rp = createButtons("frymidrose", "valk");
    const valk = createButtons("raiserpackage", "helpladder");
    const midrangerow = createButtons("valkster2", "fmr2");
    const fmr2 = createButtons("helpmid", "valk2");
    const valk2 = createButtons("frymidrose2", "helpmidrange");
    const alldecksrow = createButtons("valkster3", "fmr3");
    const fmr3 = createButtons("allhelp", "rp2");
    const rp2 = createButtons("frymidrose3", "valk3");
    const valk3 = createButtons("raiserpackage2", "helpall");
    const [result] = await db.query(`select frymidrose, 
raiserpackage, valkster
from rodecks ro 
inner join bfdecks bf
on (ro.deckinfo = bf.deckinfo)
inner join pbdecks pb
on (ro.deckinfo = pb.deckinfo)`);
    const user = await client.users.fetch("291752823891427329");
    const fry = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${fryEmUpDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const midrangefry = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My Midrange decks made by ${user.displayName} are ${toBuildMid}`,
      user.displayAvatarURL(),
      `To view the Midrange decks made by ${user.displayName} please click on the buttons below or use commands listed above
Note: ${user.displayName} has ${fryEmUpDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    const ladderfry = createHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My Ladder decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the Ladder decks made by ${user.displayName} please click on the buttons below or use commands listed above
Note: ${user.displayName} has ${fryEmUpDecks.ladderDecks.length} Ladder decks in Tbot`
    );
    const allfry = createHelpEmbed(
      `${user.displayName} Decks`,
      `My All decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view all the decks made by ${user.displayName} please click on the buttons below or use commands listed above
Note: ${user.displayName} has ${fryEmUpDecks.allDecks.length} decks in Tbot`
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
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const frymidrose = createDeckEmbed(result, "frymidrose");
    const raiserpackage = createDeckEmbed(result, "raiserpackage");
    const valkster = createDeckEmbed(result, "valkster");
    const m = await message.channel.send({ embeds: [fry], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i - The interaction object
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "combo") {
        await i.reply({ embeds: [valkster], flags: MessageFlags.Ephemeral });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangefry], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({embeds: [raiserpackage], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderfry], components: [ladderrow] });
      } else if (value == "all") {
        await i.update({ embeds: [allfry], components: [alldecksrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        ladderhelp: { embed: ladderfry, component: ladderrow },
        helpladder: { embed: ladderfry, component: ladderrow },
        helpmid: { embed: midrangefry, component: midrangerow },
        helpmidrange: { embed: midrangefry, component: midrangerow },
        helptempo: { embed: tempofry, component: temporow },
        tempohelp: { embed: tempofry, component: temporow },
        helpall: { embed: allfry, component: alldecksrow },
        allhelp: { embed: allfry, component: alldecksrow },
        fmr: { embed: frymidrose, component: fmr },
        frymidrose: { embed: frymidrose, component: fmr },
        fmr2: { embed: frymidrose, component: fmr2 },
        frymidrose2: { embed: frymidrose, component: fmr2 },
        fmr3: { embed: frymidrose, component: fmr3 },
        frymidrose3: { embed: frymidrose, component: fmr3 },
        rp: { embed: raiserpackage, component: rp },
        raiserpackage: { embed: raiserpackage, component: rp },
        rp2: { embed: raiserpackage, component: rp2 },
        raiserpackage2: { embed: raiserpackage, component: rp2 },
        valk: { embed: valkster, component: valk },
        valkster: { embed: valkster, component: valk },
        valk2: { embed: valkster, component: valk2 },
        valkster2: { embed: valkster, component: valk2 },
        valk3: { embed: valkster, component: valk3 },
        valkster3: { embed: valkster, component: valk3 },
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
