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
    .setColor("Grey");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `cgp23`,
  aliases: [
    `cgp23decks`,
    `cgp23help`,
    `helpcgp23`,
    `cgpdecks`,
    `cgphelp`,
    `cgp`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view cgp's decks")
    .addOptions(
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
    const cgpDecks = {
      memeDecks: [
        "sunlord",
        "watersports",
      ],
      comboDecks: [
        "sunlord",
        "watersports",
      ],
      midrangeDecks: [
        "sunlord",
        "watersports",
      ],
    }
     /**
     * The buildDeckString function takes an array of deck names and builds a string with each deck name on a new line, prefixed with the bot mention.
     * @param {Array} decks - The array of deck names to build the string from
     * @returns {string} - The string of deck names
     */
    function buildDeckString(decks) {
      return decks.map(deck => `<@1043528908148052089> **${deck}**`).join("\n");
    }
    const toBuildComb = buildDeckString(cgpDecks.comboDecks);
    const toBuildMemeString = buildDeckString(cgpDecks.memeDecks);
    const toBuildmid = buildDeckString(cgpDecks.midrangeDecks);
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
    const meme = new CreateButtons("watersports", "sun");
    const sun = new CreateButtons("memehelp", "ws");
    const ws = new CreateButtons("sunlord", "helpmeme");
    const combo = new CreateButtons("watersports", "sun2"); 
    const sun2 = new CreateButtons("combohelp", "ws2");
    const ws2 = new CreateButtons("sunlord", "helpcombo");
    const midrange = new CreateButtons("watersports", "sun3");
    const sun3 = new CreateButtons("midhelp", "ws3");
    const ws3 = new CreateButtons("sunlord", "helpmid");
    const [result] = await db.query(`select watersports, wimps 
from bfdecks bf
inner join ntdecks nt
on (bf.deckinfo = nt.deckinfo)`);
    const user = await client.users.fetch("1044624858933383209");
    const cgp = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks made by ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${cgpDecks.memeDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    )
      const memecgp = new CreateHelpEmbed(
        `${user.displayName} Meme Decks`,
        `My meme decks made by ${user.displayName} are 
${toBuildMemeString}`,
        user.displayAvatarURL(),
        `To view the Meme decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${cgpDecks.memeDecks.length} Meme decks in Tbot`
      )
      const combocgp = new CreateHelpEmbed(
        `${user.displayName} Combo Decks`,
        `My Combo decks made by ${user.displayName} are 
${toBuildComb}`,
        user.displayAvatarURL(),
        `To view the Combo decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${cgpDecks.comboDecks.length} Combo decks in Tbot`
      )
      const midcgp = new CreateHelpEmbed(
        `${user.displayName} Midrange Decks`,
        `My Midrange decks made by ${user.displayName} are 
${toBuildmid}`,
        user.displayAvatarURL(),
        `To view the Midrange decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${cgpDecks.midrangeDecks.length} Midrange decks in Tbot`
      )
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
          .setColor("Grey");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
      const sunlord = new CreateDeckEmbed(result, "wimps");
      const watersports = new CreateDeckEmbed(result, "watersports");
    const m = await message.channel.send({ embeds: [cgp], 
      components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i){
      const value = i.values[0];
      if (value == "meme") {
        await i.update({embeds: [memecgp], components: [meme]});
      }
      else if (value == "combo") {
        await i.update({embeds: [combocgp], components: [combo]});
      }
      else if (value == "midrange") {
        await i.update({embeds: [midcgp], components: [midrange]});
      }
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        combohelp: {embed: combocgp, component: combo},
        helpcombo: {embed: combocgp, component: combo},
        memehelp: {embed: memecgp, component: meme},
        helpmeme: {embed: memecgp, component: meme},
        midhelp: {embed: midcgp, component: midrange},
        helpmid: {embed: midcgp, component: midrange},
        sun: {embed: sunlord, component: sun},
        sunlord: {embed: sunlord, component: sun},
        sun2: {embed: sunlord, component: sun2},
        sunlord2: {embed: sunlord, component: sun2},
        sun3: {embed: sunlord, component: sun3},
        sunlord3: {embed: sunlord, component: sun3},
        ws: {embed: watersports, component: ws},
        watersports: {embed: watersports, component: ws},
        ws2: {embed: watersports, component: ws2},
        watersports2: {embed: watersports, component: ws2},
        ws3: {embed: watersports, component: ws3},
        watersports3: {embed: watersports, component: ws3},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Invalid button interaction", flags: MessageFlags.Ephemeral });
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
