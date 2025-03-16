const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");

function createHelpEmbed(title, description, thumbnail, footer){
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Random");
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
          .setLabel("Competitive Deck")
          .setValue("competitive")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"), 
        new StringSelectMenuOptionBuilder()
          .setLabel('Combo Deck')
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
          .setValue('combo'), 
        new StringSelectMenuOptionBuilder()
          .setLabel('Control Deck')
          .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
          .setValue('control'),
        new StringSelectMenuOptionBuilder()
          .setLabel('Tempo Deck')
          .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
          .setValue('tempo'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("All Spudow Decks")
          .setValue("all")
          .setDescription("View all the Spudow decks")
          .setEmoji("<:spudgun:1100168090110656582>")
      );

    const row = new ActionRowBuilder().addComponents(select);
    const spudowDecks = {
      budgetDecks: ["budgetsp"], 
      competitiveDecks: ["radiotherapy"],
      memeDecks: ["nutting"],
      comboDecks: ["nutting"],
      controlDecks: ["radiotherapy"],
      tempoDecks: ["budgetsp"],
      allDecks: ["budgetsp", "nutting", "radiotherapy"]
    };

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

    function buildDeckString(decks) {
      return decks.map(deck => `\n<@1043528908148052089> **${deck}**`).join('');
    }

    const toBuildString = buildDeckString(spudowDecks.allDecks);
    let embed = createHelpEmbed(
      "Spudow Decks",
      `To view the Spudow decks please select an option using the select menu below!
Note: Spudow has ${spudowDecks.allDecks.length} decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719"
    );

    let allEmbed = createHelpEmbed(
      "All Spudow Decks",
      `My decks for Spudow are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
      `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
      Note: Spudow has ${spudowDecks.allDecks.length} decks in Tbot`
    );

    let [result] = await db.query(`SELECT * from spdecks`);

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
        .setColor("Random");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }

    const alldecksrow = createButtons("radiotherapy", "bsp");
    const bsp = createButtons("helpall", "nut");
    const nut = createButtons("budgetsp", "radio");
    const radio = createButtons("nuttin", "allhelp");
    const budgetsp = createDeckEmbed(result, "budgetburstsp");
    const radiotherapy = createDeckEmbed(result, "radiotherapy");
    const nuttin = createDeckEmbed(result, "nutting");

    const embeds = { budgetsp, nuttin, radiotherapy, allEmbed };
    const components = { alldecksrow, bsp, nut, radio };

    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });

    const iFilter = (i) => i.user.id === message.author.id;

    async function handleSelectMenu(i, embeds, components) {
      const value = i.values[0];
      if (value === "budget" || value === "tempo") {
        await i.reply({ embeds: [embeds.budgetsp], flags: MessageFlags.Ephemeral });
      } else if (value == "meme" || value == "combo") {
        await i.reply({ embeds: [embeds.nuttin], flags: MessageFlags.Ephemeral });
      } else if (value === "competitive" || value === "control") {
        await i.reply({ embeds: [embeds.radiotherapy], flags: MessageFlags.Ephemeral });
      } else if (value === "all") {
        await i.update({ embeds: [embeds.allEmbed], components: [components.alldecksrow] });
      }
    }

    async function handleButtonInteraction(i, embeds, components) {
      if (i.customId === "allhelp" || i.customId === "helpall") {
        await i.update({ embeds: [embeds.allEmbed], components: [components.alldecksrow] });
      } else if (i.customId === "bsp" || i.customId === "budgetsp") {
        await i.update({ embeds: [embeds.budgetsp], components: [components.bsp] });
      } else if (i.customId === "nut" || i.customId === "nuttin") {
        await i.update({ embeds: [embeds.nuttin], components: [components.nut] });
      } else if (i.customId === "radio" || i.customId === "radiotherapy") {
        await i.update({ embeds: [embeds.radiotherapy], components: [components.radio] });
      }
    }

    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId === "select") {
        await handleSelectMenu(i, embeds, components);
      } else {
        await handleButtonInteraction(i, embeds, components);
      }
    });
  },
};
