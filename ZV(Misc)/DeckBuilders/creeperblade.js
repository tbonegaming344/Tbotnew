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
    .setColor("Green");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `creeperblade`,
  aliases: [
    `helpcreeperblade`,
    `creeperbladehelp`,
    `decksmadebycreeperblade`,
    `creeperbladedecks`,
    `creeperdecks`,
    `creeper`,
    `cpb`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view creeperblade's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Decks")
        .setValue("comp")
        .setEmoji("<:compemote:1325461143136764060>")
        .setDescription('Some of the Best Decks in the game'), 
        new StringSelectMenuOptionBuilder()
        .setLabel('Ladder Deck')
					.setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
          new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
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
        .setLabel("Tempo Deck")
        .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.') 
        .setValue("tempo"), 
        new StringSelectMenuOptionBuilder()
        .setLabel("All Decks")
        .setDescription("All decks made by creeperblade")
        .setValue("all")

      );
      const row = new ActionRowBuilder().addComponents(select);
      const creeperBladeDecks = {
        competitiveDecks:["abeans", "pablosyeezys"],
        ladderDecks: ["professorpackage"],
        memeDecks: ["gargolithtech"],
        aggroDecks: ["abeans"],
        comboDecks: ["pablosyeezys"],
        midrangeDecks: ["gargolithtech", "pablosyeezys"],
        tempoDecks: ["professorpackage"],
        allDecks: [
          "abeans",
          "gargolithtech",
          "pablosyeezys",
          "professorpackage",
        ],
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
      const toBuildComp = buildDeckString(creeperBladeDecks.competitiveDecks);
      const toBuildMidrangeString = buildDeckString(creeperBladeDecks.midrangeDecks);
      const toBuildString = buildDeckString(creeperBladeDecks.allDecks);
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
    const comprow = createButtons("pablosyeezys", "ab");
    const ab = createButtons("helpcomp", "py");
    const py = createButtons("abeans", "comphelp");
    const midrangerow = createButtons("pablosyeezys2", "gtech");
    const gtech= createButtons("helpmidrange", "py2");
    const py2 = createButtons("gargolithtech", "midrangehelp");
    const alldecksrow = createButtons("professorpackage", "ab2");
    const ab2 = createButtons("helpall", "gtech2");
    const gtech2 = createButtons("abeans2", "py3");
    const py3 = createButtons("gargolithtech2", "propack");
    const propack = createButtons("pablosyeezys3", "allhelp");
    const [result] = await db.query(`select abeans,
		gargolithtech, pablosyeezys, professorpackage
		from gsdecks gs 
    inner join bfdecks bf
    on (gs.deckinfo = bf.deckinfo)
		inner join smdecks sm 
		on (gs.deckinfo = sm.deckinfo)
    inner join pbdecks pb 
    on (gs.deckinfo = pb.deckinfo)`);
    const user = await client.users.fetch("738926530000060416");
    const creep = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${creeperBladeDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    )
    const comp = createHelpEmbed(
      `${user.displayName} Competitive Decks`,
      `My Competitive decks made by ${user.displayName} are ${toBuildComp}`,
      user.displayAvatarURL(),
      `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${creeperBladeDecks.competitiveDecks.length} Competitive decks in Tbot`
    )
const midrangeEmbed =  createHelpEmbed(
  `${user.displayName} Midrange Decks`,
  `My Midrange decks made by ${user.displayName} are ${toBuildMidrangeString}`,
  user.displayAvatarURL(),
  `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${creeperBladeDecks.midrangeDecks.length} Midrange decks in Tbot`
)
const alldecksEmbed = createHelpEmbed(
  `${user.displayName} Decks`,
  `My All decks made by ${user.displayName} are ${toBuildString}`,
  user.displayAvatarURL(),
  `To view the All Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${creeperBladeDecks.allDecks.length} All decks in Tbot`
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
    .setColor("Green");
  const imageUrl = result[4][deckName];
  if (imageUrl) {
    embed.setImage(imageUrl);
  }
  return embed;
}
    const abeans = createDeckEmbed(result, "abeans");
    const gargolithtech= createDeckEmbed(result, "gargolithtech");
    const pyeez = createDeckEmbed(result, "pablosyeezys");
    const professorpackage = createDeckEmbed(result, "professorpackage");
    const m = await message.channel.send({
      embeds: [creep],
      components: [row] 
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if(value == "comp"){
        await i.update({embeds: [comp], components: [comprow]});
      }
      else if(value == "ladder" || value == "tempo"){
        await i.reply({embeds: [professorpackage], flags: MessageFlags.Ephemeral})
      }
      else if(value == "aggro"){
        await i.reply({embeds: [abeans], flags: MessageFlags.Ephemeral});
      }
      else if(value == "combo"){
        await i.reply({embeds: [pyeez], flags: MessageFlags.Ephemeral});
      }
      else if(value == "midrange"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]});
      }
      else if(value == "meme"){
        await i.reply({embeds: [gargolithtech], flags: MessageFlags.Ephemeral})
      }
      else if(value == "all"){
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        helpcomp: {embed: comp, component: comprow},
        comphelp: {embed: comp, component: comprow},
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        allhelp: {embed: alldecksEmbed, component: alldecksrow},
        helpmidrange: {embed: midrangeEmbed, component: midrangerow},
        midrangehelp: {embed: midrangeEmbed, component: midrangerow},
        ab: {embed: abeans, component: ab},
        abeans: {embed: abeans, component: ab},
        ab2: {embed: abeans, component: ab2},
        abeans2: {embed: abeans, component: ab2},
        py: {embed: pyeez, component: py},
        pablosyeezys: {embed: pyeez, component: py},
        py2: {embed: pyeez, component: py2},
        pablosyeezys2: {embed: pyeez, component: py2},
        py3: {embed: pyeez, component: py3},
        pablosyeezys3: {embed: pyeez, component: py3},
        propack: {embed: professorpackage, component: propack},
        professorpackage: {embed: professorpackage, component: propack},
        gtech: {embed: gargolithtech, component: gtech},
        gargolithtech: {embed: gargolithtech, component: gtech},
        gtech2: {embed: gargolithtech, component: gtech2},
        gargolithtech2: {embed: gargolithtech, component: gtech2},
      };
      const action = buttonActions[i.customId];
      if(action){
        await i.update({embeds: [action.embed], components: [action.component]});
      }
      else{
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
