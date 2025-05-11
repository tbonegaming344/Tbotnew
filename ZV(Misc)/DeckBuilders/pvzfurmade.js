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
    .setColor("Purple");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `pvzfurmade`,
  aliases: [
    `decksmadebypvzfurmade`,
    `pvzfurmadedecks`,
    `pvzfurmadehelp`,
    `furmade`,
    `furmadedecks`,
    `helppvzfurmade`,
    `furmadehelp`,
    `helpfurmade`,
    `furmadedecks`,
    `furmade`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view pvzfurmade's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription('Some of the Best Decks in the game')
          .setEmoji("<:compemote:1325461143136764060>"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      )
    const row = new ActionRowBuilder().addComponents(select);
    const pvzFurMadeDecks = {
      competitiveDecks: ["pablosyeezys"],
      memeDecks: ["bonusducks"],
      comboDecks: ["pablosyeezys", "bonusducks"],
      controlDecks: ["bonusducks"],
      midrangeDecks: ["pablosyeezys"],
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
    const toBuildComb = buildDeckString(pvzFurMadeDecks.comboDecks);
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
    const combo = createButtons("pablosyeezys", "bd");
    const bd = createButtons("helpcombo", "py");
    const py = createButtons("bonusducks", "combohelp");
	const [result] = await db.query(`SELECT bonusducks, pablosyeezys
from pbdecks pb 
inner join smdecks sm 
on (pb.deckinfo = sm.deckinfo)`);
    const user = await client.users.fetch("1068350961900326983");
    const fur = createHelpEmbed(
      `${user.displayName} Decks`,
       `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${combodecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    )
      const combofur = createHelpEmbed(
        `${user.displayName} Combo Decks`,
        `My Combo decks made by ${user.displayName} are ${toBuildComb}`, 
        user.displayAvatarURL(), 
        `To view the Combo Decks Made By ${user.displayName}  please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${pvzFurMadeDecks.comboDecks.length} Combo decks in Tbot`
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
          .setColor("#6679d9");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    const bonusducks = createDeckEmbed(result, "bonusducks");
    const pablosyeeyzs = createDeckEmbed(result, "pablosyeezys")
    const m = await message.channel.send({ embeds: [fur], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i){
      const value = i.values[0]
      if(value == "comp" || value == "midrange"){
        await i.reply({ embeds: [pablosyeeyzs], flags: MessageFlags.Ephemeral });
      }
      else if(value == "meme" || value == "control"){
        await i.reply({ embeds: [bonusducks], flags: MessageFlags.Ephemeral });
      }
      else if(value == "combo"){
        await i.update({ embeds: [combofur], components: [combo] });
    }
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        helpcombo: {embed: combofur, component: combo},
        combohelp: {embed: fur, component: row},
        bd: {embed: bonusducks, component: bd},
        bonusducks: {embed: bonusducks, component: bd},
        py: {embed: pablosyeeyzs, component: py},
        pablosyeezys: {embed: pablosyeeyzs, component: py},
      }
      const action = buttonActions[i.customId]
      if(action){
        await i.update({ embeds: [action.embed], components: [action.component] });
      }
      else{
        await i.reply({ content: "Invalid Button Interaction", flags: MessageFlags.Ephemeral });
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
