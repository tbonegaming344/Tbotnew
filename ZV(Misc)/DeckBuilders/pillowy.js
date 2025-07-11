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
      .setColor("#FFB6C1");
    if (footer) {
      embed.setFooter({ text: `${footer}` });
    }
    return embed;
  }
  module.exports = {
    name: `pillowy`,
    aliases: [
      `decksmadebypillowy`,
      `helppillowy`,
      `pillowyhelp`,
      `pillowydecks`,
      `decksmadebypillowy`,
      `helppillowy`,
      `pillowyhelp`,
      `pillowydecks`,
    ],
    category: `DeckBuilders`,
    run: async(client, message, args)=> {
      const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Pillowy's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Deck")
        .setValue("competitive")
        .setEmoji("<:compemote:1325461143136764060>")
        .setDescription("Some of the best decks in the game"),
        new StringSelectMenuOptionBuilder()
        .setLabel("Meme Decks")
        .setValue("meme")
        .setDescription("Decks that are built off a weird/fun combo"), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Aggro Deck")
        .setValue("aggro")
        .setDescription("Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."),
        new StringSelectMenuOptionBuilder()
        .setLabel("Combo Decks")
        .setValue("combo")
        .setDescription("Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."),
        new StringSelectMenuOptionBuilder()
        .setLabel("Midrange Decks")
        .setValue("midrange")
        .setDescription("Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("All of the decks made by Pillowy")
      )
      const row = new ActionRowBuilder().addComponents(select);
      const pillowyDecks = {
        competitiveDecks: ["cartasbuenas"], 
        memeDecks: ["healburn", "starrings"], 
        aggroDecks: ["cartasbuenas"], 
        comboDecks: ["healburn", "starrings"],
        midrangeDecks: ["healburn", "starrings"], 
        allDecks: ["cartasbuenas", "healburn", "starrings"],
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
      const toBuildString = buildDeckString(pillowyDecks.allDecks);
      const toBuildMemeString = buildDeckString(pillowyDecks.memeDecks);
      const toBuildComboString = buildDeckString(pillowyDecks.comboDecks);
      const toBuildMidrangeString = buildDeckString(pillowyDecks.midrangeDecks);
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
      const memeRow = createButtons("starrings", "hburn");
      const hburn = createButtons("helpmeme", "srings");
      const srings = createButtons("healburn", "memehelp");
      const comboRow = createButtons("starrings2", "hburn2");
      const hburn2 = createButtons("helpcombo", "srings2");
      const srings2 = createButtons("healburn2", "combohelp");
      const midrangeRow = createButtons("starrings3", "hburn3");
      const hburn3 = createButtons("helpmidrange", "srings3");
      const srings3 = createButtons("healburn3", "midrangehelp");
      const allDecksRow = createButtons("starrings4", "cb");
      const cb = createButtons("helpall", "hburn4");
      const hburn4 = createButtons("cartasbuenas", "srings4");
      const srings4 = createButtons("healburn4", "allhelp");
          const [result] = await db.query(`SELECT abeans, healburn, sovietonion FROM gsdecks gs
            inner join sfdecks sf on (gs.deckinfo = sf.deckinfo)`)
          const user = await client.users.fetch("1157720864679272549");
          const pillowy = createHelpEmbed(
            `${user.displayName} Decks`,
            `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${pillowyDecks.allDecks.length} total decks in Tbot`,
            user.displayAvatarURL()
          )
          const memeEmbed = createHelpEmbed(
            `${user.displayName} Meme Decks`,
            `My meme decks created by ${user.displayName} are ${toBuildMemeString}`,
            user.displayAvatarURL(), 
            `To view the meme decks made by ${user.displayName} please use one of the commands listed above or click on the buttons below to navigate through all meme decks!
Note: ${user.displayName} has ${pillowyDecks.memeDecks.length} total meme decks in Tbot`
          )
          const comboEmbed = createHelpEmbed(
            `${user.displayName} Combo Decks`,
            `My combo decks created by ${user.displayName} are ${toBuildComboString}`,
            user.displayAvatarURL(),
            `To view the combo decks made by ${user.displayName} please use one of the commands listed above or click on the buttons below to navigate through all combo decks!
Note: ${user.displayName} has ${pillowyDecks.comboDecks.length} total combo decks in Tbot`
          )
          const midrangeEmbed = createHelpEmbed(
            `${user.displayName} Midrange Decks`,
            `My midrange decks created by ${user.displayName} are ${toBuildMidrangeString}`,
            user.displayAvatarURL(),
            `To view the midrange decks made by ${user.displayName} please use one of the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: ${user.displayName} has ${pillowyDecks.midrangeDecks.length} total midrange decks in Tbot`
          )
          const allDecksEmbed = createHelpEmbed(
            `${user.displayName} Decks`,
            `My decks created by ${user.displayName} are ${toBuildString}`,
            user.displayAvatarURL(),
            `To view the decks made by ${user.displayName} please use one of the commands listed above or click on the buttons below to navigate through all decks!
Note: ${user.displayName} has ${pillowyDecks.allDecks.length} total decks in Tbot`
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
              .setColor("#FFB6C1");
            const imageUrl = result[4][deckName];
            if (imageUrl) {
              embed.setImage(imageUrl);
            }
            return embed;
          }
            const cartasbuenas = createDeckEmbed(result, "abeans")
            const healburn = createDeckEmbed(result, "healburn")
            const starrings = createDeckEmbed(result, "sovietonion")
          const m = await message.channel.send({ embeds: [pillowy], components: [row] });
          const iFilter = (i) => i.user.id === message.author.id;
          async function handleSelectMenu(i){
            const value = i.values[0];
            if(value == "competitive" || value == "aggro"){
              await i.reply({embeds: [cartasbuenas], flags: MessageFlags.Ephemeral})
            }
            else if(value == "meme" ){
              await i.update({embeds: [memeEmbed], components: [memeRow]})
            }
            else if(value == "combo"){
              await i.update({embeds: [comboEmbed], components: [comboRow]})
            }
            else if(value == "midrange"){
              await i.update({embeds: [midrangeEmbed], components: [midrangeRow]})
            }
            else if(value == "all"){
              await i.update({embeds: [allDecksEmbed], components: [allDecksRow]})
            }
          }
          /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
            if(i.customId == "helpmeme" || i.customId == "memehelp"){
              await i.update({embeds: [memeEmbed], components: [memeRow]})
            }
            else if(i.customId == "helpcombo" || i.customId == "combohelp"){
              await i.update({embeds: [comboEmbed], components: [comboRow]})
            }
            else if(i.customId == "helpmidrange" || i.customId == "midrangehelp"){
              await i.update({embeds: [midrangeEmbed], components: [midrangeRow]})
            }
            else if(i.customId == "helpall" || i.customId == "allhelp"){
              await i.update({embeds: [allDecksEmbed], components: [allDecksRow]})
            }
            else if(i.customId == "srings" || i.customId == "starrings"){
              await i.update({embeds: [starrings], components: [srings]})
            }
            else if(i.customId == "hburn"|| i.customId == "healburn"){
              await i.update({embeds: [healburn], components: [hburn]})
            }
            else if(i.customId == "srings2" || i.customId == "starrings2"){
              await i.update({embeds: [starrings], components: [srings2]})
            }
            else if(i.customId == "hburn2"|| i.customId == "healburn2"){
              await i.update({embeds: [healburn], components: [hburn2]})
            }
            else if(i.customId == "srings3" || i.customId == "starrings3"){
              await i.update({embeds: [starrings], components: [srings3]})
            }
            else if(i.customId == "hburn3"|| i.customId == "healburn3"){
              await i.update({embeds: [healburn], components: [hburn3]})
            }
            else if(i.customId == "srings4" || i.customId == "starrings4"){
              await i.update({embeds: [starrings], components: [srings4]})
            }
            else if(i.customId == "hburn4"|| i.customId == "healburn4"){
              await i.update({embeds: [healburn], components: [hburn4]})
            }
            else if(i.customId == "cb" || i.customId == "cartasbuenas"){
              await i.update({embeds: [cartasbuenas], components: [cb]})
            }

          }
          const collector = m.createMessageComponentCollector({ filter: iFilter });
          collector.on("collect", async (i) => {
            if(i.customId == "select"){
            await handleSelectMenu(i);
            }
            else{
              await handleButtonInteraction(i);
            }
          });
        },
      };