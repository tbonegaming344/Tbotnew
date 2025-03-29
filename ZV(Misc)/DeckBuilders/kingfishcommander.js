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
  name: `kingfishcommander`,
  aliases: [
    `kingfishcommanderdecks`,
    `kingfishcommanderhelp`,
    `helpkingfishcommander`,
    `decksmadebykingfishcommander`,
    `kingfish`,
    `kfc`,
    `kingfish_commander`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view KingFish Commander's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Decks")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
      .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Decks")
      .setValue("all")
      .setDescription('All of KingFish Commander\'s decks')
    )
    const row = new ActionRowBuilder().addComponents(select);
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetzm")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bbf")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bbf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpaggro")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budeb")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budeb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetbf")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bif")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bif = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgeteb")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bzm")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bzm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetif")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let agggrodecks = [
      "budgetbf",
      "budgeteb",
      "budgetif",
      "budgetzm"
    ]
    let toBuildAggro = "";
    for (let i = 0; i < agggrodecks.length; i++) {
      let deck = agggrodecks[i];
      toBuildAggro += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunlord")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lt")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const lt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pm")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lunchtime")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("smf")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const smf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("petmop")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sl")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("petmop")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let memedecks = [
      "lunchtime",
      "petmop",
      "savagemayflower",
      "sunlord",
    ]
    let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMeme += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunlord2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lt2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const lt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmidrange")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const pm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lunchtime2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sl2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("petmop2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("midrangehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks =[
      "lunchtime",
      "petmop",
      "sunlord",
    ]
    let toBuildMidrange = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrange += `\n<@1043528908148052089> **${deck}**`;
    }
    const temprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetwk")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bct")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bct = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helptempo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budgk")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budgk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetct")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budgs")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budgs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetgk")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bim")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bim = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetgs")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bnc")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bnc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetim")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budnt")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const budnt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnc")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budro")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnt")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budsb")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budsb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetro")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budsm")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budsm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsb")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budsp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budsp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsm")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budwk")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budwk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tempohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );

    let tempodecks = [
      "budgetct",
      "budgetgk",
      "budgetgs",
      "budgetim",
      "budgetnc",
      "budgetnt",
      "budgetro",
      "budgetsb",
      "budgetsm",
      "budgetsp",
      "budgetwk",
    ]
    let toBuildTempo = "";
    for (let i = 0; i < tempodecks.length; i++) {
      let deck = tempodecks[i];
      toBuildTempo += `\n<@1043528908148052089> **${deck}**`;
    }
    const budgetrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetzm2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budbf2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budbf2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpbudget")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bcc")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bcc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetbf2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bct2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bct2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetcc2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budeb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budeb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetcc")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budgk2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budgk2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgeteb2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budgs2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budgs2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetgk2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bif2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bif2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetgs2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bim2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bim2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetif2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bnc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bnc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetim2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budnt2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const budnt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnc2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bpb")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bpb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnt2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budro2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budro2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetpb")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budsb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budsb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetro2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budsm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budsm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsb2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budsp2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budsp2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsm2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budwk2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const budwk2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsp2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bzm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bzm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetwk2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budgethelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let budgetdecks = [
      "budgetbf",
      "budgetcc",
      "budgetct",
      "budgeteb",
      "budgetgk",
      "budgetgs",
      "budgetif",
      "budgetim",
      "budgetnc",
      "budgetnt",
      "budgetpb",
      "budgetro",
      "budgetsb",
      "budgetsm",
      "budgetsp",
      "budgetwk",
      "budgetzm",
    ]
    let toBuildBudget = "";
    for (let i = 0; i < budgetdecks.length; i++) {
      let deck = budgetdecks[i];
      toBuildBudget += `\n<@1043528908148052089> **${deck}**`;
    }
    let comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunlord3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bcc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bcc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bpb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bpb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("smf2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const smf2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetpb2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sl3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("savagemayflower2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let combodecks = [
      "budgetcc",
      "budgetpb",
      "savagemayflower",
      "sunlord",
    ]
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildCombo += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunlord4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bbf3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bbf3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bcc3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bcc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetbf3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bct3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bct3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetcc3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budeb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const budeb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetct3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bgk3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bgk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgeteb3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bgs3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    ) 
    const bgs3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetgk3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bif3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bif3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetgs3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bim3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bim3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetif3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bnc3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bnc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetim3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bnt3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bnt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnc3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bpb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bpb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnt3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bro3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bro3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetpb3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bsb3")  
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bsb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetro3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bsm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bsm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsb3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bsp3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bsp3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsm3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bwk3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bwk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsp3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bzm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bzm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetwk3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lt3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetzm3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lunchtime3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("smf3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const smf3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("petmop3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sl4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sl4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("savagemayflower3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )

    let decks = [
      "budgetbf",
      "budgetcc",
      "budgetct",
      "budgeteb",
      "budgetgk",
      "budgetgs",
      "budgetif",
      "budgetim",
      "budgetnc",
      "budgetnt",
      "budgetpb",
      "budgetro",
      "budgetsb",
      "budgetsm",
      "budgetsp",
      "budgetwk",
      "budgetzm",
      "lunchtime",
      "petmop",
      "savagemayflower",
      "sunlord",
    ];
    let toBuildString = ""
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let user = await client.users.fetch("1160392548423061516");
    let kfish = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
      let memekfish = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} Meme decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
      let combookfish = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildCombo}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} Combo decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
      let aggrokfish = new EmbedBuilder()
      .setTitle(`${user.displayName} Aggro Decks`)
      .setDescription(
        `My Aggro decks made by ${user.displayName} are ${toBuildAggro}`
      )
      .setFooter({
        text: `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${agggrodecks.length} Aggro decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
      let midrangekfish = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange decks made by ${user.displayName} are ${toBuildMidrange}`
      )
      .setFooter({
        text: `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${midrangedecks.length} Midrange decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
      let tempokfish = new EmbedBuilder()
      .setTitle(`${user.displayName} Tempo Decks`)
      .setDescription(
        `My Tempo decks made by ${user.displayName} are ${toBuildTempo}`
      )
      .setFooter({
        text: `To view the Tempo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tempodecks.length} Tempo decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
      let budgetkfish = new EmbedBuilder()
      .setTitle(`${user.displayName} Budget Decks`)
      .setDescription(
        `My Budget decks made by ${user.displayName} are ${toBuildBudget}`
      )
      .setFooter({
        text: `To view the Budget Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${budgetdecks.length} Budget decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
      let allkfish = new EmbedBuilder()
      .setTitle(`All ${user.displayName} Decks`)
      .setDescription(
        `My decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let [result] =
      await db.query(`select budgetbf, budgetcc, budgetct,  budgetburn, budgetgk, budgetgs, budgetif, budgetim, budgetnc, budgetnt, budgetpb,
		budgetro, budgetsb, budgetsm, budgetburstsp, budgetwkmidheal, budgetzm,  petmop, midpets, savagemayflower, wimps
		from gsdecks gs 
    inner join bfdecks bf 
		on (gs.deckinfo = bf.deckinfo)
    inner join ccdecks cc
    on (gs.deckinfo = cc.deckinfo)
    inner join ctdecks ct
    on (gs.deckinfo = ct.deckinfo)
		inner join gkdecks gk 
		on (gs.deckinfo = gk.deckinfo)
    inner join ebdecks eb 
    on (gs.deckinfo = eb.deckinfo)
		inner join ifdecks fi
		on (gs.deckinfo = fi.deckinfo)
    inner join imdecks im
    on (gs.deckinfo = im.deckinfo)
    inner join ncdecks nc
    on (gs.deckinfo = nc.deckinfo)
		inner join ntdecks nt
		on (gs.deckinfo = nt.deckinfo)
    inner join pbdecks pb
    on (gs.deckinfo = pb.deckinfo)
		inner join rodecks ro
		on (gs.deckinfo = ro.deckinfo)
		inner join sbdecks sb
		on (gs.deckinfo = sb.deckinfo)
		inner join spdecks sp
		on (gs.deckinfo = sp.deckinfo)
		inner join wkdecks wk 
		on (gs.deckinfo = wk.deckinfo)
    inner join zmdecks zm
    on (gs.deckinfo = zm.deckinfo)
    inner join smdecks sm
    on (gs.deckinfo = sm.deckinfo)`);
    // Budget Piratein
    let budgetbf = new EmbedBuilder()
    .setTitle(`${result[5].budgetbf}`)
	.setDescription(`${result[3].budgetbf}`)
	.setFooter({text: `${result[2].budgetbf}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].budgetbf}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetbf}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetbf}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].budgetbf}`)
let budgetcc = new EmbedBuilder()
	.setTitle(`${result[5].budgetcc}`)
	.setDescription(`${result[3].budgetcc}`)
	.setFooter({text: `${result[2].budgetcc}`})
			.addFields({
				name: "Deck Type",
				value:`${result[6].budgetcc}`,
				inline: true
			},
			{
				name: "Archetype",
				value:`${result[0].budgetcc}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetcc}`,
				inline: true})
		.setColor("Random")
.setImage(`${result[4].budgetcc}`)
let budgetct = new EmbedBuilder()
	.setTitle(`${result[5].budgetct}`)
	.setDescription(`${result[3].budgetct}`)
	.setFooter({text: `${result[2].budgetct}`})
			.addFields(
				{
					name: "Deck Type", 
					value: `${result[6].budgetct}`,
					inline: true
				},
				{
					name: "Archetype",
					value: `${result[0].budgetct}`,
					inline: true
				},
				{	name: "Deck Cost", 
					value: `${result[1].budgetct}`,
					inline: true
				})
		.setColor("Random")
	.setImage(`${result[4].budgetct}`)
let budgeteb = new EmbedBuilder()
.setTitle(`${result[5].budgetburn}`)
.setDescription(`${result[3].budgetburn}`)
.setFooter({ text: `${result[2].budgetburn}` })
.addFields({
  name: "Deck Type",
  value: `${result[6].budgetburn}`,
  inline: true
},{ 
  name: "Archetype", 
  value: `${result[0].budgetburn}`,
  inline: true
},{ 
  name: "Deck Cost", 
  value: `${result[1].budgetburn}`,
  inline: true
})
.setColor("Random")
.setImage(`${result[4].budgetburn}`);
    // Budget Tempo Knuckles
    let budgetgk = new EmbedBuilder()
    .setTitle(`${result[5].budgetgk}`)
	.setDescription(`${result[3].budgetgk}`)
	.setFooter({text: `${result[2].budgetgk}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetgk}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetgk}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetgk}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].budgetgk}`);
    //Budget Mop Shadow
    let budgetgs = new EmbedBuilder()
    .setTitle(`${result[5].budgetgs}`)
    .setDescription(`${result[3].budgetgs}`)
    .setFooter({text:`${result[2].budgetgs}`})
        .addFields({
        name: "Deck Type",
        value: `${result[6].budgetgs}`,
        inline: true
        },
        {
        name: "Archetype",
        value: `${result[0].budgetgs}`,
        inline: true
        },{
          name: "Deck Cost", 
          value:`${result[1].budgetgs}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].budgetgs}`)
    //Budget Impifinity
    let budgetif = new EmbedBuilder()
    .setTitle(`${result[5].budgetif}`)
    .setDescription(`${result[3].budgetif}`)
    .setFooter({ text: `${result[2].budgetif}` })
    .addFields(
      {
        name: "Deck Type",
        value: `${result[6].budgetif}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].budgetif}`,
        inline: true,
      },
      {
        name: "Deck Cost",
        value: `${result[1].budgetif}`,
        inline: true,
      }
    )
    .setColor("Random")
    .setImage(`${result[4].budgetif}`);
    let budgetim = new EmbedBuilder()
	.setTitle(`${result[5].budgetim}`)	
			.setDescription(`${result[3].budgetim}`)
	.setFooter({text:`${result[2].budgetim}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetim}`,
				inline: true
			},{
				name: "Archetype", 
				value: `${result[0].budgetim}`,
				inline: true
			},
			{
				name: "Deck Cost", 
				value: `${result[1].budgetim}`,
				inline: true
			})	
			.setImage(`${result[4].budgetim}`)
		.setColor("Random")			
    let budgetnc = new EmbedBuilder()
    .setTitle(`${result[5].budgetnc}`)
    .setDescription(`${result[3].budgetnc}`)
    .setFooter({text: `${result[2].budgetnc}`})
        .addFields(
          {
          name: "Deck Type",
          value: `${result[6].budgetnc}`,
          inline: true
          },
          {
          name: "Archetype",
          value: `${result[0].budgetnc}`,
          inline: true
          },
        {
          name: "Deck Cost", 
          value: `${result[1].budgetnc}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].budgetnc}`)
    //Budget Neptuna
    let budgetnt = new EmbedBuilder()
    .setTitle(`${result[5].budgetnt}`)
    .setDescription(`${result[3].budgetnt}`)
    .setFooter({text: `${result[2].budgetnt}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].budgetnt}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].budgetnt}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].budgetnt}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].budgetnt}`)
  let budgetpb = new EmbedBuilder()
	.setTitle(`${result[5].budgetpb}`)	
			.setDescription(`${result[3].budgetpb}`)
	.setFooter({text: `${result[2].budgetpb}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetpb}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetpb}`,
				inline: true
			},{
				name: "Deck Cost",
				value: `${result[1].budgetpb}`,
				inline: true
			})	
					.setImage(`${result[4].budgetpb}`)
		.setColor("Random")			
    //Budget Heal Midrose
    let bhmr = new EmbedBuilder()
    .setTitle(`${result[5].budgetro}`)
    .setDescription(`${result[3].budgetro}`)
    .setFooter({text:`${result[2].budgetro}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].budgetro}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].budgetro}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].budgetro}`,
          inline: true})
      .setColor("Random")
  .setImage(`${result[4].budgetro}`)
    //Budget Super Brains
    let budgetsb = new EmbedBuilder()
    .setTitle(`${result[5].budgetsb}`)
    .setDescription(`${result[3].budgetsb}`)
    .setFooter({text: `${result[2].budgetsb}`})
        .addFields({
          name: "Deck Type", 
          value: `${result[6].budgetsb}`,
          inline: true
        },
        {
          name: "Archetype", 
          value: `${result[0].budgetsb}`,
          inline: true
        },
        {
          name: "Deck Cost", 
          value: `${result[1].budgetsb}`,
          inline: true
        })
      .setColor("Random")		
      .setImage(`${result[4].budgetsb}`)
    //Budget Smash
    let budgetsm = new EmbedBuilder()
    .setTitle(`${result[5].budgetsm}`)	
    .setDescription(`${result[3].budgetsm}`)
.setFooter({text: `${result[2].budgetsm}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].budgetsm}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].budgetsm}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].budgetsm}`,
      inline: true
    })	
    .setImage(`${result[4].budgetsm}`)
  .setColor("Random")			
    //Budget Spudow
    let budgetsp = new EmbedBuilder()
    .setTitle(`${result[5].budgetburstsp}`)
    .setDescription(`${result[3].budgetburstsp}`)
    .setFooter({text: `${result[2].budgetburstsp}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].budgetburstsp}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].budgetburstsp}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].budgetburstsp}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].budgetburstsp}`)
    //Budget Wall Knight
    let budgetwk = new EmbedBuilder()
    .setTitle(`${result[5].budgetwkmidheal}`)
    .setDescription(`${result[3].budgetwkmidheal}`)
    .setFooter({ text: `${result[2].budgetwkmidheal}` })
    .addFields(
      {
        name: "Deck Type",
        value: `${result[6].budgetwkmidheal}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].budgetwkmidheal}`,
        inline: true,
      },
      {
        name: "Deck Cost",
        value: `${result[1].budgetwkmidheal}`,
        inline: true,
      }
    )
    .setColor("Random")
    .setImage(`${result[4].budgetwkmidheal}`);
    let budgetzm = new EmbedBuilder()
	.setTitle(`${result[5].budgetzm}`)
	.setDescription(`${result[3].budgetzm}`)
	.setFooter({text: `${result[2].budgetzm}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].budgetzm}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetzm}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetzm}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].budgetzm}`)
    let lunchtime = new EmbedBuilder()
		.setTitle(`${result[5].midpets}`)
		.setDescription(`${result[3].midpets}`)
		.setColor("Random")
		.setImage(`${result[4].midpets}`)
		.setFooter({text: `${result[2].midpets}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].midpets}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].midpets}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].midpets}`,
			inline: true
		})
    let savagemayflower= new EmbedBuilder()
		.setTitle(`${result[5].savagemayflower}`)
		.setDescription(`${result[3].savagemayflower}`)
		.setColor("Random")
		.addFields({
			name: "Deck Type",
			value: `${result[6].savagemayflower}`,
			inline: true
		},
		{
			name: "Archetype",
			value: `${result[0].savagemayflower}`,
			inline: true
		},
		{
			name: "Deck Cost", 
			value:`${result[1].savagemayflower}`,
			inline: true
		})
		.setFooter({text: `${result[2].savagemayflower}`})
		.setImage(`${result[4].savagemayflower}`)
    //Pet Mop
    let pmop = new EmbedBuilder()
    .setTitle(`${result[5].petmop}`)
		.setDescription(`${result[3].petmop}`)
		.setColor("Random")
		.setFooter({text: `${result[2].petmop}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].petmop}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].petmop}`,
				inline: true
			},{
				name: "Deck Cost", 
				value:`${result[1].petmop}`,
				inline: true
			})
		.setImage(`${result[4].petmop}`)
    //Sunlord
    let sunlord = new EmbedBuilder()
    .setTitle(`${result[5].wimps}`)	
    .setDescription(`${result[3].wimps}`)
.setFooter({text: `${result[2].wimps}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].wimps}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].wimps}`,
      inline: true
    },{
      name: "Deck Cost", 
      value:`${result[1].wimps}`,
      inline: true
    })
  .setColor("Random")					
  .setImage(`${result[4].wimps}`)
    const m = await message.channel.send({
      embeds: [kfish],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "meme"){
          await i.update({embeds: [memekfish], components: [memerow]});
        }
        if(value == "combo"){
          await i.update({embeds: [combookfish], components: [comborow]});
        }
        if(value == "aggro"){
          await i.update({embeds: [aggrokfish], components: [aggrorow]});
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangekfish], components: [midrangerow]});
        }
        if(value == "tempo"){
          await i.update({embeds: [tempokfish], components: [temprow]});
        }
        if(value == "budget"){
          await i.update({embeds: [budgetkfish], components: [budgetrow]});
        }
        if(value == "all"){
          await i.update({embeds: [allkfish], components: [alldecksrow]});
        }
      }
      if(i.customId == "helpmeme" || i.customId == "memehelp"){
        await i.update({embeds: [memekfish], components: [memerow]});
      }
      if(i.customId == "sl" || i.customId == "sunlord"){
        await i.update({embeds: [sunlord], components: [sl]});
      }
      if(i.customId == "pm" || i.customId == "petmop"){
        await i.update({embeds: [pmop], components: [pm]});
      }
      if(i.customId =="aggrohelp" || i.customId == "helpaggro"){
        await i.update({embeds: [aggrokfish], components: [aggrorow]});
      }
      if(i.customId == "bif" || i.customId == "budgetif"){
        await i.update({embeds: [budgetif], components: [bif]});
      }
      if(i.customId == "bif2" || i.customId == "budgetif2"){
        await i.update({embeds: [budgetif], components: [bif2]});
      }
      if(i.customId == "bbf" || i.customId == "budgetbf"){
        await i.update({embeds: [budgetbf], components: [bbf]});
      }
      if(i.customId == "helpmidrange" || i.customId == "midrangehelp"){
        await i.update({embeds: [midrangekfish], components: [midrangerow]});
      }
      if(i.customId == "sl2" || i.customId == "sunlord2"){
        await i.update({embeds: [sunlord], components: [sl2]});
      }
      if(i.customId == "pm2" || i.customId == "petmop2"){
        await i.update({embeds: [pmop], components: [pm2]});
      }
  
      if(i.customId == "helptempo" || i.customId == "tempohelp"){
        await i.update({embeds: [tempokfish], components: [temprow]});
      }
      if(i.customId == "budgk" || i.customId == "budgetgk"){
        await i.update({embeds: [budgetgk], components: [budgk]});
      }
      if(i.customId == "budgs" || i.customId == "budgetgs"){
        await i.update({embeds: [budgetgs], components: [budgs]});
      }
      if(i.customId === "budnt" || i.customId === "budgetnt"){
        await i.update({embeds: [budgetnt], components: [budnt]});
      }
      if(i.customId == "budro" || i.customId == "budgetro"){
        await i.update({embeds: [bhmr], components: [budro]});
      }
      if(i.customId == "budsb" || i.customId == "budgetsb"){
        await i.update({embeds: [budgetsb], components: [budsb]});
      }
      if(i.customId == "budsm" || i.customId == "budgetsm"){
        await i.update({embeds: [budgetsm], components: [budsm]});
      }
      if(i.customId == "budsp" || i.customId == "budgetsp"){
        await i.update({embeds: [budgetsp], components: [budsp]});
      }
      if(i.customId == "budwk" || i.customId == "budgetwk"){
        await i.update({embeds: [budgetwk], components: [budwk]});
      }
      if(i.customId == "helpbudget" || i.customId == "budgethelp"){
        await i.update({embeds: [budgetkfish], components: [budgetrow]});
      }
      if(i.customId == "budbf2" || i.customId == "budgetbf2"){
        await i.update({embeds: [budgetbf], components: [budbf2]});
      }
      if(i.customId == "budgk2"|| i.customId == "budgetgk2"){
        await i.update({embeds: [budgetgk], components: [budgk2]});
      }
      if(i.customId == "budgs2" || i.customId == "budgetgs2"){
        await i.update({embeds: [budgetgs], components: [budgs2]});
      }
      if(i.customId == "budnt2" || i.customId == "budgetnt2"){
        await i.update({embeds: [budgetnt], components: [budnt2]});
      }
      if(i.customId == "budro2" || i.customId == "budgetro2"){
        await i.update({embeds: [bhmr], components: [budro2]});
      }
      if(i.customId == "budsb2" || i.customId == "budgetsb2"){
        await i.update({embeds: [budgetsb], components: [budsb2]});
      }
      if(i.customId == "budsm2" || i.customId == "budgetsm2"){
        await i.update({embeds: [budgetsm], components: [budsm2]});
      }
      if(i.customId == "budsp2" || i.customId == "budgetsp2"){
        await i.update({embeds: [budgetsp], components: [budsp2]});
      }
      if(i.customId == "budwk2" || i.customId == "budgetwk2"){
        await i.update({embeds: [budgetwk], components: [budwk2]});
      }
      if(i.customId == "lt" || i.customId == "lunchtime"){
        await i.update({embeds: [lunchtime], components: [lt]});
      }
      if(i.customId == "smf" || i.customId == "savagemayflower"){
        await i.update({embeds: [savagemayflower], components: [smf]});
      }
      if(i.customId == "sl3" || i.customId == "sunlord3"){
        await i.update({embeds: [sunlord], components: [sl3]});
      }
      if(i.customId == "pm3" || i.customId == "petmop3"){
        await i.update({embeds: [pmop], components: [pm3]});
      }
      if(i.customId == "smf3" || i.customId == "savagemayflower3"){
        await i.update({embeds: [savagemayflower], components: [smf3]});
      }
      if(i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [allkfish], components: [alldecksrow]});
      }
      if(i.customId == "combohelp" || i.customId == "helpcombo"){
        await i.update({embeds: [combookfish], components: [comborow]});
      }
      if(i.customId == "lt2" || i.customId == "lunchtime2"){
        await i.update({embeds: [lunchtime], components: [lt2]});
      }
      if(i.customId == "smf2" || i.customId == "savagemayflower2"){
        await i.update({embeds: [savagemayflower], components: [smf2]});
      }
      if(i.customId == "bbf3" || i.customId == "budgetbf3"){
        await i.update({embeds: [budgetbf], components: [bbf3]});
      }
      if(i.customId == "bgk3" || i.customId == "budgetgk3"){
        await i.update({embeds: [budgetgk], components: [bgk3]});
      }
      if(i.customId == "bgs3" || i.customId == "budgetgs3"){
        await i.update({embeds: [budgetgs], components: [bgs3]});
      }
      if(i.customId == "bif3" || i.customId == "budgetif3"){
        await i.update({embeds: [budgetif], components: [bif3]});
      }
      if(i.customId == "bnt3" || i.customId == "budgetnt3"){
        await i.update({embeds: [budgetnt], components: [bnt3]});
      }
      if(i.customId == "bro3" || i.customId == "budgetro3"){
        await i.update({embeds: [bhmr], components: [bro3]});
      }
      if(i.customId == "bsb3" || i.customId == "budgetsb3"){
        await i.update({embeds: [budgetsb], components: [bsb3]});
      }
      if(i.customId == "bsm3" || i.customId == "budgetsm3"){
        await i.update({embeds: [budgetsm], components: [bsm3]});
      }
      if(i.customId == "bsp3" || i.customId == "budgetsp3"){
        await i.update({embeds: [budgetsp], components: [bsp3]});
      }
      if(i.customId == "bwk3" || i.customId == "budgetwk3"){
        await i.update({embeds: [budgetwk], components: [bwk3]});
      }
      if(i.customId == "lt3" || i.customId == "lunchtime3"){
        await i.update({embeds: [lunchtime], components: [lt3]});
      }
      if(i.customId == "sl4" || i.customId == "sunlord4"){
        await i.update({embeds: [sunlord], components: [sl4]});
      }
      if(i.customId == "budeb" || i.customId == "budgeteb"){
        await i.update({embeds: [budgeteb], components: [budeb]});
      }
      if(i.customId == "budeb2" || i.customId == "budgeteb2"){
        await i.update({embeds: [budgeteb], components: [budeb2]});
      }
      if(i.customId == "budeb3" || i.customId == "budgeteb3"){
        await i.update({embeds: [budgeteb], components: [budeb3]});
      }
      if(i.customId == "bpb" || i.customId == "budgetpb"){
        await i.update({embeds: [budgetpb], components: [bpb]});
      }
      if(i.customId == "bpb2" || i.customId == "budgetpb2"){
        await i.update({embeds: [budgetpb], components: [bpb2]});
      }
      if(i.customId == "bpb3" || i.customId == "budgetpb3"){
        await i.update({embeds: [budgetpb], components: [bpb3]});
      }
      if(i.customId == "bim" || i.customId == "budgetim"){
        await i.update({embeds: [budgetim], components: [bim]});
      }
      if(i.customId == "bim2" || i.customId == "budgetim2"){
        await i.update({embeds: [budgetim], components: [bim2]});
      }
      if(i.customId == "bim3" || i.customId == "budgetim3"){
        await i.update({embeds: [budgetim], components: [bim3]});
      }
      if(i.customId == "bnc" || i.customId == "budgetnc"){
        await i.update({embeds: [budgetnc], components: [bnc]});
      }
      if(i.customId == "bnc2" || i.customId == "budgetnc2"){
        await i.update({embeds: [budgetnc], components: [bnc2]});
      }
      if(i.customId == "bnc3" || i.customId == "budgetnc3"){
        await i.update({embeds: [budgetnc], components: [bnc3]});
      }
     if(i.customId == "bcc" || i.customId == "budgetcc"){
        await i.update({embeds: [budgetcc], components: [bcc]});
      }
      if(i.customId == "bcc2" || i.customId == "budgetcc2"){
        await i.update({embeds: [budgetcc], components: [bcc2]});
      }
      if(i.customId == "bcc3" || i.customId == "budgetcc3"){
        await i.update({embeds: [budgetcc], components: [bcc3]});
      }
      if(i.customId == "bzm" || i.customId == "budgetzm"){
        await i.update({embeds: [budgetzm], components: [bzm]});
      }
      if(i.customId == "bzm2" || i.customId == "budgetzm2"){
        await i.update({embeds: [budgetzm], components: [bzm2]});
      }
      if(i.customId == "bzm3" || i.customId == "budgetzm3"){
        await i.update({embeds: [budgetzm], components: [bzm3]});
      }
      if(i.customId == "bct" || i.customId == "budgetct"){
        await i.update({embeds: [budgetct], components: [bct]});
      }
      if(i.customId == "bct2" || i.customId == "budgetct2"){
        await i.update({embeds: [budgetct], components: [bct2]});
      }
      if(i.customId == "bct3" || i.customId == "budgetct3"){
        await i.update({embeds: [budgetct], components: [bct3]});
      }

    });
  },
};
