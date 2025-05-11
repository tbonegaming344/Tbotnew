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
      .setValue("control"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      .setValue("midrange")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const badorniDecks = {
      memeDecks: ["antiagor",
      "freezeheal",
      "frozentelimps",
      "moprbius",
      "plantmop",
      "psychosolstice"], 
      comboDecks: ["antiagor",
      "freezeheal",
      "frozentelimps",
      "moprbius",
      "plantmop",
      "psychosolstice"],
      controlDecks: ["frozentelimps"],
      midrangeDecks: [ "moprbius","psychosolstice"]
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
    const toBuildMid = buildDeckString(badorniDecks.midrangeDecks);
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
    const combo = createButtons("psychosolstice2", "aa");
    const aa = createButtons("combo", "freeze");
    const freeze = createButtons("antiagor", "ftimps");
    const ftimps = createButtons("freezeheal", "mopr");
    const mopr = createButtons("frozentelimps", "pmop2");
    const pmop2 = createButtons("moprbius", "psy2");
    const psy2 = createButtons("plantmop2", "helpcombo");
    const meme = createButtons("psychosolstice", "aa2");
    const aa2 = createButtons("meme", "freeze2");
    const freeze2 = createButtons("antiagor2", "fti2");
    const fti2 = createButtons("freezeheal2", "mopr2");
    const mopr2 = createButtons("ftimps2", "pmop");
    const pmop = createButtons("mopribus2", "psy");
    const psy = createButtons("plantmop", "meme2");
    const midrange = createButtons("psychosolstice3", "mopr3");
    const mopr3 = createButtons("midrange", "psy3");
    const psy3 = createButtons("mopribus3", "mid");
    const [result] =
      await db.query(`select antiagor,
	freezeheal, frozentelimps, mopribus, plantmop,
	psychosolstice from ntdecks nt
	inner join ccdecks cc
	on (nt.deckinfo = cc.deckinfo)
	inner join rodecks ro
	on (nt.deckinfo = ro.deckinfo)
	inner join hgdecks hg 
	on (nt.deckinfo = hg.deckinfo)
	inner join sfdecks sf
	on (nt.deckinfo = sf.deckinfo)
	inner join czdecks cz 
	on (nt.deckinfo = cz.deckinfo)
  inner join ctdecks ct 
  on (nt.deckinfo = ct.deckinfo)`);
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
      const midbad = createHelpEmbed(
        `${user.displayName} Midrange Decks`,
        `My Midrange decks made by ${user.displayName} are ${toBuildMid}`,
        user.displayAvatarURL(),
        `To view the Midrange Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${badorniDecks.midrangeDecks.length} midrange decks in Tbot`
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
    const coloboy = createDeckEmbed(result, "antiagor");
    const freal = createDeckEmbed(result, "freezeheal");
    const fti = createDeckEmbed(result, "frozentelimps");
    const mop = createDeckEmbed(result, "mopribus");
    const plantmop = createDeckEmbed(result, "plantmop");
    const pysol = createDeckEmbed(result, "psychosolstice");
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
        await i.update({embeds: [midbad], components: [midrange]});
      }
      else if(value == "control"){
        await i.reply({embeds: [ftimps], flags: MessageFlags.Ephemeral});
      }     
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        pmop: {embed: plantmop, component: pmop},
        mopr: {embed: mop, component: mopr},
        psy: {embed: pysol, component: psy},
        combo: {embed: combobad, component: combo},
        aa: {embed: coloboy, component: aa},
        freeze: {embed: freal, component: freeze},
        ftimps: {embed: fti, component: ftimps},
        ftimps2: {embed: fti, component: fti2},
        mopr2: {embed: mop, component: mopr2},
        pmop2: {embed: plantmop, component: pmop2},
        psy2: {embed: pysol, component: psy2},
        meme: {embed: memebad, component: meme},
        meme2: {embed: memebad, component: meme},
        aa2: {embed: coloboy, component: aa2},
        freeze2: {embed: freal, component: freeze2},
        fti2: {embed: fti, component: fti2},
        mopr3: {embed: mop, component: mopr3},
        psy3: {embed: pysol, component: psy3},
        mid: {embed: midbad, component: midrange},
        midrange: {embed: midbad, component: midrange},
        mopribus: {embed: mop, component: mopr},
        antiagor: {embed: coloboy, component: aa},
        freezeheal: {embed: freal, component: freeze},
        freezeheal2: {embed: freal, component: freeze2},
        plantmop: {embed: plantmop, component: pmop},
        helpcombo: {embed: combobad, component: combo},
        mopribus2: {embed: mop, component: mopr2},
        mopribus3: {embed: mop, component: mopr3},
        frozentelimps: {embed: fti, component: ftimps},
        antiagor2: {embed: coloboy, component: aa2},
        psychosolstice: {embed: pysol, component: psy},
        psychosolstice2: {embed: pysol, component: psy2},
        psychosolstice3: {embed: pysol, component: psy3},
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
