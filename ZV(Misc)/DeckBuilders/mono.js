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
    .setColor("#005a6e");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `mono`,
  aliases: [
    `decksmadebymono`,
    `monodecks`,
    `monohelp`,
    `helpmono`,
    `monosexual`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Mono's Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setDescription(
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggro"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrange"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Mono Decks")
          .setDescription("An option to view all decks")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const monoDecks = {
      competitiveDecks: ["nohokaistars", "seacret", "slugged"],
      memeDecks: ["coggerazzi"],
      aggroDecks: ["seacret"],
      comboDecks: ["coggerazzi", "seacret"],
      midrangeDecks: ["nohokaistars", "slugged"],
      tempoDecks: ["coggerazzi"],
      allDecks: [
        "coggerazzi",
        "nohokaistars",
        "seacret",
        "slugged"
      ],
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
    const toBuildCombo = buildDeckString(monoDecks.comboDecks);
    const toBuildCompetitive = buildDeckString(monoDecks.competitiveDecks);
    const toBuildMidrange = buildDeckString(monoDecks.midrangeDecks);
    const toBuildString = buildDeckString(monoDecks.allDecks);

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
    const comborow = createButtons("seacret", "cog");
    const cog = createButtons("helpcombo", "sea");
    const sea = createButtons("coggerazzi", "combohelp");
    const competitiverow = createButtons("slugged", "nhks");
    const nhks = createButtons("helpcompetitive", "sea2");
    const sea2 = createButtons("nohokaistars", "slug");
    const slug = createButtons("seacret2", "competitivehelp");
    const midrangerow = createButtons("slugged2", "nhks2");
    const nhks2 = createButtons("helpmidrange", "slug2");
    const slug2 = createButtons("nohokaistars2", "midrangehelp");
    const alldecksrow = createButtons("slugged3", "cog2");
    const cog2 = createButtons("helpall", "nhks3");
    const nhks3 = createButtons("coggerazzi3", "sea3");
    const sea3 = createButtons("nohokaistars3", "slug3");
    const slug3 = createButtons("seacret3", "allhelp");
    const [result] =
      await db.query(`select icebox, nohokaistars, seacret,
        poggerrazzi
from ntdecks nt
inner join ebdecks eb
on (nt.deckinfo = eb.deckinfo)
inner join ifdecks fi 
on (nt.deckinfo = fi.deckinfo)
inner join rbdecks rb 
on (nt.deckinfo = rb.deckinfo)`);
    const user = await client.users.fetch("444700385744257034");
    const mono = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${monoDecks.allDecks.length} total decks in Tbot`,
        user.displayAvatarURL()
    )
    const alldecksEmbed = createHelpEmbed(
      `${user.displayName} Decks`,
      `My commands for all decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.allDecks.length} decks in Tbot`
    )
    const combomono = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My combo decks made by ${user.displayName} are ${toBuildCombo}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.comboDecks.length} combo decks in Tbot`
    )
    const midrangemono = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My midrange decks made by ${user.displayName} are ${toBuildMidrange}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.midrangeDecks.length} midrange decks in Tbot`
    )
    const competitivemono = createHelpEmbed(
      `${user.displayName} Competitive Decks`,
      `My competitive decks made by ${user.displayName} are ${toBuildCompetitive}`,
      user.displayAvatarURL(),
      `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.competitiveDecks.length} competitive decks in Tbot`
    )
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
        .setColor("#005a6e");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const coggerazzi = createDeckEmbed(result, "poggerrazzi");
    const nohonkaistars = createDeckEmbed(result, "nohokaistars");
    const seacret = createDeckEmbed(result, "seacret");
    const slugged = createDeckEmbed(result, "icebox");
    const m = await message.channel.send({ embeds: [mono], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i){
      const value = i.values[0];
      if (value == "comp") {
        await i.update({
          embeds: [competitivemono],
          components: [competitiverow],
        });
      } else if (value == "meme") {
        await i.update({ embeds: [mememono], components: [memerow] });
      } else if (value == "midrange") {
        await i.update({
          embeds: [midrangemono],
          components: [midrangerow],
        })
      } else if (value == "tempo") {
        await i.reply({
          embeds: [coggerazzi],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "combo") {
        await i.update({ embeds: [combomono], components: [comborow] });
      } else if (value == "aggro") {
        await i.reply({ embeds: [seacret], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({
          embeds: [alldecksEmbed],
          components: [alldecksrow],
        });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        competitivehelp: {
          embed: competitivemono,
          component: competitiverow,
        },
        helpcompetitive: {
          embed: competitivemono,
          component: competitiverow,
        },
        helpmeme: { embed: mememono, component: memerow },
        memehelp: { embed: mememono, component: memerow },
        helpcombo: { embed: combomono, component: comborow },
        combohelp: { embed: combomono, component: comborow },
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        helpmidrange: { embed: midrangemono, component: midrangerow },
        midrangehelp: { embed: midrangemono, component: midrangerow },
        cog: { embed: coggerazzi, component: cog },
        coggerazzi: { embed: coggerazzi, component: cog },
        cog2: { embed: coggerazzi, component: cog2 },
        coggerazzi2: { embed: coggerazzi, component: cog2 },
        nhks: { embed: nohonkaistars, component: nhks },
        nohokaistars: { embed: nohonkaistars, component: nhks },
        nhks2: { embed: nohonkaistars, component: nhks2 },
        nohokaistars2: { embed: nohonkaistars, component: nhks2 },
        nhks3: { embed: nohonkaistars, component: nhks3 },
        nohokaistars3: { embed: nohonkaistars, component: nhks3 },
        sea: { embed: seacret, component: sea },
        seacret: { embed: seacret, component: sea },
        sea2: { embed: seacret, component: sea2 },
        seacret2: { embed: seacret, component: sea2 },
        sea3: { embed: seacret, component: sea3 },
        seacret3: { embed: seacret, component: sea3 },
        slug: { embed: slugged, component: slug },
        slugged: { embed: slugged, component: slug },
        slug2: { embed: slugged, component: slug2 },
        slugged2: { embed: slugged, component: slug2 },
        slug3: { embed: slugged, component: slug3 },
        slugged3: { embed: slugged, component: slug3 },
      }
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
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } 
      else{
        await handleButtonInteraction(i);
      }
    });
  },
};
