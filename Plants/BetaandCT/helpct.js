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
 * The CreateHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#964B00");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpct`,
  aliases: [
    `ctcommands`,
    `commandsct`,
    `cthelp`,
    `helpcitron`,
    `helptron`,
    `ctdecks`,
    `citronhelp`,
    `citrondecks`,
    `citroncommands`,
    `ctdeck`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Citron's Decklists")
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
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Citron Decks")
          .setValue("all")
          .setDescription("View all of Citron's decks")
          .setEmoji("<:Citron_Pog:1100168420743450654>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const citronDecks = {
      budgetDecks: ["budgetct"],
      competitiveDecks: ["wetron"],
      ladderDecks: ["going3nuts"],
      memeDecks: ["startron"],
      aggroDecks: ["budgetct", "wetron"],
      comboDecks: ["going3nuts", "startron"],
      midrangeDecks: ["going3nuts", "startron"],
      allDecks: ["budgetct", "going3nuts", "startron", "wetron"],
    };
     /**
     * The buildDeckString function takes an array of deck names and builds a string with each deck name on a new line, prefixed with the bot mention.
     * @param {Array} decks - The array of deck names to build the string from
     * @returns {string} - The string of deck names
     */
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildAggroString = buildDeckString(citronDecks.aggroDecks)
    const toBuildComboString = buildDeckString(citronDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(citronDecks.midrangeDecks);
    const toBuildString = buildDeckString(citronDecks.allDecks);
    /**
     * The CreateButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
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
    const aggrorow = new CreateButtons("wetron", "bct");
    const bct = new CreateButtons("helpaggro", "wt");
    const wt = new CreateButtons("budgetct", "aggrohelp");
    const comborow = new CreateButtons("startron", "g3n");
    const g3n = new CreateButtons("helpcombo", "star");
    const star = new CreateButtons("going3nuts", "combohelp");
    const midrangerow = new CreateButtons("startron2", "g3n2");
    const g3n2 = new CreateButtons("helpmid", "star2");
    const star2 = new CreateButtons("going3nuts2", "midhelp");
    const alldecksrow = new CreateButtons("watertron", "bct2");
    const bct2 = new CreateButtons("helpall", "g3n3");
    const g3n3 = new CreateButtons("budgetct", "star3");
    const star3 = new CreateButtons("going3nuts3", "wt2");
    const wt2 = new CreateButtons("startron3", "helpall");
    const embed = new CreateHelpEmbed(
      "Citron Decks",
      `To view the Citron decks Please select an option from the select menu below!
Note: Citron has ${citronDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747"
    );
    const allEmbed = new CreateHelpEmbed(
      "Citron Decks",
      `My decks for Citron(CT) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747",
      `To view the Citron decks please use the commands listed above or click on the buttons below to navigate through all Citron decks!
Note: Citron has ${citronDecks.allDecks.length} total decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Citron Aggro Decks",
      `My aggro decks for Citron(CT) are ${toBuildAggroString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747",
      `To view the aggro Citron decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Citron has ${citronDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Citron Combo Decks",
      `My Combo decks for Citron(CT) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747",
      `To view the combo Citron decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Citron has ${citronDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Citron Midrange Decks",
      `My midrange decks for Citron(CT) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747",
      `To view the midrange Citron decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Citron has ${citronDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query("SELECT * FROM ctdecks");
     /**
     * The CreateDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
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
    const budgetct = new CreateDeckEmbed(result, "budgetct");
    const going3nuts = new CreateDeckEmbed(result, "going3nuts");
    const startron = new CreateDeckEmbed(result, "startron");
    const watertron = new CreateDeckEmbed(result, "watertron");
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
        await i.reply({ embeds: [budgetct], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.reply({ embeds: [watertron], flags: MessageFlags.Ephemeral });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "ladder") {
        await i.reply({ embeds: [going3nuts], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.reply({ embeds: [startron], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
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
        helpall: { embed: allEmbed, component: alldecksrow },
        allhelp: { embed: allEmbed, component: alldecksrow },
        aggrohelp: { embed: aggroEmbed, component: aggrorow },
        helpaggro: { embed: aggroEmbed, component: aggrorow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcombo: { embed: comboEmbed, component: comborow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bct: { embed: budgetct, component: bct },
        budgetct: { embed: budgetct, component: bct },
        bct2: { embed: budgetct, component: bct2 },
        budgetct2: { embed: budgetct, component: bct2 },
        g3n: { embed: going3nuts, component: g3n },
        going3nuts: { embed: going3nuts, component: g3n },
        g3n2: { embed: going3nuts, component: g3n2 },
        going3nuts2: { embed: going3nuts, component: g3n2 },
        g3n3: { embed: going3nuts, component: g3n3 },
        going3nuts3: { embed: going3nuts, component: g3n3 },
        star: { embed: startron, component: star },
        startron: { embed: startron, component: star },
        star2: { embed: startron, component: star2 },
        startron2: { embed: startron, component: star2 },
        star3: { embed: startron, component: star3 },
        startron3: { embed: startron, component: star3 },
        wt: { embed: watertron, component: wt },
        watertron: { embed: watertron, component: wt },
        wt2: { embed: watertron, component: wt2 },
        watertron2: { embed: watertron, component: wt2 },

      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unknown Button Interaction",
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
