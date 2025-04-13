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
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#FFC0CB");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpim`,
  aliases: [
    `imhelp`,
    `imcommands`,
    `commandsim`,
    `helpimmort`,
    `immorticiadeck`,
    `helpimmorticia`,
    `immorticahelp`,
    `immorticiahelp`,
    `imdecks`,
    `immorticiadecks`,
    `decksim`,
    `decksimmorticia`,
  ],
  category: `Immorticia(IM)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Immorticia's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
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
          .setLabel("All Immorticia Decks")
          .setValue("all")
          .setDescription("View all the immorticia decks")
          .setEmoji("<:Immorticia_Website:1087749695322988634>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const immorticiaDecks = {
      budgetDecks: ["budgetim"],
      competitiveDecks: ["kaleidoscope"],
      ladderDecks: ["mechascope", "youngcatmartin"],
      memeDecks: ["22savage", "bastet", "rampticia", "stacheticia"],
      comboDecks: [
        "22savage",
        "bastet",
        "budgetim",
        "mechascope",
        "rampticia",
        "stacheticia",
        "youngcatmartin",
      ],
      controlDecks: ["budgetim", "kaleidoscope", "mechascope"],
      midrangeDecks: ["22savage", "bastet", "budgetim", "youngcatmartin"],
      allDecks: [
        "22savage",
        "bastet",
        "budgetim",
        "kaleidoscope",
        "mechascope",
        "rampticia",
        "stacheticia",
        "youngcatmartin",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(immorticiaDecks.allDecks);
    const toBuildLadderString = buildDeckString(immorticiaDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(immorticiaDecks.memeDecks);
    const toBuildComboString = buildDeckString(immorticiaDecks.comboDecks);
    const toBuildControlString = buildDeckString(immorticiaDecks.controlDecks);
    const toBuildMidrangeString = buildDeckString(
      immorticiaDecks.midrangeDecks
    );
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
    const alldecksrow = new CreateButtons("youngcatmartin", "sav");
    const sav = new CreateButtons("helpall", "bas");
    const bas = new CreateButtons("savage", "bim");
    const bim = new CreateButtons("bastet", "kscope");
    const kscope = new CreateButtons("budgetim", "ms");
    const ms = new CreateButtons("kaleidoscope", "rim");
    const rim = new CreateButtons("otkmecha", "stac");
    const stac = new CreateButtons("rampticia", "ycm");
    const ycm = new CreateButtons("stacheticia", "allhelp");
    const ladderrow = new CreateButtons("youngcatmartin2", "ms2");
    const ms2 = new CreateButtons("ladderhelp", "ycm2");
    const ycm2 = new CreateButtons("mechascope2", "helpladder");
    const memerow = new CreateButtons("stacheticia2", "sav2");
    const sav2 = new CreateButtons("memehelp", "bas2");
    const bas2 = new CreateButtons("savage2", "rim2");
    const rim2 = new CreateButtons("bastet2", "stac2");
    const stac2 = new CreateButtons("rampticia2", "helpmeme");
    const comborow = new CreateButtons("youngcatmartin3", "sav3");
    const sav3 = new CreateButtons("combohelp", "bas3");
    const bas3 = new CreateButtons("savage3", "bim2");
    const bim2 = new CreateButtons("bastet3", "ms3");
    const ms3 = new CreateButtons("budgetim2", "rim3");
    const rim3 = new CreateButtons("mechascope3", "stac3");
    const stac3 = new CreateButtons("rampticia3", "ycm3");
    const ycm3 = new CreateButtons("stacheticia3", "helpcombo");
    const controlrow = new CreateButtons("mechascope4", "bim3");
    const bim3 = new CreateButtons("controlhelp", "kscope2");
    const kscope2 = new CreateButtons("budgetim3", "ms4");
    const ms4 = new CreateButtons("kaleidoscope3", "helpcontrol");
    const midrangerow = new CreateButtons("youngcatmartin4", "sav4");
    const sav4 = new CreateButtons("midrangehelp", "bas4");
    const bas4 = new CreateButtons("savage4", "bim4");
    const bim4 = new CreateButtons("bastet4", "ycm4");
    const ycm4 = new CreateButtons("budgetim4", "helpmidrange");
    const alldecksEmbed = new CreateHelpEmbed(
      "Immorticia Decks",
      `My commands for Immorticia(IM) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the Immorticia decks please use the commands listed above or click on the buttons below to navigate through all Immorticia decks!
Note: Immorticia has ${immorticiaDecks.allDecks.length} total decks in Tbot`
    );
    const embed = new CreateHelpEmbed(
      "Immorticia Decks",
      `To view the Immorticia decks please select an option from the select menu below!
