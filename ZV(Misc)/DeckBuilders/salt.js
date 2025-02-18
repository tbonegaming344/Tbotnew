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
    const select =  new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Salt's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
			.setEmoji("💰"), 
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
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue("combo"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue("control"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      .setValue("midrange"),
      new StringSelectMenuOptionBuilder()
      .setLabel("All Decks")
      .setDescription('View all of Salt\'s Decks')
      .setValue("all")
    )
    const row = new ActionRowBuilder().addComponents(select);
    let comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sticia")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("apotk")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let apo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budgetykm")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    let bykm= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("apo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bustbolt")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    let bust = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bykm")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cyburn")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const cburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bust")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const gb2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gravestache")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const gstache = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargburn2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pepegasmash")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const psmash = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gstache")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sea4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("psmash")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("spacestars")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const stars = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("stacheticia")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sticia = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("stars")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );

    let combodecks = [
      "apotk",
      "budgetykm",
      "bustbolt",
      "cyburn",
      "gargburn",
      "gravestache",
      "pepegasmash",
      "seacret",
      "spacestars",
      "stacheticia",
    ]
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildCombo += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("stars2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("apotk2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const apo2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budgetykm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bykm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("apo2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cburn2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const cburn2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bykm2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("flottery")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const flottery = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cyburn2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("figlottery")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("stars2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const stars2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargburn3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmid")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks = [
      "apotk",
      "budgetykm",
      "cyburn",
      "figlottery",
      "gargburn",
      "spacestars",
    ]
    let toBuildMid = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMid += `\n<@1043528908148052089> **${deck}**`;
    }
    const competitiverow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watertron")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("apotk3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const apo3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcomp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bustbolt3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bust3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("apo3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("chemotherapy2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const chemo2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bust3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cyburn3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
   
    const cburn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("chemo2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("flottery2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const flottery2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cburn3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gb")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const gb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("figlottery2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pepegasmash3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    
    const psmash3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("radio")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const radio = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("psmash3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("seacret")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sea = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("radiotherapy")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("shamcontrol2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sham2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sea")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("spacestars3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const stars3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sham2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("uncrack2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const uncrack2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("stars3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("wt")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const wt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("uncrackabolt2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcomp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )

    let competitivedecks = [
      "apotk",
      "bustbolt",
      "chemotherapy",
      "cyburn",
      "figlottery",
      "gargburn",
      "pepegasmash",
      "radiotherapy",
      "seacret",
      "shamcontrol",
      "spacestars",
      "uncrackabolt",
      "watertron"
    ]
    let competitive = "";
    for (let i = 0; i < competitivedecks.length; i++) {
      let deck = competitivedecks[i];
      competitive += `\n<@1043528908148052089> **${deck}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watertron2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bartin")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bart = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("schoolyard2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const syard2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bart")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sea2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("syard2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("wt2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const wt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpaggro")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );

    let aggrodecks = [
      "bartin",
      "schoolyard",
      "seacret",
      "watertron"
    ]
    let toBuildAggro = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      let deck = aggrodecks[i];
     toBuildAggro += `\n<@1043528908148052089> **${deck}**`;
    }
    let budgetdecks = [
      "budgetykm",
    ]
    let controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("uncrackabolt")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bustbolt2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bust2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcontrol")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")  
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("chemotherapy")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const chemo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bust2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("npa2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const npa2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("chemo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("radio2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const radio2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("chemo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sham")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sham = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("radiotherapy2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("uncrack")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const uncrack = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("shamcontrol")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("controlhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let controldecks =[
      "bustbolt",
      "chemotherapy",
      "noplayingallowed",
      "radiotherapy",
      "shamcontrol",
      "uncrackabolt",
    ]
    let toBuildControl = "";
    for(let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControl += `\n<@1043528908148052089> **${deck}**`;
    }
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("syard")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bart2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bart2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gstache2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gstache2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bartin2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("schoolyard")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const syard = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gravestache2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let ladderdecks = [
      "bartin",
      "gravestache",
      "schoolyard",
    ]
    let toBuildLadder = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadder += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("stacheticia3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("npa")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const npa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sticia3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sticia3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("noplaingallowed")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let memedecks = [
      "noplayingallowed",
      "stacheticia",
    ]
    let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMeme += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watertron3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("apotk4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const apo4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bart3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bart3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("apo4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budgetykm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bykm3 = new ActionRowBuilder().addComponents( 
      new ButtonBuilder()
      .setCustomId("bartin3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bustbolt4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bust4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bykm3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("chemotherapy3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const chemo3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bust4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cyburn4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cburn4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("chemo3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("flottery3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const flottery3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cburn4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gb4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("figlottery3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gstache3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gstache3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargburn4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("npa3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const npa3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gravestache3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pepegasmash4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const psmash4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gravestache3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("radio3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const radio3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("psmash4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("schoolyard3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const syard3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("radiotherapy3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sea3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("schoolyard3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("shamcontrol3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sham3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("spacestars4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const stars4= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sham3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sticia2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sticia2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("stars4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("uncrack3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const uncrack3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("stacheticia2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("wt3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const wt3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("uncrackabolt3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "apotk",
      "bartin",
      "budgetykm",
      "bustbolt",
      "chemotherapy",
      "cyburn",
      "figlottery",
      "gargburn",
      "gravestache",
      "noplayingallowed",
      "pepegasmash",
      "radiotherapy",
      "schoolyard",
      "seacret",
      "shamcontrolbc",
      "spacestars",
      "stacheticia",
      "uncrackabolt",
      "watertron"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select apotk, bartin,
budgetykm, bustbolt, chemotherapy,
cyburn, gargburn, gravestache, healmidflare, noplayingallowed, 
schoolyard, seacret, shamcontrol, spacestars, stacheticia, radiotherapy, uncrackabolt, watertron
from czdecks cz 
inner join spdecks sp
on (cz.deckinfo = sp.deckinfo)
inner join imdecks im 
on (cz.deckinfo = im.deckinfo)
inner join hgdecks hg
on (cz.deckinfo = hg.deckinfo)
inner join rbdecks rb 
on (cz.deckinfo = rb.deckinfo)
inner join ncdecks nc
on (cz.deckinfo = nc.deckinfo)
inner join ebdecks eb 
on (cz.deckinfo = eb.deckinfo)
inner join wkdecks wk 
on (cz.deckinfo = wk.deckinfo)
inner join zmdecks zm 
on (cz.deckinfo = zm.deckinfo)
inner join bcdecks bc 
on (cz.deckinfo = bc.deckinfo)
inner join ifdecks fi
on (cz.deckinfo = fi.deckinfo)
inner join ctdecks ct 
on (cz.deckinfo = ct.deckinfo)
inner join sfdecks sf
on (cz.deckinfo = sf.deckinfo)`);
    let user = await client.users.fetch("599750713509281792");
    let salt = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combosalt = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My commands for combo decks made by ${user.displayName} are ${toBuildCombo}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let midsalt = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My commands for midrange decks made by ${user.displayName} are ${toBuildMid}`
      )
      .setFooter({
        text: `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${midrangedecks.length} midrange decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let compsalt = new EmbedBuilder()
      .setTitle(`${user.displayName} Competitive Decks`)
      .setDescription(
        `My commands for competitive decks made by ${user.displayName} are ${competitive}`
      )
      .setFooter({
        text: `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${competitivedecks.length} competitive decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let aggrosalt = new EmbedBuilder()
      .setTitle(`${user.displayName} Aggro Decks`)
      .setDescription(
        `My commands for aggro decks made by ${user.displayName} are ${toBuildAggro}`
      )
      .setFooter({
        text: `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${aggrodecks.length} aggro decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let memesalt = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My commands for meme decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} meme decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let controlsalt = new EmbedBuilder()
      .setTitle(`${user.displayName} Control Decks`)
      .setDescription(
        `My commands for control decks made by ${user.displayName} are ${toBuildControl}`
      )
      .setFooter({
        text: `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${controldecks.length} control decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let laddersalt = new EmbedBuilder()
      .setTitle(`${user.displayName} Ladder Decks`)
      .setDescription(
        `My commands for ladder decks made by ${user.displayName} are ${toBuildLadder}`
      )
      .setFooter({
        text: `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${ladderdecks.length} ladder decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let apotk = new EmbedBuilder()
    .setTitle(`${result[5].apotk}`)
    .setDescription(`${result[3].apotk}`)
    .setFooter({text: `${result[2].apotk}`})
        .addFields(
          {
          name: "Deck Type",
          value: `${result[6].apotk}`,
          inline: true
          },
          {
          name: "Archetype",
          value: `${result[0].apotk}`,
          inline: true
          },
          {
          name: "Deck Cost", 
          value:`${result[1].apotk}`,
          inline: true
        })
      .setColor("Random")		
      .setImage(`${result[4].apotk}`)
    // Bartin
    let bartin = new EmbedBuilder()
    .setTitle(`${result[5].bartin}`)
    .setDescription(`${result[3].bartin}`)
    .setFooter({ text: `${result[2].bartin}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].bartin}`,
      inline: true,
    },
    {
      name: "Archetype",
      value: `${result[0].bartin}`,
      inline: true,
    },{ 
      name: "Deck Cost", 
      value: `${result[1].bartin}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].bartin}`);
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
    let budgetykm= new EmbedBuilder()
    .setTitle(`${result[5].budgetykm}`)
    .setDescription(`${result[3].budgetykm}`)
    .setFooter({ text: `${result[2].budgetykm}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].budgetykm}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].budgetykm}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].budgetykm}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].budgetykm}`);
    let chemotherapy = new EmbedBuilder()
    .setTitle(`${result[5].chemotherapy}`)
		.setDescription(`${result[3].chemotherapy}`)
		.setFooter({text: `${result[2].chemotherapy}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].chemotherapy}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].chemotherapy}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].chemotherapy}`,
			inline: true
		})
		.setColor("Random")
		.setImage(`${result[4].chemotherapy}`)
    let cyburn = new EmbedBuilder()
    .setTitle(`${result[5].cyburn}`)
    .setDescription(`${result[3].cyburn}`)
    .setFooter({ text: `${result[2].cyburn}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].cyburn}`,
      inline: true
    },
      {
      name: "Archetype",
      value: `${result[0].cyburn}`,
      inline: true
    },
      { 
      name: "Deck Cost", 
      value: `${result[1].cyburn}`,
      inline: true})
    .setColor("Random")
    .setImage(`${result[4].cyburn}`);
    let gargburn = new EmbedBuilder()
      .setTitle(`${result[5].gargburn}`)
      .setDescription(`${result[3].gargburn}`)
      .setFooter({ text: `${result[2].gargburn}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].gargburn}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].gargburn}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].gargburn}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].gargburn}`);
    let gravestache = new EmbedBuilder()
    .setTitle(`${result[5].gravestache}`)
    .setDescription(`${result[3].gravestache}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].gravestache}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].gravestache}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].gravestache}`,
      inline: true
    })
    .setFooter({ text: `${result[2].gravestache}` })
    .setColor("Random")
    .setImage(`${result[4].gravestache}`);
    //Heal Midflare
    let figlottery = new EmbedBuilder()
    .setTitle(`${result[5].healmidflare}`)
    .setDescription(`${result[3].healmidflare}`)
    .setFooter({ text: `${result[2].healmidflare}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].healmidflare}`,
      inline: true,
    },
    {
      name: "Archetype",
      value: `${result[0].healmidflare}`,
      inline: true,
    },{ 
      name: "Deck Cost", 
      value: `${result[1].healmidflare}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].healmidflare}`);
    let noplaingallowed = new EmbedBuilder()
	.setTitle(`${result[5].noplayingallowed}`)
	.setDescription(`${result[3].noplayingallowed}`)
	.setFooter({text: `${result[2].noplayingallowed}`})
				.addFields({
					name: "Deck Type",
					value: `${result[6].noplayingallowed}`,
					inline: true
				},{
					name: "Archetype",
					value: `${result[0].noplayingallowed}`,
					inline: true
				},{
					name: "Deck Cost", 
					value: `${result[1].noplayingallowed}`,
					inline: true
				})
		.setColor("Random")
		.setImage(`${result[4].noplayingallowed}`)
    let radiotherapy = new EmbedBuilder()
    .setTitle(`${result[5].radiotherapy}`)
    .setDescription(`${result[3].radiotherapy}`)
    .setFooter({text: `${result[2].radiotherapy}`})
    .addFields({
        name: "Deck Type",
        value: `${result[6].radiotherapy}`,
        inline: true
    },{
        name: "Archetype",
        value: `${result[0].radiotherapy}`,
        inline: true
    },{
        name: "Deck Cost", 
        value: `${result[1].radiotherapy}`,
        inline: true
    })	
    .setImage(`${result[4].radiotherapy}`)
    let schoolyard = new EmbedBuilder()
    .setTitle(`${result[5].schoolyard}`)
    .setDescription(`${result[3].schoolyard}`)
    .setFooter({ text: `${result[2].schoolyard}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].schoolyard}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].schoolyard}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].schoolyard}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].schoolyard}`);
    //Seacret
    let seacret = new EmbedBuilder()
    .setTitle(`${result[5].seacret}`)
		.setDescription(`${result[3].seacret}`)
		.setColor("Random")
		.setFooter({text: `${result[2].seacret}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].seacret}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].seacret}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].seacret}`,
			inline: true
		})		
		.setImage(`${result[4].seacret}`)
    let shamcontrol = new EmbedBuilder()
    .setTitle(`${result[5].shamcontrol}`)
      .setDescription(`${result[3].shamcontrol}`)
      .setFooter({ text: `${result[2].shamcontrol}` })
      .addFields({ 
        name: "Deck Type",
        value: `${result[6].shamcontrol}`,
        inline: true,   
      },
      {
        name: "Archetype",
        value: `${result[0].shamcontrol}`,
        inline: true
      },
      {
        name: "Deck Cost", 
        value: `${result[1].shamcontrol}`,
        inline: true,
      })
      .setColor("Random")
      .setImage(`${result[4].shamcontrol}`);
    let spacestars = new EmbedBuilder()
    .setTitle(`${result[5].spacestars}`)
    .setDescription(`${result[3].spacestars}`)
    .setFooter({ text: `${result[2].spacestars}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].spacestars}`,
      inline: true
    },{ 
      name: "Archetype", 
      value: `${result[0].spacestars}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].spacestars}`,
      inline: true  
    })
    .setColor("Random")
    .setImage(`${result[4].spacestars}`);
    let stacheticia = new EmbedBuilder()
    .setTitle(`${result[5].stacheticia}`)
		.setDescription(`${result[3].stacheticia}`)
		.setColor("Random")
		.addFields({
			name: "Deck Type",
			value: `${result[6].stacheticia}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].stacheticia}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].stacheticia}`,
			inline: true
		})
		.setFooter({text: `${result[2].stacheticia}`})
		.setImage(`${result[4].stacheticia}`)
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
  let watertron = new EmbedBuilder()
  .setTitle(`${result[5].watertron}`)
  .setDescription(`${result[3].watertron}`)
  .setFooter({ text: `${result[2].watertron}` })
  .addFields({
    name: "Deck Type",
    value: `${result[6].watertron}`,
    inline: true
  },
  {
    name: "Archetype",
    value: `${result[0].watertron}`,
    inline: true
  },
  { name: "Deck Cost",
    value: `${result[1].watertron}`,
    inline: true
  })
  .setImage(`${result[4].watertron}`)
  .setColor("Random");
    const m = await message.channel.send({ embeds: [salt], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "budget"){
          await i.reply({embeds: [budgetykm], flags: MessageFlags.Ephemeral})
        }
        if(value == "control"){
          await i.update({embeds: [controlsalt], components: [controlrow]});
        }
        if(value == "combo"){
          await i.update({embeds: [combosalt], components: [comborow]});
        }
        if(value == "comp"){
          await i.update({embeds: [compsalt], components: [competitiverow]});
        }
        if(value == "aggro"){
          await i.update({embeds: [aggrosalt], components: [aggrorow]});
        }
        if(value == "ladder"){
          await i.update({embeds: [laddersalt], components: [ladderrow]});
        }
        if(value == "midrange"){
          await i.update({embeds: [midsalt], components: [midrangerow]});
        }
        if(value == "meme"){
          await i.update({embeds: [memesalt], components: [memerow]});
        }
        if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]});
        }
      }
      if(i.customId == "combohelp" || i.customId == "helpcombo"){
        await i.update({embeds: [combosalt], components: [comborow]})
      }
      if(i.customId == "controlhelp" || i.customId == "helpcontrol"){
        await i.update({embeds: [controlsalt], components: [controlrow]})
      }
      if(i.customId == "memehelp" || i.customId == "helpmeme"){
        await i.update({embeds: [memesalt], components: [memerow]})
      }
      if(i.customId == "midhelp" || i.customId == "helpmid"){
        await i.update({embeds: [midsalt], components: [midrangerow]})
      }
      if(i.customId == "aggrohelp" || i.customId == "helpaggro"){
        await i.update({embeds: [aggrosalt], components: [aggrorow]})
      }
      if(i.customId == "ladderhelp" || i.customId == "helpladder"){
        await i.update({embeds: [laddersalt], components: [ladderrow]})
      }
      if(i.customId == "comphelp" || i.customId == "helpcomp"){
        await i.update({embeds: [compsalt], components: [competitiverow]})
      }
      if(i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
        if(i.customId == "apo" || i.customId == "apotk"){
          await i.update({embeds: [apotk], components: [apo]})
        }
        if(i.customId == "apo2" || i.customId == "apotk2"){
          await i.update({embeds: [apotk], components: [apo2]})
        }
        if(i.customId == "apo3" || i.customId == "apotk3"){
          await i.update({embeds: [apotk], components: [apo3]})
        }
        if(i.customId == "apo4" || i.customId == "apotk4"){
          await i.update({embeds: [apotk], components: [apo4]})
        }
        if(i.customId == "bykm" || i.customId == "budgetykm"){
          await i.update({embeds: [budgetykm], components: [bykm]})
        }
        if(i.customId == "bykm2" || i.customId == "budgetykm2"){
          await i.update({embeds: [budgetykm], components: [bykm2]})
        }
        if(i.customId == "bykm3" || i.customId == "budgetykm3"){
          await i.update({embeds: [budgetykm], components: [bykm3]})
        }
        if(i.customId == "bust" || i.customId == "bustbolt"){
          await i.update({embeds: [bustbolt], components: [bust]})
        }
        if(i.customId == "bust2" || i.customId == "bustbolt2"){
          await i.update({embeds: [bustbolt], components: [bust2]})
        }
        if(i.customId == "bust3" || i.customId == "bustbolt3"){
          await i.update({embeds: [bustbolt], components: [bust3]})
        }
        if(i.customId == "bust4" || i.customId == "bustbolt4"){
          await i.update({embeds: [bustbolt], components: [bust4]})
        }
        if(i.customId == "cburn" || i.customId == "cyburn"){
          await i.update({embeds: [cyburn], components: [cburn]})
        }
        if(i.customId == "cburn2" || i.customId == "cyburn2"){
          await i.update({embeds: [cyburn], components: [cburn2]})
        }
        if(i.customId == "cburn3" || i.customId == "cyburn3"){
          await i.update({embeds: [cyburn], components: [cburn3]})
        }
        if(i.customId == "cburn4" || i.customId == "cyburn4"){
          await i.update({embeds: [cyburn], components: [cburn4]})
        }
        if(i.customId == "gb" || i.csutomId == "gargburn"){
          await i.update({embeds: [gargburn], components: [gb]})
        }
        if(i.customId == "gb2" || i.customId == "gargburn2"){
          await i.update({embeds: [gargburn], components: [gb2]})
        }
        if(i.customId == "gb3" || i.customId == "gargburn3"){
          await i.update({embeds: [gargburn], components: [gb3]})
        }
        if(i.customId == "gb4" || i.customId == "gargburn4"){
          await i.update({embeds: [gargburn], components: [gb4]})
        }
        if(i.customId == "gstache" || i.customId == "gravestache"){
          await i.update({embeds: [gravestache], components: [gstache]})
        }
        if(i.customId == "gstache2" || i.customId == "gravestache2"){
          await i.update({embeds: [gravestache], components: [gstache2]})
        }
        if(i.customId == "gstache3" || i.customId == "gravestache3"){
          await i.update({embeds: [gravestache], components: [gstache3]})
        }
        if(i.customId == "stars" || i.customId == "spacestars"){
          await i.update({embeds: [spacestars], components: [stars]})
        }
        if(i.customId == "stars2" || i.customId == "spacestars2"){
          await i.update({embeds: [spacestars], components: [stars2]})
        }
        if(i.customId == "stars3" || i.customId == "spacestars3"){
          await i.update({embeds: [spacestars], components: [stars3]})
        }
        if(i.customId == "stars4" || i.customId == "spacestars4"){
          await i.update({embeds: [spacestars], components: [stars4]})
        }
        if(i.customId == "sticia" || i.customId == "stacheticia"){
          await i.update({embeds: [stacheticia], components: [sticia]})
        }
        if(i.customId == "sticia2" || i.customId == "stacheticia2"){
          await i.update({embeds: [stacheticia], components: [sticia2]})
        }
        if(i.customId == "sticia3" || i.customId == "stacheticia3"){
          await i.update({embeds: [stacheticia], components: [sticia3]})
        }
        if(i.customId == "chemo" || i.customId == "chemotherapy"){
          await i.update({embeds: [chemotherapy], components: [chemo]})
        }
        if(i.customId == "chemo2" || i.customId == "chemotherapy2"){
          await i.update({embeds: [chemotherapy], components: [chemo2]})
        }
        if(i.customId == "chemo3" || i.customId == "chemotherapy3"){
          await i.update({embeds: [chemotherapy], components: [chemo3]})
        }
        if(i.customId == "sea" || i.customId == "seacret"){
          await i.update({embeds: [seacret], components: [sea]})
        }
        if(i.customId == "sea2" || i.customId == "seacret2"){
          await i.update({embeds: [seacret], components: [sea2]})
        }
        if(i.customId == "sea3" || i.customId == "seacret3"){
          await i.update({embeds: [seacret], components: [sea3]})
        }
        if(i.customId == "sea4" || i.customId == "seacret4"){
          await i.update({embeds: [seacret], components: [sea4]})
        }
        if(i.customId == "sham" || i.customId == "shamcontrol"){
          await i.update({embeds: [shamcontrol], components: [sham]})
        }
        if(i.customId == "sham2" || i.customId == "shamcontrol2"){
          await i.update({embeds: [shamcontrol], components: [sham2]})
        }
        if(i.customId == "sham3" || i.customId == "shamcontrol3"){
          await i.update({embeds: [shamcontrol], components: [sham3]})
        }
        if(i.customId == "uncrack" || i.customId == "uncrackabolt"){
          await i.update({embeds: [uncrackabolt], components: [uncrack]})
        }
        if(i.customId == "uncrack2" || i.customId == "uncrackabolt2"){
          await i.update({embeds: [uncrackabolt], components: [uncrack2]})
        }
        if(i.customId == "uncrack3" || i.customId == "uncrackabolt3"){
          await i.update({embeds: [uncrackabolt], components: [uncrack3]})
        }
        if(i.customId == "wt" || i.customId == "watertron"){
          await i.update({embeds: [watertron], components: [wt]})
        }
        if(i.customId == "wt2" || i.customId == "watertron2"){
          await i.update({embeds: [watertron], components: [wt2]})
        }
        if(i.customId == "wt3" || i.customId == "watertron3"){
          await i.update({embeds: [watertron], components: [wt3]})
        }
        if(i.customId == "bart" || i.customId == "bartin"){
          await i.update({embeds: [bartin], components: [bart]})
        }
        if(i.customId == "bart2" || i.customId == "bartin2"){
          await i.update({embeds: [bartin], components: [bart2]})
        }
        if(i.customId == "bart3" || i.customId == "bartin3"){
          await i.update({embeds: [bartin], components: [bart3]})
        }
        if(i.customId == "syard" || i.customId == "schoolyard"){
          await i.update({embeds: [schoolyard], components: [syard]})
        }
        if(i.customId == "syard2" || i.customId == "schoolyard2"){
          await i.update({embeds: [schoolyard], components: [syard2]})
        }
        if(i.customId == "syard3" || i.customId == "schoolyard3"){
          await i.update({embeds: [schoolyard], components: [syard3]})
        }
        if(i.customId == "flottery" || i.customId == "figlottery"){
          await i.update({embeds: [figlottery], components: [flottery]})
        }
        if(i.customId == "flottery2" || i.customId == "figlottery2"){
          await i.update({embeds: [figlottery], components: [flottery2]})
        }
        if(i.customId == "flottery3" || i.customId == "figlottery3"){
          await i.update({embeds: [figlottery], components: [flottery3]})
        }
        if(i.customId == "radio" || i.customId == "radiotherapy"){
          await i.update({embeds: [radiotherapy], components: [radio]})
        }
        if(i.customId == "radio2" || i.customId == "radiotherapy2"){
          await i.update({embeds: [radiotherapy], components: [radio2]})
        }
        if(i.customId == "radio3" || i.customId == "radiotherapy3"){
          await i.update({embeds: [radiotherapy], components: [radio3]})
        }
        if(i.customId == "npa" || i.customId == "noplaingallowed"){
          await i.update({embeds: [noplaingallowed], components: [npa]})
        }
        if(i.customId == "npa2" || i.customId == "noplaingallowed2"){
          await i.update({embeds: [noplaingallowed], components: [npa2]})
        }
        if(i.customId == "npa3" || i.customId == "noplaingallowed3"){
          await i.update({embeds: [noplaingallowed], components: [npa3]})
        }
    });
  }
}