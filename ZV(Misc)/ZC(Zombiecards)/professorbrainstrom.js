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
  name: `professorbrainstorm`,
  aliases: [`pb`, `pbs`, `professor`, `brainstorm`, `prof`, `bs`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helppb")
        .setLabel("Professor Brainstorm Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:HD_ProfessorBrainstorm:1088083603918958682>")
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Brainstorm's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("A deck that is cheap for new players")
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
          .setLabel("All Brainstorm Decks")
          .setValue("all")
          .setDescription("View all the Brainstorm decks")
          .setEmoji("<:HD_ProfessorBrainstorm:1088083603918958682>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const professorBrainstormDecks = {
      budgetDecks: ["budgetpb"],
      competitiveDecks: ["trickstache"],
      ladderDecks: ["professorpackage", "valkster"],
      memeDecks: ["bonusducks", "congabait", "pbfeast", "youngeggmartin"],
      aggroDecks: ["budgetpb"],
      comboDecks: [
        "bonusducks",
        "congabait",
        "trickstache",
        "valkster",
        "youngeggmartin",
      ],
      controlDecks: ["bonusducks", "pbfeast"],
      midrangeDecks: ["congabait", "trickstache", "valkster"],
      tempoDecks: ["professorpackage"],
      allDecks: [
        "bonusducks",
        "budgetpb",
        "congabait",
        "pbfeast",
        "professorpackage",
        "trickstache",
        "valkster",
        "youngeggmartin",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(professorBrainstormDecks.allDecks);
    const toBuildLadderString = buildDeckString(
      professorBrainstormDecks.ladderDecks
    );
    const toBuildMemeString = buildDeckString(
      professorBrainstormDecks.memeDecks
    );
    const toBuildComboString = buildDeckString(
      professorBrainstormDecks.comboDecks
    );
    const toBuildControlString = buildDeckString(
      professorBrainstormDecks.controlDecks
    );
    const toBuildMidrangeString = buildDeckString(
      professorBrainstormDecks.midrangeDecks
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
    const alldecksrow = new CreateButtons("youngeggmartin", "bd");
    const bd = new CreateButtons("helpall", "bpb");
    const bpb = new CreateButtons("bonusducks", "cb");
    const cb = new CreateButtons("budgetpb", "pbf");
    const pbf = new CreateButtons("congabait", "pa");
    const pa = new CreateButtons("pbfeast", "ts");
    const ts = new CreateButtons("package", "valk");
    const valk = new CreateButtons("trickstache", "yem");
    const yem = new CreateButtons("valkster", "allhelp");
    const ladderrow = new CreateButtons("valkster2", "pa2");
    const pa2 = new CreateButtons("helpladder", "valk2");
    const valk2 = new CreateButtons("package2", "ladderhelp");
    const memerow = new CreateButtons("youngeggmartin2", "bd2");
    const bd2 = new CreateButtons("helpmeme", "cb2");
    const cb2 = new CreateButtons("bonusducks2", "pbf2");
    const pbf2 = new CreateButtons("congabait2", "yem2");
    const yem2 = new CreateButtons("pbfeast2", "memehelp");
    const comborow = new CreateButtons("youngeggmartin3", "bd3");
    const bd3 = new CreateButtons("helpcombo", "cb3");
    const cb3 = new CreateButtons("bonusducks3", "ts2");
    const ts2 = new CreateButtons("congabait3", "valk3");
    const valk3 = new CreateButtons("trickstache2", "yem3");
    const yem3 = new CreateButtons("valkster3", "combohelp");
    const controlrow = new CreateButtons("pbfeast3", "bd4");
    const bd4 = new CreateButtons("helpcontrol", "pbf3");
    const pbf3 = new CreateButtons("bonusducks4", "controlhelp");
    const midrangerow = new CreateButtons("valkster4", "cb4");
    const cb4 = new CreateButtons("helpmid", "ts3");
    const ts3 = new CreateButtons("congabait4", "valk4");
    const valk4 = new CreateButtons("trickstache3", "midhelp");
    const embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle(
        "Professor Brainstorm | <:Brainy:1062500939908530246><:Crazy:1062502046474973224>"
      )
      .setDescription("**\\- Mustache Science Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Summoning <:Brainy:1062500939908530246> \n Make a random Zombie that costs 2<:Brainz:1062503146745774183> or less. \n Telepathy <:Brainy:1062500939908530246> \n Draw 2 cards. \n Dance Off <:Crazy:1062502046474973224> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Backup Dancers in a lne of your choice. Then another appears in a random lanes. \n Eureka <:Brainy:1062500939908530246><:Crazy:1062502046474973224> \n __Conjure__ any three cards.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "His countless years of research revealed that E=MCraaazy!",
        }
      )
      .setColor("#FFC0CB");
    const alldecksEmbed = new CreateHelpEmbed(
      "Professor Brainstorm Decks",
      `My commands for Professor Brainstorm(PB) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.allDecks.length} total decks in Tbot`
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Professor Brainstorm Ladder Decks",
      `My ladder commands for Professor Brainstorm(PB) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Professor Brainstorm Meme Decks",
      `My meme commands for Professor Brainstorm(PB) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.memeDecks.length} meme decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Professor Brainstorm Combo Decks",
      `My combo commands for Professor Brainstorm(PB) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.comboDecks.length} combo decks in Tbot`
    );
    const controlEmbed = new CreateHelpEmbed(
      "Professor Brainstorm Control Decks",
      `My control commands for Professor Brainstorm(PB) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.controlDecks.length} control decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Professor Brainstorm Midrange Decks",
      `My midrange commands for Professor Brainstorm(PB) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const helppb = new CreateHelpEmbed(
      "Professor Brainstorm Decks",
      `To view the Professor Brainstrom decks please select an option from the select menu below!
Note: Professor Brainstorm has ${professorBrainstormDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
    );
    const [result] = await db.query(`select * from pbdecks`);
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
        .setColor("Purple");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const bonusducks = new CreateDeckEmbed(result, "bonusducks");
    const budgetpb = new CreateDeckEmbed(result, "budgetpb");
    const congabait = new CreateDeckEmbed(result, "congabait");
    const pbfeast = new CreateDeckEmbed(result, "pbfeast");
    const professorpackage = new CreateDeckEmbed(result, "professorpackage");
    const trickstache = new CreateDeckEmbed(result, "trickstache");
    const valkster = new CreateDeckEmbed(result, "valkster");
    const youngeggmartin = new CreateDeckEmbed(result, "youngeggmartin");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "comp") {
        await i.reply({ embeds: [trickstache], flags: MessageFlags.Ephemeral });
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
      } else if (value == "tempo") {
        await i.reply({
          embeds: [professorpackage],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "budget" || value == "aggro") {
        await i.reply({ embeds: [budgetpb], flags: MessageFlags.Ephemeral });
      }
    }
    async function HandleButtonInteraction(i) {
      const buttonActions = {
        helppb: { embed: helppb, component: row },
        allhelp: {embed: alldecksEmbed, component: alldecksrow},
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        ladderhelp: {embed: ladderEmbed, component: ladderrow},
        helpladder: {embed: ladderEmbed, component: ladderrow},
        helpmeme: {embed: memeEmbed, component: memerow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpcombo: {embed: comboEmbed, component: comborow},
        helpcontrol: {embed: controlEmbed, component: controlrow},
        helpmid: {embed: midrangeEmbed, component: midrangerow},
        midhelp: {embed: midrangeEmbed, component: midrangerow},
        bd: {embed: bonusducks, component: bd},
        bonusducks: {embed: bonusducks, component: bd},
        bd2: {embed: bonusducks, component: bd2},
        bonusducks2: {embed: bonusducks, component: bd2},
        bd3: {embed: bonusducks, component: bd3},
        bonusducks3: {embed: bonusducks, component: bd3},
        bd4: {embed: bonusducks, component: bd4},
        bonusducks4: {embed: bonusducks, component: bd4},
        bpb: {embed: budgetpb, component: bpb},
        budgetpb: {embed: budgetpb, component: bpb},
        cb: {embed: congabait, component: cb},
        congabait: {embed: congabait, component: cb},
        cb2: {embed: congabait, component: cb2},
        congabait2: {embed: congabait, component: cb2},
        cb3: {embed: congabait, component: cb3},
        congabait3: {embed: congabait, component: cb3},
        cb4: {embed: congabait, component: cb4},
        congabait4: {embed: congabait, component: cb4},
        pa: {embed: professorpackage, component: pa},
        professorpackage: {embed: professorpackage, component: pa},
        pa2: {embed: professorpackage, component: pa2},
        professorpackage2: {embed: professorpackage, component: pa2},
        pbf: {embed: pbfeast, component: pbf},
        pbfeast: {embed: pbfeast, component: pbf},
        pbf2: {embed: pbfeast, component: pbf2},
        pbfeast2: {embed: pbfeast, component: pbf2},
        pbf3: {embed: pbfeast, component: pbf3},
        pbfeast3: {embed: pbfeast, component: pbf3},
        ts: {embed: trickstache, component: ts},
        trickstache: {embed: trickstache, component: ts},
        ts2: {embed: trickstache, component: ts2},
        trickstache2: {embed: trickstache, component: ts2},
        ts3: {embed: trickstache, component: ts3},
        trickstache3: {embed: trickstache, component: ts3},
        valk: {embed: valkster, component: valk},
        valkster: {embed: valkster, component: valk},
        valk2: {embed: valkster, component: valk2},
        valkster2: {embed: valkster, component: valk2},
        valk3: {embed: valkster, component: valk3},
        valkster3: {embed: valkster, component: valk3},
        valk4: {embed: valkster, component: valk4},
        valkster4: {embed: valkster, component: valk4},
        yem: {embed: youngeggmartin, component: yem},
        youngeggmartin: {embed: youngeggmartin, component: yem},
        yem2: {embed: youngeggmartin, component: yem2},
        youngeggmartin2: {embed: youngeggmartin, component: yem2},
        yem3: {embed: youngeggmartin, component: yem3},
        youngeggmartin3: {embed: youngeggmartin, component: yem3},
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
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
