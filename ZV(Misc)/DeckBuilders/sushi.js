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
      .setLabel("Ladder Decks")
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
      .setLabel("Control Decks")
      .setValue("control")
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
      ladderDecks: ["professorpackage", "telimpssb", "trickmech"], 
      memeDecks: ["sunbandits"], 
      aggroDecks: ["trickmech"], 
      comboDecks: ["sunbandits", "telimps", "telimpssb"], 
      controlDecks: ["sunbandits", "telimps", "telimpssb"], 
      midrangeDecks: ["healmidrose"], 
      tempoDecks: ["professorpackage"],
      allDecks: ["healmidrose", "professorpackage", "sunbandits", "telimps", "telimpssb", "trickmech"]
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
    const toBuildLadder = buildDeckString(sushiDecks.ladderDecks);
    const toBuildCombo = buildDeckString(sushiDecks.comboDecks);
    const toBuildControl = buildDeckString(sushiDecks.controlDecks);
    const toBuildString = buildDeckString(sushiDecks.allDecks);
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
    const ladderrow = new CreateButtons("trickmech", "propack");
    const propack =  new CreateButtons("helpladder", "tisb");
    const tisb =  new CreateButtons("professorpackage", "tmech");
    const tmech =  new CreateButtons("telimpssb", "ladderhelp");
    const comborow = new CreateButtons("telimpssb2", "sb");
    const sb = new CreateButtons("combohelp", "ti");
    const ti = new CreateButtons("sunbandits", "tisb2");
    const tisb2 = new CreateButtons("telimps", "helpcombo")
    const competitiverow =  new CreateButtons("telimps2", "hmrose");
    const hmrose =  new CreateButtons("helpcomp", "ti2");
    const ti2 =  new CreateButtons("healmidrose2", "comphelp");
    const controlrow =  new CreateButtons("telimpssb3", "sb2");
    const sb2 = new CreateButtons("helpcontrol", "ti3")
    const ti3 =  new CreateButtons("sunbandits2", "tisb3");
    const tisb3 =  new CreateButtons("telimps3", "controlhelp");
    const alldecksrow = new CreateButtons("trickmech2", "hmrose2");
    const hmrose2 = new CreateButtons("helpall", "propack2");
    const propack2 = new CreateButtons("healmidrose2", "sb3");
    const sb3 = new CreateButtons("professorpackage2", "ti4");
    const ti4 = new CreateButtons("sunbandits3", "tisb4");
    const tisb4 = new CreateButtons("telimps4", "tmech2");
    const tmech2 =  new CreateButtons("telimpssb4", "allhelp");
    const [result] =
      await db.query(`select hmr, professorpackage, sunbandits, telimps, telimpssb,trickmech
from rodecks ro
inner join pbdecks pb 
on (ro.deckinfo = pb.deckinfo)
inner join rbdecks rb 
on (ro.deckinfo = rb.deckinfo)
inner join hgdecks hg
on (ro.deckinfo = hg.deckinfo)
inner join sbdecks sb
on (ro.deckinfo = sb.deckinfo)
inner join zmdecks zm
on (ro.deckinfo = zm.deckinfo)`);
    const user = await client.users.fetch("198942472565555200");
    const sushi = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${sushiDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    )
      const alldecksEmbed = new CreateHelpEmbed(
        `${user.displayName} Decks`,
        `My commands for decks made by ${user.displayName} are ${toBuildString}`,
        user.displayAvatarURL(), 
        `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.allDecks.length} total decks in Tbot`
      )
      const combosushi = new CreateHelpEmbed(
        `${user.displayName} Combo Decks`,
        `My Combo decks made by ${user.displayName} are ${toBuildCombo}`,
        user.displayAvatarURL(), 
        `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.comboDecks.length} Combo decks in Tbot`
      )
      const controlsushi = new CreateHelpEmbed(
        `${user.displayName} Control Decks`,
        `My Control decks made by ${user.displayName} are ${toBuildControl}`,
        user.displayAvatarURL(), 
        `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.controlDecks.length} Control decks in Tbot`
      )
      const competitivesushi = new CreateHelpEmbed(
        `${user.displayName} Competitive Decks`,
        `My Competitive decks made by ${user.displayName} are ${toBuildCompetitive}`,
        user.displayAvatarURL(), 
        `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.competitiveDecks.length} Competitive decks in Tbot`
      )
      const laddersushi = new CreateHelpEmbed(
        `${user.displayName} Ladder Decks`, 
         `My Ladder decks made by ${user.displayName} are ${toBuildLadder}`, 
         user.displayAvatarURL(), 
        `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${sushiDecks.ladderDecks.length} Ladder decks in Tbot`
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
          .setColor("#de8d5d");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    const hmr = new CreateDeckEmbed(result, "hmr");
    const professorpackage= new CreateDeckEmbed(result, "professorpackage");
    const sband = new CreateDeckEmbed(result, "sunbandits");
    const timps = new CreateDeckEmbed(result, "telimps");
    const trickmech = new CreateDeckEmbed(result, "trickmech");
    const timpsb = new CreateDeckEmbed(result, "telimpssb")
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
        await i.update({embeds: [controlsushi], components: [controlrow]})
      }
      else if(value == "midrange"){
        await i.update({embeds: [midrangesushi], components: [midrangerow]})
      }
      else if(value == "tempo"){
        await i.reply({embeds: [professorpackage], flags: MessageFlags.Ephemeral})
      }
      else if(value == "all"){
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
      else if(value == "ladder"){
        await i.update({embeds: [laddersushi], components: [ladderrow]})
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
        helpcontrol: {embed: controlsushi, component: controlrow},
        controlhelp: {embed: controlsushi, component: controlrow},
        helpmidrange: {embed: midrangesushi, component: midrangerow},
        midrangehelp: {embed: midrangesushi, component: midrangerow},
        sb: {embed: sband, component: sb},
        sunbandits: {embed: sband, component: sb},
        sb2: {embed: sband, component: sb2},
        sunbandits2: {embed: sband, component: sb2},
        sb3: {embed: sband, component: sb3},
        sunbandits3: {embed: sband, component: sb3},
        ti: {embed: timps, component: ti},
        telimps: {embed: timps, component: ti},
        ti2: {embed: timps, component: ti2},
        telimps2: {embed: timps, component: ti2},
        ti3: {embed: timps, component: ti3},
        telimps3: {embed: timps, component: ti3},
        ti4: {embed: timps, component: ti4},
        telimps4: {embed: timps, component: ti4},
        tisb: {embed: timpsb, component: tisb},
        telimpssb: {embed: timpsb, component: tisb},
        tisb2: {embed: timpsb, component: tisb2},
        telimpssb2: {embed: timpsb, component: tisb2},
        tisb3: {embed: timpsb, component: tisb3},
        telimpssb3: {embed: timpsb, component: tisb3},
        tisb4: {embed: timpsb, component: tisb4},
        telimpssb4: {embed: timpsb, component: tisb4},
        hmrose: {embed: hmr, component: hmrose},
        healmidrose: {embed: hmr, component: hmrose},
        hmrose2: {embed: hmr, component: hmrose2},
        healmidrose2: {embed: hmr, component: hmrose2},
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        allhelp: {embed: alldecksEmbed, component: alldecksrow},
        ladderhelp: {embed: laddersushi, component: ladderrow},
        helpladder: {embed: laddersushi, component: ladderrow}, 
        propack: {embed: professorpackage, component: propack},
        professorpackage: {embed: professorpackage, component: propack},
        propack2: {embed: professorpackage, component: propack2},
        professorpackage2: {embed: professorpackage, component: propack2},
        tmech: {embed: trickmech, component: tmech},
        trickmech: {embed: trickmech, component: tmech},
        tmech2: {embed: trickmech, component: tmech2},
        trickmech2: {embed: trickmech, component: tmech2},
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
