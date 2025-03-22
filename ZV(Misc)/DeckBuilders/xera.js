const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
let db = require("../../index.js");
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
        "funnyflare",
        "himpter",
        "laserrings",
        "startron",
        "uncrackamech",
        "watersports",
      ],
      aggroDecks: ["gravepiratestache"],
      comboDecks: [
        "22savage",
        "funnyflare",
        "gravepiratestache",
        "himpter",
        "laserrings",
        "startron",
        "uncrackamech",
        "watersports",
      ],
      controlDecks: ["toyotacontrolla", "uncrackamech"],
      midrangeDecks: [
        "22savage",
        "funnyflare",
        "gomorrah",
        "himpter",
        "laserrings",
        "startron",
        "watersports",
      ],
      tempoDecks: ["brady"],
      allDecks: [
        "22savage",
        "brady",
        "funnyflare",
        "gomorrah",
        "gravepiratestache",
        "himpter",
        "laserrings",
        "startron",
        "toyotacontrolla",
        "uncrackamech",
        "watersports",
      ],
    };
    const row = new ActionRowBuilder().addComponents(select);
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravepiratestache2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("br")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const br = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpladder")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("go")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const go = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brady")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gps2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gps2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ladderhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildLadderString = xeraDecks.ladderDecks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sav")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sav = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmeme")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ff")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ff = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savage")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hi")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hi = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("funnyflare")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lrings")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lrings = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himps")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("star")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const star = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("laserrings")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("um")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const um = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startron")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ws")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ws = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackamech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("memehelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildMeme = xeraDecks.memeDecks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sav2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sav2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ff2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ff2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savage2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gps")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("funnyflare2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hi2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hi2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravepiratestache")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lrings2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lrings2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himps2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("star2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const star2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("laserrings2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("um2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const um2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startron2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ws2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ws2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackamech2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildComboString = xeraDecks.comboDecks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
    const controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackmech3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("um3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const um3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("toyotacontrolla")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("controlhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildControlString = xeraDecks.controlDecks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sav3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sav3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmid")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ff3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ff3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savage3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("go2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const go2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("funnyflare3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hi3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hi3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lrings3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lrings3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himps3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("star3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const star3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("laserrings3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ws3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ws3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startron3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildMidString = xeraDecks.midrangeDecks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sav4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sav4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("br2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const br2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savage4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ff4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ff4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brady2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("go3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const go3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("funnyflare4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gps3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gps3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hi4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hi4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravepiratestache3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lrings4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lrings4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himps4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("star4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const star4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("laserrings4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tc2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startron4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("um4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const um4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("toyotacontrolla2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ws4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ws4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackamech4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildString = xeraDecks.allDecks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
    let [result] =
      await db.query(`SELECT savage22, funnyflare, gomorrah, gps, himps, lasersnap, startron, toyotacontrolla, feastmech, brady, watersports 
            FROM imdecks im
            inner join bfdecks bf on (im.deckinfo = bf.deckinfo) 
            inner join sfdecks sf on (im.deckinfo = sf.deckinfo)
            inner join ctdecks ct on (im.deckinfo = ct.deckinfo)
            inner join ncdecks nc on (im.deckinfo = nc.deckinfo)
            inner join czdecks cz on (im.deckinfo = cz.deckinfo)
            inner join hgdecks hg on (im.deckinfo = hg.deckinfo)
            inner join ntdecks nt on (im.deckinfo = nt.deckinfo)
            inner join zmdecks zm on (im.deckinfo = zm.deckinfo)`);
    let user = await client.users.fetch("742719800395956244");
    let xera = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${xeraDecks.allDecks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let allxera = new EmbedBuilder()
      .setTitle(`All Decks Made By ${user.displayName}`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.allDecks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let ladderxera = new EmbedBuilder()
      .setTitle(`${user.displayName} Ladder Decks`)
      .setDescription(
        `My Ladder Decks made by ${user.displayName} are ${toBuildLadderString}`
      )
      .setFooter({
        text: `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.ladderDecks.length} Ladder decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let memexera = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme Decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.memeDecks.length} Meme decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let comboxera = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo Decks made by ${user.displayName} are ${toBuildComboString}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.comboDecks.length} Combo decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let controlxera = new EmbedBuilder()
      .setTitle(`${user.displayName} Control Decks`)
      .setDescription(
        `My Control Decks made by ${user.displayName} are ${toBuildControlString}`
      )
      .setFooter({
        text: `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.controlDecks.length} Control decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let midrangexera = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange Decks made by ${user.displayName} are ${toBuildMidString}`
      )
      .setFooter({
        text: `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.midrangeDecks.length} Midrange decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let savage22 = new EmbedBuilder()
      .setTitle(`${result[5].savage22}`)
      .setDescription(`${result[3].savage22}`)
      .setFooter({ text: `${result[2].savage22}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].savage22}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].savage22}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].savage22}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].savage22}`);
    let brady = new EmbedBuilder()
      .setTitle(`${result[5].brady}`)
      .setDescription(`${result[3].brady}`)
      .setFooter({ text: `${result[2].brady}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].brady}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].brady}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].brady}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].brady}`);
      let	funnyflare = new EmbedBuilder()
			.setTitle(`${result[5].funnyflare}`)	
			.setDescription(`${result[3].funnyflare}`)
			.setFooter({text:`${result[2].funnyflare}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].funnyflare}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].funnyflare}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].funnyflare}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].funnyflare}`)
    let gomorrah = new EmbedBuilder()
      .setTitle(`${result[5].gomorrah}`)
      .setDescription(`${result[3].gomorrah}`)
      .setFooter({ text: `${result[2].gomorrah}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gomorrah}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gomorrah}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gomorrah}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].gomorrah}`);
    let gravepiratestache = new EmbedBuilder()
      .setTitle(`${result[5].gps}`)
      .setDescription(`${result[3].gps}`)
      .setColor("Random")
      .setImage(`${result[4].gps}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gps}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gps}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gps}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].gps}` });
    let startron = new EmbedBuilder()
      .setTitle(`${result[5].startron}`)
      .setDescription(`${result[3].startron}`)
      .setFooter({ text: `${result[2].startron}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].startron}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].startron}`,
          inline: true,
        },
        { name: "Deck Cost", value: `${result[1].startron}`, inline: true }
      )
      .setImage(`${result[4].startron}`)
      .setColor("Random");
    let himps = new EmbedBuilder()
      .setTitle(`${result[5].himps}`)
      .setDescription(`${result[3].himps}`)
      .setFooter({ text: `${result[2].himps}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].himps}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].himps}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].himps}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].himps}`);
    let laserrings = new EmbedBuilder()
      .setTitle(`${result[5].lasersnap}`)
      .setDescription(`${result[3].lasersnap}`)
      .setFooter({ text: `${result[2].lasersnap}` })
      .setColor("Random")
      .setImage(`${result[4].lasersnap}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].lasersnap}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].lasersnap}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].lasersnap}`,
          inline: true,
        }
      );
    let toyotacontrolla = new EmbedBuilder()
      .setTitle(`${result[5].toyotacontrolla}`)
      .setDescription(`${result[3].toyotacontrolla}`)
      .setFooter({ text: `${result[2].toyotacontrolla}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].toyotacontrolla}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].toyotacontrolla}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].toyotacontrolla}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].toyotacontrolla}`);
    let uncrackamech = new EmbedBuilder()
      .setTitle(`${result[5].feastmech}`)
      .setDescription(`${result[3].feastmech}`)
      .setColor("Random")
      .setImage(`${result[4].feastmech}`)
      .setFooter({ text: `${result[2].feastmech}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].feastmech}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].feastmech}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].feastmech}`,
          inline: true,
        }
      );
    let watersports = new EmbedBuilder()
      .setTitle(`${result[5].watersports}`)
      .setDescription(`${result[3].watersports}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].watersports}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].watersports}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].watersports}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].watersports}`,
          inline: true,
        }
      )
      .setImage(`${result[4].watersports}`);
    const m = await message.channel.send({ embeds: [xera], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        const value = i.values[0];
        if (value == "comp") {
          await i.reply({
            embeds: [toyotacontrolla],
            flags: MessageFlags.Ephemeral,
          });
        }
        if (value == "control") {
          await i.update({ embeds: [controlxera], components: [controlrow] });
        }
        if (value == "all") {
          await i.update({ embeds: [allxera], components: [alldecksrow] });
        }
        if (value == "meme") {
          await i.update({ embeds: [memexera], components: [memerow] });
        }
        if (value == "combo") {
          await i.update({ embeds: [comboxera], components: [comborow] });
        }
        if (value == "midrange") {
          await i.update({ embeds: [midrangexera], components: [midrangerow] });
        }
        if (value == "aggro") {
          await i.reply({
            embeds: [gravepiratestache],
            flags: MessageFlags.Ephemeral,
          });
        }
        if (value == "ladder") {
          await i.update({ embeds: [ladderxera], components: [ladderrow] });
        }
        if (value == "tempo") {
          await i.reply({ embeds: [brady], flags: MessageFlags.Ephemeral });
        }
      }
      if (i.customId == "hi" || i.customId == "himps") {
        await i.update({ embeds: [himps], components: [hi] });
      }
      if (i.customId == "hi2" || i.customId == "himps2") {
        await i.update({ embeds: [himps], components: [hi2] });
      }
      if (i.customId == "hi3" || i.customId == "himps3") {
        await i.update({ embeds: [himps], components: [hi3] });
      }
      if (i.customId == "hi4" || i.customId == "himps4") {
        await i.update({ embeds: [himps], components: [hi4] });
      }
      if (i.customId == "star" || i.customId == "startron") {
        await i.update({ embeds: [startron], components: [star] });
      }
      if (i.customId == "star2" || i.customId == "startron2") {
        await i.update({ embeds: [startron], components: [star2] });
      }
      if (i.customId == "star3" || i.customId == "startron3") {
        await i.update({ embeds: [startron], components: [star3] });
      }
      if (i.customId == "star4" || i.customId == "startron4") {
        await i.update({ embeds: [startron], components: [star4] });
      }
      if (i.customId == "controlhelp" || i.customId == "helpcontrol") {
        await i.update({ embeds: [controlxera], components: [controlrow] });
      }
      if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memexera], components: [memerow] });
      }
      if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboxera], components: [comborow] });
      }
      if (i.customId == "helpmid" || i.customId == "midhelp") {
        await i.update({ embeds: [midrangexera], components: [midrangerow] });
      }
      if (i.customId == "ws" || i.customId == "watersports") {
        await i.update({ embeds: [watersports], components: [ws] });
      }
      if (i.customId == "ws2" || i.customId == "watersports2") {
        await i.update({ embeds: [watersports], components: [ws2] });
      }
      if (i.customId == "ws3" || i.customId == "watersports3") {
        await i.update({ embeds: [watersports], components: [ws3] });
      }
      if (i.customId == "ws4" || i.customId == "watersports4") {
        await i.update({ embeds: [watersports], components: [ws4] });
      }
      if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderxera], components: [ladderrow] });
      }
      if (i.customId == "gps" || i.customId == "gravepiratestache") {
        await i.update({ embeds: [gravepiratestache], components: [gps] });
      }
      if (i.customId == "gps2" || i.customId == "gravepiratestache2") {
        await i.update({ embeds: [gravepiratestache], components: [gps2] });
      }
      if (i.customId == "gps3" || i.customId == "gravepiratestache3") {
        await i.update({ embeds: [gravepiratestache], components: [gps3] });
      }
      if (i.customId == "go" || i.customId == "gomorrah") {
        await i.update({ embeds: [gomorrah], components: [go] });
      }
      if (i.customId == "go2" || i.customId == "gomorrah2") {
        await i.update({ embeds: [gomorrah], components: [go2] });
      }
      if (i.customId == "go3" || i.customId == "gomorrah3") {
        await i.update({ embeds: [gomorrah], components: [go3] });
      }
      if (i.customId == "um" || i.customId == "uncrackamech") {
        await i.update({ embeds: [uncrackamech], components: [um] });
      }
      if (i.customId == "um2" || i.customId == "uncrackamech2") {
        await i.update({ embeds: [uncrackamech], components: [um2] });
      }
      if (i.customId == "um3" || i.customId == "uncrackmech3") {
        await i.update({ embeds: [uncrackamech], components: [um3] });
      }
      if (i.customId == "um4" || i.customId == "uncrackamech4") {
        await i.update({ embeds: [uncrackamech], components: [um4] });
      }
      if (i.customId == "tc" || i.customId == "toyotacontrolla") {
        await i.update({ embeds: [toyotacontrolla], components: [tc] });
      }
      if (i.customId == "tc2" || i.customId == "toyotacontrolla2") {
        await i.update({ embeds: [toyotacontrolla], components: [tc2] });
      }
      if (i.customId == "br" || i.customId == "brady") {
        await i.update({ embeds: [brady], components: [br] });
      }
      if (i.customId == "br2" || i.customId == "brady2") {
        await i.update({ embeds: [brady], components: [br2] });
      }
      if (i.customId == "lrings" || i.customId == "laserrings") {
        await i.update({ embeds: [laserrings], components: [lrings] });
      }
      if (i.customId == "lrings2" || i.customId == "laserrings2") {
        await i.update({ embeds: [laserrings], components: [lrings2] });
      }
      if (i.customId == "lrings3" || i.customId == "laserrings3") {
        await i.update({ embeds: [laserrings], components: [lrings3] });
      }
      if (i.customId == "lrings4" || i.customId == "laserrings4") {
        await i.update({ embeds: [laserrings], components: [lrings4] });
      }

      if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [allxera], components: [alldecksrow] });
      }
      if (i.customId == "sav" || i.customId == "savage") {
        await i.update({ embeds: [savage22], components: [sav] });
      }
      if (i.customId == "sav2" || i.customId == "savage2") {
        await i.update({ embeds: [savage22], components: [sav2] });
      }
      if (i.customId == "sav3" || i.customId == "savage3") {
        await i.update({ embeds: [savage22], components: [sav3] });
      }
      if (i.customId == "sav4" || i.customId == "savage4") {
        await i.update({ embeds: [savage22], components: [sav4] });
      }
      if(i.customId == "ff" || i.customId == "funnyflare"){
        await i.update({embeds: [funnyflare], components: [ff]})
      }
      if(i.customId == "ff2" || i.customId == "funnyflare2"){
        await i.update({embeds: [funnyflare], components: [ff2]})
      }
      if(i.customId == "ff3" || i.customId == "funnyflare3"){
        await i.update({embeds: [funnyflare], components: [ff3]})
      }
      if(i.customId == "ff4" || i.customId == "funnyflare4"){
        await i.update({embeds: [funnyflare], components: [ff4]})
      }
    });
  },
};
