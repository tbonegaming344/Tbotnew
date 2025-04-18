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
    .setColor("Orange");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpnt`,
  aliases: [
    `ntcommands`,
    `commandsnt`,
    `nthelp`,
    `helpneptuna`,
    `helptuna`,
    `helpnp`,
    `ntdecks`,
    `decksnt`,
    `neptunahelp`,
    `neptunadecks`,
  ],
  category: `Neptuna(NT)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view Neptuna Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setDescription("A Deck that is cheap for new players")
          .setEmoji("💰")
          .setValue("budget"),
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
          .setLabel("Aggro Decks")
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
          .setLabel("Midrange Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrange"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Neptuna Decks")
          .setDescription("An option to view all decks")
          .setEmoji("<:NeptunaH:1087845030867247174>")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const neptunaDecks = {
      budgetDecks: ["budgetnt"],
      competitiveDecks: ["icebox"],
      ladderDecks: ["ladytuna", "gomorrah", "schoolyard"],
      memeDecks: ["antiagor", "floss", "sunlord"],
      aggroDecks: ["agraves", "budgetnt", "schoolyard"],
      comboDecks: ["antiagor","budgetnt", "floss", "sunlord"],
      midrangeDecks: ["gomorrah", "icebox", "ladytuna", "sunlord"],
      allDecks: [
        "agraves",
        "antiagor",
        "budgetnt",
        "floss",
        "gomorrah",
        "icebox",
        "ladytuna",
        "schoolyard",
        "sunlord",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(neptunaDecks.allDecks);
    const toBuildLadderString = buildDeckString(neptunaDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(neptunaDecks.memeDecks);
    const toBuildAggroString = buildDeckString(neptunaDecks.aggroDecks);
    const toBuildComboString = buildDeckString(neptunaDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(neptunaDecks.midrangeDecks);
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
    const alldecksrow = new CreateButtons("sunlord", "ag");
    const ag = new CreateButtons("helpall", "anti");
    const anti = new CreateButtons("agraves", "bnt");
    const bnt = new CreateButtons("antiagor", "fl");
    const fl = new CreateButtons("budgetnt", "go");
    const go = new CreateButtons("floss", "ib");
    const ib = new CreateButtons("gomorrah", "lt");
    const lt = new CreateButtons("icebox", "sy");
    const sy = new CreateButtons("ladytuna", "sl");
    const sl = new CreateButtons("schoolyard", "allhelp");
    const ladderrow = new CreateButtons("schoolyard2", "ag2");
    const ag2 = new CreateButtons("helpladder", "go2");
    const go2 = new CreateButtons("agraves2", "sy2");
    const sy2 = new CreateButtons("gomorrah2", "ladderhelp");
    const memerow = new CreateButtons("sunlord2", "anti2");
    const anti2 = new CreateButtons("helpmeme", "fl2");
    const fl2 = new CreateButtons("antiagor2", "lt2");
    const lt2 = new CreateButtons("floss2", "sl2");
    const sl2 = new CreateButtons("ladytuna2", "memehelp");
    const aggrorow = new CreateButtons("schoolyard3", "ag3");
    const ag3 = new CreateButtons("helpaggro", "bnt2");
    const bnt2 = new CreateButtons("agraves3", "sy3");
    const sy3 = new CreateButtons("budgetnt2", "aggrohelp");
    const comborow = new CreateButtons("sunlord3", "anti3");
    const anti3 = new CreateButtons("helpcombo", "bnt3");
    const bnt3 = new CreateButtons("antiagor3", "fl3");
    const fl3 = new CreateButtons("budgetnt3", "sl3");
    const sl3 = new CreateButtons("floss3", "combohelp");
    const midrangerow = new CreateButtons("sunlord4", "go3");
    const go3 = new CreateButtons("helpmid", "ib2");
    const ib2 = new CreateButtons("gomorrah3", "lt3");
    const lt3 = new CreateButtons("icebox2", "sl4");
    const sl4 = new CreateButtons("ladytuna3", "midhelp");
    const alldecksEmbed = new CreateHelpEmbed(
      "Neptuna Decks",
      `My commands for Neptuna(NT) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna decks please use the commands listed above or click on the buttons below!
Note: Neptuna has ${neptunaDecks.allDecks.length} total decks in Tbot`
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Neptuna Ladder Decks",
      `My commands for Neptuna(NT) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna ladder decks please use the commands listed above or click on the buttons below!
Note: Neptuna has a total of ${neptunaDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Neptuna Meme Decks",
      `My commands for Neptuna(NT) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna meme decks please use the commands listed above or click on the buttons below!
Note: Neptuna has a total of ${neptunaDecks.memeDecks.length} meme decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Neptuna Aggro Decks",
      `My commands for Neptuna(NT) are ${toBuildAggroString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna aggro decks please use the commands listed above or click on the buttons below!
Note: Neptuna has a total of ${neptunaDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Neptuna Combo Decks",
      `My commands for Neptuna(NT) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna combo decks please use the commands listed above or click on the buttons below!
Note: Neptuna has a total of ${neptunaDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Neptuna Midrange Decks",
      `My commands for Neptuna(NT) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna midrange decks please use the commands listed above or click on the buttons below!
Note: Neptuna has a total of ${neptunaDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const nthelp = new CreateHelpEmbed(
      "Neptuna Decks",
      `To view the Neptuna decks please select an option from the select menu below!
Note: Neptuna has ${neptunaDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
    );
    const [result] = await db.query(`select * from ntdecks`);
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
        .setColor("#000000");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const agraves = new CreateDeckEmbed(result, "agraves");
    const antiagor = new CreateDeckEmbed(result, "antiagor");
    const budgetnt = new CreateDeckEmbed(result, "budgetnt");
    const floss = new CreateDeckEmbed(result, "floss");
    const gomorrah = new CreateDeckEmbed(result, "gomorrah");
    const icebox = new CreateDeckEmbed(result, "icebox");
    const ladytuna = new CreateDeckEmbed(result, "ladytuna");
    const schoolyard = new CreateDeckEmbed(result, "schoolyard");
    const sunlord = new CreateDeckEmbed(result, "wimps");
    const m = await message.channel.send({
      embeds: [nthelp],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "comp") {
        await i.reply({ embeds: [icebox], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetnt], flags: MessageFlags.Ephemeral });
      }
    }
    async function HandleButtonInteraction(i) {
      const buttonActions = {
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        allhelp: {embed: alldecksEmbed, component: alldecksrow},
        ladderhelp: {embed: ladderEmbed, component: ladderrow},
        helpladder: {embed: ladderEmbed, component: ladderrow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpmeme: {embed: memeEmbed, component: memerow},
        aggrohelp: {embed: aggroEmbed, component: aggrorow},
        helpaggro: {embed: aggroEmbed, component: aggrorow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpcombo: {embed: comboEmbed, component: comborow},
        helpmid: {embed: midrangeEmbed, component: midrangerow},
        midhelp: {embed: midrangeEmbed, component: midrangerow},
        ag: {embed: agraves, component: ag},
        agraves: {embed: agraves, component: ag},
        ag2: {embed: agraves, component: ag2},
        agraves2: {embed: agraves, component: ag2},
        ag3: {embed: agraves, component: ag3},
        agraves3: {embed: agraves, component: ag3},
        anti: {embed: antiagor, component: anti},
        antiagor: {embed: antiagor, component: anti},
        anti2: {embed: antiagor, component: anti2},
        antiagor2: {embed: antiagor, component: anti2},
        anti3: {embed: antiagor, component: anti3},
        antiagor3: {embed: antiagor, component: anti3},
        bnt: {embed: budgetnt, component: bnt},
        budgetnt: {embed: budgetnt, component: bnt},
        bnt2: {embed: budgetnt, component: bnt2},
        budgetnt2: {embed: budgetnt, component: bnt2},
        bnt3: {embed: budgetnt, component: bnt3},
        budgetnt3: {embed: budgetnt, component: bnt3},
        fl: {embed: floss, component: fl},
        floss: {embed: floss, component: fl},
        fl2: {embed: floss, component: fl2},
        floss2: {embed: floss, component: fl2},
        fl3: {embed: floss, component: fl3},
        floss3: {embed: floss, component: fl3},
        go: {embed: gomorrah, component: go},
        gomorrah: {embed: gomorrah, component: go},
        go2: {embed: gomorrah, component: go2},
        gomorrah2: {embed: gomorrah, component: go2},
        go3: {embed: gomorrah, component: go3},
        gomorrah3: {embed: gomorrah, component: go3},
        ib: {embed: icebox, component: ib},
        icebox: {embed: icebox, component: ib},
        ib2: {embed: icebox, component: ib2},
        icebox2: {embed: icebox, component: ib2},
        lt: {embed: ladytuna, component: lt},
        ladytuna: {embed: ladytuna, component: lt},
        lt2: {embed: ladytuna, component: lt2},
        ladytuna2: {embed: ladytuna, component: lt2},
        lt3: {embed: ladytuna, component: lt3},
        ladytuna3: {embed: ladytuna, component: lt3},
        sy: {embed: schoolyard, component: sy},
        schoolyard: {embed: schoolyard, component: sy},
        sy2: {embed: schoolyard, component: sy2},
        schoolyard2: {embed: schoolyard, component: sy2},
        sy3: {embed: schoolyard, component: sy3},
        schoolyard3: {embed: schoolyard, component: sy3},
        sl: {embed: sunlord, component: sl},
        sunlord: {embed: sunlord, component: sl},
        sl2: {embed: sunlord, component: sl2},
        sunlord2: {embed: sunlord, component: sl2},
        sl3: {embed: sunlord, component: sl3},
        sunlord3: {embed: sunlord, component: sl3},
        sl4: {embed: sunlord, component: sl4},
        sunlord4: {embed: sunlord, component: sl4},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Unknown button action", flags: MessageFlags.Ephemeral });
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