Note: Immorticia has ${immorticiaDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Immorticia Ladder Decks",
      `My ladder decks for Immorticia(IM) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the ladder Immorticia decks please use the commands listed above or click on the buttons below to navigate through all ladder Immorticia decks!
Note: Immorticia has ${immorticiaDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Immorticia Meme Decks",
      `My meme decks for Immorticia(IM) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the meme Immorticia decks please use the commands listed above or click on the buttons below to navigate through all meme Immorticia decks!
Note: Immorticia has ${immorticiaDecks.memeDecks.length} meme decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Immorticia Combo Decks",
      `My combo decks for Immorticia(IM) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the combo Immorticia decks please use the commands listed above or click on the buttons below to navigate through all combo Immorticia decks!
Note: Immorticia has ${immorticiaDecks.comboDecks.length} combo decks in Tbot`
    );
    const controlEmbed = new CreateHelpEmbed(
      "Immorticia Control Decks",
      `My control decks for Immorticia(IM) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the control Immorticia decks please use the commands listed above or click on the buttons below to navigate through all control Immorticia decks!
Note: Immorticia has ${immorticiaDecks.controlDecks.length} control decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Immorticia Midrange Decks",
      `My midrange decks for Immorticia(IM) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the midrange Immorticia decks please use the commands listed above or click on the buttons below to navigate through all midrange Immorticia decks!
Note: Immorticia has ${immorticiaDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM imdecks`);
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
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const savage22 = new CreateDeckEmbed(result, "savage22");
    const bastet = new CreateDeckEmbed(result, "bastet");
    const budgetim = new CreateDeckEmbed(result, "budgetim");
    const mechascope = new CreateDeckEmbed(result, "otkmecha");
    const kaleidoscope = new CreateDeckEmbed(result, "otktrickster");
    const rampticia = new CreateDeckEmbed(result, "rampticia");
    const stacheticia = new CreateDeckEmbed(result, "stacheticia");
    const youngcatmartin = new CreateDeckEmbed(result, "ycm");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetim], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.reply({
          embeds: [kaleidoscope],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
    }
    async function HandleButtonInteraction(i) {
      const buttonActions = {
        allhelp: {embed: alldecksEmbed, component: alldecksrow},
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        ladderhelp: {embed: ladderEmbed, component: ladderrow},
        helpladder: {embed: ladderEmbed, component: ladderrow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpmeme: {embed: memeEmbed, component: memerow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpcombo: {embed: comboEmbed, component: comborow},
        controlhelp: {embed: controlEmbed, component: controlrow},
        helpcontrol: {embed: controlEmbed, component: controlrow},
        midrangehelp: {embed: midrangeEmbed, component: midrangerow},
        helpmidrange: {embed: midrangeEmbed, component: midrangerow},
        bas: {embed: bastet, component: bas},
        bastet: {embed: bastet, component: bas},
        bas2: {embed: bastet, component: bas2},
        bastet2: {embed: bastet, component: bas2},
        bas3: {embed: bastet, component: bas3},
        bastet3: {embed: bastet, component: bas3},
        bas4: {embed: bastet, component: bas4},
        bastet4: {embed: bastet, component: bas4},
        bim: {embed: budgetim, component: bim},
        budgetim: {embed: budgetim, component: bim},
        bim2: {embed: budgetim, component: bim2},
        budgetim2: {embed: budgetim, component: bim2},
        bim3: {embed: budgetim, component: bim3},
        budgetim3: {embed: budgetim, component: bim3},
        bim4: {embed: budgetim, component: bim4},
        budgetim4: {embed: budgetim, component: bim4},
        kscope: {embed: kaleidoscope, component: kscope},
        kaleidoscope: {embed: kaleidoscope, component: kscope},
        kscope2: {embed: kaleidoscope, component: kscope2},
        kaleidoscope2: {embed: kaleidoscope, component: kscope2},
        rim: {embed: rampticia, component: rim},
        rampticia: {embed: rampticia, component: rim},
        rim2: {embed: rampticia, component: rim2},
        rampticia2: {embed: rampticia, component: rim2},
        rim3: {embed: rampticia, component: rim3},
        rampticia3: {embed: rampticia, component: rim3},
        sav: {embed: savage22, component: sav},
        savage: {embed: savage22, component: sav},
        sav2: {embed: savage22, component: sav2},
        savage2: {embed: savage22, component: sav2},
        sav3: {embed: savage22, component: sav3},
        savage3: {embed: savage22, component: sav3},
        sav4: {embed: savage22, component: sav4},
        savage4: {embed: savage22, component: sav4},
        stac: {embed: stacheticia, component: stac},
        stacheticia: {embed: stacheticia, component: stac},
        stac2: {embed: stacheticia, component: stac2},
        stacheticia2: {embed: stacheticia, component: stac2},
        stac3: {embed: stacheticia, component: stac3},
        stacheticia3: {embed: stacheticia, component: stac3},
        ms: {embed: mechascope, component: ms},
        mechascope: {embed: mechascope, component: ms},
        ms2: {embed: mechascope, component: ms2},
        mechascope2: {embed: mechascope, component: ms2},
        ms3: {embed: mechascope, component: ms3},
        mechascope3: {embed: mechascope, component: ms3},
        ms4: {embed: mechascope, component: ms4},
        mechascope4: {embed: mechascope, component: ms4},
        ycm: {embed: youngcatmartin, component: ycm},
        youngcatmartin: {embed: youngcatmartin, component: ycm},
        ycm2: {embed: youngcatmartin, component: ycm2},
        youngcatmartin2: {embed: youngcatmartin, component: ycm2},
        ycm3: {embed: youngcatmartin, component: ycm3},
        youngcatmartin3: {embed: youngcatmartin, component: ycm3},
        ycm4: {embed: youngcatmartin, component: ycm4},
        youngcatmartin4: {embed: youngcatmartin, component: ycm4},  
      }
      const action = buttonActions[i.customId]
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({ content: "Invalid button action!", flags: MessageFlags.Ephemeral });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
