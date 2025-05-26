const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
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
  name: `snortingsalt`,
  aliases: [
    `helpsalt`,
    `salthelp`,
    `decksmadebysalt`,
    `saltdecklists`,
    `decklistsmadebysalt`,
    `saltdecks`,
    `salt`,
    `snortingsaltdecks`,
    `snortingsalt`,
    `snorting`,
    `decksalt`,
    `decksalt`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Salt's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
          .setValue("comp")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("control"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrange"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setDescription("View all of Salt's Decks")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const snortingSaltDecks = {
      budgetDecks: ["budgetykm"],
      competitiveDecks: [
        "abeans",
        "chemotherapy",
        "cyburn",
        "figlottery",
        "gargburn",
        "healcontrol",
        "logbait",
        "radiotherapy",
        "seacret",
        "shamcontrol",
        "spacestars",
        "watertron",
      ],
      ladderDecks: ["gravestache", "schoolyard"],
      memeDecks: ["noplayingallowed"],
      aggroDecks: ["abeans", "logbait", "schoolyard", "seacret", "watertron"],
      comboDecks: [
        "budgetykm",
        "cyburn",
        "gargburn",
        "gravestache",
        "seacret",
        "spacestars"
      ],
      controlDecks: [
        "chemotherapy",
        "healcontrol",
        "noplayingallowed",
        "radiotherapy",
        "shamcontrol",
      ],
      midrangeDecks: [
        "budgetykm",
        "cyburn",
        "figlottery",
        "gargburn",
        "spacestars",
      ],
      allDecks: [
        "abeans",
        "budgetykm",
        "chemotherapy",
        "cyburn",
        "figlottery",
        "gargburn",
        "gravestache",
        "healcontrol",
        "logbait",
        "noplayingallowed",
        "radiotherapy",
        "schoolyard",
        "seacret",
        "shamcontrolbc",
        "spacestars",
        "watertron",
      ],
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
    const toBuildString = buildDeckString(snortingSaltDecks.allDecks);
    const toBuildCompetitive = buildDeckString(
      snortingSaltDecks.competitiveDecks
    );
    const toBuildLadder = buildDeckString(snortingSaltDecks.ladderDecks);
    const toBuildMeme = buildDeckString(snortingSaltDecks.memeDecks);
    const toBuildAggro = buildDeckString(snortingSaltDecks.aggroDecks);
    const toBuildCombo = buildDeckString(snortingSaltDecks.comboDecks);
    const toBuildControl = buildDeckString(snortingSaltDecks.controlDecks);
    const toBuildMid = buildDeckString(snortingSaltDecks.midrangeDecks);
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
    const competitiverow = createButtons("watertron", "ab");
    const ab = createButtons("helpcomp", "chemo");
    const chemo = createButtons("abeans", "cburn");
    const cburn = createButtons("chemotherapy", "flottery");
    const flottery = createButtons("cyburn", "gb");
    const gb = createButtons("figlottery", "healcon");
    const healcon = createButtons("gargburn", "lbait");
    const lbait = createButtons("healcontrol", "radio");
    const radio = createButtons("logbait", "sea");
    const sea = createButtons("radiotherapy", "sham");
    const sham = createButtons("seacret", "stars");
    const stars = createButtons("shamcontrol", "wt");
    const wt = createButtons("spacestars", "helpcomp");
    const ladderrow = createButtons("schoolyard", "gstache");
    const gstache = createButtons("ladderhelp", "syard");
    const syard = createButtons("gravestache", "ladderhelp");
    const aggrorow = createButtons("watertron2", "ab2");
    const ab2 = createButtons("aggrohelp", "lbait2");
    const lbait2 = createButtons("abeans2", "syard2");
    const syard2 = createButtons("logbait2", "sea2");
    const sea2 = createButtons("schoolyard2", "wt2");
    const wt2 = createButtons("seacret2", "helpaggro");
    const comborow = createButtons("spacestars2", "bykm");
    const bykm = createButtons("combohelp", "cburn2");
    const cburn2 = createButtons("budgetykm", "gb2");
    const gb2 = createButtons("cyburn2", "gstache2");
    const gstache2 = createButtons("gargburn2", "sea3");
    const sea3 = createButtons("gravestache2", "stars2");
    const stars2 = createButtons("seacret3", "helpcombo");
    const midrangerow = createButtons("spacestars3", "bykm2");
    const bykm2 = createButtons("midhelp", "cburn3");
    const cburn3 = createButtons("budgetykm2", "flottery2");
    const flottery2 = createButtons("cyburn3", "gb3");
    const gb3 = createButtons("figlottery2", "stars3");
    const stars3 = createButtons("gargburn3", "helpmid");
    const controlrow = createButtons("shamcontrol2", "chemo2");
    const chemo2 = createButtons("helpcontrol", "healcon2");
    const healcon2 = createButtons("chemotherapy2", "npa2");
    const npa2 = createButtons("healcontrol2", "radio2");
    const radio2 = createButtons("noplayingallowed2", "sham2");
    const sham2 = createButtons("radiotherapy2", "controlhelp");
    const alldecksrow = createButtons("watertron3", "ab3");
    const ab3 = createButtons("allhelp", "bykm3");
    const bykm3 = createButtons("abeans3", "chemo3");
    const chemo3 = createButtons("budgetykm3", "cburn4");
    const cburn4 = createButtons("chemotherapy3", "flottery3");
    const flottery3 = createButtons("cyburn4", "gb4");
    const gb4 = createButtons("figlottery3", "gstache3");
    const gstache3 = createButtons("gargburn4", "healcon3");
    const healcon3 = createButtons("gravestache3", "lbait3");
    const lbait3 = createButtons("healcontrol3", "npa3");
    const npa3 = createButtons("logbait3", "radio3");
    const radio3 = createButtons("noplayingallowed3", "syard3");
    const syard3 = createButtons("radiotherapy3", "sea4");
    const sea4 = createButtons("schoolyard3", "sham3");
    const sham3 = createButtons("seacret4", "stars4");
    const stars4 = createButtons("shamcontrol3", "wt3");
    const wt3 = createButtons("spacestars4", "helpall");
    const [result] = await db.query(`select abeans, apotk,
budgetykm, chemotherapy,
cyburn, gargburn, gravestache, healmidflare,logbait, noplayingallowed, 
schoolyard, seacret, shamcontrol, spacestars, radiotherapy, watertron
from gsdecks gs 
inner join czdecks cz
on (gs.deckinfo = cz.deckinfo)
inner join ccdecks cc
on (gs.deckinfo = cc.deckinfo)
inner join spdecks sp
on (gs.deckinfo = sp.deckinfo)
inner join imdecks im 
on (gs.deckinfo = im.deckinfo)
inner join hgdecks hg
on (gs.deckinfo = hg.deckinfo)
inner join ncdecks nc
on (gs.deckinfo = nc.deckinfo)
inner join ntdecks nt
on (gs.deckinfo = nt.deckinfo)
inner join ebdecks eb 
on (gs.deckinfo = eb.deckinfo)
inner join wkdecks wk 
on (gs.deckinfo = wk.deckinfo)
inner join zmdecks zm 
on (gs.deckinfo = zm.deckinfo)
inner join bcdecks bc 
on (gs.deckinfo = bc.deckinfo)
inner join ifdecks fi
on (gs.deckinfo = fi.deckinfo)
inner join ctdecks ct 
on (gs.deckinfo = ct.deckinfo)
inner join sfdecks sf
on (gs.deckinfo = sf.deckinfo)`);
    const user = await client.users.fetch("599750713509281792");
    const salt = createHelpEmbed(
      `${user.username} Decks`,
      `To view the Decks Made By ${user.username} please select an option from the select menu below
Note: ${user.username} has ${snortingSaltDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const combosalt = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My commands for combo decks made by ${user.displayName} are ${toBuildCombo}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.comboDecks.length} combo decks in Tbot`
    );
    const midsalt = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My commands for midrange decks made by ${user.displayName} are ${toBuildMid}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const compsalt = createHelpEmbed(
      `${user.displayName} Competitive Decks`,
      `My commands for competitive decks made by ${user.displayName} are ${toBuildCompetitive}`,
      user.displayAvatarURL(),
      `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.competitiveDecks.length} competitive decks in Tbot`
    );
    const aggrosalt = createHelpEmbed(
      `${user.displayName} Aggro Decks`,
      `My commands for aggro decks made by ${user.displayName} are ${toBuildAggro}`,
      user.displayAvatarURL(),
      `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const memesalt = createHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My commands for meme decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.memeDecks.length} meme decks in Tbot`
    );
    const controlsalt = createHelpEmbed(
      `${user.displayName} Control Decks`,
      `My commands for control decks made by ${user.displayName} are ${toBuildControl}`,
      user.displayAvatarURL(),
      `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.controlDecks.length} control decks in Tbot`
    );
    const laddersalt = createHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My commands for ladder decks made by ${user.displayName} are ${toBuildLadder}`,
      user.displayAvatarURL(),
      `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const alldecksEmbed = createHelpEmbed(
      `${user.displayName} Decks`,
      `My commands for all decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.allDecks.length} total decks in Tbot`
    );
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
        .setColor("White");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const abeans = createDeckEmbed(result, "abeans");
    const healcontrol = createDeckEmbed(result, "apotk");
    const logbait = createDeckEmbed(result, "logbait");
    const budgetykm = createDeckEmbed(result, "budgetykm");
    const chemotherapy = createDeckEmbed(result, "chemotherapy");
    const cyburn = createDeckEmbed(result, "cyburn");
    const figlottery = createDeckEmbed(result, "healmidflare");
    const gargburn = createDeckEmbed(result, "gargburn");
    const gravestache = createDeckEmbed(result, "gravestache");
    const noplayingallowed = createDeckEmbed(result, "noplayingallowed");
    const radiotherapy = createDeckEmbed(result, "radiotherapy");
    const seacret = createDeckEmbed(result, "seacret");
    const schoolyard = createDeckEmbed(result, "schoolyard");
    const shamcontrol = createDeckEmbed(result, "shamcontrol");
    const spacestars = createDeckEmbed(result, "spacestars");
    const watertron = createDeckEmbed(result, "watertron");
    const m = await message.channel.send({ embeds: [salt], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({ embeds: [budgetykm], flags: MessageFlags.Ephemeral });
      } else if (value == "control") {
        await i.update({ embeds: [controlsalt], components: [controlrow] });
      } else if (value == "combo") {
        await i.update({ embeds: [combosalt], components: [comborow] });
      } else if (value == "comp") {
        await i.update({ embeds: [compsalt], components: [competitiverow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggrosalt], components: [aggrorow] });
      } else if (value == "ladder") {
        await i.update({ embeds: [laddersalt], components: [ladderrow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midsalt], components: [midrangerow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memesalt], components: [memerow] });
      } else if (value == "all") {
        await i.update({
          embeds: [alldecksEmbed],
          components: [alldecksrow],
        });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        combohelp: { embed: combosalt, component: comborow },
        helpcombo: { embed: combosalt, component: comborow },
        controlhelp: { embed: controlsalt, component: controlrow },
        helpcontrol: { embed: controlsalt, component: controlrow },
        memehelp: { embed: memesalt, component: memerow },
        helpmeme: { embed: memesalt, component: memerow },
        midhelp: { embed: midsalt, component: midrangerow },
        helpmid: { embed: midsalt, component: midrangerow },
        aggrohelp: { embed: aggrosalt, component: aggrorow },
        helpaggro: { embed: aggrosalt, component: aggrorow },
        ladderhelp: { embed: laddersalt, component: ladderrow },
        helpladder: { embed: laddersalt, component: ladderrow },
        comphelp: { embed: compsalt, component: competitiverow },
        helpcomp: { embed: compsalt, component: competitiverow },
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        healcon: { embed: healcontrol, component: healcon },
        healcon2: { embed: healcontrol, component: healcon2 },
        healcon3: { embed: healcontrol, component: healcon3 },
        healcontrol: { embed: healcontrol, component: healcon },
        healcontrol2: { embed: healcontrol, component: healcon2 },
        healcontrol3: { embed: healcontrol, component: healcon3 },
        bykm: { embed: budgetykm, component: bykm },
        budgetykm: { embed: budgetykm, component: bykm },
        bykm2: { embed: budgetykm, component: bykm2 },
        budgetykm2: { embed: budgetykm, component: bykm2 },
        bykm3: { embed: budgetykm, component: bykm3 },
        budgetykm3: { embed: budgetykm, component: bykm3 },
        cburn: { embed: cyburn, component: cburn },
        cburn2: { embed: cyburn, component: cburn2 },
        cburn3: { embed: cyburn, component: cburn3 },
        cburn4: { embed: cyburn, component: cburn4 },
        cyburn: { embed: cyburn, component: cburn },
        cyburn2: { embed: cyburn, component: cburn2 },
        cyburn3: { embed: cyburn, component: cburn3 },
        cyburn4: { embed: cyburn, component: cburn4 },
        gb: { embed: gargburn, component: gb },
        gb2: { embed: gargburn, component: gb2 },
        gb3: { embed: gargburn, component: gb3 },
        gb4: { embed: gargburn, component: gb4 },
        gargburn: { embed: gargburn, component: gb },
        gargburn2: { embed: gargburn, component: gb2 },
        gargburn3: { embed: gargburn, component: gb3 },
        gargburn4: { embed: gargburn, component: gb4 },
        gstache: { embed: gravestache, component: gstache },
        gstache2: { embed: gravestache, component: gstache2 },
        gstache3: { embed: gravestache, component: gstache3 },
        gravestache: { embed: gravestache, component: gstache },
        gravestache2: { embed: gravestache, component: gstache2 },
        gravestache3: { embed: gravestache, component: gstache3 },
        stars: { embed: spacestars, component: stars },
        stars2: { embed: spacestars, component: stars2 },
        stars3: { embed: spacestars, component: stars3 },
        stars4: { embed: spacestars, component: stars4 },
        spacestars: { embed: spacestars, component: stars },
        spacestars2: { embed: spacestars, component: stars2 },
        spacestars3: { embed: spacestars, component: stars3 },
        spacestars4: { embed: spacestars, component: stars4 },
        syard: { embed: schoolyard, component: syard },
        syard2: { embed: schoolyard, component: syard2 },
        syard3: { embed: schoolyard, component: syard3 },
        syard4: { embed: schoolyard, component: syard3 },
        schoolyard: { embed: schoolyard, component: syard },
        schoolyard2: { embed: schoolyard, component: syard2 },
        schoolyard3: { embed: schoolyard, component: syard3 },
        schoolyard4: { embed: schoolyard, component: syard3 },
        chemo: { embed: chemotherapy, component: chemo },
        chemo2: { embed: chemotherapy, component: chemo2 },
        chemo3: { embed: chemotherapy, component: chemo3 },
        chemotherapy: { embed: chemotherapy, component: chemo },
        chemotherapy2: { embed: chemotherapy, component: chemo2 },
        chemotherapy3: { embed: chemotherapy, component: chemo3 },
        sea: { embed: seacret, component: sea },
        sea2: { embed: seacret, component: sea2 },
        sea3: { embed: seacret, component: sea3 },
        sea4: { embed: seacret, component: sea4 },
        seacret: { embed: seacret, component: sea },
        seacret2: { embed: seacret, component: sea2 },
        seacret3: { embed: seacret, component: sea3 },
        seacret4: { embed: seacret, component: sea4 },
        sham: { embed: shamcontrol, component: sham },
        sham2: { embed: shamcontrol, component: sham2 },
        sham3: { embed: shamcontrol, component: sham3 },
        shamcontrol: { embed: shamcontrol, component: sham },
        shamcontrol2: { embed: shamcontrol, component: sham2 },
        shamcontrol3: { embed: shamcontrol, component: sham3 },
        wt: { embed: watertron, component: wt },
        wt2: { embed: watertron, component: wt2 },
        wt3: { embed: watertron, component: wt3 },
        watertron: { embed: watertron, component: wt },
        watertron2: { embed: watertron, component: wt2 },
        watertron3: { embed: watertron, component: wt3 },
        npa: { embed: noplayingallowed, component: npa },
        npa2: { embed: noplayingallowed, component: npa2 },
        npa3: { embed: noplayingallowed, component: npa3 },
        noplayingallowed: { embed: noplayingallowed, component: npa },
        noplayingallowed2: { embed: noplayingallowed, component: npa2 },
        noplayingallowed3: { embed: noplayingallowed, component: npa3 },
        ab: { embed: abeans, component: ab },
        ab2: { embed: abeans, component: ab2 },
        ab3: { embed: abeans, component: ab3 },
        abeans: { embed: abeans, component: ab },
        abeans2: { embed: abeans, component: ab2 },
        abeans3: { embed: abeans, component: ab3 },
        flottery: { embed: figlottery, component: flottery },
        flottery2: { embed: figlottery, component: flottery2 },
        flottery3: { embed: figlottery, component: flottery3 },
        figlottery: { embed: figlottery, component: flottery },
        figlottery2: { embed: figlottery, component: flottery2 },
        figlottery3: { embed: figlottery, component: flottery3 },
        lbait: { embed: logbait, component: lbait },
        lbait2: { embed: logbait, component: lbait2 },
        lbait3: { embed: logbait, component: lbait3 },
        logbait: { embed: logbait, component: lbait },
        logbait2: { embed: logbait, component: lbait2 },
        logbait3: { embed: logbait, component: lbait3 },
        radio: { embed: radiotherapy, component: radio },
        radio2: { embed: radiotherapy, component: radio2 },
        radio3: { embed: radiotherapy, component: radio3 },
        radiotherapy: { embed: radiotherapy, component: radio },
        radiotherapy2: { embed: radiotherapy, component: radio2 },
        radiotherapy3: { embed: radiotherapy, component: radio3 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
