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
          .setLabel("Competitive Deck")
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
          .setLabel("Control Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("control"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
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
      competitiveDecks: ["radiotherapy"],
      memeDecks: ["nutting", "popsicle"],
      comboDecks: ["nutting"],
      controlDecks: ["radiotherapy", "popsicle"],
      midrangeDecks: ["budgetsp"],
      allDecks: ["budgetsp", "nutting", "popsicle", "radiotherapy"],
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

    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }

    const toBuildString = buildDeckString(spudowDecks.allDecks);
    const toBuildMemeString = buildDeckString(spudowDecks.memeDecks);
    const toBuildControlString = buildDeckString(spudowDecks.controlDecks);
    const embed = CreateHelpEmbed(
      "Spudow Decks",
      `To view the Spudow decks please select an option using the select menu below!
Note: Spudow has ${spudowDecks.allDecks.length} decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719"
    );

    const allEmbed = CreateHelpEmbed(
      "All Spudow Decks",
      `My decks for Spudow are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
      `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
Note: Spudow has ${spudowDecks.allDecks.length} decks in Tbot`
    );
    const controlEmbed = CreateHelpEmbed(
      "Spudow Control Decks",
      `My control decks for Spudow are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
      `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
Note: Spudow has ${spudowDecks.controlDecks.length} decks in Tbot`
    );
    const memeEmbed = CreateHelpEmbed(
      "Spudow Meme Decks",
      `My meme decks for Spudow are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
      `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
Note: Spudow has ${spudowDecks.memeDecks.length} decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from spdecks`);

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
        .setColor("#964B00");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const controlrow = CreateButtons("radiotherapy2", "pop");
    const pop = CreateButtons("helpcontrol", "radio2");
    const radio2 = CreateButtons("popsicle", "controlhelp");
    const memerow = CreateButtons("popsicle3", "nut2");
    const nut2 = CreateButtons("helpmeme", "pop3");
    const pop3 = CreateButtons("nuttin2", "memehelp");
    const alldecksrow = CreateButtons("radiotherapy", "bsp");
    const bsp = CreateButtons("helpall", "nut");
    const nut = CreateButtons("budgetsp", "pop2");
    const pop2 = CreateButtons("nuttin", "radio");
    const radio = CreateButtons("popsicle2", "allhelp");
    const budgetsp = CreateDeckEmbed(result, "budgetburstsp");
    const radiotherapy = CreateDeckEmbed(result, "radiotherapy");
    const nuttin = CreateDeckEmbed(result, "nutting");
    const popsicle = CreateDeckEmbed(result, "popsicle");

    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });

    const iFilter = (i) => i.user.id === message.author.id;

    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value === "budget" || value === "midrange") {
        await i.reply({ embeds: [budgetsp], flags: MessageFlags.Ephemeral });
      } else if (value === "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.reply({ embeds: [nuttin], flags: MessageFlags.Ephemeral });
      } else if (value === "competitive") {
        await i.reply({
          embeds: [radiotherapy],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value === "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }

    async function handleButtonInteraction(i) {
      const buttonActions = {
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpall: { embed: allEmbed, component: alldecksrow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpmeme: { embed: memeEmbed, component: memerow },
        controlhelp: { embed: controlEmbed, component: controlrow },
        helpcontrol: { embed: controlEmbed, component: controlrow },
        bsp: { embed: budgetsp, component: bsp },
        budgetsp: { embed: budgetsp, component: bsp },
        nut: { embed: nuttin, component: nut },
        nuttin: { embed: nuttin, component: nut },
        nut2: { embed: nuttin, component: nut2 },
        nuttin2: { embed: nuttin, component: nut2 },
        radio: { embed: radiotherapy, component: radio },
        radiotherapy: { embed: radiotherapy, component: radio },
        radio2: { embed: radiotherapy, component: radio2 },
        radiotherapy2: { embed: radiotherapy, component: radio2 },
        pop: { embed: popsicle, component: pop },
        popsicle: { embed: popsicle, component: pop },
        pop2: { embed: popsicle, component: pop2 },
        popsicle2: { embed: popsicle, component: pop2 },
        pop3: { embed: popsicle, component: pop3 },
        popsicle3: { embed: popsicle, component: pop3 },
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
