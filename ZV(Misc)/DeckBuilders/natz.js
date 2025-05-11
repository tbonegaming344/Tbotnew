const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder, 
    MessageFlags
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
      .setColor("Green");
    if (footer) {
      embed.setFooter({ text: `${footer}` });
    }
    return embed;
  }
  module.exports = {
    name: `natz`,
    aliases: [
      `decksmadebynatz`,
      `helpnatz`,
      `natzhelp`,
      `natzdecks`,
      `natzdecks`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view Natz Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Deck")
        .setDescription('Some of the best Decks in the game')
        .setEmoji("<:compemote:1325461143136764060>")
        .setValue("comp"), 
        new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setDescription('Decks that mostly only good for ranked games')
      .setEmoji("<:ladder:1271503994857979964>")
      .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
        .setLabel("Meme Deck")
        .setDescription("Decks that are built off a weird/fun combo")
        .setValue("meme"), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Combo Deck")
        .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
        .setValue("combo"),
        new StringSelectMenuOptionBuilder()
        .setLabel('Control Deck')
        .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
        .setValue('control'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Midrange Deck')
        .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
        .setValue('midrange'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Tempo Deck")
        .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
        .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
        .setLabel("All Natz Decks")
        .setDescription("An option to view all decks")
        .setValue("all")
      )
      const row = new ActionRowBuilder().addComponents(select);
      const natzdecks = {
        competitiveDecks: ["toyotacontrolla"],
        ladderDecks: ["carroot"],
        memeDecks: ["ladytuna"],
        comboDecks: ["carroot"],
        controlDecks: ["toyotacontrolla"],
        midrangeDecks: ["ladytuna"],
        tempoDecks: ["carroot"],
        allDecks: ["carroot", "ladytuna", "toyotacontrolla"],
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
      const toBuildString = buildDeckString(natzdecks.allDecks);
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
      const alldecksrow = createButtons("toyotacontrolla", "carr");
      const carr = createButtons("helpnatz", "lt");
      const lt = createButtons("carroot", "tc");
      const tc = createButtons("ladytuna", "help");
      const user = await client.users.fetch("608656205589512195");
        const [result] = await db.query(`select carroot, ladytuna, toyotacontrolla from ntdecks nt inner join ncdecks nc on nt.deckinfo = nc.deckinfo 
          inner join bcdecks bc on nt.deckinfo = bc.deckinfo`);
        const natz = createHelpEmbed(
          `${user.displayName} Decks`,
          `To view decks made by ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${natzdecks.allDecks.length} total decks in Tbot`,
          user.displayAvatarURL()
        )
        const alldecksEmbed = createHelpEmbed(
          `${user.displayName} Decks`,
          `My commands for decks made by ${user.displayName} are ${toBuildString}`,
          user.displayAvatarURL(),
          `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${natzdecks.allDecks.length} total decks in Tbot`,
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
            .setColor("Green");
          const imageUrl = result[4][deckName];
          if (imageUrl) {
            embed.setImage(imageUrl);
          }
          return embed;
        }
        const carroot = createDeckEmbed(result, "carroot")
        const toyotacontrolla = createDeckEmbed(result, "toyotacontrolla")
        const ladytuna = createDeckEmbed(result, "ladytuna")
        const m = await message.channel.send({ embeds: [natz], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
          const value = i.values[0]
          if(value == "all"){
            await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
          }
          else if(value == "comp" || value == "control"){
            await i.reply({embeds: [toyotacontrolla], flags: MessageFlags.Ephemeral})
          }
          else if(value == "meme" || value == "midrange"){
            await i.reply({embeds: [ladytuna], flags: MessageFlags.Ephemeral})
          }
          else if(value == "ladder" || value == "combo" || value == "tempo"){
            await i.reply({embeds: [carroot], flags: MessageFlags.Ephemeral})
          }
        }
        async function handleButtonInteraction(i){
          const buttonActions = {
            helpnatz: {embed: natz, components: alldecksrow},
            help: {embed: natz, components: alldecksrow},    
            carr: {embed: carroot, components: carr},
            carroot: {embed: carroot, components: carr},
            lt: {embed: ladytuna, components: lt},
            ladytuna: {embed: ladytuna, components: lt},
            tc: {embed: toyotacontrolla, components: tc},
            toyotacontrolla: {embed: toyotacontrolla, components: tc},        
          };
        const action = buttonActions[i.customId];
        if (action) {
          await i.update({ embeds: [action.embed], components: [action.components] });
        } else {
          await i.reply({ content: "Invalid button action.", flags: MessageFlags.Ephemeral });
        }
      }
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
            if(i.customId == "select"){
             await handleSelectMenu(i)
            }
            else{
              await handleButtonInteraction(i)
            }
        }); 
    }
}