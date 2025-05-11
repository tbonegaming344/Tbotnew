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
/**
 * The createHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function createHelpEmbed(title, description, thumbnail, footer) {
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
    `rosedb`,
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
      midrangeDecks: ["budgetro", "frymidrose", "healmidrose"],
      allDecks: ["budgetro", "freezeheal", "frymidrose", "healmidrose"],
    };
    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMidrangeString = BuildDeckString(roseDecks.midrangeDecks);
    const toBuildString = BuildDeckString(roseDecks.allDecks);
    /**
     * The createButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
    function createButtons(leftButtonId, rightButtonId) {
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
    const midrangerow = createButtons("healmidrose", "bro");
    const bro = createButtons("helpmid", "fmr");
    const fmr = createButtons("budgetro", "hmr");
    const hmr = createButtons("frymidrose", "midhelp");
    const alldecksrow = createButtons("healmidrose2", "bro2");
    const bro2 = createButtons("helpall", "fheal");
    const fheal = createButtons("budgetro2", "fmr2");
    const fmr2 = createButtons("freezeheal", "hmr2");
    const hmr2 = createButtons("frymidrose2", "allhelp");
    const embed = createHelpEmbed(
      "Rose Decks",
      `To view the Rose decks please select an option from the select menu below!
Note: Rose has ${roseDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517"
    );
    const allEmbed = createHelpEmbed(
      "Rose Decks",
      `My decks for Rose(RO) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517",
      `To view the Rose decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Rose has ${roseDecks.allDecks.length} decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Rose Midrange Decks",
      `My Midrange decks for Rose(RO) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517",
      `To view the Midrange Rose decks please use the commands listed above or click on the buttons below to navigate through all Midrange decks!
Note: Rose has ${roseDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from rodecks`);
     /**
     * The createDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
    function createDeckEmbed(result, deckName) {
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
    const budgetrose = createDeckEmbed(result, "budgetro");
    const freezeheal = createDeckEmbed(result, "freezeheal");
    const frymidrose = createDeckEmbed(result, "frymidrose");
    const healmidrose = createDeckEmbed(result, "hmr");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
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
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpall: { embed: allEmbed, component: alldecksrow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bro: { embed: budgetrose, component: bro },
        budgetro: { embed: budgetrose, component: bro },
        bro2: { embed: budgetrose, component: bro2 },
        budgetro2: { embed: budgetrose, component: bro2 },
        fheal: { embed: freezeheal, component: fheal },
        freezeheal: { embed: freezeheal, component: fheal },
        fmr: { embed: frymidrose, component: fmr },
        frymidrose: { embed: frymidrose, component: fmr },
        fmr2: { embed: frymidrose, component: fmr2 },
        frymidrose2: { embed: frymidrose, component: fmr2 },
        hmr: { embed: healmidrose, component: hmr },
        healmidrose: { embed: healmidrose, component: hmr },
        hmr2: { embed: healmidrose, component: hmr2 },
        healmidrose2: { embed: healmidrose, component: hmr2 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button action",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
