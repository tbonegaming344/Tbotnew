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
  name: `bowlingbulbenjoyer`,
  aliases: [
    `bowlingbulb`,
    `bowlingdecks`,
    `bolwingbulbhelp`,
    `bowlinghelp`,
    `bbe`,
    `bowlingbulbenjoyerdecks`,
    `bowlingbulbdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view bowlingbulb's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
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
          )
      );
    const row = new ActionRowBuilder().addComponents(select);
    const bowlingBulbEnjoyerDecks = {
      ladderDecks: ["bfmidgargs", "binaryflagwar", "goingnuts3"],
      comboDecks: ["binaryflagwar", "goingnuts3"],
      midrangeDecks: ["bfmidgargs", "binaryflagwar", "goingnuts3"],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildLadderString = buildDeckString(
      bowlingBulbEnjoyerDecks.ladderDecks
    );
    const toBuildComboString = buildDeckString(
      bowlingBulbEnjoyerDecks.comboDecks
    );
    const toBuildMidrangeString = buildDeckString(
      bowlingBulbEnjoyerDecks.midrangeDecks
    );
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
    const ladderrow = new CreateButtons("going3nuts", "bfmg");
    const bfmg = new CreateButtons("ladderhelp", "bfw");
    const bfw = new CreateButtons("bfmidgargs", "g3n");
    const g3n = new CreateButtons("binaryflagwar", "ladderhelp");
    const comborow = new CreateButtons("going3nuts2", "bfw2");
    const bfw2 = new CreateButtons("helpcombo", "g3n2");
    const g3n2 = new CreateButtons("binaryflagwar2", "combohelp");
    const midrangerow = new CreateButtons("going3nuts3", "bfmg2");
    const bfmg2 = new CreateButtons("helpmid", "bfw3");
    const bfw3 = new CreateButtons("bfmidgargs2", "g3n3");
    const g3n3 = new CreateButtons("binaryflagwar3", "midhelp");
    const [result] = await db.query(`select bfmidgargs, binaryflagwar, going3nuts 
		from zmdecks zm
		inner join ctdecks ct
		on (zm.deckinfo = ct.deckinfo)
    inner join bfdecks bf
		on (zm.deckinfo = bf.deckinfo)`);
    const user = await client.users.fetch("1051916947253629030");
    const bowlingbulbenjoyer = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks made by ${user.displayName} please select an option from the select menu below!
Select either ladder or midrange decks to view all of ${user.displayName} decks!
Note: ${user.displayName} has ${bowlingBulbEnjoyerDecks.ladderDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const ladderEmbed = new CreateHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My Ladder decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the Ladder Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all Ladder decks!
Note: ${user.displayName} has ${bowlingBulbEnjoyerDecks.ladderDecks.length} Ladder decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo decks made by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the Combo Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all Combo decks!
Note: ${user.displayName} has ${bowlingBulbEnjoyerDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My Midrange decks made by ${user.displayName} are ${toBuildMidrangeString}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all Midrange decks!
Note: ${user.displayName} has ${bowlingBulbEnjoyerDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
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
    const bfmidgargs = new CreateDeckEmbed(result, "bfmidgargs");
    const binaryflagwar = new CreateDeckEmbed(result, "binaryflagwar");
    const going3nuts = new CreateDeckEmbed(result, "going3nuts");
    const m = await message.channel.send({
      embeds: [bowlingbulbenjoyer],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
    }
    async function handleButtonInteraction(i) {
      const buttonActions = {
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpladder: { embed: ladderEmbed, component: ladderrow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcombo: { embed: comboEmbed, component: comborow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bfw: { embed: binaryflagwar, component: bfw },
        binaryflagwar: { embed: binaryflagwar, component: bfw },
        bfw2: { embed: binaryflagwar, component: bfw2 },
        binaryflagwar2: { embed: binaryflagwar, component: bfw2 },
        bfw3: { embed: binaryflagwar, component: bfw3 },
        binaryflagwar3: { embed: binaryflagwar, component: bfw3 },
        g3n: { embed: going3nuts, component: g3n },
        going3nuts: { embed: going3nuts, component: g3n },
        g3n2: { embed: going3nuts, component: g3n2 },
        going3nuts2: { embed: going3nuts, component: g3n2 },
        g3n3: { embed: going3nuts, component: g3n3 },
        going3nuts3: { embed: going3nuts, component: g3n3 },
        bfmg: { embed: bfmidgargs, component: bfmg },
        bfmidgargs: { embed: bfmidgargs, component: bfmg },
        bfmg2: { embed: bfmidgargs, component: bfmg2 },
        bfmidgargs2: { embed: bfmidgargs, component: bfmg2 },
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
