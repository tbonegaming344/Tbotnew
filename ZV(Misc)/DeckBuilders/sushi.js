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
    .setColor("#de8d5d");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `sushi`,
  aliases: [
    `decksmadebysushi`,
    `sushihelp`,
    `helpsushi`,
    `sushidecks`,
    `sushidecklists`,
    `decklistsmadebysushi`,
    `ikurasushi`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Sushi's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
      .setValue("meme")
      .setDescription('Plant Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("Midrange")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Decks")
      .setValue("all")
      .setDescription("View all of Sushi's decks")
    );
    const row = new ActionRowBuilder().addComponents(select);
    const sushiDecks = {
      competitiveDecks: ["healmidrose", "telimps"], 
      ladderDecks: ["trickmech"], 
      memeDecks: ["sunbandits"], 
      aggroDecks: ["trickmech"], 
      comboDecks: ["sunbandits", "telimps", "trickmech"], 
      MidrangeDecks: ["sunbandits"], 
      midrangeDecks: ["healmidrose", "telimps"], 
      allDecks: ["healmidrose", "sunbandits", "telimps", "trickmech"]
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
    const toBuildCompetitive = buildDeckString(sushiDecks.competitiveDecks);
    const toBuildCombo = buildDeckString(sushiDecks.comboDecks);
    const toBuildMidrange = buildDeckString(sushiDecks.midrangeDecks);
    const toBuildString = buildDeckString(sushiDecks.allDecks);
    /**
     * The createButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to Midrange the left button 
     * @param {string} rightButtonId - The ID of the right button to Midrange the right button
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
    const comborow = createButtons("trickmech", "sb");
    const sb = createButtons("combohelp", "ti");
    const ti = createButtons("sunbandits", "tmech");
    const tmech = createButtons("telimps", "helpcombo")
    const competitiverow =  createButtons("telimps2", "hmrose");
    const hmrose =  createButtons("helpcomp", "ti2");
    const ti2 =  createButtons("healmidrose2", "comphelp");
    const midrangerow =  createButtons("telimps3", "hmrose2");
    const hmrose2 = createButtons("helpmidrange", "ti3")
    const ti3 =  createButtons("healmidrose2", "midrangehelp");
    const alldecksrow = createButtons("trickmech3", "hmrose3");
    const hmrose3 = createButtons("helpall", "sb2");
    const sb2 = createButtons("healmidrose3", "ti4");
    const ti4 = createButtons("sunbandits2", "tmech2");
    const tmech2 =  createButtons("telimps4", "allhelp");
    const [result] =
      await db.query(`select hmr, sunbandits, telimps, trickmech
from rodecks ro
inner join rbdecks rb 
on (ro.deckinfo = rb.deckinfo)
inner join hgdecks hg
on (ro.deckinfo = hg.deckinfo)
inner join zmdecks zm
on (ro.deckinfo = zm.deckinfo)`);
    const user = await client.users.fetch("198942472565555200");
    const sushi = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${sushiDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    )
      const alldecksEmbed = createHelpEmbed(
        `${user.displayName} Decks`,
        `My commands for decks made by ${user.displayName} are ${toBuildString}`,
        user.displayAvatarURL(), 
        `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.allDecks.length} total decks in Tbot`
      )
      const combosushi = createHelpEmbed(
        `${user.displayName} Combo Decks`,
        `My Combo decks made by ${user.displayName} are ${toBuildCombo}`,
        user.displayAvatarURL(), 
        `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.comboDecks.length} Combo decks in Tbot`
      )
      const midrangesushi = createHelpEmbed(
        `${user.displayName} Midrange Decks`,
        `My Midrange decks made by ${user.displayName} are ${toBuildMidrange}`,
        user.displayAvatarURL(), 
        `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.MidrangeDecks.length} Midrange decks in Tbot`
      )
      const competitivesushi = createHelpEmbed(
        `${user.displayName} Competitive Decks`,
        `My Competitive decks made by ${user.displayName} are ${toBuildCompetitive}`,
        user.displayAvatarURL(), 
        `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.competitiveDecks.length} Competitive decks in Tbot`
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
          .setColor("#de8d5d");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    const hmr = createDeckEmbed(result, "hmr");
    const sband = createDeckEmbed(result, "sunbandits");
    const timps = createDeckEmbed(result, "telimps");
    const trickmech = createDeckEmbed(result, "trickmech");
    const m = await message.channel.send({
      embeds: [sushi],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i){
      const value = i.values[0];
      if(value == "comp"){
        await i.update({embeds: [competitivesushi], components: [competitiverow]})
      }
      else if(value == "aggro"){
        await i.update({embeds: [aggrosushi], components: [aggrorow]})
      }
      else if(value == "combo"){
        await i.update({embeds: [combosushi], components: [comborow]})
      }
      else if(value == "control"){
        await i.reply({embeds: [sband], flags: MessageFlags.Ephemeral})
      }
      else if(value == "midrange"){
        await i.update({embeds: [midrangesushi], components: [midrangerow]})
      }
      else if(value == "all"){
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
      else if(value == "ladder"){
        await i.reply({embeds: [trickmech], flags: MessageFlags.Ephemeral})
      }
      else if(value == "meme"){
        await i.reply({embeds: [sband], flags: MessageFlags.Ephemeral})
      }
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        helpcomp: {embed: competitivesushi, component: competitiverow}, 
        comphelp: {embed: competitivesushi, component: competitiverow}, 
        combohelp: {embed: combosushi, component: comborow},
        helpcombo: {embed: combosushi, component: comborow},
        helpmidrange: {embed: midrangesushi, component: midrangerow},
        midrangehelp: {embed: midrangesushi, component: midrangerow},
        sb: {embed: sband, component: sb},
        sunbandits: {embed: sband, component: sb},
        sb2: {embed: sband, component: sb2},
        sunbandits2: {embed: sband, component: sb2},
        ti: {embed: timps, component: ti},
        telimps: {embed: timps, component: ti},
        ti2: {embed: timps, component: ti2},
        telimps2: {embed: timps, component: ti2},
        ti3: {embed: timps, component: ti3},
        telimps3: {embed: timps, component: ti3},
        ti4: {embed: timps, component: ti4},
        telimps4: {embed: timps, component: ti4},
        hmrose: {embed: hmr, component: hmrose},
        healmidrose: {embed: hmr, component: hmrose},
        hmrose2: {embed: hmr, component: hmrose2},
        healmidrose2: {embed: hmr, component: hmrose2},
        hmrose3: {embed: hmr, component: hmrose3},
        healmidrose3: {embed: hmr, component: hmrose3},
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        allhelp: {embed: alldecksEmbed, component: alldecksrow},
        tmech: {embed: trickmech, component: tmech},
        trickmech: {embed: trickmech, component: tmech},
        tmech2: {embed: trickmech, component: tmech2},
        trickmech2: {embed: trickmech, component: tmech2}
      };
     const action = buttonActions[i.customId]
     if (action) {
      await i.update({
        embeds: [action.embed],
        components: action.components,
      });
    } else {
      await i.reply({
        content: "Invalid button action.",
        flags: MessageFlags.Ephemeral,
      });
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
