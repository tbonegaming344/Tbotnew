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
    .setColor("Red");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}

module.exports = {
  name: `helpsp`,
  aliases: [
    `sphelp`,
    `spcommands`,
    `commmandssp`,
    `spdecks`,
    `spudowhelp`,
    `helpspudow`,
    `spudowdecks`,
    `helpsd`,
    `sdhelp`,
  ],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Spudow decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("A Deck that is cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
          .setValue("competitive")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
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
          .setLabel("All Spudow Decks")
          .setValue("all")
          .setDescription("View all the Spudow decks")
          .setEmoji("<:spudgun:1100168090110656582>")
      );

    const row = new ActionRowBuilder().addComponents(select);
    const spudowDecks = {
      budgetDecks: ["budgetsp"],
      competitiveDecks: ["dinoroots", "radiotherapy"],
      memeDecks: ["nutting", "recycling"],
      comboDecks: ["nutting"],
      controlDecks: ["radiotherapy"],
      midrangeDecks: ["budgetsp", "dinoroots", "recycling"],
      allDecks: ["budgetsp", "dinoroots", "nutting", "radiotherapy", "recycling"]
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

    const toBuildString = buildDeckString(spudowDecks.allDecks);
    const toBuildCompetitiveString = buildDeckString(spudowDecks.competitiveDecks);
    const toBuildMemeString = buildDeckString(spudowDecks.memeDecks);
    const toBuildMidrangeString = buildDeckString(spudowDecks.midrangeDecks);
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
    const comprow = createButtons("radiotherapy", "droots"); 
    const droots = createButtons("helpcompetitive", "radio");
    const radio = createButtons("dinoroots", "helpcompetitive");
    const memerow = createButtons("recycling", "nut");
    const nut = createButtons("helpmeme", "recy");
    const recy = createButtons("nuttin", "memehelp");
    const midrangerow = createButtons("recycling2", "bsp");
    const bsp = createButtons("helpmidrange", "droots2");
    const droots2 = createButtons("budgetsp", "recy2");
    const recy2 = createButtons("dinoroots2", "midrangehelp");
    const alldecksrow = createButtons("recycling3", "bsp2");
    const bsp2 = createButtons("helpall", "droots3");
    const droots3 = createButtons("budgetsp2", "nut2");
    const nut2 = createButtons("dinoroots3", "radio2");
    const radio2 = createButtons("nuttin2", "recy3");
    const recy3 = createButtons("radiotherapy2", "helpall");
    const embed = createHelpEmbed(
      "Spudow Decks",
      `To view the Spudow decks please select an option using the select menu below!
Note: Spudow has ${spudowDecks.allDecks.length} decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719"
    );
    const compEmbed = createHelpEmbed(
      "Spudow Competitive Decks",
      `My competitive decks for Spudow are ${toBuildCompetitiveString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
      `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
Note: Spudow has ${spudowDecks.competitiveDecks.length} decks in Tbot`
    );
    const memeEmbed = createHelpEmbed(
      "Spudow Meme Decks",
      `My meme decks for Spudow are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
      `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
Note: Spudow has ${spudowDecks.memeDecks.length} decks in Tbot`
    );
    const allEmbed = createHelpEmbed(
      "All Spudow Decks",
      `My decks for Spudow are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
      `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
Note: Spudow has ${spudowDecks.allDecks.length} decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Spudow Midrange Decks",
      `My midrange decks for Spudow are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvzninjastars/images/0/0f/Spudow.png/revision/latest?cb=20230921000000",
      `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
Note: Spudow has ${spudowDecks.midrangeDecks.length} decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from spdecks`);

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
    const budgetsp = createDeckEmbed(result, "budgetburstsp");
    const dinoroots = createDeckEmbed(result, "dinoroots");
    const radiotherapy = createDeckEmbed(result, "radiotherapy");
    const recycling = createDeckEmbed(result, "recycling");
    const nuttin = createDeckEmbed(result, "nutting");

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
      if (value === "budget") {
        await i.reply({ embeds: [budgetsp], flags: MessageFlags.Ephemeral });
      } else if (value === "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.reply({ embeds: [nuttin], flags: MessageFlags.Ephemeral });
      } else if (value === "control") {
        await i.reply({
          embeds: [radiotherapy],
          flags: MessageFlags.Ephemeral,
        });
      }
      else if (value === "competitive") {
        await i.update({ embeds: [compEmbed], components: [comprow] });
      }
       else if (value === "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if(value === "midrange"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]});
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
        competitivehelp: { embed: compEmbed, component: comprow },
        helpcompetitive: { embed: compEmbed, component: comprow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpmeme: { embed: memeEmbed, component: memerow },
        bsp: { embed: budgetsp, component: bsp },
        budgetsp: { embed: budgetsp, component: bsp },
        bsp2: { embed: budgetsp, component: bsp2 },
        budgetsp2: { embed: budgetsp, component: bsp2 },
        droots: { embed: dinoroots, component: droots },
        dinoroots: { embed: dinoroots, component: droots },
        droots2: { embed: dinoroots, component: droots2 },
        dinoroots2: { embed: dinoroots, component: droots2 },
        droots3: { embed: dinoroots, component: droots3 },
        dinoroots3: { embed: dinoroots, component: droots3 },
        nut: { embed: nuttin, component: nut },
        nuttin: { embed: nuttin, component: nut },
        nut2: { embed: nuttin, component: nut2 },
        nuttin2: { embed: nuttin, component: nut2 },
        radio: { embed: radiotherapy, component: radio },
        radiotherapy: { embed: radiotherapy, component: radio },
        radio2: { embed: radiotherapy, component: radio2 },
        radiotherapy2: { embed: radiotherapy, component: radio2 },
        recy: {embed: recycling, component: recy},
        recycling: {embed: recycling, component: recy},
        recy2: {embed: recycling, component: recy2},
        recycling2: {embed: recycling, component: recy2},
        recy3: {embed: recycling, component: recy3},
        recycling3: {embed: recycling, component: recy3},
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
      if (i.customId === "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
