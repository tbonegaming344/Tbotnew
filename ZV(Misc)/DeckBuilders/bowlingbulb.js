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
    .setColor("Orange");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `bowlingbulbenjoyer`,
  aliases: [
    `bowlingbulb`,
    `bowlingdecks`,
    `bolwingbulbhelp`,
    `bowlinghelp`,
    `bbe`,
    `bowlingbulbenjoyerdecks`,
    `bowlingbulbdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view bowlingbulb's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
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
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
      );
    const row = new ActionRowBuilder().addComponents(select);
    const bowlingBulbEnjoyerDecks = {
      ladderDecks: ["bfmidgargs", "binaryflagwar", "goingnuts"],
      aggroDecks: ["goingnuts"],
      comboDecks: ["binaryflagwar", "goingnuts"],
      midrangeDecks: ["bfmidgargs", "binaryflagwar"],
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
    const toBuildLadderString = buildDeckString(
      bowlingBulbEnjoyerDecks.ladderDecks
    );
    const toBuildComboString = buildDeckString(
      bowlingBulbEnjoyerDecks.comboDecks
    );
    const toBuildMidrangeString = buildDeckString(
      bowlingBulbEnjoyerDecks.midrangeDecks
    );
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
    const ladderrow = createButtons("goingnuts", "bfmg");
    const bfmg = createButtons("ladderhelp", "bfw");
    const bfw = createButtons("bfmidgargs", "gnuts");
    const gnuts = createButtons("binaryflagwar", "ladderhelp");
    const comborow = createButtons("goingnuts2", "bfw2");
    const bfw2 = createButtons("helpcombo", "gnuts2");
    const gnuts2 = createButtons("binaryflagwar2", "combohelp");
    const midrangerow = createButtons("binaryflagwar3", "bfmg2");
    const bfmg2 = createButtons("helpmid", "bfw3");
    const bfw3 = createButtons("bfmidgargs2", "midhelp");
    const [result] =
      await db.query(`select bfmidgargs, binaryflagwar, going3nuts 
		from zmdecks zm
		inner join ctdecks ct
		on (zm.deckinfo = ct.deckinfo)
    inner join bfdecks bf
		on (zm.deckinfo = bf.deckinfo)`);
    const user = await client.users.fetch("1051916947253629030");
    const bowlingbulbenjoyer = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks made by ${user.displayName} please select an option from the select menu below!
Select either ladder decks to view all of ${user.displayName} decks!
Note: ${user.displayName} has ${bowlingBulbEnjoyerDecks.ladderDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const ladderEmbed = createHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My Ladder decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the Ladder Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all Ladder decks!
Note: ${user.displayName} has ${bowlingBulbEnjoyerDecks.ladderDecks.length} Ladder decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo decks made by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the Combo Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all Combo decks!
Note: ${user.displayName} has ${bowlingBulbEnjoyerDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My Midrange decks made by ${user.displayName} are ${toBuildMidrangeString}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all Midrange decks!
Note: ${user.displayName} has ${bowlingBulbEnjoyerDecks.midrangeDecks.length} Midrange decks in Tbot`
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
        .setColor("Orange");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const bfmidgargs = createDeckEmbed(result, "bfmidgargs");
    const binaryflagwar = createDeckEmbed(result, "binaryflagwar");
    const goingnuts = createDeckEmbed(result, "going3nuts");
    const m = await message.channel.send({
      embeds: [bowlingbulbenjoyer],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "aggro") {
        await i.reply({ embeds: [goingnuts], flags: MessageFlags.Ephemeral });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpladder: { embed: ladderEmbed, component: ladderrow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcombo: { embed: comboEmbed, component: comborow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bfw: { embed: binaryflagwar, component: bfw },
        binaryflagwar: { embed: binaryflagwar, component: bfw },
        bfw2: { embed: binaryflagwar, component: bfw2 },
        binaryflagwar2: { embed: binaryflagwar, component: bfw2 },
        bfw3: { embed: binaryflagwar, component: bfw3 },
        binaryflagwar3: { embed: binaryflagwar, component: bfw3 },
        gnuts: { embed: goingnuts, component: gnuts },
        goingnuts: { embed: goingnuts, component: gnuts },
        gnuts2: { embed: goingnuts, component: gnuts2 },
        goingnuts2: { embed: goingnuts, component: gnuts2 },
        bfmg: { embed: bfmidgargs, component: bfmg },
        bfmidgargs: { embed: bfmidgargs, component: bfmg },
        bfmg2: { embed: bfmidgargs, component: bfmg2 },
        bfmidgargs2: { embed: bfmidgargs, component: bfmg2 },
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
