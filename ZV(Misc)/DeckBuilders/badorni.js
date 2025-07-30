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
    .setColor("#000000");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `badorni`,
  aliases: [
    `decksmadebybadorni`,
    `badornihelp`,
    `helpbadorni`,
    `baddecks`,
    `decksmadebybad`,
    `badhelp`,
    `helpbad`,
    `badornidecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Badorni's Decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setDescription('Plant Decks that are built off a weird/fun combo')
      .setValue("meme"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue("combo"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue("control")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const badorniDecks = {
      memeDecks: [
      "frozentelimps",
      "plantmop",
    ],
      comboDecks: [
      "frozentelimps",
      "plantmop"
    ],
      controlDecks: ["frozentelimps"],
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
    const toBuildMeme = buildDeckString(badorniDecks.memeDecks);
    const toBuildCombo = buildDeckString(badorniDecks.comboDecks);
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
    const combo = createButtons("plamntmop2", "ftimps");
    const ftimps = createButtons("combo", "pmop2");
    const pmop2 = createButtons("frozentelimps", "helpcombo");
    const meme = createButtons("plantmop", "fti2");
    const fti2 = createButtons("meme", "pmop");
    const pmop = createButtons("ftimps2", "meme2");
    const [result] =
      await db.query(`select frozentelimps, plantmop from hgdecks hg
	inner join ccdecks cc
  on (hg.deckinfo = cc.deckinfo))`);
    const user = await client.users.fetch("749149322561716294");
    const bad = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
To view all decks made by Badorni select the meme or combo decks option
Note: ${user.displayName} has ${badorniDecks.memeDecks.length} decks in Tbot`,
        user.displayAvatarURL(),
    )
      const combobad = createHelpEmbed(
        `${user.displayName} Combo Decks`,
        `My Combo decks made by ${user.displayName} are ${toBuildCombo}`,
        user.displayAvatarURL(),
        `To view the Combo Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${badorniDecks.comboDecks.length} combo decks in Tbot`
      )
      const memebad = createHelpEmbed(
        `${user.displayName} Meme Decks`,
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
        user.displayAvatarURL(),
        `To view the Meme Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${badorniDecks.memeDecks.length} meme decks in Tbot`
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
          .setColor("#000000");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    const fti = createDeckEmbed(result, "frozentelimps");
    const plantmop = createDeckEmbed(result, "plantmop");
    const m = await message.channel.send({ embeds: [bad], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i - The interaction object
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if(value == "combo"){
        await i.update({embeds: [combobad], components: [combo]});
      }
      else if(value == "meme"){
        await i.update({embeds: [memebad], components: [meme]});
      }
      else if(value == "midrange"){
        await i.reply({embeds: [pysol], flags: MessageFlags.Ephemeral});
      }
      else if(value == "control"){
        await i.reply({embeds: [ftimps], flags: MessageFlags.Ephemeral});
      }     
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        pmop: {embed: plantmop, component: pmop},
        psy: {embed: pysol, component: psy},
        combo: {embed: combobad, component: combo},
        ftimps: {embed: fti, component: ftimps},
        ftimps2: {embed: fti, component: fti2},
        pmop2: {embed: plantmop, component: pmop2},
        psy2: {embed: pysol, component: psy2},
        meme: {embed: memebad, component: meme},
        meme2: {embed: memebad, component: meme},
        fti2: {embed: fti, component: fti2},
        plantmop: {embed: plantmop, component: pmop},
        helpcombo: {embed: combobad, component: combo},
        frozentelimps: {embed: fti, component: ftimps},
      }
      const action = buttonActions[i.customId];
      if(action){
        await i.update({embeds: [action.embed], components: [action.component]});
      }
      else{
        await i.reply({content: "Unknown Button Interaction", flags: MessageFlags.Ephemeral});
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
