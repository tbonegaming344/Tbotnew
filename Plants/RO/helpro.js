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
    .setColor("White");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpro`,
  aliases: [
    `rohelp`,
    `rocommands`,
    `commandsro`,
    `rosedeck`,
    `helprose`,
    `rodecks`,
    `rosehelp`,
    `rosedecks`,
    `helprs`,
    `rshelp`,
  ],
  category: `Rose(RO)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("select an option below to view Rose's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setValue("meme")
          .setDescription("Plant Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
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
          .setLabel("All Rose Decks")
          .setValue("all")
          .setDescription("View all of Rose's decks")
          .setEmoji("<:DeadInside:1100168228027760800>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const roseDecks = {
      budgetDecks: ["budgetro"],
      competitiveDecks: ["healmidrose"],
      ladderDecks: ["frymidrose"],
      memeDecks: ["freezeheal"],
      comboDecks: ["freezeheal"],
      midrangeDecks: ["frymidrose", "healmidrose"],
      tempoDecks: ["budgetro"],
      allDecks: ["budgetro", "freezeheal", "frymidrose", "healmidrose"],
    };
    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMidrangeString = BuildDeckString(roseDecks.midrangeDecks);
    const toBuildString = BuildDeckString(roseDecks.allDecks);
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
    const midrangerow = new CreateButtons("healmidrose", "fmr");
    const fmr = new CreateButtons("helpmid", "hmr");
    const hmr = new CreateButtons("frymidrose", "allhelp");
    const alldecksrow = new CreateButtons("healmidrose2", "bro");
    const bro = new CreateButtons("helpall", "fheal");
    const fheal = new CreateButtons("budgetro", "fmr2");
    const fmr2 = new CreateButtons("freezeheal", "hmr2");
    const hmr2 = new CreateButtons("frymidrose2", "allhelp");
    const embed = new CreateHelpEmbed(
      "Rose Decks",
      `To view the Rose decks please select an option from the select menu below!
Note: Rose has ${roseDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517"
    );
    const allEmbed = new CreateHelpEmbed(
      "Rose Decks",
      `My decks for Rose(RO) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517",
      `To view the Rose decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Rose has ${roseDecks.allDecks.length} decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Rose Midrange Decks",
      `My Midrange decks for Rose(RO) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517",
      `To view the Midrange Rose decks please use the commands listed above or click on the buttons below to navigate through all Midrange decks!
Note: Rose has ${roseDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from rodecks`);
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
    const budgetrose = new CreateDeckEmbed(result, "budgetro");
    const freezeheal = new CreateDeckEmbed(result, "freezeheal");
    const frymidrose = new CreateDeckEmbed(result, "frymidrose");
    const healmidrose = new CreateDeckEmbed(result, "hmr");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget" || value == "tempo") {
        await i.reply({ embeds: [budgetrose], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.reply({ embeds: [healmidrose], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.reply({ embeds: [frymidrose], flags: MessageFlags.Ephemeral });
      } else if (value == "meme" || value == "combo") {
        await i.reply({ embeds: [freezeheal], flags: MessageFlags.Ephemeral });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "midhelp" || i.customId == "helpmid") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "fheal" || i.customId == "freezeheal") {
        await i.update({ embeds: [freezeheal], components: [fheal] });
      } else if (i.customId == "fmr" || i.customId == "frymidrose") {
        await i.update({ embeds: [frymidrose], components: [fmr] });
      } else if (i.customId == "fmr2" || i.customId == "frymidrose2") {
        await i.update({ embeds: [frymidrose], components: [fmr2] });
      } else if (i.customId == "hmr" || i.customId == "healmidrose") {
        await i.update({ embeds: [healmidrose], components: [hmr] });
      } else if (i.customId == "hmr2" || i.customId == "healmidrose2") {
        await i.update({ embeds: [healmidrose], components: [hmr2] });
      } else if (i.customId == "bro" || i.customId == "budgetro") {
        await i.update({ embeds: [budgetrose], components: [bro] });
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
