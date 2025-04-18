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
    .setColor("Orange");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `tbone`,
  aliases: [`decksmadebytbone`, `tbonedecks`, `tbonehelp`, `helptbone`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Tbone's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("competitive")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Decks")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("View all of Tbone's decks")
      );
    const tboneDecks = {
      competitiveDecks: ["seacret"],
      memeDecks: ["huntgargs", "otkswabbie", "whalepharaoh"],
      aggroDecks: ["seacret"],
      comboDecks: ["otkswabbie", "whalepharaoh"],
      controlDecks: ["huntgargs", "whalepharaoh"],
      allDecks: ["huntgargs", "seacret", "otkswabbie", "whalepharaoh"],
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
    const toBuildMeme = new buildDeckString(tboneDecks.memeDecks);
    const toBuildComb = new buildDeckString(tboneDecks.comboDecks);
    const toBuildControl = new buildDeckString(tboneDecks.controlDecks);
    const toBuildString = new buildDeckString(tboneDecks.allDecks);
    const row = new ActionRowBuilder().addComponents(select);
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
    const alldecksrow = new CreateButtons("whalepharaoh", "hgargs");
    const hgargs = new CreateButtons("helpall", "sea");
    const sea = new CreateButtons("huntgargs", "os");
    const os = new CreateButtons("seacret", "wp");
    const wp = new CreateButtons("otkswabbie", "allhelp");
    const memerow = new CreateButtons("whalepharaoh2", "hgargs2");
    const hgargs2 = new CreateButtons("helpmeme", "os2");
    const os2 = new CreateButtons("huntgargs2", "wp2");
    const wp2 = new CreateButtons("otkswabbie2", "memehelp");
    const user = await client.users.fetch("625172218120372225");
    const comborow = new CreateButtons("whalepharaoh3", "os3");
    const os3 = new CreateButtons("helpcombo", "sea2");
    const sea2 = new CreateButtons("otkswabbie3", "wp3");
    const wp3 = new CreateButtons("seacret2", "combohelp");
    const controlrow = new CreateButtons("whalepharaoh4", "hgargs3");
    const hgargs3 = new CreateButtons("helpcontrol", "wp4");
    const [result] = await db.query(`select huntgargs, seacret, otkswabbie,
whalepharaoh from ebdecks eb 
inner join hgdecks hg
on (eb.deckinfo = hg.deckinfo) 
inner join smdecks sm
on (eb.deckinfo = sm.deckinfo)`);
    const tbone = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the decks made by ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${tboneDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const alltbone = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `My decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tboneDecks.allDecks.length} total decks in Tbot`
    );
    const memetbone = new CreateHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tboneDecks.memeDecks.length} Meme decks in Tbot`
    );
    const combotbone = new CreateHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo decks made by ${user.displayName} are ${toBuildComb}`,
      user.displayAvatarURL(),
      `To view the Combo decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tboneDecks.comboDecks.length} Combo decks in Tbot`
    );
    const controltbone = new CreateHelpEmbed(
      `${user.displayName} Control Decks`,
      `My Control decks made by ${user.displayName} are ${toBuildControl}`,
      user.displayAvatarURL(),
      `To view the Control decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tboneDecks.controlDecks.length} Control decks in Tbot`
    );
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
        .setColor("Orange");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const huntgargs = new CreateDeckEmbed(result, "huntgargs");
    const seacret = new CreateDeckEmbed(result, "seacret");
    const otkswabbie = new CreateDeckEmbed(result, "otkswabbie");
    const whalepharaoh = new CreateDeckEmbed(result, "whalepharaoh");
    const m = await message.channel.send({
      embeds: [tbone],
      components: [row],
    });

    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "competitive" || value == "aggro") {
        await i.reply({ embeds: [seacret], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memetbone], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [combotbone], components: [comborow] });
      } else if (value == "control") {
        await i.update({ embeds: [controltbone], components: [controlrow] });
      } else if (value == "all") {
        await i.update({ embeds: [alltbone], components: [alldecksrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpmeme: { embed: memetbone, component: memerow },
        memehelp: { embed: memetbone, component: memerow },
        helpcombo: { embed: combotbone, component: comborow },
        combohelp: { embed: combotbone, component: comborow },
        helpcontrol: { embed: controltbone, component: controlrow },
        controlhelp: { embed: controltbone, component: controlrow },
        helpall: { embed: alltbone, component: alldecksrow },
        allhelp: { embed: alltbone, component: alldecksrow },
        hgargs: { embed: huntgargs, component: hgargs },
        huntgargs: { embed: huntgargs, component: hgargs },
        hgargs2: { embed: huntgargs, component: hgargs2 },
        huntgargs2: { embed: huntgargs, component: hgargs2 },
        hgargs3: { embed: huntgargs, component: hgargs3 },
        huntgargs3: { embed: huntgargs, component: hgargs3 },
        sea: { embed: seacret, component: sea },
        seacret: { embed: seacret, component: sea },
        sea2: { embed: seacret, component: sea2 },
        seacret2: { embed: seacret, component: sea2 },
        os: { embed: otkswabbie, component: os },
        otkswabbie: { embed: otkswabbie, component: os },
        os2: { embed: otkswabbie, component: os2 },
        otkswabbie2: { embed: otkswabbie, component: os2 },
        os3: { embed: otkswabbie, component: os3 },
        otkswabbie3: { embed: otkswabbie, component: os3 },
        wp: { embed: whalepharaoh, component: wp },
        whalepharaoh: { embed: whalepharaoh, component: wp },
        wp2: { embed: whalepharaoh, component: wp2 },
        whalepharaoh2: { embed: whalepharaoh, component: wp2 },
        wp3: { embed: whalepharaoh, component: wp3 },
        whalepharaoh3: { embed: whalepharaoh, component: wp3 },
        wp4: { embed: whalepharaoh, component: wp4 },
        whalepharaoh4: { embed: whalepharaoh, component: wp4 },
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
