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
    .setColor("Red");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `boris`,
  aliases: [`borishelp`, `borisdecks`, `decksmadebyboris`, `helpboris`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("select an option below to view Boris's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
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
          .setLabel("Control Deck")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("control"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Decks")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setDescription("All the decks made by Boris")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const borisDecks = {
      competitiveDecks: ["lockthebathroom", "shamcontrol"],
      memeDecks: ["lifecouldbedream", "mspotk"],
      comboDecks: ["mspotk"],
      controldecks: ["shamcontrol"],
      tempoDecks: ["lifecouldbedream", "lockthebathroom"],
      allDecks: ["lifecouldbedream", "lockthebathroom", "mspotk", "shamcontrol"],
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
    const toBuildString = buildDeckString(borisDecks.allDecks);
    const toBuildTempo = buildDeckString(borisDecks.tempoDecks);
    const toBuildMeme = buildDeckString(borisDecks.memeDecks);
    const toBuildComp = buildDeckString(borisDecks.competitiveDecks);
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
    const comp = createButtons("shamcontrol", "ltbr"); 
    const ltbr = createButtons("helpcomp", "scon"); 
    const scon = createButtons("lockthebathroom", "comphelp");
    const tempo = createButtons("lockthebathroom2", "lcbd");
    const lcbd = createButtons("helptempo", "ltbr2");
    const ltbr2 = createButtons("lifecouldbedream", "tempohelp");
    const alldecksrow = createButtons("shamcontrol2", "lcbd2");
    const lcbd2 = createButtons("helpall", "ltbr3");
    const ltbr3 = createButtons("lifecouldbedream2", "msp");
    const msp = createButtons("lockthebathroom3", "scon2");
    const scon2 = createButtons("mspotk", "allhelp");
    const memerow = createButtons("mspotk2", "lcbd3");
    const lcbd3 = createButtons("helpmeme", "msp2");
    const msp2 = createButtons("lifecouldbedream3", "memehelp");
    const [result] = await db.query(`SELECT lockin, lcbd, mspotk, shamcontrol FROM bfdecks bf
inner join ccdecks cc on (bf.deckinfo = cc.deckinfo) inner join bcdecks bc on (bf.deckinfo = bc.deckinfo)`);
    const user = await client.users.fetch("705167235429433435");
    const boris = createHelpEmbed(
      `${user.displayName} Decks`,
      `To find out more about the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${borisDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const compbor = createHelpEmbed(
      `${user.displayName} Competitive Decks`,
      `My competitive decks made by ${user.displayName} are ${toBuildComp}`,
      user.displayAvatarURL(),
      `To view the Competitive Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${borisDecks.competitiveDecks.length} competitive decks in Tbot`
    );
    const tempbor = createHelpEmbed(
      `${user.displayName} Tempo Decks`,
      `My tempo decks made by ${user.displayName} are ${toBuildTempo}`,
      user.displayAvatarURL(),
      `To view the tempo Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${borisDecks.tempoDecks.length} tempo decks in Tbot`
    );
    const memebor = createHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the meme Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${borisDecks.memeDecks.length} meme decks in Tbot`
    );
    const allbor = createHelpEmbed(
      `${user.displayName} All Decks`,
      `My decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${borisDecks.allDecks.length} total decks in Tbot`
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
        .setColor("White");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const lockin = createDeckEmbed(result, "lockin");
    const lcbdream = createDeckEmbed(result, "lcbd");
    const mspotk = createDeckEmbed(result, "mspotk");
    const shamcontrol = createDeckEmbed(result, "shamcontrol");
    const m = await message.channel.send({
      embeds: [boris],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "comp") {
        await i.update({ embeds: [compbor], components: [comp] });
      } else if (value == "meme") {
        await i.update({ embeds: [memebor], components: [memerow] });
      } 
      else if (value == "control") {
        await i.reply({embeds: [shamcontrol], flags: MessageFlags.Ephemeral});
      }
      else if (value == "combo") {
        await i.reply({ embeds: [mspotk], flags: MessageFlags.Ephemeral });
      } else if (value == "tempo") {
        await i.update({ embeds: [tempbor], components: [tempo] });
      } else if (value == "all") {
        await i.update({ embeds: [allbor], components: [alldecksrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpmeme: { embed: memebor, component: memerow },
        memehelp: { embed: memebor, component: memerow },
        ltbr: { embed: lockin, component: ltbr },
        lockthebathroom: { embed: lockin, component: ltbr },
        ltbr2: { embed: lockin, component: ltbr2 },
        lockthebathroom2: { embed: lockin, component: ltbr2 },
        ltbr3: { embed: lockin, component: ltbr3 },
        lockthebathroom3: { embed: lockin, component: ltbr3 },
        lcbd: { embed: lcbdream, component: lcbd },
        lifecouldbedream: { embed: lcbdream, component: lcbd },
        lcbd2: { embed: lcbdream, component: lcbd2 },
        lifecouldbedream2: { embed: lcbdream, component: lcbd2 },
        lcbd3: { embed: lcbdream, component: lcbd3 },
        lifecouldbedream3: { embed: lcbdream, component: lcbd3 },
        msp: { embed: mspotk, component: msp },
        mspotk: { embed: mspotk, component: msp },
        msp2: { embed: mspotk, component: msp2 },
        mspotk2: { embed: mspotk, component: msp2 },
        allhelp: { embed: allbor, component: alldecksrow },
        helpall: { embed: allbor, component: alldecksrow },
        tempohelp: { embed: tempbor, component: tempo },
        helptempo: { embed: tempbor, component: tempo },
        comphelp: { embed: compbor, component: comp },
        helpcomp: { embed: compbor, component: comp },
        scon: { embed: shamcontrol, component: scon },
        shamcontrol: { embed: shamcontrol, component: scon },
        scon2: { embed: shamcontrol, component: scon2 },
        shamcontrol2: { embed: shamcontrol, component: scon2 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unkown Button Interaction",
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
