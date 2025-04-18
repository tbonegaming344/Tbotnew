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
    .setColor("#000000");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `thequestionmark`,
  aliases: [
    `thequestionmarkdecks`,
    `questionmark`,
    `questionmarkhelp`,
    `thequestionmarkhelp`,
    `helpthequestionmark`,
    `questionmarkdecks`,
    `helpthequestionmark`,
    `tqm`,
    `helptqm`,
    `tqmdecks`,
    `tqmhelp`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view tqm's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that are generally only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setValue("aggro")
          .setDescription(
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
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
          .setDescription("An option to view all of the decks made by tqm")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const theQuestionMarkDecks = {
      ladderDecks: ["cryoboy", "midred", "schoolyard", "splimps"],
      memeDecks: ["nuttin"],
      aggroDecks: ["schoolyard", "splimps"],
      comboDecks: ["cryoboy", "midred", "nuttin"],
      midrangeDecks: ["cryoboy", "midred"],
      allDecks: ["cryoboy", "midred", "nuttin", "schoolyard", "splimps"],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildLadderString = buildDeckString(
      theQuestionMarkDecks.ladderDecks
    );
    const toBuildAggroString = buildDeckString(theQuestionMarkDecks.aggroDecks);
    const toBuildComboString = buildDeckString(theQuestionMarkDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(
      theQuestionMarkDecks.midrangeDecks
    );
    const toBuildString = buildDeckString(theQuestionMarkDecks.allDecks);
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
    const alldecksrow = new CreateButtons("splimps", "cboy");
    const cboy = new CreateButtons("helpall", "mred");
    const mred = new CreateButtons("cyroboy", "nut");
    const nut = new CreateButtons("midred", "syard");
    const syard = new CreateButtons("nuttin", "spl");
    const spl = new CreateButtons("schoolyard", "allhelp");
    const ladderrow = new CreateButtons("splimps2", "cboy2");
    const cboy2 = new CreateButtons("helpladder", "mred2");
    const mred2 = new CreateButtons("cyroboy2", "syard2");
    const syard2 = new CreateButtons("midred2", "spl2");
    const spl2 = new CreateButtons("schoolyard2", "ladderhelp");
    const comborow = new CreateButtons("nuttin2", "cboy3");
    const cboy3 = new CreateButtons("helpcombo", "mred3");
    const mred3 = new CreateButtons("cyroboy3", "nut2");
    const nut2 = new CreateButtons("midred3", "combohelp");
    const midrangrow = new CreateButtons("midred4", "cboy4");
    const cboy4 = new CreateButtons("helpmidrange", "mred4");
    const mred4 = new CreateButtons("cyroboy4", "midrangehelp");
    const aggrorow = new CreateButtons("splimps3", "syard3");
    const syard3 = new CreateButtons("helpaggro", "spl3");
    const spl3 = new CreateButtons("schoolyard3", "aggrohelp");
    const user = await client.users.fetch("906888157272875048");
    const tqm = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${theQuestionMarkDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const alldecksEmbed = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `My commands for decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${theQuestionMarkDecks.allDecks.length} total decks in Tbot`
    );
    const ladderEmbed = new CreateHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My ladder decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${theQuestionMarkDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      `${user.displayName} Aggro Decks`,
      `My aggro decks made by ${user.displayName} are ${toBuildAggroString}`,
      user.displayAvatarURL(),
      `To view the aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: ${user.displayName} has ${theQuestionMarkDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My combo decks made by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${theQuestionMarkDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My midrange decks made by ${user.displayName} are ${toBuildMidrangeString}`,
      user.displayAvatarURL(),
      `To view the midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: ${user.displayName} has ${theQuestionMarkDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] =
      await db.query(`select cyroboy, midred, nutting, schoolyard, splimps from hgdecks hg 
      inner join ifdecks fi on (hg.deckinfo = fi.deckinfo)
      inner join czdecks cz on (hg.deckinfo = cz.deckinfo)
      inner join ntdecks nt on (hg.deckinfo = nt.deckinfo)
      inner join spdecks sp on (hg.deckinfo = sp.deckinfo)`);
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
        .setColor("#000000");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const cyroboy = new CreateDeckEmbed(result, "cyroboy");
    const nuttin = new CreateDeckEmbed(result, "nutting");
    const midred = new CreateDeckEmbed(result, "midred");
    const schoolyard = new CreateDeckEmbed(result, "schoolyard");
    const splimps = new CreateDeckEmbed(result, "splimps");
    const m = await message.channel.send({ embeds: [tqm], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "meme") {
        await i.reply({ embeds: [nuttin], flags: MessageFlags.Ephemeral });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangrow] });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
    }
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpladder: { embed: ladderEmbed, component: ladderrow },
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpaggro: { embed: aggroEmbed, component: aggrorow },
        aggrohelp: { embed: aggroEmbed, component: aggrorow },
        helpcombo: { embed: comboEmbed, component: comborow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpmidrange: { embed: midrangeEmbed, component: midrangrow },
        midrangehelp: { embed: midrangeEmbed, component: midrangrow },
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        cboy: { embed: cyroboy, component: cboy },
        cyroboy: { embed: cyroboy, component: cboy },
        cboy2: { embed: cyroboy, component: cboy2 },
        cyroboy2: { embed: cyroboy, component: cboy2 },
        cboy3: { embed: cyroboy, component: cboy3 },
        cyroboy3: { embed: cyroboy, component: cboy3 },
        cboy4: { embed: cyroboy, component: cboy4 },
        cyroboy4: { embed: cyroboy, component: cboy4 },
        spl: { embed: splimps, component: spl },
        splimps: { embed: splimps, component: spl },
        spl2: { embed: splimps, component: spl2 },
        splimps2: { embed: splimps, component: spl2 },
        spl3: { embed: splimps, component: spl3 },
        splimps3: { embed: splimps, component: spl3 },
        nut: { embed: nuttin, component: nut },
        nuttin: { embed: nuttin, component: nut },
        nut2: { embed: nuttin, component: nut2 },
        nuttin2: { embed: nuttin, component: nut2 },
        mred: { embed: midred, component: mred },
        midred: { embed: midred, component: mred },
        mred2: { embed: midred, component: mred2 },
        midred2: { embed: midred, component: mred2 },
        mred3: { embed: midred, component: mred3 },
        midred3: { embed: midred, component: mred3 },
        mred4: { embed: midred, component: mred4 },
        midred4: { embed: midred, component: mred4 },
        syard: { embed: schoolyard, component: syard },
        schoolyard: { embed: schoolyard, component: syard },
        syard2: { embed: schoolyard, component: syard2 },
        schoolyard2: { embed: schoolyard, component: syard2 },
        syard3: { embed: schoolyard, component: syard3 },
        schoolyard3: { embed: schoolyard, component: syard3 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction.",
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
