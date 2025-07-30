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
function createHelpEmbed(title, description, thumbnail, footer){
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
  name: `helpif`,
  aliases: [
    `ifhelp`,
    `ifcommands`,
    `commandsif`,
    `helpimpifinity`,
	  `helpimpfinity`,
    `impfinitydecks`,
	  `impfinityhelp`,
    `ifdecks`,
    `impifinityhelp`,
    `impifinitydecks`,
    `helpimp`,
  ],
  category: `Impfinity(IF)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Impfinity's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
      .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription('Some of the Best Plant Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
       new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Impfinity Decks")
      .setValue("all")
      .setDescription('View all of Impfinity(IF) decks')
      .setEmoji("<:Impfinity:1087754523050774659>")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const impfinityDecks = {
      budgetDecks: ["budgetif"],
      competitiveDecks: ["nohokaistars", "spacestars"],
      memeDecks: ["tangen", "uno"],
      aggroDecks: ["budgetif"],
      comboDecks: ["spacestars", "tangen", "uno"],
      midrangeDecks: ["nohokaistars", "spacestars", "tangen", "uno"],
      allDecks: ["budgetif", "nohokaistars", "spacestars", "tangen", "uno"],
    }
     /**
     * The buildDeckString function takes an array of deck names and builds a string with each deck name on a new line, prefixed with the bot mention.
     * @param {Array} decks - The array of deck names to build the string from
     * @returns {string} - The string of deck names
     */
    function buildDeckString(decks) {
      return decks.map(deck => `\n<@1043528908148052089> **${deck}**`).join('');
    }
    const toBuildString = buildDeckString(impfinityDecks.allDecks);
    const competitiveString = buildDeckString(impfinityDecks.competitiveDecks);
    const comboString = buildDeckString(impfinityDecks.comboDecks);
    const midrangeString = buildDeckString(impfinityDecks.midrangeDecks);
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
    const alldecksrow = createButtons("uno", "bif")
    const bif = createButtons("helpall", "nhks")
    const nhks = createButtons("budgetif", "stars")
    const stars = createButtons("nohokaistars", "tan")
    const tan = createButtons("spacestars", "un")
    const un = createButtons("tangen", "allhelp")
    const competitiveRow = createButtons("spacestars2", "nhks2")
    const nhks2 = createButtons("helpcomp", "stars2")
    const stars2 = createButtons("nohokaistars2", "comphelp")
    const memerow = createButtons("uno2", "tan2")
    const tan2 = createButtons("helpmeme", "un2")
    const un2 = createButtons("tangen2", "memehelp")
    const comboRow = createButtons("uno3", "stars3")
    const stars3 = createButtons("helpcombo", "tan3")
    const tan3 = createButtons("spacestars3", "un3")
    const un3 = createButtons("tangen3", "combohelp")
    const midrangeRow = createButtons("uno4", "nhks3")
    const nhks3 = createButtons("helpmidrange", "stars4")
    const stars4 = createButtons("nohokaistars3", "un4")
    const un4 = createButtons("spacestars4", "midrangehelp")
    const alldecksEmbed = createHelpEmbed(
      "Impfinity(IF) Decks",
      `My commands for Impfinity(IF) are ${toBuildString}`, 
      "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
      `To view the Impfinity decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Impfinity has ${impfinityDecks.allDecks.length} total decks in Tbot`
    )
      const embed = createHelpEmbed(
        "Impfinity(IF) Decks",
        `To view the Impfinity decks please select an option from the select menu below!
Note: Impfinity has ${impfinityDecks.allDecks.length} total decks in Tbot`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520"
      );
      const competitiveEmbed = createHelpEmbed(
        "Impfinity Competitive Decks",
        `My competitive decks for Impfinity(IF) are ${competitiveString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
        `To view the Impfinity competitive decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Impfinity has ${impfinityDecks.competitiveDecks.length} competitive decks in Tbot`
      );
      const memeEmbed = createHelpEmbed(
        "Impfinity Meme Decks",
        `My meme decks for Impfinity(IF) are ${buildDeckString(impfinityDecks.memeDecks)}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
        `To view the Impfinity meme decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Impfinity has ${impfinityDecks.memeDecks.length} meme decks in Tbot`
      );
      const comboEmbed = createHelpEmbed(
        "Impfinity Combo Decks",
        `My combo decks for Impfinity(IF) are ${comboString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
        `To view the Impfinity combo decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Impfinity has ${impfinityDecks.comboDecks.length} combo decks in Tbot`
      );
      const midrangeEmbed = createHelpEmbed(
        "Impfinity Midrange Decks",
        `My midrange decks for Impfinity(IF) are ${midrangeString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
        `To view the Impfinity midrange decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Impfinity has ${impfinityDecks.midrangeDecks.length} midrange decks in Tbot`
      );
    const [result] = await db.query(`SELECT * FROM ifdecks`);
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
        .setColor("Purple");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetif = createDeckEmbed(result, "budgetif");
    const nohokaistars = createDeckEmbed(result, "nohokaistars");
    const tangen = createDeckEmbed(result, "tangen");
    const spacestars = createDeckEmbed(result, "spacestars");
    const uno = createDeckEmbed(result, "uno");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i){
      if(i.customId == "select") {
        const value = i.values[0];
        if(value == "budget" ||  value == "aggro"){
          await i.reply({embeds: [budgetif], flags: MessageFlags.Ephemeral});
        }
        else if(value == "combo"){
          await i.reply({embeds: [spacestars], flags: MessageFlags.Ephemeral});
        }
        else if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]});
        }
        else if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]});
        }
        else if(value == "comp"){
          await i.update({embeds: [competitiveEmbed], components: [competitiveRow]});
        }
        else if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangeRow]});
        }
      }
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        allhelp: {embed: alldecksEmbed, component: alldecksrow},
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        helpcomp: {embed: competitiveEmbed, component: competitiveRow},
        comphelp: {embed: competitiveEmbed, component: competitiveRow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpmeme: {embed: memeEmbed, component: memerow},
        helpaggro: {embed: aggroEmbed, component: aggroRow},
        aggrohelp: {embed: aggroEmbed, component: aggroRow},
        combohelp: {embed: comboEmbed, component: comboRow},
        helpcombo: {embed: comboEmbed, component: comboRow},
        helpmidrange: {embed: midrangeEmbed, component: midrangeRow},
        midrangehelp: {embed: midrangeEmbed, component: midrangeRow},
        bif: {embed: budgetif, component: bif},
        budgetif: {embed: budgetif, component: bif},
        bif2: {embed: budgetif, component: bif2},
        budgetif2: {embed: budgetif, component: bif2},
        stars: {embed: spacestars, component: stars},
        spacestars: {embed: spacestars, component: stars},
        stars2: {embed: spacestars, component: stars2},
        spacestars2: {embed: spacestars, component: stars2},
        stars3: {embed: spacestars, component: stars3},
        spacestars3: {embed: spacestars, component: stars3},
        stars4: {embed: spacestars, component: stars4},
        spacestars4: {embed: spacestars, component: stars4},
        nhks: {embed: nohokaistars, component: nhks},
        nohokaistars: {embed: nohokaistars, component: nhks},
        nhks2: {embed: nohokaistars, component: nhks2},
        nohokaistars2: {embed: nohokaistars, component: nhks2},
        nhks3: {embed: nohokaistars, component: nhks3},
        nohokaistars3: {embed: nohokaistars, component: nhks3},
        tan: {embed: tangen, component: tan},
        tangen: {embed: tangen, component: tan},
        tan2: {embed: tangen, component: tan2},
        tangen2: {embed: tangen, component: tan2},
        tan3: {embed: tangen, component: tan3},
        tangen3: {embed: tangen, component: tan3},
        un: {embed: uno, component: un},
        uno: {embed: uno, component: un},
        un2: {embed: uno, component: un2},
        uno2: {embed: uno, component: un2},
        un3: {embed: uno, component: un3},
        uno3: {embed: uno, component: un3},
        un4: {embed: uno, component: un4},
        uno4: {embed: uno, component: un4},
      }
      const action = buttonActions[i.customId];
      if(action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      }
      else{
        await i.reply({content: "Invalid button interaction", flags: MessageFlags.Ephemeral});
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select") {
        await handleSelectMenu(i);
      }
      else{
        await handleButtonInteraction(i);
      }
    });
  }
  }
