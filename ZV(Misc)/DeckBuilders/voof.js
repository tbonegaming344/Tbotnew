const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `voof`,
  aliases: [`decksmadebyvoof`, `voofdecks`, `voofhelp`, `helpvoof`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder(
      new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setDescription("Decks that are generally only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("control"),
    )
    const row = new ActionRowBuilder().addComponents(select);
    const voofDecks = {
      ladderDecks: ["mechacontrol"],
      memeDecks: ["stalemate"], 
      controlDecks: ["mechacontrol", "stalemate"]
    }
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
    const toBuildControlString = buildDeckString(voofDecks.controlDecks);
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
    const controlRow = new createButtons("stalemate", "mcontrol"); 
    const mcontrol = new createButtons("helpcontrol", "smate"); 
    const smate = new createButtons("mechacontrol", "controlhelp");
    const [result] = await db.query(`select stalemate, mechacontrol from smdecks sm
      inner join rbdecks rb on (sm.deckinfo = rb.deckinfo)`);
    const user = await client.users.fetch("727705898692247615");
    const voof = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the select menu below.
note: ${user.displayName} has ${voofDecks.controlDecks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("#87CEEB");
      const controlVoof = new EmbedBuilder()
      .setTitle(`${user.displayName} Control Decks`)
      .setDescription(`My control decks made by ${user.displayName} are ${toBuildControlString}`)
      .setFooter({
        text: `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${voofDecks.controlDecks.length} total control decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("#87CEEB");
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
        .setColor("#87CEEB");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const stalemate = new createDeckEmbed(result, "stalemate");
    const mechacontrol = new createDeckEmbed(result, "mechacontrol");
    const m = await message.channel.send({ embeds: [voof], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if(value == "ladder"){
        await i.reply({embeds: [mechacontrol], flags: MessageFlags.Ephemeral})
      }
      else if(value == "meme"){
        await i.reply({embeds: [stalemate], flags: MessageFlags.Ephemeral})
      }
      else if(value == "control"){
        await i.update({embeds: [controlVoof], components: [controlRow]})
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        stalemate: { embed: stalemate, component: smate },
        mechacontrol: { embed: mechacontrol, component: mcontrol },
        mcontrol: { embed: mechacontrol, component: mcontrol },
        helpcontrol: { embed: controlVoof, component: controlRow },
        smate: { embed: stalemate, component: smate },
        controlhelp: { embed: voof, component: controlRow },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Invalid button interaction.", ephemeral: true });
      }
    }
     collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};