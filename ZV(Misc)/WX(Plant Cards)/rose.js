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
  name: `rose`,
  aliases: [`ro`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Rose Decks")
        .setEmoji("<:DeadInside:1100168228027760800>")
        .setStyle(ButtonStyle.Primary)
    );
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
          )
      );
    const row = new ActionRowBuilder().addComponents(select);
    const roseDecks = {
      budgetDecks: ["budgetro"],
      competitiveDecks: ["healmidrose"],
      midrangeDecks: ["budgetro", "healmidrose"]
    };
    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMidrangeString = BuildDeckString(roseDecks.midrangeDecks);
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
    const bro = createButtons("helpmid", "hmr");
    const hmr = createButtons("budgetro", "midhelp");
    const ro = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/vsbattles/images/1/1f/RosePVZ.png/revision/latest?cb=20181016204100"
      )
      .setTitle(
        "Rose | <:Smarty:1062502890448638022><:Solar:1062502678384607262>"
      )
      .setDescription("**\\- Flower Hero  -**")
      .setColor("White")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Transmogrify <:Smarty:1062502890448638022> \n Transform a Zombie into a random Zombie that costs 1<:Brainz:1062503146745774183>. \nBig Chill <:Smarty:1062502890448638022> \n <:freeze:1323059404874055774>Freeze a Zombie. \n Draw a card. \nWeed Whack <:Solar:1062502678384607262> \n A Zombies gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \nGoatify <:Smarty:1062502890448638022><:Solar:1062502678384607262> \n Transform a Zombie with the highest Strength into a Goat. \n Goat 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184>, Gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when any Goat is hurt. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "Refuses to be nerfed.",
        }
      );
    const embed = createHelpEmbed(
      "Rose Decks",
      `To view the Rose decks please select an option from the select menu below!
  Note: Rose has ${roseDecks.midrangeDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517"
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
    const healmidrose = createDeckEmbed(result, "hmr");
    const m = await message.channel.send({ embeds: [ro], components: [cmd] });
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
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        cmd: { embed: embed, component: row },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bro: { embed: budgetrose, component: bro },
        budgetro: { embed: budgetrose, component: bro },
        hmr: { embed: healmidrose, component: hmr },
        healmidrose: { embed: healmidrose, component: hmr }
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
