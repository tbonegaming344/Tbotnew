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
 * The CreateHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#ffcd59");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `yoyo`,
  aliases: [
    `yoyodecks`,
    `helpyoyo`,
    `helpyoyo`,
    `decksmadebyyoyo`,
    `yoyodecklists`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view YoYo's Deck")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("competitive")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
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
    const yoyoDecks = {
      competitiveDecks: ["trickstache"],
      memeDecks: ["reflourished"],
      comboDecks: ["trickstache", "reflourished"],
      midrangeDecks: ["trickstache"],
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
    const toBuildCombo = buildDeckString(yoyoDecks.comboDecks);
    /**
     * The CreateButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
    function CreateButtons(leftButtonId, rightButtonId) {
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
    const comborow = new CreateButtons("trickstache", "rfl");
    const rfl = new CreateButtons("helpcombo", "ts");
    const ts = new CreateButtons("reflourished", "combohelp");
    const [result] = await db.query(`select reflourished, trickstache
from ccdecks cc
inner join pbdecks pb 
on (cc.deckinfo = pb.deckinfo)`);
    const yoyo = new CreateHelpEmbed(
      "Yoyo Decks",
      `To view the Decks Made By Yoyo please select an option from the select menu below! To view all of Yoyo decks select the combo decks option from the select menu
Note: Yoyo has ${yoyoDecks.comboDecks} total decks in Tbot`,
      "https://media.discordapp.net/attachments/832984002633269258/1159176803122946129/D85BDC68-3C9B-4F69-93B0-34BE08842E28.png?ex=651eef06&is=651d9d86&hm=635d383184d2aa08482b520b&=&width=492&height=580"
    );
    const comboyoyo = new CreateHelpEmbed(
      "Combo Decks Made By Yoyo",
      `My combo Decks made by Yoyo are ${toBuildCombo}`,
      "https://media.discordapp.net/attachments/832984002633269258/1159176803122946129/D85BDC68-3C9B-4F69-93B0-34BE08842E28.png?ex=651eef06&is=651d9d86&hm=635d383184d2aa08482b520b&=&width=492&height=580",
      `To view the Combo Decks Made By Yoyo please use the commands listed above or click on the buttons below!
Note: Yoyo has ${yoyoDecks.comboDecks.length} Combo decks in Tbot`
    );
     /**
     * The CreateDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
    function CreateDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("#ffcd59");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const reflourished = new CreateDeckEmbed(result, "reflourished");
    const trickstache = new CreateDeckEmbed(result, "trickstache");
    const m = await message.channel.send({
      embeds: [yoyo],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "combo") {
        await i.update({ embeds: [comboyoyo], components: [comborow] });
      } else if (value == "competitive" || value == "midrange") {
        await i.reply({ embeds: [trickstache], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.reply({
          embeds: [reflourished],
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpcombo: { embed: comboyoyo, component: comborow },
        combohelp: { embed: comboyoyo, component: comborow },
        ts: { embed: trickstache, component: ts },
        trickstache: { embed: trickstache, component: ts },
        rfl: { embed: reflourished, component: rfl },
        reflourished: { embed: reflourished, component: rfl },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction.",
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
