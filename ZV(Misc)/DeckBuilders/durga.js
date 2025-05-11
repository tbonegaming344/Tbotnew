const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  MessageFlags,
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
    .setColor("Random");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `durga`,
  aliases: [
    `decksmadebydurga`,
    `helpdurga`,
    `durgahelp`,
    `durgadecks`,
    `durgadecks`,
    `durga`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Durga's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
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
          .setDescription("View all decks created by Durga")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const durgaDecks = {
      ladderDecks: ["bfplankcontrol", "pbeans"],
      memeDecks: ["bastet"],
      comboDecks: ["bastet"],
      controlDecks: ["bfplankcontrol"],
      midrangeDecks: ["bastet"],
      allDecks: ["bastet", "bfplankcontrol", "pbeans"],
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
    const ladderrow = createButtons("pbeans", "bfpc");
    const bfpc = createButtons("helpladder", "pb");
    const pb = createButtons("bfplankcontrol", "ladderhelp");
    const alldecksrow = createButtons("pbeans2", "bas");
    const bas = createButtons("helpall", "bfpc2");
    const bfpc2 = createButtons("bastet", "pb2");
    const pb2 = createButtons("bfplankcontrol2", "allhelp");
    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = BuildDeckString(durgaDecks.allDecks);
    const ladderString = BuildDeckString(durgaDecks.ladderDecks);
    const user = await client.users.fetch("736455305457696779");
    const [result] = await db.query(`select bastet, bfplankcontrol, pbeans from 
          imdecks im inner join bfdecks bf on (im.deckinfo = bf.deckinfo)
          inner join gsdecks gs on (im.deckinfo = gs.deckinfo)`);
    const durga = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${durgaDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const ladderEmbed = createHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My ladder decks made by Durga are to ${ladderString}`,
      user.displayAvatarURL(),
      `To view the ladder decks made by ${user.displayName} please click on the buttons below or use commands listed above
Note: Durga has ${durgaDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const allDecksEmbed = createHelpEmbed(
      `${user.displayName} Decks`,
      `My decks made by Durga are to ${toBuildString}`,
      user.displayAvatarURL(),
      `To view all the decks made by ${user.displayName} please click on the buttons below or use commands listed above
Note: Durga has ${durgaDecks.allDecks.length} decks in Tbot`
    );
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
        .setColor("Random");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const bastet = createDeckEmbed(result, "bastet");
    const bfplankcontrol = createDeckEmbed(result, "bfplankcontrol");
    const pbeans = createDeckEmbed(result, "pbeans");
    const m = await message.channel.send({
      embeds: [durga],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "control") {
        await i.reply({
          embeds: [bfplankcontrol],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme" || value == "combo" || value == "midrange") {
        await i.reply({ embeds: [bastet], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [allDecksEmbed], components: [alldecksrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpladder: { embed: ladderEmbed, component: ladderrow },
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpall: { embed: allDecksEmbed, component: alldecksrow },
        allhelp: { embed: allDecksEmbed, component: alldecksrow },
        pb: { embed: pbeans, component: pb },
        pbeans: { embed: pbeans, component: pb },
        pb2: { embed: pbeans, component: pb2 },
        pbeans2: { embed: pbeans, component: pb2 },
        bfpc: { embed: bfplankcontrol, component: bfpc },
        bfplankcontrol: { embed: bfplankcontrol, component: bfpc },
        bfpc2: { embed: bfplankcontrol, component: bfpc2 },
        bfplankcontrol2: { embed: bfplankcontrol, component: bfpc2 },
        bas: { embed: bastet, component: bas },
        bastet: { embed: bastet, component: bas },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction",
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
