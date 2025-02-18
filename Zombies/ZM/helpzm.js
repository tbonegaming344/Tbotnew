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
  name: `helpzm`,
  aliases: [
    `zmhelp`,
    `zmcommands`,
    `commandszm`,
    `helpzmech`,
    `zmechcommands`,
    `commandszmech`,
    `helpmech`,
    `helpzmech`,
    `zmdecks`,
    `deckszm`,
    `zmechdecks`,
    `deckszmech`,
    `zmechhelp`,
  ],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zmoss")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("br")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const br = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bzm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bzm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brady")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetzm")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("frym")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const frym = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dozzamech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sbg2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sbg2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargburn")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const tm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sbgear2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("um")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
   const um = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickmech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("zm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //ZMoss
    const zm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackamech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "binaryflagwar",
      "brady",
      "budgetzm",
      "dozzamech",
      "frymech",
      "gargburn",
      "sbg2",
      "trickmech",
      "uncrackamech",
      "zmoss",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Zmech's Decklists")
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
          .setValue("combo")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Zmech Decks")
          .setValue("all")
          .setDescription('View all Zmech decks in Tbot')
          .setEmoji("<:zmech:1088189178224853063>")
      )
    const row = new ActionRowBuilder().addComponents(select);
    let budgetdecks = [
      "budgetzm"
    ]
    const comprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sbgear22")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcomp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sbg22")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sbg22 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargburn2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("comphelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let compdecks = [
      "gargburn", 
      "sbg2"
    ]
    let toBuildCompString = "";
    for (let i = 0; i < compdecks.length; i++) {
      let deck = compdecks[i];
      toBuildCompString += `\n<@1043528908148052089> **${deck}**`;
    }
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("trickmech2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bfw2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bfw2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("br2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const br2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("binaryflagwar2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("frym2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const frym2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("brady2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("frymech2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )

    let ladderdecks = [
      "binaryflagwar",
      "brady",
      "frymech", 
      "trickmech"
    ]
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("zmoss2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("dm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const dm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("um2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const um2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("dozzamech2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("zm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const zm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("uncrackamech2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )

    let memedecks = [
      "dozzamech",
      "uncrackamech", 
      "zmoss"
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("trickmech3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bzm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bzm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("dm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const dm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetzm2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("frym3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const frym3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("dozzamech3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("frymech3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpaggro")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let aggrodecks = [
      "budgetzm", 
      "dozzamech", 
      "frymech", 
      "trickmech",
    ]
    let toBuildAggroString = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      let deck = aggrodecks[i];
      toBuildAggroString += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("zmoss3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bfw3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bfw3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("binaryflagwar3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("um3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const um3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargburn3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("zm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const zm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("uncrackamech3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let combodecks = [
      "binaryflagwar",
      "gargburn", 
      "uncrackamech", 
      "zmoss"
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    let controldecks = [
      "uncrackamech"
    ]
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sbgear23")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bfw4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bfw4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midrangehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gb4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("binaryflagwar4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sbg23")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sbg23 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargburn4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmidrange")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let midrangedecks = [
      "binaryflagwar",
      "gargburn", 
      "sbg2"
    ]
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    let tempodecks = [
      "brady"
    ]
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle("Zmech Decks")
      .setDescription(`To view the Zmech decks please select an option from the select menu below!
Note: Zmech has ${decks.length} total decks in Tbot`)
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle("Zmech Decks")
      .setDescription(`My commands for Zmech(ZM) are ${toBuildString}`)
      .setFooter({
        text: `To view the Zmech decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Zmech has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random");
      let compEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle("Zmech Competitive Decks")
      .setDescription(`My competitive decks for Zmech(ZM) are ${toBuildCompString}`)
      .setFooter({
        text: `To view the Zmech competitive decks please use the commands listed above or click on the buttons below to navigate through all competitive decks!
Note: Zmech has ${compdecks.length} competitive decks in Tbot`,
      })
      .setColor("Random");
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle("Zmech Ladder Decks")
      .setDescription(`My ladder decks for Zmech(ZM) are ${toBuildLadderString}`)
      .setFooter({
        text: `To view the Zmech ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Zmech has ${ladderdecks.length} ladder decks in Tbot`,
      })
      .setColor("Random");
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle("Zmech Meme Decks")
      .setDescription(`My meme decks for Zmech(ZM) are ${toBuildMemeString}`)
      .setFooter({
        text: `To view the Zmech meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Zmech has ${memedecks.length} meme decks in Tbot`,
      })
      .setColor("Random");
      let aggroEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle("Zmech Aggro Decks")
      .setDescription(`My aggro decks for Zmech(ZM) are ${toBuildAggroString}`)
      .setFooter({
        text: `To view the Zmech aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Zmech has ${aggrodecks.length} aggro decks in Tbot`,
      })
      .setColor("Random");
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle("Zmech Combo Decks")
      .setDescription(`My combo decks for Zmech(ZM) are ${toBuildComboString}`)
      .setFooter({
        text: `To view the Zmech combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Zmech has ${combodecks.length} combo decks in Tbot`,
      })
      .setColor("Random");
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle("Zmech Midrange Decks")
      .setDescription(`My midrange decks for Zmech(ZM) are ${toBuildMidrangeString}`)
      .setFooter({
        text: `To view the Zmech midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Zmech has ${midrangedecks.length} midrange decks in Tbot`,
      })
      .setColor("Random");
    let [result] = await db.query(`SELECT * FROM zmdecks`);
    let binaryflagwar = new EmbedBuilder()
      .setTitle(`${result[5].binaryflagwar}`)
      .setDescription(`${result[3].binaryflagwar}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].binaryflagwar}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].binaryflagwar}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].binaryflagwar}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].binaryflagwar}`,
          inline: true,
        }
      )
      .setImage(`${result[4].binaryflagwar}`);
      let brady = new EmbedBuilder()
      .setTitle(`${result[5].brady}`)
      .setDescription(`${result[3].brady}`)
      .setFooter({text: `${result[2].brady}`})
          .addFields({
            name: "Deck Type", 
            value: `${result[6].brady}`,
            inline: true
          },{
            name: "Archetype",
            value: `${result[0].brady}`,
            inline: true
          },{
            name: "Deck Cost", 
            value: `${result[1].brady}`,
            inline: true
          })
        .setColor("Random")
    .setImage(`${result[4].brady}`)
    let budgetzm = new EmbedBuilder()
      .setTitle(`${result[5].budgetzm}`)
      .setDescription(`${result[3].budgetzm}`)
      .setFooter({ text: `${result[2].budgetzm}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetzm}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetzm}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetzm}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetzm}`);
    let dozzamech = new EmbedBuilder()
      .setTitle(`${result[5].dozzamech}`)
      .setDescription(`${result[3].dozzamech}`)
      .setFooter({ text: `${result[2].dozzamech}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].dozzamech}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].dozzamech}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].dozzamech}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].dozzamech}`);
      let uncrackamech= new EmbedBuilder()
      .setTitle(`${result[5].feastmech}`)
      .setDescription(`${result[3].feastmech}`)
      .setColor("Random")
      .setImage(`${result[4].feastmech}`)
      .setFooter({ text: `${result[2].feastmech}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].feastmech}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].feastmech}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].feastmech}`,
        inline: true
      });
    let frymech = new EmbedBuilder()
      .setTitle(`${result[5].frymech}`)
      .setDescription(`${result[3].frymech}`)
      .setFooter({ text: `${result[2].frymech}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].frymech}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].frymech}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].frymech}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].frymech}`);
    let gargburn = new EmbedBuilder()
      .setTitle(`${result[5].gargburn}`)
      .setDescription(`${result[3].gargburn}`)
      .setFooter({ text: `${result[2].gargburn}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gargburn}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gargburn}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gargburn}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].gargburn}`);
      let sbgear2= new EmbedBuilder()
      .setTitle(`${result[5].sbg2}`)
      .setDescription(`${result[3].sbg2}`)
      .setFooter({text: `${result[2].sbg2}`})
                  .addFields({
                      name: "Deck Type",
                      value: `${result[6].sbg2}`,
                      inline: true
                  },{
                      name: "Archetype",
                      value: `${result[0].sbg2}`,
                      inline: true
                  },{
                      name: "Deck Cost", 
                      value: `${result[1].sbg2}`,
                      inline: true
                  })
          .setColor("Random")
          .setImage(`${result[4].sbg2}`)
      let trickmech = new EmbedBuilder()
      .setTitle(`${result[5].trickmech}`)
      .setDescription(`${result[3].trickmech}`)
      .setFooter({ text: `${result[2].trickmech}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].trickmech}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].trickmech}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].trickmech}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].trickmech}`);
    //Zmoss
    let zmoss = new EmbedBuilder()
      .setTitle(`${result[5].zmoss}`)
      .setDescription(`${result[3].zmoss}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].zmoss}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].zmoss}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].zmoss}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].zmoss}`,
          inline: true,
        }
      )
      .setImage(`${result[4].zmoss}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]});
        }
        if(value == "comp"){
          await i.update({embeds: [compEmbed], components: [comprow]});
        }
        if(value == "ladder"){
          await i.update({embeds: [ladderEmbed], components: [ladderrow]});
        }
        if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]});
        }
        if(value == "aggro"){
          await i.update({embeds: [aggroEmbed], components: [aggrorow]});
        }
        if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comborow]});
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangerow]});
        }
        if(value == "tempo"){
          await i.reply({embeds: [brady], flags: MessageFlags.Ephemeral})
        }
        if(value == "control"){
          await i.reply({embeds: [uncrackamech], flags: MessageFlags.Ephemeral})
        }
        if(value == "budget"){
          await i.reply({embeds: [budgetzm], flags: MessageFlags.Ephemeral})
        }

      }
      if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      if ( i.customId == "comphelp" || i.customId == "helpcomp") {
        await i.update({ embeds: [compEmbed], components: [comprow] });
      }
      if ( i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      if ( i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
      if ( i.customId == "aggrohelp" || i.customId == "helpaggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      }
      if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      if ( i.customId == "midrangehelp" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      if (i.customId == "bfw" || i.customId == "binaryflagwar") {
        await i.update({ embeds: [binaryflagwar], components: [bfw] });
      }
      if (i.customId == "bfw2" || i.customId == "binaryflagwar2") {
        await i.update({ embeds: [binaryflagwar], components: [bfw2] });
      }
      if (i.customId == "bfw3" || i.customId == "binaryflagwar3") {
        await i.update({ embeds: [binaryflagwar], components: [bfw3] });
      }
      if (i.customId == "bfw4" || i.customId == "binaryflagwar4") {
        await i.update({ embeds: [binaryflagwar], components: [bfw4] });
      }
      if (i.customId == "bzm" || i.customId == "budgetzm") {
        await i.update({ embeds: [budgetzm], components: [bzm] });
      }
      if (i.customId == "bzm2" || i.customId == "budgetzm2") {
        await i.update({ embeds: [budgetzm], components: [bzm2] });
      }
      if (i.customId == "dm" || i.customId == "dozzamech") {
        await i.update({ embeds: [dozzamech], components: [dm] });
      }
      if (i.customId == "dm2" || i.customId == "dozzamech2") {
        await i.update({ embeds: [dozzamech], components: [dm2] });
      }
      if (i.customId == "dm3" || i.customId == "dozzamech3") {
        await i.update({ embeds: [dozzamech], components: [dm3] });
      }
      if (i.customId == "um" || i.customId == "uncrackamech") {
        await i.update({ embeds: [uncrackamech], components: [um] });
      }
      if (i.customId == "um2" || i.customId == "uncrackamech2") {
        await i.update({ embeds: [uncrackamech], components: [um2] });
      }
      if (i.customId == "um3" || i.customId == "uncrackamech3") {
        await i.update({ embeds: [uncrackamech], components: [um3] });
      }
      if (i.customId == "frym" || i.customId == "frymech") {
        await i.update({ embeds: [frymech], components: [frym] });
      }
      if (i.customId == "frym2" || i.customId == "frymech2") {
        await i.update({ embeds: [frymech], components: [frym2] });
      }
      if (i.customId == "frym3" || i.customId == "frymech3") {
        await i.update({ embeds: [frymech], components: [frym3] });
      }
      if (i.customId == "gb" || i.customId == "gargburn") {
        await i.update({ embeds: [gargburn], components: [gb] });
      }
      if (i.customId == "gb2" || i.customId == "gargburn2") {
        await i.update({ embeds: [gargburn], components: [gb2] });
      }
      if (i.customId == "gb3" || i.customId == "gargburn3") {
        await i.update({ embeds: [gargburn], components: [gb3] });
      }
      if (i.customId == "gb4" || i.customId == "gargburn4") {
        await i.update({ embeds: [gargburn], components: [gb4] });
      }
      //Zmoss
      if (i.customId == "zm" || i.customId == "zmoss") {
        await i.update({ embeds: [zmoss], components: [zm] });
      }
      if (i.customId == "zm2" || i.customId == "zmoss2") {
        await i.update({ embeds: [zmoss], components: [zm2] });
      }
      if (i.customId == "zm3" || i.customId == "zmoss3") {
        await i.update({ embeds: [zmoss], components: [zm3] });
      }
      //Trick Mech
      if (i.customId == "tm"|| i.customId == "trickmech") {
        await i.update({ embeds: [trickmech], components: [tm] });
      }
      if (i.customId == "tm2" || i.customId == "trickmech2") {
        await i.update({ embeds: [trickmech], components: [tm2] });
      }
      if (i.customId == "tm3" || i.customId == "trickmech3") {
        await i.update({ embeds: [trickmech], components: [tm3] });
      }
      if(i.customId == "br" || i.customId == "brady") {
        await i.update({ embeds: [brady], components: [br] });
      }
      if(i.customId == "br2" || i.customId == "brady2") {
        await i.update({ embeds: [brady], components: [br2] });
      }
      if(i.customId == "sbg2" || i.customId == "sbgear2") {
        await i.update({ embeds: [sbgear2], components: [sbg2] });
      }
      if(i.customId == "sbg22" || i.customId == "sbgear22") {
        await i.update({ embeds: [sbgear2], components: [sbg22] });
      }
      if(i.customId == "sbg23" || i.customId == "sbgear23") {
        await i.update({ embeds: [sbgear2], components: [sbg23] });
      }
    });
  },
};
