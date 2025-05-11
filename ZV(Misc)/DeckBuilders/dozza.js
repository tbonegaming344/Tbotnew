const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
const db = require("../../index.js");
/**
 * The CreateHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#5a5547");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `dozza`,
  aliases: [`decksmadebydozza`, `helpdozza`, `dozzahelp`, `dozzadecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view dozza's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setEmoji("<:ladder:1271503994857979964>")
          .setDescription('Decks that mostly only good for ranked games'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setValue("aggro")
          .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
          new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription('View all of dozza\'s decks')
      );
    const row = new ActionRowBuilder().addComponents(select);
    const dozzaDecks = {
      ladderDecks: ["trickmech"],
      memeDecks: ["dozzamech", "highlander"],
      aggroDecks: ["dozzamech", "trickmech"],
      midrangeDecks: ["highlander"],
      allDecks: ["dozzamech", "highlander", "trickmech"],
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
    const toBuildMeme = buildDeckString(dozzaDecks.memeDecks);
    const toBuildAggro = buildDeckString(dozzaDecks.aggroDecks);
    const toBuildString = buildDeckString(dozzaDecks.allDecks);
    /**
     * The CreateButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
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
    const meme = new CreateButtons("highlander", "dm");
    const dm = new CreateButtons("memehelp", "hland");
    const hland = new CreateButtons("dozzamech", "helpmeme");
    const aggrorow = new CreateButtons("trickmech", "dm2");
    const dm2 = new CreateButtons("aggrohelp", "tmech");
    const tmech= new CreateButtons("dozzamech2", "helpaggro");
    const alldecksrow = new CreateButtons("trickmech2", "dm3");
    const dm3 = new CreateButtons("allhelp", "hland2");
    const hland2 = new CreateButtons("dozzamech", "tmech2");
    const tmech2 = new CreateButtons("highlander2", "allhelp");
    const [result] = await db.query(`select dozzamech, highlander, trickmech
from zmdecks zm 
inner join wkdecks wk 
on (zm.deckinfo = wk.deckinfo)`);
const user = await client.users.fetch("1143937777763889324");
    const dozza = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: Dozza has ${dozzaDecks.allDecks.length} total decks in Tbot`,
        user.displayAvatarURL()
    );
    const alldozza = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `My decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.allDecks.length} total decks in Tbot`
    )
      const middozza = new CreateHelpEmbed(
        `${user.displayName} Midrange Decks`,
        `My Midrange decks made by ${user.displayName} are ${toBuildMid}`,
        user.displayAvatarURL(),
        `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.midrangeDecks.length} Midrange decks in Tbot`
      )
      const memedozza = new CreateHelpEmbed(
        `${user.displayName} Meme Decks`,
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
        user.displayAvatarURL(),
        `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.memeDecks.length} Meme decks in Tbot`
      )
      const aggrodozza = new CreateHelpEmbed(
        `${user.displayName} Aggro Decks`,
        `My Aggro decks made by ${user.displayName} are ${toBuildAggro}`,
        user.displayAvatarURL(),
        `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.aggroDecks.length} Aggro decks in Tbot`
      )
       /**
     * The CreateDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
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
          .setColor("#5a5547");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    const dozzamech = new CreateDeckEmbed(result, "dozzamech");
    const highlander = new CreateDeckEmbed(result, "highlander");
    const trickmech = new CreateDeckEmbed(result, "trickmech");
    const m = await message.channel.send({
      embeds: [dozza],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i){
      const value = i.values[0]
      if(value == "ladder"){
        await i.reply({embeds: [trickmech], flags: MessageFlags.Ephemeral})
      }
      else if(value == "midrange"){
        await i.update({embeds: [middozza], components: [midrange]});
      }
      else if(value == "meme"){
        await i.update({embeds: [memedozza], components: [meme]});
      }
      else if(value == "aggro"){
        await i.update({embeds: [aggrodozza], components: [aggrorow]});
      }
      else if(value == "all"){
        await i.update({embeds: [alldozza], components: [alldecksrow]})
      }
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        aggrohelp: {embed: aggrodozza, component: aggrorow},
        helpaggro: {embed: aggrodozza, component: aggrorow},
        memehelp: {embed: memedozza, component: meme},
        helpmeme: {embed: memedozza, component: meme},
        midhelp: {embed: middozza, component: midrange},
        helpmid: {embed: middozza, component: midrange},
        allhelp: {embed: alldozza, component: alldecksrow},
        helpall: {embed: alldozza, component: alldecksrow},
        hland: {embed: highlander, component: hland},
        highlander: {embed: highlander, component: hland},
        hland2: {embed: highlander, component: hland2},
        higlander2: {embed: highlander, component: hland2},
        dm: {embed: dozzamech, component: dm},
        dozzamech: {embed: dozzamech, component: dm},
        dm2: {embed: dozzamech, component: dm2},
        dozzamech2: {embed: dozzamech, component: dm2},
        dm3: {embed: dozzamech, component: dm3},
        dozzamech3: {embed: dozzamech, component: dm3},
        tmech: {embed: trickmech, component: tmech},
        trickmech: {embed: trickmech, component: tmech},
        tmech2: {embed: trickmech, component: tmech2},
        trickmech2: {embed: trickmech, component: tmech2},
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Unknown Button Action", flags: MessageFlags.Ephemeral });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
    if(i.customId == "select"){
      await handleSelectMenu(i)
    }
    else {
      await handleButtonInteraction(i)
    }
    });
  },
};
