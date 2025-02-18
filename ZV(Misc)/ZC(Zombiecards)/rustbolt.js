const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `rustbolt`,
  aliases: [`rb`, `rust`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helprb")
        .setLabel("Rustbolt Decks")
        .setStyle(ButtonStyle.Danger)
        .setEmoji("<:RustboltH:1088094706346491904>")
    );
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackabolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bol")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bol = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brb")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const brb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boltbolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bust")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bust = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetrb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cog")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cog = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bustbolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("igb")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const igb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("coggerazzi")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kl")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const kl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("igmablobchum")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("marx")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const marx = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kingleap")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("msb")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const msb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("marxbolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mc")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mimescibolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ps")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechacontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sb")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pharaohster")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tster")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tster = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("uncrack")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const uncrack = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("terrifytricksterazzi")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "boltbolt",
      "boss",
      "budgetrb",
      "bustbolt",
      "coggerazzi",
      "igmablobchum",
      "kingleap",
      "marxbolt",
      "mimescibolt",
      "mechacontrol",
      "pharaohster",
      "sunbandits",
      "terrifytricksterazzi",
      "uncrackabolt",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Rustbolt decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription("A deck that is cheap for new players")
      .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription("Some of the best Decks in the game")
      .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Decks")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
      .setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription("Decks that are built off a weird/fun combo"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription("attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("All Rustbolt Decks")
      .setValue("all")
      .setDescription("View all Rustbolt decklists")
      .setEmoji("<:RustboltH:1088094706346491904>")
    )
    const row = new ActionRowBuilder().addComponents(select);
    let budgetdecks = [
      "budgetrb",
    ]
    const comprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("uncrackabolt2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bust2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bust2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("comphelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("uncrack2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const uncrack2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bustbolt2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcomp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
      let compdecks = [
      "bustbolt",
      "uncrackabolt",
    ]
    let toBuildCompString = "";
    for (let i = 0; i < compdecks.length; i++) {
      let deck = compdecks[i];
      toBuildCompString += `\n<@1043528908148052089> **${deck}**`;
    }
    let ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pharaohster2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bol2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bol2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("marx2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const marx2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("boltbolt2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const mc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("marxbolt2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("msb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const msb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mechacontrol2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ps2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const ps2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mimescibolt2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let ladderdecks = [
      "boltbolt",
      "marxbolt",
      "mechacontrol", 
      "mimescibolt", 
      "pharaohster",
    ]
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("terrifytricksterazzi2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cog2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const cog2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("igb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const igb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("coggerazzi2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmablobchum2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tster2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const tster2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunbandits2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let memedecks = [
      "coggerazzi",
      "igmablobchum",
      "sunbandits", 
      "terrifytricksterazzi",
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("marxbolt3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("brb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const brb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("marx3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const marx3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetrb2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpaggro")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let aggrodecks = [
      "budgetrb", 
      "marxbolt"
    ]
    let toBuildAggroString = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      let deck = aggrodecks[i];
      toBuildAggroString += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("terrifytricksterazzi3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bol3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bol3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bust3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bust3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("boltbolt3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cog3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const cog3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bustbolt3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("igb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const igb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("coggerazzi3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("kl3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const kl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmablobchum3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("msb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const msb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("kingleap3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ps3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const ps3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mimescibolt3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder() 
      .setCustomId("sb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pharaohster3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tster3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const tster3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunbandits3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let combodecks = [
      "boltbolt", 
      "bustbolt",
      "coggerazzi",
      "igmablobchum",
      "kingleap", 
      "mimescibolt", 
      "pharaohster",
      "sunbandits",
      "terrifytricksterazzi",
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    const controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("uncrackabolt3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bust4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bust4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("controlhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mc3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const mc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bustbolt4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ps4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const ps4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mechacontrol3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sb4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pharaohster4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("uncrack3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const uncrack3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunbandits4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcontrol")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );

    let controldecks = [
      "bustbolt",
      "josebolt",
      "mechacontrol",
      "pharaohster",
      "sunbandits",
      "uncrackabolt",
    ]
    let toBuildControlString = "";
    for (let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControlString += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmablobchum4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bol4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bol4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midrangehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("igb4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const igb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("boltbolt4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmidrange")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks = [
      "boltbolt", 
      "igmablobchum",
    ]
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const temporow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("terrifytricksterazzi4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cog4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const cog4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("tempohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tster4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const tster4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("coggerazzi4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helptempo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let tempodecks = [
      "coggerazzi",
      "terrifytricksterazzi",
    ]
    let toBuildTempoString = "";
    for (let i = 0; i < tempodecks.length; i++) {
      let deck = tempodecks[i];
      toBuildTempoString += `\n<@1043528908148052089> **${deck}**`;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle(
        "Rustbolt | <:Brainy:1062500939908530246><:Hearty:1062501636557242429>"
      )
      .setDescription("**\\- Science Hero  -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Heroic Health <:Hearty:1062501636557242429> \n Heal your Hero for 6. \n Cut Down To Size <:Brainy:1062500939908530246> \n Destroy a Plant that has 5<:Strength:1062501774612779039> or more. \n Rock Wall <:Hearty:1062501636557242429> \n A Zombie gets +5<:Health:1062515540712751184>. \n Shrink Ray <:Brainy:1062500939908530246><:Hearty:1062501636557242429> \n A Plant gets -3<:Strength:1062501774612779039>. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "He enjoys keeping his bolts tight and his screws loose.",
        }
      )
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Decks")
      .setDescription(`My commands for Rustbolt(RB) are ${toBuildString}`)
      .setFooter({
        text: `To view the RustBolt decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Rustbolt has ${decks.length} toal decks in Tbot`,
      })
      .setColor("Random");
      let helprb = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Decks")
      .setDescription(`To view the RustBolt decks please select an option from the select menu below!
Note: Rustbolt has ${decks.length} toal decks in Tbot`)
      .setColor("Random");
      let compEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Competitive Decks")
      .setDescription(`My competitive decks for Rustbolt(RB) are ${toBuildCompString}`)
      .setFooter({
        text: `To view the RustBolt competitive decks please use the commands listed above or click on the buttons below to navigate through all competitive decks!
Note: Rustbolt has ${compdecks.length} toal competitive decks in Tbot`,
      })
      .setColor("Random");
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Ladder Decks")
      .setDescription(`My ladder decks for Rustbolt(RB) are ${toBuildLadderString}`)
      .setFooter({
        text: `To view the RustBolt ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Rustbolt has ${ladderdecks.length} toal ladder decks in Tbot`,
      })
      .setColor("Random");
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Meme Decks")
      .setDescription(`My meme decks for Rustbolt(RB) are ${toBuildMemeString}`)
      .setFooter({
        text: `To view the RustBolt meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Rustbolt has ${memedecks.length} toal meme decks in Tbot`,
      })
      .setColor("Random");
      let aggroEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Aggro Decks")
      .setDescription(`My aggro decks for Rustbolt(RB) are ${toBuildAggroString}`)
      .setFooter({
        text: `To view the RustBolt aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Rustbolt has ${aggrodecks.length} toal aggro decks in Tbot`,
      })
      .setColor("Random");
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Combo Decks")
      .setDescription(`My combo decks for Rustbolt(RB) are ${toBuildComboString}`)
      .setFooter({
        text: `To view the RustBolt combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Rustbolt has ${combodecks.length} toal combo decks in Tbot`,
      })
      .setColor("Random");
      let controlEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Control Decks")
      .setDescription(`My control decks for Rustbolt(RB) are ${toBuildControlString}`)
      .setFooter({
        text: `To view the RustBolt control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: Rustbolt has ${controldecks.length} toal control decks in Tbot`,
      })
      .setColor("Random");
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Midrange Decks")
      .setDescription(`My midrange decks for Rustbolt(RB) are ${toBuildMidrangeString}`)
      .setFooter({
        text: `To view the RustBolt midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Rustbolt has ${midrangedecks.length} toal midrange decks in Tbot`,
      })
      .setColor("Random");
      let tempoEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle("Rustbolt Tempo Decks")
      .setDescription(`My tempo decks for Rustbolt(RB) are ${toBuildTempoString}`)
      .setFooter({
        text: `To view the RustBolt tempo decks please use the commands listed above or click on the buttons below to navigate through all tempo decks!
Note: Rustbolt has ${tempodecks.length} toal tempo decks in Tbot`,
      })
      .setColor("Random");
    let [result] = await db.query(`select * from rbdecks`);
    let boltbolt = new EmbedBuilder()
    .setTitle(`${result[5].boltbolt}`)
    .setDescription(`${result[3].boltbolt}`)
    .setFooter({ text: `${result[2].boltbolt}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].boltbolt}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].boltbolt}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].boltbolt}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].boltbolt}`);
    let budgetrb = new EmbedBuilder()
    .setTitle(`${result[5].budgetrb}`)	
    .setDescription(`${result[3].budgetrb}`)
.setFooter({text: `${result[2].budgetrb}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].budgetrb}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].budgetrb}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].budgetrb}`,
      inline: true
    })	
    .setImage(`${result[4].budgetrb}`)
  .setColor("Random")			
    let bustbolt = new EmbedBuilder()
    .setTitle(`${result[5].bustbolt}`)
		.setDescription(`${result[3].bustbolt}`)
		.setColor("Random")
			.setFooter({text: `${result[2].bustbolt}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].bustbolt}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].bustbolt}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].bustbolt}`,
			inline: true
		})
		.setImage(`${result[4].bustbolt}`)
    let igmablobchum = new EmbedBuilder()
    .setTitle(`${result[5].igmablobchum}`)
    .setDescription(`${result[3].igmablobchum}`)
    .setFooter({text: `${result[2].igmablobchum}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].igmablobchum}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].igmablobchum}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].igmablobchum}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].igmablobchum}`)
    let kingleap = new EmbedBuilder()
    .setTitle(`${result[5].kingleap}`)
    .setDescription(`${result[3].kingleap}`)
    .setFooter({text:`${result[2].kingleap}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].kingleap}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].kingleap}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].kingleap}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`	${result[4].kingleap}`)
    let marxbolt = new EmbedBuilder()
    .setTitle(`${result[5].marxbolt}`)
		.setDescription(`${result[3].marxbolt}`)
		.setFooter({text: `${result[2].marxbolt}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].marxbolt}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].marxbolt}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].marxbolt}`,
			inline: true
		})
		.setColor("Random")
		.setImage(`${result[4].marxbolt}`)
    let mimescibolt = new EmbedBuilder()
    .setTitle(`${result[5].mimescibolt}`)
		.setDescription(`${result[3].mimescibolt}`)
		.setFooter({text:`${result[2].mimescibolt}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].mimescibolt}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].mimescibolt}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].mimescibolt}`,
			inline: true
		})
		.setColor("Random")
		.setImage(`${result[4].mimescibolt}`)
    let mechacontrol = new EmbedBuilder()
    .setTitle(`${result[5].mechacontrol}`)
		.setDescription(`${result[3].mechacontrol}`)
		.setFooter({text: `${result[2].mechacontrol}`})
		.setColor("Random")
		.addFields({
			name: "Deck Type",
			value: `${result[6].mechacontrol}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].mechacontrol}`,
			inline: true
		},{
			name: "Deck Cost",
			value:`${result[1].mechacontrol}`,
			inline: true
		})
		.setImage(`${result[4].mechacontrol}`)
    let pharaohster = new EmbedBuilder()
    .setTitle(`${result[5].pharaohster}`)
    .setDescription(`${result[3].pharaohster}`)
    .setFooter({text: `${result[2].pharaohster}`})
          .addFields({
            name: "Deck Type",
            value: `${result[6].pharaohster}`,
            inline: true
          },{
            name: "Archetype",
            value: `${result[0].pharaohster}`,
            inline: true
          },{
            name: "Deck Cost", 
            value: `${result[1].pharaohster}`,
            inline: true
          })
      .setColor("Random")
      .setImage(`${result[4].pharaohster}`)
    let coggerazzi = new EmbedBuilder()
    .setTitle(`${result[5].poggerrazzi}`)
    .setDescription(`${result[3].poggerrazzi}`)
    .setFooter({ text: `${result[2].poggerrazzi}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].poggerrazzi}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].poggerrazzi}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].poggerrazzi}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].poggerrazzi}`);
    let sunbandits = new EmbedBuilder()
    .setTitle(`${result[5].sunbandits}`)
    .setDescription(`${result[3].sunbandits}`)
    .setFooter({ text: `${result[2].sunbandits}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].sunbandits}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].sunbandits}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].sunbandits}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].sunbandits}`);
    let terrifytricksterazzi = new EmbedBuilder()
    .setTitle(`${result[5].terrifytricksterazzi}`)
    .setDescription(`${result[3].terrifytricksterazzi}`)
    .setFooter({ text: `${result[2].terrifytricksterazzi}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].terrifytricksterazzi}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].terrifytricksterazzi}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].terrifytricksterazzi}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].terrifytricksterazzi}`);
    let uncrackabolt = new EmbedBuilder()
    .setTitle(`${result[5].uncrackabolt}`)
    .setDescription(`${result[3].uncrackabolt}`)
    .addFields(
      {
        name: "Deck Type",
        value: `${result[6].uncrackabolt}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].uncrackabolt}`,
        inline: true
      },
    {
        name: "Deck Cost",
        value: `${result[1].uncrackabolt}`,
        inline: true
    }
)
.setFooter({text: `${result[2].uncrackabolt}`})
.setColor("Random")
.setImage(`${result[4].uncrackabolt}`)
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helprb") {
        await i.update({ embeds: [helprb], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0];
        if (value == "all") {
          await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
        }
        if (value == "comp") {
          await i.update({ embeds: [compEmbed], components: [comprow] });
        }
        if (value == "ladder") {
          await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
        }
        if (value == "meme") {
          await i.update({ embeds: [memeEmbed], components: [memerow] });
        }
        if (value == "aggro") {
          await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
        }
        if (value == "combo") {
          await i.update({ embeds: [comboEmbed], components: [comborow] });
        }
        if (value == "control") {
          await i.update({ embeds: [controlEmbed], components: [controlrow] });
        }
        if (value == "midrange") {
          await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
        }
        if (value == "tempo") {
          await i.update({ embeds: [tempoEmbed], components: [temporow] });
        }
        if (value == "budget") {
          await i.reply({embeds: [budgetrb], flags: MessageFlags.Ephemeral})
        }

      }
      if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      if ( i.customId == "helpcomp" || i.customId == "comphelp") {
        await i.update({ embeds: [compEmbed], components: [comprow] });
      }
      if (i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      if ( i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
      if ( i.customId == "helpaggro" || i.customId == "aggrohelp") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      }
      if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      if ( i.customId == "helpcontrol" || i.customId == "controlhelp") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      }
      if ( i.customId == "helpmidrange" || i.customId == "midrangehelp") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      if ( i.customId == "helptempo" || i.customId == "tempohelp") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      }
      if (i.customId == "bol" || i.customId == "boltbolt") {
        await i.update({ embeds: [boltbolt], components: [bol] });
      }
      if (i.customId == "bol2" || i.customId == "boltbolt2") {
        await i.update({ embeds: [boltbolt], components: [bol2] });
      }
      if (i.customId == "bol3" || i.customId == "boltbolt3") {
        await i.update({ embeds: [boltbolt], components: [bol3] });
      }
      if (i.customId == "bol4" || i.customId == "boltbolt4") {
        await i.update({ embeds: [boltbolt], components: [bol4] });
      }
      if (i.customId == "brb" || i.customId == "budgetrb") {
        await i.update({ embeds: [budgetrb], components: [brb] });
      }
      if (i.customId == "brb2" || i.customId == "budgetrb2") {
        await i.update({ embeds: [budgetrb], components: [brb2] });
      }
      if (i.customId == "igb" || i.customId == "igmablobchum") {
        await i.update({ embeds: [igmablobchum], components: [igb] });
      }
      if (i.customId == "igb2" || i.customId == "igmablobchum2") {
        await i.update({ embeds: [igmablobchum], components: [igb2] });
      }
      if (i.customId == "igb3" || i.customId == "igmablobchum3") {
        await i.update({ embeds: [igmablobchum], components: [igb3] });
      }
      if (i.customId == "igb4" || i.customId == "igmablobchum4") {
        await i.update({ embeds: [igmablobchum], components: [igb4] });
      }
      if (i.customId == "kl" || i.customId == "kingleap") {
        await i.update({ embeds: [kingleap], components: [kl] });
      }
      if (i.customId == "kl2" || i.customId == "kingleap2") {
        await i.update({ embeds: [kingleap], components: [kl2] });
      }
      if (i.customId == "kl3" || i.customId == "kingleap3") {
        await i.update({ embeds: [kingleap], components: [kl3] });
      }
      if (i.customId == "bust" || i.customId == "bustbolt") {
        await i.update({ embeds: [bustbolt], components: [bust] });
      }
      if (i.customId == "bust2" || i.customId == "bustbolt2") {
        await i.update({ embeds: [bustbolt], components: [bust2] });
      }
      if (i.customId == "bust3" || i.customId == "bustbolt3") {
        await i.update({ embeds: [bustbolt], components: [bust3] });
      }
      if (i.customId == "bust4" || i.customId == "bustbolt4") {
        await i.update({ embeds: [bustbolt], components: [bust4] });
      }

      if (i.customId == "marx" || i.customId == "marxbolt") {
        await i.update({ embeds: [marxbolt], components: [marx] });
      }
      if (i.customId == "marx2" || i.customId == "marxbolt2") {
        await i.update({ embeds: [marxbolt], components: [marx2] });
      }
      if (i.customId == "marx3" || i.customId == "marxbolt3") {
        await i.update({ embeds: [marxbolt], components: [marx3] });
      }
      if (i.customId == "msb" || i.customId == "mimescibolt") {
        await i.update({ embeds: [mimescibolt], components: [msb] });
      }
      if (i.customId == "msb2" || i.customId == "mimescibolt2") {
        await i.update({ embeds: [mimescibolt], components: [msb2] });
      }
      if (i.customId == "msb3" || i.customId == "mimescibolt3") {
        await i.update({ embeds: [mimescibolt], components: [msb3] });
      }
      if (i.customId == "mc" || i.customId == "mechacontrol") {
        await i.update({ embeds: [mechacontrol], components: [mc] });
      }
      if (i.customId == "mc2" || i.customId == "mechacontrol2") {
        await i.update({ embeds: [mechacontrol], components: [mc2] });
      }
      if (i.customId == "mc3" || i.customId == "mechacontrol3") {
        await i.update({ embeds: [mechacontrol], components: [mc3] });
      }
      if (i.customId == "ps" || i.customId == "pharaohster") {
        await i.update({ embeds: [pharaohster], components: [ps] });
      }
      if (i.customId == "ps2" || i.customId == "pharaohster2") {
        await i.update({ embeds: [pharaohster], components: [ps2] });
      }
      if (i.customId == "ps3" || i.customId == "pharaohster3") {
        await i.update({ embeds: [pharaohster], components: [ps3] });
      }
      if (i.customId == "ps4" || i.customId == "pharaohster4") {
        await i.update({ embeds: [pharaohster], components: [ps4] });
      }
      if (i.customId == "cog" || i.customId == "coggerazzi") {
        await i.update({ embeds: [coggerazzi], components: [cog] });
      }
      if (i.customId == "cog2" || i.customId == "coggerazzi2") {
        await i.update({ embeds: [coggerazzi], components: [cog2] });
      }
      if (i.customId == "cog3" || i.customId == "coggerazzi3") {
        await i.update({ embeds: [coggerazzi], components: [cog3] });
      }
      if (i.customId == "cog4" || i.customId == "coggerazzi4") {
        await i.update({ embeds: [coggerazzi], components: [cog4] });
      }
      if (i.customId == "sb" || i.customId == "sunbandits") {
        await i.update({ embeds: [sunbandits], components: [sb] });
      }
      if (i.customId == "sb2" || i.customId == "sunbandits2") {
        await i.update({ embeds: [sunbandits], components: [sb2] });
      }
      if (i.customId == "sb3" || i.customId == "sunbandits3") {
        await i.update({ embeds: [sunbandits], components: [sb3] });
      }
      if (i.customId == "sb4" || i.customId == "sunbandits4") {
        await i.update({ embeds: [sunbandits], components: [sb4] });
      }
      //Uncrackabolt
      if (i.customId == "uncrack" || i.customId == "uncrackabolt") {
        await i.update({ embeds: [uncrackabolt], components: [uncrack] });
      }
      if(i.customId == "uncrack2" || i.customId == "uncrackabolt2"){
        await i.update({ embeds: [uncrackabolt], components: [uncrack2] });
      }
      if(i.customId == "uncrack3" || i.customId == "uncrackabolt3"){
        await i.update({ embeds: [uncrackabolt], components: [uncrack3] });
      }
      if(i.customId == "tster" || i.customId == "terrifytricksterazzi"){
        await i.update({ embeds: [terrifytricksterazzi], components: [tster] });
      }
      if(i.customId == "tster2" || i.customId == "terrifytricksterazzi2"){
        await i.update({ embeds: [terrifytricksterazzi], components: [tster2] });
      }
      if(i.customId == "tster3" || i.customId == "terrifytricksterazzi3"){
        await i.update({ embeds: [terrifytricksterazzi], components: [tster3] });
      }
      if(i.customId == "tster4" || i.customId == "terrifytricksterazzi4"){
        await i.update({ embeds: [terrifytricksterazzi], components: [tster4] });
      }
    });
  },
};
