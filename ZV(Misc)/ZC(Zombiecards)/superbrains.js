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
    .setColor("#FFC0CB");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `superbrainz`,
  aliases: [`sb`, `brainz`, `superbrains`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpsb")
        .setLabel("Super Brainz Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:da6:1088143801459154944>")
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Super Brainz decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
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
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("All decks for Super Brainz")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const superBrainzDecks = {
      budgetDecks: ["budgetsb"],
      ladderDecks: ["telimpssb"],
      comboDecks: ["otkswabbie", "telimpssb"],
      controlDecks: ["telimpssb"],
      midrangeDecks: ["budgetsb"],
      allDecks: ["budgetsb", "otkswabbie", "telimpssb"],
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
    const toBuildComboString = buildDeckString(superBrainzDecks.comboDecks);
    const toBuildString = buildDeckString(superBrainzDecks.allDecks);
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
    const comboRow = createButtons("telimps", "otks");
    const otks = createButtons("helpcombo", "timps");
    const timps = createButtons("otkswabbie", "combohelp");
    const allDecksRow = createButtons("telimps2", "budsb");
    const budsb = createButtons("helpall", "otks2");
    const otks2 = createButtons("budgetsb", "timps2");
    const timps2 = createButtons("otkswabbie2", "allhelp");
    const embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzheroes_gamepedia_en/images/3/37/Super_Brainz.png/revision/latest?cb=20160722160723"
      )
      .setTitle(
        "Super Brainz | <:Brainy:1062500939908530246><:Sneaky:1062502187781075094>"
      )
      .setDescription("**\\- Party Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Telepathy <:Brainy:1062500939908530246> \n Draw two cards. \n Cut Down To Size <:Brainy:1062500939908530246> \n Destroy a Plant that has 5<:Strength:1062501774612779039> or more. \n Super Stench <:Sneaky:1062502187781075094> \n All Zombies get <:Deadly:1062501985795964928>__Deadly__. \n Carried Away <:Brainy:1062500939908530246><:Sneaky:1062502187781075094> \n Move a Zombie. It gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. Then it does a Bonus Attack.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: `His most heroic quality is his lifestyle.`,
        }
      )
      .setColor("#FFC0CB");
    const helpsb = createHelpEmbed(
      "Super Brainz Decks",
      `To view the SuperBrainz decks please select an option from the select menu below!
Note: There are ${superBrainzDecks.allDecks.length} total decks for Super Brainz in Tbot`,
      "https://static.wikia.nocookie.net/pvzheroes_gamepedia_en/images/3/37/Super_Brainz.png/revision/latest?cb=20160722160723"
    );
    const comboEmbed = createHelpEmbed(
      "Super Brainz Combo Decks",
      `My combo decks for Super Brainz are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/pvzheroes_gamepedia_en/images/3/37/Super_Brainz.png/revision/latest?cb=20160722160723",
      `To view the SuperBrainz combo decks please use the commands listed above or click on the buttons below!
Note: There are ${superBrainzDecks.comboDecks.length} combo decks for Super Brainz in Tbot`
    );
    const allDecksEmbed = createHelpEmbed(
      "Super Brainz Decks",
      `My decks for Super Brainz are ${toBuildString}`,
      "https://static.wikia.nocookie.net/pvzheroes_gamepedia_en/images/3/37/Super_Brainz.png/revision/latest?cb=20160722160723",
      `To view the SuperBrainz decks please use the commands listed above or click on the buttons below!
Note: There are ${superBrainzDecks.allDecks.length} decks for Super Brainz in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM sbdecks`);
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
        .setColor("#000000");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetsb = createDeckEmbed(result, "budgetsb");
    const telimps = createDeckEmbed(result, "telimpssb");
    const otkswabbie = createDeckEmbed(result, "otkswabbie");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpsb: { embeds: helpsb, component: row },
        timps: { embeds: telimps, component: timps },
        telimps: { embeds: telimps, component: timps },
        otks: { embeds: otkswabbie, component: otks },
        otkswabbie: { embeds: otkswabbie, component: otks },
        helpcombo: { embeds: comboEmbed, component: comboRow },
        combohelp: { embeds: comboEmbed, component: comboRow },
        helpall: { embeds: allDecksEmbed, component: allDecksRow },
        allhelp: { embeds: allDecksEmbed, component: allDecksRow },
        budsb: { embeds: budgetsb, component: budsb },
        budgetsb: { embeds: budgetsb, component: budsb },
        timps2: { embeds: telimps, component: timps2 },
        telimps2: { embeds: telimps, component: timps2 },
        otks2: { embeds: otkswabbie, component: otks2 },
        otkswabbie2: { embeds: otkswabbie, component: otks2 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embeds],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unknown button interactiom",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget" || value == "midrange") {
        await i.reply({ embeds: [budgetsb], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder" || value == "control") {
        await i.reply({ embeds: [telimps], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comboRow] });
      } else if (value == "all") {
        await i.update({ embeds: [allDecksEmbed], components: [allDecksRow] });
      } else if (value == "meme") {
        await i.reply({ embeds: [otkswabbie], flags: MessageFlags.Ephemeral });
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
