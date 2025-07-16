const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
const  db = require("../../index.js");
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
    .setColor("#964B00");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpwk`,
  aliases: [
    `commandswk`,
    `wkcommands`,
    `wkhelp`,
    `helpwall`,
    `helpknight`,
    `helpwallknight`,
    `wkdecks`,
    `wallknighthelp`,
    `wallknightdecks`,
    `wallknightdeck`
  ],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view WallKnight's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
			.setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'),
      new StringSelectMenuOptionBuilder()
      .setLabel("All WallKnight Decks")
      .setValue("all")
      .setDescription('View all WallKnight decks in Tbot')
      .setEmoji("<:wallnut:1100168145186062426>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const wallKnightDecks = {
      budgetDecks: ["budgetwk"], 
      competitiveDecks: ["chemotherapy"],
      ladderDecks: ["ginseng"],
      controlDecks: ["chemotherapy", "ginseng"],
      midrangeDecks: ["budgetwk"],
      allDecks: ["budgetwk", "chemotherapy", "ginseng"]
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
    const toBuildControlString = buildDeckString(wallKnightDecks.controlDecks);
    const toBuildString = buildDeckString(wallKnightDecks.allDecks);
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
    const controlrow = createButtons("ginseng", "chemo");
    const chemo = createButtons("controlhelp", "gseg");
    const gseg = createButtons("chemotherapy", "helpcontrol");
    const alldecksrow = createButtons("ginseng2", "bwk");
    const bwk = createButtons("helpall", "chemo2");
    const chemo2 = createButtons("budgetwk", "gseg2");
    const gseg2 = createButtons("chemotherapy2", "allhelp");
    const embed = createHelpEmbed(
      "WallKnight Decks",
      `To view the WallKnight decks please select an option from the select menu below!
Note: WallKnight has ${wallKnightDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945"
    )
      const allEmbed = createHelpEmbed(
      "WallKnight Decks",
      `My decks for Wall Knight(WK) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
      `To view the Wall-Knight decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: WallKnight has ${wallKnightDecks.allDecks.length} decks in Tbot`
      )
      const controlEmbed = createHelpEmbed(
      "WallKnight Control Decks",
      `My control decks for Wall Knight(WK) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
      `To view the Wall-Knight control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: WallKnight has ${wallKnightDecks.controlDecks.length} control decks in Tbot`
      )
    const [result] = await db.query(`SELECT * from wkdecks`);
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
         .setColor("Yellow");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetwk = createDeckEmbed(result, "budgetwkmidheal");
    const chemotherapy = createDeckEmbed(result, "chemotherapy");
    const ginseng = createDeckEmbed(result, "ginseng");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
        if(value == "budget"){
          await i.reply({embeds: [budgetwk], flags: MessageFlags.Ephemeral})
        }
        else if(value == "comp"){
          await i.reply({embeds: [chemotherapy], flags: MessageFlags.Ephemeral})
        }
        else if(value == "control"){
          await i.update({embeds: [controlEmbed], components: [controlrow]})
        }
        else if(value == "midrange"){
          await i.reply({embeds: [budgetwk], flags: MessageFlags.Ephemeral})
        }
        else if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
        else if(value == "ladder"){
          await i.reply({embeds: [ginseng], flags: MessageFlags.Ephemeral})
        }
      }
      async function handleButtonInteraction(i){
        const buttonActions = {
          allhelp: {embed: allEmbed, component: alldecksrow},
          helpall: {embed: allEmbed, component: alldecksrow},
          helpcontrol: {embed: controlEmbed, component: controlrow},
          controlhelp: {embed: controlEmbed, component: controlrow},
          bwk: {embed: budgetwk, component: bwk},
          budgetwk: {embed: budgetwk, component: bwk},
          chemo: {embed: chemotherapy, component: chemo},
          chemotherapy: {embed: chemotherapy, component: chemo},
          chemo2: {embed: chemotherapy, component: chemo2},
          chemotherapy2: {embed: chemotherapy, component: chemo2},
          gseg: {embed: ginseng, component: gseg},
          ginseng: {embed: ginseng, component: gseg},
          gseg2: {embed: ginseng, component: gseg2},
          ginseng2: {embed: ginseng, component: gseg2},
        }
        const action = buttonActions[i.customId];
        if(action){
          await i.update({embeds: [action.embed], components: [action.component]})
        }
        else{
          await i.reply({content: "Invalid button interaction", flags: MessageFlags.Ephemeral})
        }
      }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        await handleSelectMenu(i)
      }
     else {
      await handleButtonInteraction(i)
     }
    });
  },
};
