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
    .setColor("#e4c1f9");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `xera`,
  aliases: [`xeradecks`, `xerahelp`, `helpxera`, `dekcsmadebyxera`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view Xera's Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that are generally only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setDescription(
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggro"),
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
          .setLabel("Tempo Deck")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Xera Decks")
          .setDescription("An option to view all decks")
          .setValue("all")
      );
    const xeraDecks = {
      competitiveDecks: ["dinoroots", "limerence", "neurotherapy", "turles"],
      ladderDecks: ["gomorrah", "gravepiratestache", "leafystrike", "toyotacontrolla"],
      memeDecks: [
        "22savage",
        "frozentelimps",
        "funnyflare",
        "healburn",
        "healthotk",
        "himpter",
        "laserrings",
        "mechagold",
        "muglord",
        "pankration",
        "recycling",
        "reversecatster",
        "uncrackamech",
        "watersports",
        "youngeggmartin",
      ],
      aggroDecks: ["gravepiratestache"],
      comboDecks: [
        "22savage",
        "frozentelimps",
        "funnyflare",
        "gravepiratestache",
        "healburn",
        "healthotk",
        "himpter",
        "laserrings",
        "muglord",
        "pankration",
        "reversecatster",
        "uncrackamech",
        "watersports",
        "youngeggmartin",
      ],
      controlDecks: [
        "frozentelimps",
        "mechagold",
        "neurotherapy",
        "toyotacontrolla",
        "uncrackamech",
      ],
      midrangeDecks: [
        "22savage",
        "dinoroots",
        "funnyflare",
        "gomorrah",
        "healburn",
        "healthotk",
        "himpter",
        "laserrings",
        "limerence",
        "muglord",
        "pankration",
        "recycling",
        "turles",
        "watersports",
      ],
      tempoDecks: [ "leafystrike"],
      allDecks: [
        "22savage",
        "dinoroots",
        "frozentelimps",
        "funnyflare",
        "gomorrah",
        "gravepiratestache",
        "healburn",
        "healthotk",
        "himpter",
        "laserrings",
        "leafystrike",
        "limerence",
        "mechagold",
        "muglord",
        "neurotherapy",
        "pankration",
        "recycling",
        "reversecatster",
        "toyotacontrolla",
        "turles",
        "uncrackamech",
        "watersports",
        "youngeggmartin"
      ],
    };
    const row = new ActionRowBuilder().addComponents(select);
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
    const toBuildString = buildDeckString(xeraDecks.allDecks);
    const toBuildCompString = buildDeckString(xeraDecks.competitiveDecks);
    const toBuildLadderString = buildDeckString(xeraDecks.ladderDecks);
    const toBuildMeme = buildDeckString(xeraDecks.memeDecks);
    const toBuildComboString = buildDeckString(xeraDecks.comboDecks);
    const toBuildControlString = buildDeckString(xeraDecks.controlDecks);
    const toBuildMidString = buildDeckString(xeraDecks.midrangeDecks);
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
    const comprow = createButtons("turles", "droots");
    const droots = createButtons("helpcomp", "lime")
    const lime = createButtons("dinoroots", "neuro");
    const neuro = createButtons("limerence", "tur");
    const tur = createButtons("neurotherapy", "comphelp");
    const ladderrow = createButtons("toyotacontrolla", "go");
    const go = createButtons("helpladder", "gps");
    const gps = createButtons("gomorrah", "lstrike");
    const lstrike = createButtons("gravepiratestache", "tc");
    const tc = createButtons("leafystrike", "ladderhelp");
    const memerow = createButtons("youngeggmartin", "sav");
    const sav = createButtons("helpmeme", "ftimps");
    const ftimps = createButtons("savage", "ff");
    const ff = createButtons("frozentelimps", "hburn");
    const hburn = createButtons("funnyflare", "hotk");
    const hotk = createButtons("healburn", "hi");
    const hi = createButtons("healthotk", "lrings");
    const lrings = createButtons("himps", "mgold");
    const mgold = createButtons("laserrings", "mlord");
    const mlord = createButtons("mechagold", "pank");
    const pank = createButtons("muglord", "recy");
    const recy = createButtons("pankration", "rcatster");
    const rcatster = createButtons("recycling", "um");
    const um = createButtons("reversecatster", "ws");
    const ws = createButtons("uncrackamech", "yem");
    const yem = createButtons("watersports", "memehelp");
    const comborow = createButtons("youngeggmartin2", "sav2");
    const sav2 = createButtons("helpcombo", "ftimps2");
    const ftimps2 = createButtons("savage2", "ff2");
    const ff2 = createButtons("frozentelimps2", "gps2");
    const gps2 = createButtons("funnyflare2", "hburn2");
    const hburn2 = createButtons("gravepiratestache2", "hotk2");
    const hotk2 = createButtons("healburn2", "hi2");
    const hi2 = createButtons("healthotk2", "lrings2");
    const lrings2 = createButtons("himps2", "mlord2");
    const mlord2 = createButtons("laserrings2", "pank2");
    const pank2 = createButtons("muglord2", "rcatster2");
    const rcatster2 = createButtons("pankration2", "um2");
    const um2 = createButtons("reversecatster2", "ws2");
    const ws2 = createButtons("uncrackamech2", "yem2");
    const yem2 = createButtons("watersports2", "combohelp");
    const controlrow = createButtons("uncrackmech3", "ftimps3");
    const ftimps3 = createButtons("helpcontrol", "mgold2");
    const mgold2 = createButtons("frozentelimps3", "neuro2");
    const neuro2 = createButtons("mechagold2", "tc2");
    const tc2 = createButtons("neurotherapy2", "um3");
    const um3 = createButtons("toyotacontrolla2", "controlhelp");
    const midrangerow = createButtons("watersports3", "sav3");
    const sav3 = createButtons("helpmid", "droots2");
    const droots2 = createButtons("savage3", "ff3");
    const ff3 = createButtons("dinoroots", "go2");
    const go2 = createButtons("funnyflare3", "hburn3");
    const hburn3 = createButtons("gomorrah2", "hotk3");
    const hotk3 = createButtons("healburn3", "hi3");
    const hi3 = createButtons("healthotk3", "lrings3");
    const lrings3 = createButtons("himps3", "lime2");
    const lime2 = createButtons("laserrings3", "mlord3");
    const mlord3 = createButtons("limerence2", "pank3");
    const pank3 = createButtons("muglord3", "recy2");
    const recy2 = createButtons("pankration3", "tur2");
    const tur2 = createButtons("recycling2", "ws3");
    const ws3 = createButtons("turles2", "midhelp");
    const alldecksrow = createButtons("youngeggmartin3", "sav4");
    const sav4 = createButtons("helpall", "droots3");
    const droots3 = createButtons("savage4", "ftimps4");
    const ftimps4 = createButtons("dinoroots3", "ff4");
    const ff4 = createButtons("frozentelimps4", "go3");
    const go3 = createButtons("funnyflare4", "gps3");
    const gps3 = createButtons("gomorrah3", "hburn4");
    const hburn4 = createButtons("gravepiratestache3", "hotk4");
    const hotk4 = createButtons("healburn4", "hi4");
    const hi4 = createButtons("healthotk4", "lrings4");
    const lrings4 = createButtons("himps4", "lstrike2");
    const lstrike2 = createButtons("laserrings4", "lime3");
    const lime3 = createButtons("leafystrike2", "mgold3");
    const mgold3 = createButtons("limerence3", "mlord4");
    const mlord4 = createButtons("mechagold3", "neuro3");
    const neuro3 = createButtons("muglord4", "pank4");
    const pank4 = createButtons("neurotherapy3", "recy3");   
    const recy3 = createButtons("pankration4", "rcatster3");
    const rcatster3 = createButtons("recycling3", "tc3");
    const tc3 = createButtons("reversecatster3", "tur3");
    const tur3 = createButtons("toyotacontrolla3", "um4");
    const um4 = createButtons("turles3", "ws4");
    const ws4 = createButtons("uncrackamech4", "yem3");
    const yem3 = createButtons("watersports4", "allhelp");
    const [result] = await db.query(`SELECT 
      savage22, dinoroots, frozentelimps, funnyflare, gomorrah, gps, healburn, healthotk,
      himps, lasersnap, leafystrike, limerence, mechagold, muglord, pankration, recycling,
      reversecatster, shamcontrol, toyotacontrolla, turles, 
      feastmech, watersports, youngeggmartin
            FROM imdecks im
            inner join bfdecks bf on (im.deckinfo = bf.deckinfo) 
            inner join sfdecks sf on (im.deckinfo = sf.deckinfo)
            inner join spdecks sp on (im.deckinfo = sp.deckinfo)
            inner join pbdecks pb on (im.deckinfo = pb.deckinfo)
            inner join gkdecks gk on (im.deckinfo = gk.deckinfo)
            inner join ncdecks nc on (im.deckinfo = nc.deckinfo)
            inner join czdecks cz on (im.deckinfo = cz.deckinfo)
            inner join hgdecks hg on (im.deckinfo = hg.deckinfo)
            inner join sbdecks sb on (im.deckinfo = sb.deckinfo)
            inner join smdecks sm on (im.deckinfo = sm.deckinfo)
            inner join ntdecks nt on (im.deckinfo = nt.deckinfo)
            inner join zmdecks zm on (im.deckinfo = zm.deckinfo)
            inner join bcdecks bc on (im.deckinfo = bc.deckinfo)`);
    const user = await client.users.fetch("742719800395956244");
    const xera = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${xeraDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const allxera = createHelpEmbed(
      `All Decks Made By ${user.displayName}`,
      `My commands for decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.allDecks.length} total decks in Tbot`
    );
    const compxera = createHelpEmbed(
      `${user.displayName} Competitive Decks`,
      `My Competitive Decks made by ${user.displayName} are ${toBuildCompString}`,
      user.displayAvatarURL(),
      `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.competitiveDecks.length} Competitive decks in tbot`
    );
    const ladderxera = createHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My Ladder Decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.ladderDecks.length} Ladder decks in tbot`
    );
    const memexera = createHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme Decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.memeDecks.length} Meme decks in tbot`
    );
    const comboxera = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo Decks made by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.comboDecks.length} Combo decks in tbot`
    );
    const controlxera = createHelpEmbed(
      `${user.displayName} Control Decks`,
      `My Control Decks made by ${user.displayName} are ${toBuildControlString}`,
      user.displayAvatarURL(),
      `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.controlDecks.length} Control decks in tbot`
    );
    const midrangexera = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My Midrange Decks made by ${user.displayName} are ${toBuildMidString}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.midrangeDecks.length} Midrange decks in tbot`
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
        .setColor("#e4c1f9");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const savage22 = createDeckEmbed(result, "savage22");
    const funnyflare = createDeckEmbed(result, "funnyflare");
    const gomorrah = createDeckEmbed(result, "gomorrah");
    const himps = createDeckEmbed(result, "himps");
    const laserrings = createDeckEmbed(result, "lasersnap");
    const leafystrike = createDeckEmbed(result, "leafystrike");
    const dinoroots = createDeckEmbed(result, "dinoroots");
    const limerence = createDeckEmbed(result, "limerence");
    const reversecatster = createDeckEmbed(result, "reversecatster");
    const toyotacontrolla = createDeckEmbed(result, "toyotacontrolla");
    const mechagold = createDeckEmbed(result, "mechagold");
    const youngeggmartin = createDeckEmbed(result, "youngeggmartin");
    const pankration = createDeckEmbed(result, "pankration");
    const healburn = createDeckEmbed(result, "healburn");
    const frozentelimps = createDeckEmbed(result, "frozentelimps");
    const muglord = createDeckEmbed(result, "muglord");
    const neurotherapy = createDeckEmbed(result, "shamcontrol");
    const healthotk = createDeckEmbed(result, "healthotk");
    const turles = createDeckEmbed(result, "turles");
    const recycling = createDeckEmbed(result, "recycling");
    const uncrackamech = createDeckEmbed(result, "feastmech");
    const watersports = createDeckEmbed(result, "watersports");
    const gravepiratestache = createDeckEmbed(result, "gps");
    const m = await message.channel.send({ embeds: [xera], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "comp") {
        await i.update({ embeds: [compxera], component: [comprow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlxera], components: [controlrow] });
      } else if (value == "all") {
        await i.update({ embeds: [allxera], components: [alldecksrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memexera], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboxera], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangexera], components: [midrangerow] });
      } else if (value == "aggro") {
        await i.reply({
          embeds: [gravepiratestache],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderxera], components: [ladderrow] });
      } else if (value == "tempo") {
        await i.update({ embeds: [tempoxera], components: [temporow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        ladderhelp: { embed: ladderxera, component: ladderrow },
        helpladder: { embed: ladderxera, component: ladderrow },
        hi: { embed: himps, component: hi },
        himps: { embed: himps, component: hi },
        hi2: { embed: himps, component: hi2 },
        himps2: { embed: himps, component: hi2 },
        hi3: { embed: himps, component: hi3 },
        himps3: { embed: himps, component: hi3 },
        hi4: { embed: himps, component: hi4 },
        himps4: { embed: himps, component: hi4 },
        controlhelp: { embed: controlxera, component: controlrow },
        helpcontrol: { embed: controlxera, component: controlrow },
        helpmeme: { embed: memexera, component: memerow },
        memehelp: { embed: memexera, component: memerow },
        helpcombo: { embed: comboxera, component: comborow },
        combohelp: { embed: comboxera, component: comborow },
        helpmid: { embed: midrangexera, component: midrangerow },
        midhelp: { embed: midrangexera, component: midrangerow },
        ws: { embed: watersports, component: ws },
        watersports: { embed: watersports, component: ws },
        ws2: { embed: watersports, component: ws2 },
        watersports2: { embed: watersports, component: ws2 },
        ws3: { embed: watersports, component: ws3 },
        watersports3: { embed: watersports, component: ws3 },
        ws4: { embed: watersports, component: ws4 },
        watersports4: { embed: watersports, component: ws4 },
        gps: { embed: gravepiratestache, component: gps },
        gravepiratestache: { embed: gravepiratestache, component: gps },
        gps2: { embed: gravepiratestache, component: gps2 },
        gravepiratestache2: { embed: gravepiratestache, component: gps2 },
        gps3: { embed: gravepiratestache, component: gps3 },
        gravepiratestache3: { embed: gravepiratestache, component: gps3 },
        go: { embed: gomorrah, component: go },
        gomorrah: { embed: gomorrah, component: go },
        go2: { embed: gomorrah, component: go2 },
        gomorrah2: { embed: gomorrah, component: go2 },
        go3: { embed: gomorrah, component: go3 },
        gomorrah3: { embed: gomorrah, component: go3 },
        um: { embed: uncrackamech, component: um },
        uncrackamech: { embed: uncrackamech, component: um },
        um2: { embed: uncrackamech, component: um2 },
        uncrackamech2: { embed: uncrackamech, component: um2 },
        um3: { embed: uncrackamech, component: um3 },
        uncrackmech3: { embed: uncrackamech, component: um3 },
        um4: { embed: uncrackamech, component: um4 },
        uncrackamech4: { embed: uncrackamech, component: um4 },
        tc: { embed: toyotacontrolla, component: tc },
        toyotacontrolla: { embed: toyotacontrolla, component: tc },
        tc2: { embed: toyotacontrolla, component: tc2 },
        toyotacontrolla2: { embed: toyotacontrolla, component: tc2 },
        tc3: { embed: toyotacontrolla, component: tc3 },
        toyotacontrolla3: { embed: toyotacontrolla, component: tc3 },
        lrings: { embed: laserrings, component: lrings },
        laserrings: { embed: laserrings, component: lrings },
        lrings2: { embed: laserrings, component: lrings2 },
        laserrings2: { embed: laserrings, component: lrings2 },
        lrings3: { embed: laserrings, component: lrings3 },
        laserrings3: { embed: laserrings, component: lrings3 },
        lrings4: { embed: laserrings, component: lrings4 },
        laserrings4: { embed: laserrings, component: lrings4 },
        lime: { embed: limerence, component: lime },
        limerence: { embed: limerence, component: lime },
        lime2: { embed: limerence, component: lime2 },
        limerence2: { embed: limerence, component: lime2 },
        lime3: { embed: limerence, component: lime3 },
        limerence3: { embed: limerence, component: lime3 },
        helpcomp: { embed: compxera, component: comprow },
        comphelp: { embed: compxera, component: comprow },
        helpall: { embed: allxera, component: alldecksrow },
        allhelp: { embed: allxera, component: alldecksrow },
        sav: { embed: savage22, component: sav },
        savage: { embed: savage22, component: sav },
        sav2: { embed: savage22, component: sav2 },
        savage2: { embed: savage22, component: sav2 },
        sav3: { embed: savage22, component: sav3 },
        savage3: { embed: savage22, component: sav3 },
        sav4: { embed: savage22, component: sav4 },
        savage4: { embed: savage22, component: sav4 },
        ff: { embed: funnyflare, component: ff },
        funnyflare: { embed: funnyflare, component: ff },
        ff2: { embed: funnyflare, component: ff2 },
        funnyflare2: { embed: funnyflare, component: ff2 },
        ff3: { embed: funnyflare, component: ff3 },
        funnyflare3: { embed: funnyflare, component: ff3 },
        ff4: { embed: funnyflare, component: ff4 },
        funnyflare4: { embed: funnyflare, component: ff4 },
        ftimps: { embed: frozentelimps, component: ftimps },
        frozentelimps: { embed: frozentelimps, component: ftimps },
        ftimps2: { embed: frozentelimps, component: ftimps2 },
        frozentelimps2: { embed: frozentelimps, component: ftimps2 },
        ftimps3: { embed: frozentelimps, component: ftimps3 },
        frozentelimps3: { embed: frozentelimps, component: ftimps3 },
        ftimps4: { embed: frozentelimps, component: ftimps4 },
        frozentelimps4: { embed: frozentelimps, component: ftimps4 },
        hburn: { embed: healburn, component: hburn },
        healburn: { embed: healburn, component: hburn },
        hburn2: { embed: healburn, component: hburn2 },
        healburn2: { embed: healburn, component: hburn2 },
        hburn3: { embed: healburn, component: hburn3 },
        healburn3: { embed: healburn, component: hburn3 },
        hburn4: { embed: healburn, component: hburn4 },
        healburn4: { embed: healburn, component: hburn4 },
        rcatster: { embed: reversecatster, component: rcatster },
        reversecatster: { embed: reversecatster, component: rcatster },
        rcatster2: { embed: reversecatster, component: rcatster2 },
        reversecatster2: { embed: reversecatster, component: rcatster2 },
        rcatster3: { embed: reversecatster, component: rcatster3 },
        reversecatster3: { embed: reversecatster, component: rcatster3 },
        recy: { embed: recycling, component: recy },
        recycling: { embed: recycling, component: recy },
        recy2: { embed: recycling, component: recy2 },
        recycling2: { embed: recycling, component: recy2 },
        recy3: { embed: recycling, component: recy3 },
        recycling3: { embed: recycling, component: recy3 },
        neuro: { embed: neurotherapy, component: neuro },
        neurotherapy: { embed: neurotherapy, component: neuro },
        neuro2: { embed: neurotherapy, component: neuro2 },
        neurotherapy2: { embed: neurotherapy, component: neuro2 },
        neuro3: { embed: neurotherapy, component: neuro3 },
        neurotherapy3: { embed: neurotherapy, component: neuro3 },
        mgold: { embed: mechagold, component: mgold },
        mechagold: { embed: mechagold, component: mgold },
        mgold2: { embed: mechagold, component: mgold2 },
        mechagold2: { embed: mechagold, component: mgold2 },
        mgold3: { embed: mechagold, component: mgold3 },
        mechagold3: { embed: mechagold, component: mgold3 },
        hotk: { embed: healthotk, component: hotk },
        healthotk: { embed: healthotk, component: hotk },
        hotk2: { embed: healthotk, component: hotk2 },
        healthotk2: { embed: healthotk, component: hotk2 },
        hotk3: { embed: healthotk, component: hotk3 },
        healthotk3: { embed: healthotk, component: hotk3 },
        hotk4: { embed: healthotk, component: hotk4 },
        healthotk4: { embed: healthotk, component: hotk4 },
        lstrike: { embed: leafystrike, component: lstrike },
        leafystrike: { embed: leafystrike, component: lstrike },
        lstrike2: { embed: leafystrike, component: lstrike2 },
        yem: { embed: youngeggmartin, component: yem },
        youngeggmartin: { embed: youngeggmartin, component: yem },
        yem2: { embed: youngeggmartin, component: yem2 },
        youngeggmartin2: { embed: youngeggmartin, component: yem2 },
        yem3: { embed: youngeggmartin, component: yem3 },
        youngeggmartin3: { embed: youngeggmartin, component: yem3 }, 
        tur: { embed: turles, component: tur },
        turles: { embed: turles, component: tur },
        tur2: { embed: turles, component: tur2 },
        turles2: { embed: turles, component: tur2 },
        tur3: { embed: turles, component: tur3 },
        turles3: { embed: turles, component: tur3 }, 
        pank: { embed: pankration, component: pank },
        pankration: { embed: pankration, component: pank },
        pank2: { embed: pankration, component: pank2 },
        pankration2: { embed: pankration, component: pank2 },
        pank3: { embed: pankration, component: pank3 },
        pankration3: { embed: pankration, component: pank3 },
        pank4: { embed: pankration, component: pank4 }, 
        pankration4: { embed: pankration, component: pank4 },
        droots: { embed: dinoroots, component: droots }, 
        dinoroots: { embed: dinoroots, component: droots },
        droots2: { embed: dinoroots, component: droots2 },
        dinoroots2: { embed: dinoroots, component: droots2 },
        droots3: { embed: dinoroots, component: droots3 },
        dinoroots3: { embed: dinoroots, component: droots3 }, 
        mlord: { embed: muglord, component: mlord },
        muglord: { embed: muglord, component: mlord },
        mlord2: { embed: muglord, component: mlord2 },
        muglord2: { embed: muglord, component: mlord2 },
        mlord3: { embed: muglord, component: mlord3 },
        muglord3: { embed: muglord, component: mlord3 },
        mlord4: { embed: muglord, component: mlord4 },
        muglord4: { embed: muglord, component: mlord4 }
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction.",
          flags: MessageFlags.Ephemeral,
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
