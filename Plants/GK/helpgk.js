const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
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
    .setColor("Green");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
const db = require("../../index.js");
module.exports = {
  name: `helpgk`,
  aliases: [
    `gkcommands`,
    `commandsgk`,
    `gkhelp`,
    `helpgrass`,
    `helpknuckles`,
    `grassknuckleshelp`,
    `helpgrassknuckles`,
    `gkdecks`,
    `grassknucklesdecks`,
    `knucklesdecks`,
    `decksgk`,
  ],
  category: `Grass Knuckles(GK)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Grass Knuckles decklists")
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
          .setLabel("Aggro Deck")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
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
          .setLabel("All Grass Knuckles Decks")
          .setValue("all")
          .setDescription("View all Grass Knuckles decks")
          .setEmoji("<:FUCKLES:1100168498363240518>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const grassKnucklesDecks = {
      budgetDecks: ["budgetgk"],
      comprtitiveDecks: ["esspressoaggro"],
      ladderDecks: ["pawntrickstab"],
      memeDecks: ["healthotk"],
      aggroDecks: ["espressoaggro"],
      comboDecks: ["healthotk"],
      controlDecks: ["pawntrickstab"],
      midrangeDecks: ["budgetgk", "healthotk"],
      allDecks: ["budgetgk", "espressoaggro", "healthotk", "pawntrickstab"],
    };
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
    const midrangerow = createButtons("healthotk", "bgk");
    const bgk = createButtons("helpmidrange", "hotk");
    const hotk = createButtons("budgetgk", "midrangehelp");
    const alldecksrow = createButtons("pawntrickstab", "bgk2");
    const bgk2 = createButtons("helpall", "eaggro");
    const eaggro = createButtons("budgetgk2", "hotk2");
    const hotk2 = createButtons("espressoaggro", "pts");
    const pts = createButtons("healthotk2", "allhelp");
    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = BuildDeckString(grassKnucklesDecks.allDecks);
    const toBuildMidrangeString = BuildDeckString(grassKnucklesDecks.midrangeDecks);
    //Help GK Embed
    const embed = createHelpEmbed(
      "Grass Knuckles Decks",
      `To view the Grass Knuckles decks please select an option from the select menu below!
Note: Grass Knuckles has ${grassKnucklesDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist"
    );
    const midrangeEmbed = createHelpEmbed(
      "Grass Knuckles Midrange Decks",
      `My midrange decks for Grass Knuckles(GK) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist",
      `To view the Grass Knuckles decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Grass Knuckles has ${grassKnucklesDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const allEmbed = createHelpEmbed(
      "All Grass Knuckles Decks",
      `My decks for Grass Knuckles(GK) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist",
      `To view the Grass Knuckles decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Grass Knuckles has ${grassKnucklesDecks.allDecks.length} decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM gkdecks`);

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
        .setColor("#964B00");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetgk = createDeckEmbed(result, "budgetgk");
    const espressoaggro = createDeckEmbed(result, "espressoaggro");
    const healthotk = createDeckEmbed(result, "healthotk");
    const pawntrickstab = createDeckEmbed(result, "pawntrickstab");
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
      if (value == "budget" || value == "tempo") {
        await i.reply({ embeds: [budgetgk], flags: MessageFlags.Ephemeral });
      } else if (value == "combo" || value == "meme") {
        await i.reply({ embeds: [healthotk], flags: MessageFlags.Ephemeral });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "ladder" || value == "control") {
        await i.reply({
          embeds: [pawntrickstab],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
      else if(value == "comp" || value == "aggro"){
        await i.reply({
          embeds: [espressoaggro], flags: MessageFlags.Ephemeral
        });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpmidrange: { embed: midrangeEmbed, component: midrangerow },
        midrangehelp: { embed: midrangeEmbed, component: midrangerow },
        helpall: { embed: allEmbed, component: alldecksrow },
        allhelp: { embed: allEmbed, component: alldecksrow },
        bgk: { embed: budgetgk, component: bgk },
        budgetgk: { embed: budgetgk, component: bgk },
        bgk2: { embed: budgetgk, component: bgk2 },
        budgetgk2: { embed: budgetgk, component: bgk2 },
        hotk: { embed: healthotk, component: hotk },
        healthotk: { embed: healthotk, component: hotk },
        hotk2: { embed: healthotk, component: hotk2 },
        healthotk2: { embed: healthotk, component: hotk2 },
        pts: { embed: pawntrickstab, component: pts },
        pawntrickstab: { embed: pawntrickstab, component: pts },
        eaggro: {embed: espressoaggro, component: eaggro},
        espressoaggro: { embed: espressoaggro, component: eaggro },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unknown button action",
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
