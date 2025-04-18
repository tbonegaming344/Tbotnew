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
    .setColor("Green");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpgs`,
  aliases: [
    `gscommands`,
    `commandsforgs`,
    `gshelp`,
    `helpgreen`,
    `helpshadow`,
    `gsdecks`,
    `decksgs`,
    `greenshadowhelp`,
    `shadowhelp`,
    `shadowdecks`,
    `greenshadowdecks`,
  ],
  category: `Green Shadow(GS)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Green Shadow's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Plant Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the Best  Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
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
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Green Shadow Decks")
          .setValue("all")
          .setDescription("View All Green Shadow Decks")
          .setEmoji("<a:GreenShadow:1100168011270328390>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const greenShadowDecks = {
      budgetDecks: ["budgetmopshadow"],
      competitiveDecks: ["abeans"],
      ladderDecks: ["pbeans"],
      memeDecks: ["100%winrate", "savagemayflower", "starrings"],
      aggroDecks: ["abeans", "pbeans"],
      comboDecks: ["savagemayflower", "starrings"],
      midrangeDecks: ["budgetmopshadow", "starrings"],
      tempoDecks: ["100%winrate"],
      allDecks: [
        "100%winrate",
        "abeans",
        "budgetmopshadow",
        "pbeans",
        "savagemayflower",
        "starrings",
      ],
    };
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

    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = BuildDeckString(greenShadowDecks.allDecks);
    const toBuildAggroString = BuildDeckString(greenShadowDecks.aggroDecks);
    const toBuildMemeString = BuildDeckString(greenShadowDecks.memeDecks);
    const toBuildComboString = BuildDeckString(greenShadowDecks.comboDecks);
    const toBuildMidrangeString = BuildDeckString(greenShadowDecks.midrangeDecks);
    const memerow = CreateButtons("starrings", "wr100");
    const wr100 = CreateButtons("helpmeme", "smf");
    const smf = CreateButtons("winrate100", "srings");
    const srings = CreateButtons("savagemayflower", "memehelp");
    const comborow = CreateButtons("starrings2", "smf2");
    const smf2 = CreateButtons("helpcombo", "srings2");
    const srings2 = CreateButtons("savagemayflower2", "combohelp");
    const midrangerow = CreateButtons("starrings3", "bms");
    const bms = CreateButtons("helpmidrange", "srings3");
    const srings3 = CreateButtons("budgetmopshadow", "midrangehelp");
    const aggrorow = CreateButtons("pbeans", "ab2");
    const ab2 = CreateButtons("aggrohelp", "pb");
    const pb = CreateButtons("abeans2", "helpaggro");
    const alldecksrow = CreateButtons("starrings4", "wr1002");
    const wr1002 = CreateButtons("helpall", "ab");
    const ab = CreateButtons("winrate1002", "bms2");
    const bms2 = CreateButtons("ab", "pb2");
    const pb2 = CreateButtons("budgetmopshadow2", "smf3");
    const smf3 = CreateButtons("pbeans2", "srings4");
    const srings4 = CreateButtons("savagemayflower3", "allhelp");
    const embed = new CreateHelpEmbed(
      "Green Shadow Decks",
      `To view the Green Shadow decks please select an option using the select menu below
Note: Green Shadow has ${greenShadowDecks.allDecks.length} decks in Tbot`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png"
    );
    const allEmbed = new CreateHelpEmbed(
      "Green Shadow Decks",
      `My decks for Green Shadow(GS) are ${toBuildString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
      `To view the Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Green Shadow has ${greenShadowDecks.allDecks.length} decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Green Shadow Meme Decks",
      `My meme decks for Green Shadow(GS) are ${toBuildMemeString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
      `To view the meme Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Green Shadow has ${greenShadowDecks.memeDecks.length} meme decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Green Shadow Aggro Decks",
      `My aggro decks for Green Shadow(GS) are ${toBuildAggroString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
      `To view the aggro Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Green Shadow has ${greenShadowDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Green Shadow Combo Decks",
      `My combo decks for Green Shadow(GS) are ${toBuildComboString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
      `To view the combo Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Green Shadow has ${greenShadowDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Green Shadow Midrange Decks",
      `My midrange decks for Green Shadow(GS) are ${toBuildMidrangeString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
      `To view the midrange Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Green Shadow has ${greenShadowDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from gsdecks`);
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
        .setColor("White");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const winrate100 = new CreateDeckEmbed(result, "wr100");
    const abeans = new CreateDeckEmbed(result, "abeans");
    const budgetgs = new CreateDeckEmbed(result, "budgetgs");
    const savagemayflower = new CreateDeckEmbed(result, "savagemayflower");
    const starrings = new CreateDeckEmbed(result, "sovietonion");
    const pbeans = new CreateDeckEmbed(result, "pbeans");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const Filter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({ embeds: [budgetgs], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.reply({ embeds: [abeans], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.reply({ embeds: [pbeans], flags: MessageFlags.Ephemeral });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({embeds: [winrate100], flags: MessageFlags.Ephemeral});
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    async function HandleButtonInteraction(i) {
      const buttonActions = {
        helpall: {embed: allEmbed, component: alldecksrow},
        allhelp: {embed: allEmbed, component: alldecksrow},
        helpmeme: {embed: memeEmbed, component: memerow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpcombo: {embed: comboEmbed, component: comborow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpmidrange: {embed: midrangeEmbed, component: midrangerow},
        midrangehelp: {embed: midrangeEmbed, component: midrangerow},
        ab: {embed: abeans, component: ab},
        abeans: {embed: abeans, component: ab},
        ab2: {embed: abeans, component: ab2},
        abeans2: {embed: abeans, component: ab2},
        bms: {embed: budgetgs, component: bms},
        budgetmopshadow: {embed: budgetgs, component: bms},
        bms2: {embed: budgetgs, component: bms2},
        budgetmopshadow2: {embed: budgetgs, component: bms2},
        pb: {embed: pbeans, component: pb},
        pbeans: {embed: pbeans, component: pb},
        pb2: {embed: pbeans, component: pb2},
        pbeans2: {embed: pbeans, component: pb2},
        srings: {embed: starrings, component: srings},
        starrings: {embed: starrings, component: srings},
        srings2: {embed: starrings, component: srings2},
        starrings2: {embed: starrings, component: srings2},
        srings3: {embed: starrings, component: srings3},
        starrings3: {embed: starrings, component: srings3},
        srings4: {embed: starrings, component: srings4},
        starrings4: {embed: starrings, component: srings4},
        smf: {embed: savagemayflower, component: smf},
        savagemayflower: {embed: savagemayflower, component: smf},
        smf2: {embed: savagemayflower, component: smf2},
        savagemayflower2: {embed: savagemayflower, component: smf2},
        smf3: {embed: savagemayflower, component: smf3},
        savagemayflower3: {embed: savagemayflower, component: smf3},
        wr100: {embed: winrate100, component: wr100},
        winrate100: {embed: winrate100, component: wr100},
        wr1002: {embed: winrate100, component: wr1002},
        winrate1002: {embed: winrate100, component: wr1002},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Invalid button action", flags: MessageFlags.Ephemeral });
      }
    }
    const collect = m.createMessageComponentCollector({ filter: Filter });
    collect.on("collect", async (i) => {
      if (i.customId === "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
