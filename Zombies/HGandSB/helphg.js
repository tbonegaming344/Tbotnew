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
  name: `helphg`,
  aliases: [
    `hgcommands`,
    `commandshg`,
    `hghelp`,
    `helphuge`,
    `helphugegigantacus`,
    `hgdecks`,
    `deckshg`,
    `hugegigantacushelp`,
    `hugegigantacusdecks`,
  ],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder(
        "Select an option below to view Huge Gigantacus decklists"
      )
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
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
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Huge Gigantacus Decks")
          .setValue("all")
          .setDescription("View all Huge Gigantacus decks")
          .setEmoji("<:hg:1087736553557725217>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const hugeGigantacusDecks = {
      budgetDecks: ["budgethg"],
      competitiveDecks: ["telimps"],
      ladderDecks: ["cryoboy", "gravepiratestache", "gravestache"],
      memeDecks: ["conjureleap", "frozentelimps", "otkswabbie", "ykm"],
      aggroDecks: ["gravepiratestache"],
      comboDecks: [
        "budgetykm",
        "cryoboy",
        "frozentelimps",
        "gravepiratestache",
        "gravestache",
        "otkswabbie",
        "telimps",
        "ykm",
      ],
      controlDecks: ["frozentelimps", "telimps"],
      midrangeDecks: ["cryoboy", "ykm"],
      tempoDecks: ["conjureleap"],
      allDecks: [
        "budgetykm",
        "conjureleap",
        "cryoboy",
        "frozentelimps",
        "gravepiratestache",
        "gravestache",
        "otkswabbie",
        "telimps",
        "ykm",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(hugeGigantacusDecks.allDecks);
    const toBuildLadderString = buildDeckString(
      hugeGigantacusDecks.ladderDecks
    );
    const toBuildMemeString = buildDeckString(hugeGigantacusDecks.memeDecks);
    const toBuildComboString = buildDeckString(hugeGigantacusDecks.comboDecks);
    const toBuildControlString = buildDeckString(
      hugeGigantacusDecks.controlDecks
    );
    const toBuildMidrangeString = buildDeckString(
      hugeGigantacusDecks.midrangeDecks
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
    const alldecksrow = new CreateButtons("youngkenmartin", "bgus");
    const bgus = new CreateButtons("helpall", "cl");
    const cl = new CreateButtons("budgetgus", "cboy");
    const cboy = new CreateButtons("conjureleap", "ft");
    const ft = new CreateButtons("cryoboy", "gps");
    const gps = new CreateButtons("frozentelimps", "gs");
    const gs = new CreateButtons("gravepiratestache", "otks");
    const otks = new CreateButtons("gravestache", "ti");
    const ti = new CreateButtons("otkswabbie", "ykm");
    const ykm = new CreateButtons("telimps", "allhelp");
    const ladderrow = new CreateButtons("gravestache2", "cboy2");
    const cboy2 = new CreateButtons("helpladder", "gps2");
    const gps2 = new CreateButtons("cryoboy2", "gs2");
    const gs2 = new CreateButtons("gravepiratestache2", "ladderhelp");
    const memerow = new CreateButtons("youngkenmartin2", "cl2");
    const cl2 = new CreateButtons("helpmeme", "ft2");
    const ft2 = new CreateButtons("conjureleap2", "otks2");
    const otks2 = new CreateButtons("frozentelimps2", "ykm2");
    const ykm2 = new CreateButtons("otkswabbie2", "memehelp");
    const comborow = new CreateButtons("youngkenmartin3", "bgus2");
    const bgus2 = new CreateButtons("helpcombo", "cboy3");
    const cboy3 = new CreateButtons("budgetgus2", "ft3");
    const ft3 = new CreateButtons("cryoboy3", "gps3");
    const gps3 = new CreateButtons("frozentelimps3", "gs3");
    const gs3 = new CreateButtons("gravepiratestache3", "otks3");
    const otks3 = new CreateButtons("gravestache3", "ti2");
    const ti2 = new CreateButtons("otkswabbie3", "ykm3");
    const ykm3 = new CreateButtons("telimps2", "combohelp");
    const controlrow = new CreateButtons("telimps3", "ft4");
    const ft4 = new CreateButtons("helpcontrol", "ti3");
    const ti3 = new CreateButtons("frozentelimps4", "controlhelp");
    const midrangerow = new CreateButtons("youngkenmartin3", "cboy4");
    const cboy4 = new CreateButtons("helpmidrange", "ykm4");
    const ykm4 = new CreateButtons("cryoboy4", "midrangehelp");
    const allEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Decks",
      `My commands for Huge-Gigantacus(HG) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: there are ${hugeGigantacusDecks.allDecks.length} total decks for Huge Gigantacus in Tbot`
    );
    const embed = new CreateHelpEmbed(
      "Huge Gigantacus Decks",
      `To view the Huge Gigantacus decks please select an option from the select menu below!
Note: there are ${hugeGigantacusDecks.allDecks.length} total decks for Huge Gigantacus in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Ladder Decks",
      `My ladder decks for Huge-Gigantacus(HG) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the ladder Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: there are ${hugeGigantacusDecks.ladderDecks.length} ladder decks for Huge Gigantacus in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Meme Decks",
      `My meme decks for Huge-Gigantacus(HG) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the meme Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: there are ${hugeGigantacusDecks.memeDecks.length} meme decks for Huge Gigantacus in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Combo Decks",
      `My combo decks for Huge-Gigantacus(HG) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the combo Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: there are ${hugeGigantacusDecks.comboDecks.length} combo decks for Huge Gigantacus in Tbot`
    );
    const controlEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Control Decks",
      `My control decks for Huge-Gigantacus(HG) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the control Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: there are ${hugeGigantacusDecks.controlDecks.length} control decks for Huge Gigantacus in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Midrange Decks",
      `My midrange decks for Huge-Gigantacus(HG) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the midrange Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: there are ${hugeGigantacusDecks.midrangeDecks.length} midrange decks for Huge Gigantacus in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM hgdecks`);
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
        .setColor("#FFC0CB");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetykm = new CreateDeckEmbed(result, "budgetykm");
    const conjureleap = new CreateDeckEmbed(result, "conjureleap");
    const cryoboy = new CreateDeckEmbed(result, "cyroboy");
    const frozentelimps = new CreateDeckEmbed(result, "frozentelimps");
    const gravepiratestache = new CreateDeckEmbed(result, "gps");
    const gravestache = new CreateDeckEmbed(result, "gravestache");
    const otkswabbie = new CreateDeckEmbed(result, "otkswabbie");
    const telimps = new CreateDeckEmbed(result, "telimps");
    const youngkenmartin = new CreateDeckEmbed(result, "ykm");
    const t = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({ embeds: [budgetykm], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.reply({ embeds: [telimps], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.reply({
          embeds: [gravepiratestache],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({ embeds: [conjureleap], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "bgus" || i.customId == "budgetgus") {
        await i.update({ embeds: [budgetykm], components: [bgus] });
      } else if (i.customId == "bgus2" || i.customId == "budgetgus2") {
        await i.update({ embeds: [budgetykm], components: [bgus2] });
      } else if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "helpcontrol" || i.customId == "controlhelp") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (i.customId == "helpmidrange" || i.customId == "midrangehelp") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "cl" || i.customId == "conjureleap") {
        await i.update({ embeds: [conjureleap], components: [cl] });
      } else if (i.customId == "cl2" || i.customId == "conjureleap2") {
        await i.update({ embeds: [conjureleap], components: [cl2] });
      } else if (i.customId == "cl3" || i.customId == "conjureleap3") {
        await i.update({ embeds: [conjureleap], components: [cl3] });
      } else if (i.customId == "ft" || i.customId == "frozentelimps") {
        await i.update({ embeds: [frozentelimps], components: [ft] });
      } else if (i.customId == "ft2" || i.customId == "frozentelimps2") {
        await i.update({ embeds: [frozentelimps], components: [ft2] });
      } else if (i.customId == "ft3" || i.customId == "frozentelimps3") {
        await i.update({ embeds: [frozentelimps], components: [ft3] });
      } else if (i.customId == "ft4" || i.customId == "frozentelimps4") {
        await i.update({ embeds: [frozentelimps], components: [ft4] });
      } else if (i.customId == "gs" || i.customId == "gravestache") {
        await i.update({ embeds: [gravestache], components: [gs] });
      } else if (i.customId == "gs2" || i.customId == "gravestache2") {
        await i.update({ embeds: [gravestache], components: [gs2] });
      } else if (i.customId == "gs3" || i.customId == "gravestache3") {
        await i.update({ embeds: [gravestache], components: [gs3] });
      } else if (i.customId == "gps" || i.customId == "gravepiratestache") {
        await i.update({ embeds: [gravepiratestache], components: [gps] });
      } else if (i.customId == "gps2" || i.customId == "gravepiratestache2") {
        await i.update({ embeds: [gravepiratestache], components: [gps2] });
      } else if (i.customId == "gps3" || i.customId == "gravepiratestache3") {
        await i.update({ embeds: [gravepiratestache], components: [gps3] });
      }
      //CyroBoy
      else if (i.customId == "cboy" || i.customId == "cryoboy") {
        await i.update({ embeds: [cryoboy], components: [cboy] });
      } else if (i.customId == "cboy2" || i.customId == "cryoboy2") {
        await i.update({ embeds: [cryoboy], components: [cboy2] });
      } else if (i.customId == "cboy3" || i.customId == "cryoboy3") {
        await i.update({ embeds: [cryoboy], components: [cboy3] });
      } else if (i.customId == "cboy4" || i.customId == "cryoboy4") {
        await i.update({ embeds: [cryoboy], components: [cboy4] });
      } else if (i.customId == "otks" || i.customId == "otkswabbie") {
        await i.update({ embeds: [otkswabbie], components: [otks] });
      } else if (i.customId == "otks2" || i.customId == "otkswabbie2") {
        await i.update({ embeds: [otkswabbie], components: [otks2] });
      } else if (i.customId == "otks3" || i.customId == "otkswabbie3") {
        await i.update({ embeds: [otkswabbie], components: [otks3] });
      } else if (i.customId == "ti" || i.customId == "telimps") {
        await i.update({ embeds: [telimps], components: [ti] });
      } else if (i.customId == "ti2" || i.customId == "telimps2") {
        await i.update({ embeds: [telimps], components: [ti2] });
      } else if (i.customId == "ti3" || i.customId == "telimps3") {
        await i.update({ embeds: [telimps], components: [ti3] });
      } else if (i.customId == "ykm" || i.customId == "youngkenmartin") {
        await i.update({ embeds: [youngkenmartin], components: [ykm] });
      } else if (i.customId == "ykm2" || i.customId == "youngkenmartin2") {
        await i.update({ embeds: [youngkenmartin], components: [ykm2] });
      } else if (i.customId == "ykm3" || i.customId == "youngkenmartin3") {
        await i.update({ embeds: [youngkenmartin], components: [ykm3] });
      } else if (i.customId == "ykm4" || i.customId == "youngkenmartin4") {
        await i.update({ embeds: [youngkenmartin], components: [ykm4] });
      }
    }
    const collector = t.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
