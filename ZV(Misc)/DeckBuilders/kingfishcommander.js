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
const { all } = require("axios");
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
  name: `kingfishcommander`,
  aliases: [
    `kingfishcommanderdecks`,
    `kingfishcommanderhelp`,
    `helpkingfishcommander`,
    `decksmadebykingfishcommander`,
    `kingfish`,
    `kfc`,
    `kingfish_commander`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder(
        "Select an option below to view KingFish Commander's Decklists"
      )
      .addOptions(
         new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ), 
          new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription(
            "All of KingFish Commander's Decks"
          )
      );
    const row = new ActionRowBuilder().addComponents(select);
    const kingFishCommanderDecks = {
      ladderDecks: ["scimania"],
      memeDecks: ["lunchtime", "savagemayflower", "sunlord"],
      comboDecks: ["lunchtime", "sunlord"],
      midrangeDecks: ["lunchtime", "scimania", "sunlord"],
      allDecks: ["lunchtime", "savagemayflower", "scimania", "sunlord", ],
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
    const toBuildMeme = buildDeckString(kingFishCommanderDecks.memeDecks);
    const toBuildString = buildDeckString(kingFishCommanderDecks.allDecks);
    const toBuildCombo = buildDeckString(kingFishCommanderDecks.comboDecks);
    const toBuildMidrange = buildDeckString(
      kingFishCommanderDecks.midrangeDecks
    );
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
    const memerow = createButtons("sunlord", "lt");
    const lt = createButtons("helpmeme", "smf");
    const smf = createButtons("lunchtime", "sl");
    const sl = createButtons("savagemayflower", "memehelp");
    const midrangerow = createButtons("sunlord2", "lt2");
    const lt2 = createButtons("helpmidrange", "smania");
    const smania = createButtons("lunchtime2", "sl2");
    const sl2 = createButtons("scimania", "midrangehelp");
    const comborow = createButtons("sunlord3", "lt3");
    const lt3 = createButtons("helpcombo", "sl3");
    const sl3 = createButtons("lunchtime3", "combohelp");
    const alldecksrow = createButtons("sunlord4", "lt4");
    const lt4 = createButtons("helpall", "smf2");
    const smf2 = createButtons("lunchtime4", "smania2");
    const smania2 = createButtons("savagemayflower2", "sl4");
    const sl4 = createButtons("scimania2", "allhelp");
    const user = await client.users.fetch("1160392548423061516");
    const kfish = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below! 
      Select meme to view all the decks made by ${user.displayName}
Note: ${user.displayName} has ${kingFishCommanderDecks.memeDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const memekfish = createHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${kingFishCommanderDecks.memeDecks.length} Meme decks in Tbot`
    );
    const allkfish = createHelpEmbed(
      `${user.displayName} All Decks`,
      `My decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view All the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${kingFishCommanderDecks.allDecks.length} total decks in Tbot`
    );
    const combookfish = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo decks made by ${user.displayName} are ${toBuildCombo}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${kingFishCommanderDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangekfish = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My Midrange decks made by ${user.displayName} are ${toBuildMidrange}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${kingFishCommanderDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    const [result] =
      await db.query(`select midpets, savagemayflower, wimps
		from gsdecks gs 
    inner join bfdecks bf 
		on (gs.deckinfo = bf.deckinfo)
    inner join ntdecks nt
    on (gs.deckinfo = nt.deckinfo)`);
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
    const lunchtime = createDeckEmbed(result, "midpets");
    const savagemayflower = createDeckEmbed(result, "savagemayflower");
    const scimania = createDeckEmbed(result, "scimania");
    const sunlord = createDeckEmbed(result, "wimps");
    const m = await message.channel.send({
      embeds: [kfish],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if(value == "all") {
        await i.update({ embeds: [allkfish], components: [alldecksrow] });
      }
      else if (value == "ladder") {
        await i.reply({embeds: [scimania], flags: MessageFlags.Ephemeral});
      }
      else if (value == "meme") {
        await i.update({ embeds: [memekfish], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [combookfish], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangekfish], components: [midrangerow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpmeme: { embed: memekfish, component: memerow },
        memehelp: { embed: memekfish, component: memerow },
        helpall: { embed: allkfish, component: alldecksrow },
        allhelp: { embed: allkfish, component: alldecksrow },
        helpmidrange: { embed: midrangekfish, component: midrangerow },
        midrangehelp: { embed: midrangekfish, component: midrangerow },
        helpcombo: { embed: combookfish, component: comborow },
        combohelp: { embed: combookfish, component: comborow },
        sl: { embed: sunlord, component: sl },
        sunlord: { embed: sunlord, component: sl },
        sl2: { embed: sunlord, component: sl2 },
        sunlord2: { embed: sunlord, component: sl2 },
        sl3: { embed: sunlord, component: sl3 },
        sunlord3: { embed: sunlord, component: sl3 },
        sl4: { embed: sunlord, component: sl4 },
        sunlord4: { embed: sunlord, component: sl4 },
        smf: { embed: savagemayflower, component: smf },
        savagemayflower: { embed: savagemayflower, component: smf },
        smf2: { embed: savagemayflower, component: smf2 },
        savagemayflower2: { embed: savagemayflower, component: smf2 },
        lt: { embed: lunchtime, component: lt },
        lunchtime: { embed: lunchtime, component: lt },
        lt2: { embed: lunchtime, component: lt2 },
        lunchtime2: { embed: lunchtime, component: lt2 },
        lt3: { embed: lunchtime, component: lt3 },
        lunchtime3: { embed: lunchtime, component: lt3 },
        lt4: { embed: lunchtime, component: lt4 },
        lunchtime4: { embed: lunchtime, component: lt4 },
        smania: { embed: scimania, component: smania },
        scimania: { embed: scimania, component: smania },
        smania2: { embed: scimania, component: smania2 },
        scimania2: { embed: scimania, component: smania2 },
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
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
