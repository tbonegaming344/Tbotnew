const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
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
    .setColor("#E5AA70");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `kenmartin`,
  aliases: [
    `helpkenmartin`,
    `kenmartindecks`,
    `kenmartinhelp`,
    `decksmadebykenmartin`,
    `martin`
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Ken Martin Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      );
    const row = new ActionRowBuilder().addComponents(select);
    const kenMartinDecks = {
      ladderDecks: ["boltbolt"],
      memeDecks: ["youngeggmartin", "ykm"],
      comboDecks: ["boltbolt", "youngeggmartin", "ykm"],
      midrangeDecks: ["boltbolt", "ykm"],
    }
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
    const toBuildMeme = buildDeckString(kenMartinDecks.memeDecks);
    const toBuildCombo = buildDeckString(kenMartinDecks.comboDecks);
    const toBuildMidrange = buildDeckString(kenMartinDecks.midrangeDecks);
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
    const comborow = createButtons("youngkenmartin", "bb");
    const bb = createButtons("helpcombo", "yem");
    const yem = createButtons("boltbolt", "ykm");
    const ykm= createButtons("youngeggmartin", "combohelp");
    const memerow = createButtons("youngkenmartin2", "yem2");
    const yem2 = createButtons("helpmeme", "ykm2");
    const ykm2 = createButtons("youngeggmartin2", "memehelp");
    const midrangerow = createButtons("youngkenmartin3", "bb2");
    const bb2 = createButtons("helpmidrange", "ykm3");
    const ykm3 = createButtons("boltbolt3", "midrangehelp");
    const [result] =
      await db.query(`select boltbolt,
youngeggmartin, ykm 
from rbdecks rb 
inner join pbdecks pb 
on (rb.deckinfo = pb.deckinfo)
inner join hgdecks hg
on (rb.deckinfo = hg.deckinfo)`);
    const ken = createHelpEmbed(
      "Ken Martin Decks",
      `To view the Decks Made By Ken Martin please select an option from the select menu below!
Select combo to view all decks made by Ken Martin
Note: Ken Martin has ${kenMartinDecks.ladderDecks.length} total decks in Tbot`,
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604"
    )
      const comboken = createHelpEmbed(
        "Combo Decks Made By Ken Martin",
        `My combo decks made by Ken Martin are ${toBuildCombo}`,
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604", 
        `To view the Combo Decks Made By Ken Martin please use the commands listed above or click on the buttons below!
Note: Ken Martin has ${kenMartinDecks.comboDecks.length} combo decks in Tbot`
      )
      const midrangeken = createHelpEmbed(
        "Midrange Decks Made By Ken Martin",
        `My midrange decks made by Ken Martin are ${toBuildMidrange}`,
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604",
        `To view the Midrange Decks Made By Ken Martin please use the commands listed above or click on the buttons below!
Note: Ken Martin has ${kenMartinDecks.midrangeDecks.length} midrange decks in Tbot`
      )
      const memeken = createHelpEmbed(
        "Meme Decks Made By Ken Martin",
        `My meme decks made by Ken Martin are ${toBuildMeme}`,
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604",
        `To view the Meme Decks Made By Ken Martin please use the commands listed above or click on the buttons below!
Note: Ken Martin has ${kenMartinDecks.memeDecks.length} meme decks in Tbot`
      )
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
          .setColor("#E5AA70");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    const boltbolt = createDeckEmbed(result, "boltbolt");
    const youngeggmartin = createDeckEmbed(result, "youngeggmartin");
    const youngkenmartin = createDeckEmbed(result, "ykm");
    const m = await message.channel.send({ embeds: [ken], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if(value == "ladder"){
        await i.reply({ embeds: [bbolt], flags: MessageFlags.Ephemeral });
      }
      else if(value == "meme"){
        await i.update({ embeds: [memeken], components: [memerow] });
      }
      else if(value == "combo"){
        await i.update({ embeds: [comboken], components: [comborow] });
      }
      else if(value == "midrange"){
        await i.update({ embeds: [midrangeken], components: [midrangerow] });
      }
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        helpmeme: {embed: memeken, component: memerow},
        memehelp: {embed: memeken, component: memerow},
        helpcombo: {embed: comboken, component: comborow},
        combohelp: {embed: comboken, component: comborow},
        helpmidrange: {embed: midrangeken, component: midrangerow},
        midrangehelp: {embed: midrangeken, component: midrangerow},
        bb: {embed: bbolt, component: bb},
        boltbolt: {embed: bbolt, component: bb},
        bb2: {embed: boltbolt, component: bb2},
        boltbolt2: {embed: boltbolt, component: bb2},
        yem: {embed: youngeggmartin, component: yem},
        youngeggmartin: {embed: youngeggmartin, component: yem},
        yem2: {embed: youngeggmartin, component: yem2},
        youngeggmartin2: {embed: youngeggmartin, component: yem2},
        ykm: {embed: youngkenmartin, component: ykm},
        youngkenmartin: {embed: youngkenmartin, component: ykm},
        ykm2: {embed: youngkenmartin, component: ykm2},
        youngkenmartin2: {embed: youngkenmartin, component: ykm2},
        ykm3: {embed: youngkenmartin, component: ykm3},
        youngkenmartin3: {embed: youngkenmartin, component: ykm3},
      }
     const action = buttonActions[i.customId];
      if(action){
        await i.update({ embeds: [action.embed], components: [action.component] });
      }
      else {
        await i.reply({content: "Invalid button interaction", flags: MessageFlags.Ephemeral});
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
     if(i.customId == "select"){
      await handleSelectMenu(i);
     }
     else{
      await handleButtonInteraction(i);
     }
    });
  },
};
