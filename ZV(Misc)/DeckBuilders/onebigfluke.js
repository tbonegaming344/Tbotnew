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
  name: `onebigfluke`,
  aliases: [
    `onebigflukehelp`,
    `helponebigfluke`,
    `onebigflukedecks`,
    `decksmadebyonebigfluke`,
    `fluke`,
    `helpfluke`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view One Big Fluke's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
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
    const oneBigFlukeDecks = {
      memeDecks: ["banhammer", "congabait", "ramp2seedling"],
      comboDecks: ["banhammer", "congabait", "ramp2seedling"],
      midrangeDecks: ["banhammer", "congabait", "ramp2seedling"],
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
    const toBuildMeme = buildDeckString(oneBigFlukeDecks.memeDecks);
    const toBuildCombo = buildDeckString(oneBigFlukeDecks.comboDecks);
    const toBuildMidrange = buildDeckString(oneBigFlukeDecks.midrangeDecks);
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
    const memerow = createButtons("ramp2seedling", "bhammer");
    const bhammer = createButtons("helpmeme", "cbait");
    const cbait = createButtons("banhammer", "r2s");
    const r2s = createButtons("congabait", "memehelp");
    const comborow = createButtons("ramp2seedling2", "bhammer2");
    const bhammer2 = createButtons("helpcombo", "cbait2");
    const cbait2 = createButtons("banhammer2", "r2s2");
    const r2s2 = createButtons("congabait2", "memehelp");
    const midrangerow = createButtons("ramp2seedling3", "bhammer3");
    const bhammer3 = createButtons("helpmeme", "cbait3");
    const cbait3 = createButtons("banhammer3", "r2s3");
    const r2s3 = createButtons("congabait3", "memehelp");
    const [result] = await db.query(`select congabait, racism,
ramp2seedling
from pbdecks pb 
inner join smdecks sm 
on (pb.deckinfo = sm.deckinfo)
inner join bfdecks bf 
on (pb.deckinfo = bf.deckinfo)
inner join sfdecks sf
on (pb.deckinfo = sf.deckinfo)`);
    const user = await client.users.fetch("756689141416198215");
    const fluke = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${oneBigFlukeDecks.memeDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const memefluke = createHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My meme decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${oneBigFlukeDecks.memeDecks.length} meme decks in Tbot`
    );
    const combofluke = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My combo decks made by ${user.displayName} are ${toBuildCombo}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${oneBigFlukeDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangefluke = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My midrange decks made by ${user.displayName} are ${toBuildMidrange}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${oneBigFlukeDecks.midrangeDecks.length} midrange decks in Tbot`
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
    const congabait = createDeckEmbed(result, "congabait");
    const ramp2seedling = createDeckEmbed(result, "ramp2seedling");
    const banhammer = createDeckEmbed(result, "racism");
    const m = await message.channel.send({
      embeds: [fluke],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value === "meme") {
        await i.update({ embeds: [memefluke], components: [memerow] });
      } else if (value === "combo") {
        await i.update({ embeds: [combofluke], components: [comborow] });
      } else if (value === "midrange") {
        await i.update({ embeds: [midrangefluke], components: [midrangerow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpmeme: { embed: memefluke, component: memerow },
        memehelp: { embed: memefluke, component: memerow },
        helpcombo: { embed: combofluke, component: comborow },
        combohelpo: { embed: combofluke, component: comborow },
        helpmidrange: { embed: midrangefluke, component: midrangerow },
        midrangehelp: { embed: midrangefluke, component: midrangerow },
        cbait: { embed: congabait, component: cbait },
        congabait: { embed: congabait, component: cbait },
        cbait2: { embed: congabait, component: cbait2 },
        congabait2: { embed: congabait, component: cbait2 },
        cbait3: { embed: congabait, component: cbait3 },
        congabait3: { embed: congabait, component: cbait3 },
        bhammer: { embed: banhammer, component: bhammer },
        banhammer: { embed: banhammer, component: bhammer },
        bhammer2: { embed: banhammer, component: bhammer2 },
        banhammer2: { embed: banhammer, component: bhammer2 },
        bhammer3: { embed: banhammer, component: bhammer3 },
        banhammer3: { embed: banhammer, component: bhammer3 },
        r2s: { embed: ramp2seedling, component: r2s },
        ramp2seedling: { embed: ramp2seedling, component: r2s },
        r2s2: { embed: ramp2seedling, component: r2s2 },
        ramp2seedling2: { embed: ramp2seedling, component: r2s2 },
        r2s3: { embed: ramp2seedling, component: r2s3 },
        ramp2seedling3: { embed: ramp2seedling, component: r2s3 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({ content: "Unknown button action", flags: MessageFlags.Ephemeral });
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
