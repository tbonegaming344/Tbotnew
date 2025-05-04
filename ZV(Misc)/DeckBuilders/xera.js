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
          .setLabel("Competitive Deck")
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
      competitiveDecks: ["toyotacontrolla"],
      ladderDecks: ["brady", "gomorrah", "gravepiratestache"],
      memeDecks: [
        "22savage",
        "frozentelimps",
        "funnyflare",
        "healburn",
        "himpter",
        "laserrings",
        "recycling",
        "reversecatster",
        "startron",
        "uncrackamech",
        "watersports",
      ],
      aggroDecks: ["gravepiratestache"],
      comboDecks: [
        "22savage",
        "frozentelimps",
        "funnyflare",
        "gravepiratestache",
        "healburn",
        "himpter",
        "laserrings",
        "reversecatster",
        "startron",
        "uncrackamech",
        "watersports",
      ],
      controlDecks: ["frozentelimps", "toyotacontrolla", "uncrackamech"],
      midrangeDecks: [
        "22savage",
        "funnyflare",
        "gomorrah",
        "healburn",
        "himpter",
        "laserrings",
        "recycling",
        "startron",
        "watersports",
      ],
      tempoDecks: ["brady"],
      allDecks: [
        "22savage",
        "brady",
        "frozentelimps",
        "funnyflare",
        "gomorrah",
        "gravepiratestache",
        "healburn",
        "himpter",
        "laserrings",
        "recycling",
        "reversecatster",
        "startron",
        "toyotacontrolla",
        "uncrackamech",
        "watersports",
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
    const toBuildLadderString = buildDeckString(xeraDecks.ladderDecks);
    const toBuildMeme = buildDeckString(xeraDecks.memeDecks);
    const toBuildComboString = buildDeckString(xeraDecks.comboDecks);
    const toBuildControlString = buildDeckString(xeraDecks.controlDecks);
    const toBuildMidString = buildDeckString(xeraDecks.midrangeDecks);
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
    const ladderrow = new CreateButtons("gravepiratestache", "br");
    const br = new CreateButtons("helpladder", "go");
    const go = new CreateButtons("brady", "gps");
    const gps = new CreateButtons("gomorrah", "ladderhelp");
    const memerow = new CreateButtons("watersports", "sav");
    const sav = new CreateButtons("helpmeme", "ftimps");
    const ftimps = new CreateButtons("savage", "ff");
    const ff = new CreateButtons("frozentelimps", "hburn");
    const hburn = new CreateButtons("funnyflare", "hi");
    const hi = new CreateButtons("healburn", "lrings");
    const lrings = new CreateButtons("himps", "recy");
    const recy = new CreateButtons("laserrings", "rcatster");
    const rcatster = new CreateButtons("recycling", "star");
    const star = new CreateButtons("reversecatster", "um");
    const um = new CreateButtons("startron", "ws");
    const ws = new CreateButtons("uncrackamech", "memehelp");
    const comborow = new CreateButtons("watersports2", "sav2");
    const sav2 = new CreateButtons("helpcombo", "ftimps2");
    const ftimps2 = new CreateButtons("savage2", "ff2");
    const ff2 = new CreateButtons("frozentelimps2", "gps2");
    const gps2 = new CreateButtons("funnyflare2", "hburn2");
    const hburn2 = new CreateButtons("gravepiratestache2", "hi2");
    const hi2 = new CreateButtons("healburn2", "lrings2");
    const lrings2 = new CreateButtons("himps2", "rcatster2");
    const rcatster2 = new CreateButtons("laserrings2", "star2");
    const star2 = new CreateButtons("reversecatster2", "um2");
    const um2 = new CreateButtons("startron2", "ws2");
    const ws2 = new CreateButtons("uncrackamech2", "combohelp");
    const controlrow = new CreateButtons("uncrackmech3", "ftimps3");
    const ftimps3 = new CreateButtons("helpcontrol", "tc");
    const tc = new CreateButtons("frozentelimps3", "um3");
    const um3 = new CreateButtons("toyotacontrolla", "controlhelp");
    const midrangerow = new CreateButtons("watersports3", "sav3");
    const sav3 = new CreateButtons("helpmid", "ff3");
    const ff3 = new CreateButtons("savage3", "go2");
    const go2 = new CreateButtons("funnyflare3", "hburn3");
    const hburn3 = new CreateButtons("gomorrah2", "hi3");
    const hi3 = new CreateButtons("healburn3", "lrings3");
    const lrings3 = new CreateButtons("himps3", "recy2");
    const recy2 = new CreateButtons("laserrings3", "star3");
    const star3 = new CreateButtons("recycling2", "ws3");
    const ws3 = new CreateButtons("startron3", "midhelp");
    const alldecksrow = new CreateButtons("watersports4", "sav4");
    const sav4 = new CreateButtons("helpall", "br2");
    const br2 = new CreateButtons("savage4", "ftimps4");
    const ftimps4 = new CreateButtons("brady2", "ff4");
    const ff4 = new CreateButtons("frozentelimps4", "go3");
    const go3 = new CreateButtons("funnyflare4", "gps3");
    const gps3 = new CreateButtons("gomorrah3", "hburn4");
    const hburn4 = new CreateButtons("gravepiratestache3", "hi4");
    const hi4 = new CreateButtons("healburn4", "lrings4");
    const lrings4 = new CreateButtons("himps4", "recy3");
    const recy3 = new CreateButtons("laserrings4", "rcatster3");
    const rcatster3 = new CreateButtons("recycling3", "star4");
    const star4 = new CreateButtons("reversecatster3", "tc2");
    const tc2 = new CreateButtons("startron4", "um4");
    const um4 = new CreateButtons("toyotacontrolla2", "ws4");
    const ws4 = new CreateButtons("uncrackamech4", "allhelp");
    const [result] = await db.query(`SELECT 
      savage22, frozentelimps, funnyflare, gomorrah, gps, healburn, 
      himps, lasersnap, recycling, reversecatster, startron, toyotacontrolla, feastmech, brady, watersports 
            FROM imdecks im
            inner join bfdecks bf on (im.deckinfo = bf.deckinfo) 
            inner join sfdecks sf on (im.deckinfo = sf.deckinfo)
            inner join spdecks sp on (im.deckinfo = sp.deckinfo)
            inner join pbdecks pb on (im.deckinfo = pb.deckinfo)
            inner join ctdecks ct on (im.deckinfo = ct.deckinfo)
            inner join ncdecks nc on (im.deckinfo = nc.deckinfo)
            inner join czdecks cz on (im.deckinfo = cz.deckinfo)
            inner join hgdecks hg on (im.deckinfo = hg.deckinfo)
            inner join ntdecks nt on (im.deckinfo = nt.deckinfo)
            inner join zmdecks zm on (im.deckinfo = zm.deckinfo)`);
    const user = await client.users.fetch("742719800395956244");
    const xera = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${xeraDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const allxera = new CreateHelpEmbed(
      `All Decks Made By ${user.displayName}`,
      `My commands for decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.allDecks.length} total decks in Tbot`
    );
    const ladderxera = new CreateHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My Ladder Decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.ladderDecks.length} Ladder decks in tbot`
    );
    const memexera = new CreateHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme Decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.memeDecks.length} Meme decks in tbot`
    );
    const comboxera = new CreateHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo Decks made by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.comboDecks.length} Combo decks in tbot`
    );
    const controlxera = new CreateHelpEmbed(
      `${user.displayName} Control Decks`,
      `My Control Decks made by ${user.displayName} are ${toBuildControlString}`,
      user.displayAvatarURL(),
      `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.controlDecks.length} Control decks in tbot`
    );
    const midrangexera = new CreateHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My Midrange Decks made by ${user.displayName} are ${toBuildMidString}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.midrangeDecks.length} Midrange decks in tbot`
    );
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
        .setColor("#e4c1f9");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const savage22 = new CreateDeckEmbed(result, "savage22");
    const brady = new CreateDeckEmbed(result, "brady");
    const funnyflare = new CreateDeckEmbed(result, "funnyflare");
    const gomorrah = new CreateDeckEmbed(result, "gomorrah");
    const himps = new CreateDeckEmbed(result, "himps");
    const laserrings = new CreateDeckEmbed(result, "lasersnap");
    const reversecatster = new CreateDeckEmbed(result, "reversecatster");
    const startron = new CreateDeckEmbed(result, "startron");
    const toyotacontrolla = new CreateDeckEmbed(result, "toyotacontrolla");
    const healburn = new CreateDeckEmbed(result, "healburn");
    const frozentelimps = new CreateDeckEmbed(result, "frozentelimps");
    const recycling = new CreateDeckEmbed(result, "recycling");
    const uncrackamech = new CreateDeckEmbed(result, "feastmech");
    const watersports = new CreateDeckEmbed(result, "watersports");
    const gravepiratestache = new CreateDeckEmbed(result, "gps");
    const m = await message.channel.send({ embeds: [xera], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "comp") {
        await i.reply({
          embeds: [toyotacontrolla],
          flags: MessageFlags.Ephemeral,
        });
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
        await i.reply({ embeds: [brady], flags: MessageFlags.Ephemeral });
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
          star: { embed: startron, component: star },
          startron: { embed: startron, component: star },
          star2: { embed: startron, component: star2 },
          startron2: { embed: startron, component: star2 },
          star3: { embed: startron, component: star3 },
          startron3: { embed: startron, component: star3 },
          star4: { embed: startron, component: star4 },
          startron4: { embed: startron, component: star4 },
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
          br: { embed: brady, component: br },
          brady: { embed: brady, component: br },
          br2: { embed: brady, component: br2 },
          brady2: { embed: brady, component: br2 },
          lrings: { embed: laserrings, component: lrings },
          laserrings: { embed: laserrings, component: lrings },
          lrings2: { embed: laserrings, component: lrings2 },
          laserrings2: { embed: laserrings, component: lrings2 },
          lrings3: { embed: laserrings, component: lrings3 },
          laserrings3: { embed: laserrings, component: lrings3 },
          lrings4: { embed: laserrings, component: lrings4 },
          laserrings4: { embed: laserrings, component: lrings4 },
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
        };
        const action = buttonActions[i.customId];
        if (action) {
          await i.update({ embeds: [action.embed], components: [action.component] });
        }
        else{
          await i.reply({
            content: "Invalid button interaction.",
            flags: MessageFlags.Ephemeral
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
