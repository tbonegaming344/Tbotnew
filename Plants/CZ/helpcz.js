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
  name: `helpcz`,
  aliases: [
    `czhelp`,
    `czcommands`,
    `commandscz`,
    `helpchomp`,
    `helpzilla`,
    `zillahelp`,
    `chompzillahelp`,
    `chompzillacommands`,
    `czdecks`,
    `chompzilladecks`,
    `helpchompzilla`,
  ],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view chompzilla's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setEmoji("💰")
          .setDescription("A Deck that is cheap for new players"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setEmoji("<:compemote:1325461143136764060>")
          .setDescription("Some of the best decks in the game"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
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
          .setLabel("All Chompzilla Decks")
          .setValue("all")
          .setEmoji("<:LetsFrickenChomp:1100168574829596824>")
          .setDescription("View all Chompzilla Decks")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const chompzillaDecks = {
      budgetDecks: ["budgetmopzilla"],
      compDecks: ["healcontrol"],
      memeDecks: ["lasersnap", "moprbius"],
      ladderDecks: ["midred"],
      comboDecks: ["lasersnap", "midred", "moprbius"],
      controlDecks: ["healcontrol"],
      midrangeDecks: ["lasersnap", "midred", "moprbius"],
      tempoDecks: ["budgetmopzilla"],
      allDecks: [
        "budgetmopzilla",
        "healcontrol",
        "lasersnap",
        "midred",
        "moprbius",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMemeString = buildDeckString(chompzillaDecks.memeDecks);
    const toBuildComboString = buildDeckString(chompzillaDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(
      chompzillaDecks.midrangeDecks
    );
    const toBuildString = buildDeckString(chompzillaDecks.allDecks);
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
    const memerow = new CreateButtons("mopribus", "lsnap");
    const lsnap = new CreateButtons("helpmeme", "mop");
    const mop = new CreateButtons("lasersnap", "memehelp");
    const comborow = new CreateButtons("mopribus2", "lsnap2");
    const lsnap2 = new CreateButtons("helpcombo", "mred");
    const mred = new CreateButtons("lasersnap2", "mop2");
    const mop2 = new CreateButtons("midred2", "combohelp");
    const midrangerow = new CreateButtons("mopribus3", "lsnap3");
    const lsnap3 = new CreateButtons("helpmid", "mred2");
    const mred2 = new CreateButtons("lasersnap3", "mop3");
    const mop3 = new CreateButtons("midred3", "midhelp");
    const alldecksrow = new CreateButtons("mopribus4", "bmz");
    const bmz = new CreateButtons("helpall", "healcon");
    const healcon = new CreateButtons("budgetmopzilla", "lsnap4");
    const lsnap4 = new CreateButtons("healcontrol", "mred3");
    const mred3 = new CreateButtons("lasersnap4", "mop4");
    const mop4 = new CreateButtons("midred4", "allhelp");
    const embed = new CreateHelpEmbed(
      "Chompzilla Decks",
      `To view the Chompzilla decks please select an option from the select menu below!
Note: Chompzilla has ${chompzillaDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
    );
    const memeEmbed = new CreateHelpEmbed(
      "Chompzilla Meme Decks",
      `My Meme decks for Chompzilla(CZ) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Meme Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Meme decks!
Note: Chompzilla has ${chompzillaDecks.memeDecks.length} Meme decks in Tbot`
    );
    const allEmbed = new CreateHelpEmbed(
      "Chompzilla Decks",
      `My decks for Chompzilla(CZ) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all decks!
Note: Chompzilla has ${chompzillaDecks.allDecks.length} decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Chompzilla Combo Decks",
      `My Combo decks for Chompzilla(CZ) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Combo Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Combo decks!
Note: Chompzilla has ${chompzillaDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Chompzilla Midrange Decks",
      `My Midrange decks for Chompzilla(CZ) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Midrange Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Midrange decks!
Note: Chompzilla has ${chompzillaDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    let [result] = await db.query(`SELECT * from czdecks`);
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
        .setColor("Yellow");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const healcontrol = new CreateDeckEmbed(result, "apotk");
    const budgetcz = new CreateDeckEmbed(result, "budgetcz");
    const lasersnap = new CreateDeckEmbed(result, "lasersnap");
    const midred = new CreateDeckEmbed(result, "midred");
    const mopribus = new CreateDeckEmbed(result, "mopribus");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget" || value == "tempo") {
        await i.reply({ embeds: [budgetcz], flags: MessageFlags.Ephemeral });
      } else if (value == "comp" || value == "control") {
        await i.reply({ embeds: [healcontrol], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "ladder") {
        await i.reply({ embeds: [midred], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderow] });
      } else if (i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
      if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "midhelp" || i.customId == "helpmid") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "healcon" || i.customId == "healcontrol") {
        await i.update({ embeds: [healcontrol], components: [healcon] });
      } else if (i.customId == "mop" || i.customId == "mopribus") {
        await i.update({ embeds: [mopribus], components: [mop] });
      } else if (i.customId == "mop2" || i.customId == "mopribus2") {
        await i.update({ embeds: [mopribus], components: [mop2] });
      } else if (i.customId == "mop3" || i.customId == "mopribus3") {
        await i.update({ embeds: [mopribus], components: [mop3] });
      } else if (i.customId == "mop4" || i.customId == "mopribus4") {
        await i.update({ embeds: [mopribus], components: [mop4] });
      } else if (i.customId == "lsnap" || i.customId == "lasersnap") {
        await i.update({ embeds: [lasersnap], components: [lsnap] });
      } else if (i.customId == "lsnap2" || i.customId == "lasersnap2") {
        await i.update({ embeds: [lasersnap], components: [lsnap2] });
      } else if (i.customId == "lsnap3" || i.customId == "lasersnap3") {
        await i.update({ embeds: [lasersnap], components: [lsnap3] });
      } else if (i.customId == "lsnap4" || i.customId == "lasersnap4") {
        await i.update({ embeds: [lasersnap], components: [lsnap4] });
      } else if (i.customId == "mred" || i.customId == "midred") {
        await i.update({ embeds: [midred], components: [mred] });
      } else if (i.customId == "mred2" || i.customId == "midred2") {
        await i.update({ embeds: [midred], components: [mred2] });
      } else if (i.customId == "mred3" || i.customId == "midred3") {
        await i.update({ embeds: [midred], components: [mred3] });
      } else if (i.customId == "bmz" || i.customId == "budgetmopzilla") {
        await i.update({ embeds: [budgetcz], components: [bmz] });
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
