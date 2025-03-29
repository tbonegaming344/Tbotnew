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
  name: `helpbf`,
  aliases: [
    `bfhelp`,
    `bfcommands`,
    `commandsbf`,
    `helpfreeze`,
    `helpbrainfreeze`,
    `brainfreezehelp`,
    `bfdecks`,
    `brainfreezedecks`,
  ],
  category: `Brain Freeze(BF)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Brainfreeze's decklists")
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
          .setLabel("Aggro Decks")
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
          .setLabel("Control Deck")
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
          .setLabel("Tempo Decks")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Brainfreeze Decks")
          .setValue("all")
          .setDescription("View all of Brainfreeze's decks")
          .setEmoji("<:Brain_FreezeH:1088196729192587284>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const brainFreezeDecks = {
      budgetDecks: ["budgetbf"],
      competitiveDecks: ["lockthebathroom"],
      ladderDecks: ["bfmidgargs", "bfplankcontrol", "raiserpackage"],
      memeDecks: [
        "gargolithtech",
        "himpter",
        "lunchtime",
        "petmop",
        "racism",
        "watersports",
      ],
      aggroDecks: ["budgetbf", "slavery"],
      comboDecks: ["himpter", "watersports"],
      controlDecks: ["bfplankcontrol"],
      midrangeDecks: [
        "bfmidgargs",
        "gargolithtech",
        "himpter",
        "lunchtime",
        "petmop",
        "watersports",
      ],
      tempoDecks: ["lockthebathroom", "racism", "raiserpackage"],
      allDecks: [
        "bfmidgargs",
        "bfplankcontrol",
        "budgetbf",
        "gargolithtech",
        "himpter",
        "lunchtime",
        "lockthebathroom",
        "petmop",
        "racism",
        "raiserpackage",
        "slavery",
        "watersports",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(brainFreezeDecks.allDecks);
    const toBuildLadderString = buildDeckString(brainFreezeDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(brainFreezeDecks.memeDecks);
    const toBuildAggroString = buildDeckString(brainFreezeDecks.aggroDecks);
    const toBuildComboString = buildDeckString(brainFreezeDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(
      brainFreezeDecks.midrangeDecks
    );
    const toBuildTempoString = buildDeckString(brainFreezeDecks.tempoDecks);
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
    const alldecksrow = new CreateButtons("watersports", "bfmg");
    const bfmg = new CreateButtons("helpall", "bbf");
    const bbf = new CreateButtons("bfmidgargs", "bfpc");
    const bfpc = new CreateButtons("budgetbf", "gt");
    const gt = new CreateButtons("bfplankcontrol", "hi");
    const hi = new CreateButtons("gargolithtech", "lt");
    const lt = new CreateButtons("himps", "ltbr");
    const ltbr = new CreateButtons("lunchtime", "pm");
    const pm = new CreateButtons("lockthebathroom", "rac");
    const rac = new CreateButtons("petmop", "rp");
    const rp = new CreateButtons("racism", "sl");
    const sl = new CreateButtons("raiserpackage", "ws");
    const ws = new CreateButtons("slavery", "allhelp");
    const ladderrow = new CreateButtons("watersports", "bfmg2");
    const bfmg2 = new CreateButtons("helpladder", "bfpc2");
    const bfpc2 = new CreateButtons("bfmidgargs2", "rp2");
    const rp2 = new CreateButtons("bfplancontrol2", "ladderhelp");
    const memerow = new CreateButtons("watersports2", "gt2");
    const gt2 = new CreateButtons("helpmeme", "hi2");
    const hi2 = new CreateButtons("gargolithtech2", "lt2");
    const lt2 = new CreateButtons("himps2", "pm2");
    const pm2 = new CreateButtons("lunchtime2", "rac2");
    const rac2 = new CreateButtons("petmop2", "sl2");
    const sl2 = new CreateButtons("racism2", "ws2");
    const ws2 = new CreateButtons("slavery2", "memehelp");
    const aggrorow = new CreateButtons("slavery3", "bbf2");
    const bbf2 = new CreateButtons("helpaggro", "sl3");
    const sl3 = new CreateButtons("budgetbf2", "aggrohelp");
    const comborow = new CreateButtons("watersports3", "hi3");
    const hi3 = new CreateButtons("helpcombo", "ws3");
    const ws3 = new CreateButtons("himps3", "combohelp");
    const midrangerow = new CreateButtons("watersports4", "bfmg3");
    const bfmg3 = new CreateButtons("helpmid", "gt3");
    const gt3 = new CreateButtons("bfmidgargs3", "hi4");
    const hi4 = new CreateButtons("gargolithtech3", "lt3");
    const lt3 = new CreateButtons("himps4", "pm3");
    const pm3 = new CreateButtons("lunchtime3", "ws4");
    const ws4 = new CreateButtons("petmop3", "midhelp");
    const temporow = new CreateButtons("raiserpackage3", "ltbr2");
    const ltbr2 = new CreateButtons("helptempo", "rac3");
    const rac3 = new CreateButtons("lockthebathroom2", "rp3");
    const rp3 = new CreateButtons("racism3", "tempohelp");
    const [result] = await db.query(`SELECT * FROM bfdecks`);
    const allEmbed = new CreateHelpEmbed(
      "Brainfreeze Decks",
      `My commands for Brain Freeze(BF) are ${toBuildString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze decks please use the commands listed above or click on the buttons below!
Note: Brainfreeze has ${brainFreezeDecks.allDecks.length} total decks in Tbot`
    );
    const embed = new CreateHelpEmbed(
      "Brainfreeze Decks",
      `To view the Brain Freeze decks please select an option from the select menu below!
Note: Brainfreeze has ${brainFreezeDecks.allDecks.length} total decks in Tbot`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Brainfreeze Ladder Decks",
      `My Ladder decks for Brain Freeze(BF) are ${toBuildLadderString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Ladder decks please use the commands listed above or click on the buttons below to navigate through all Ladder Decks!
Note: Brainfreeze has ${brainFreezeDecks.ladderDecks.length} Ladder decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Brainfreeze Meme Decks",
      `My Meme decks for Brain Freeze(BF) are ${toBuildMemeString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Meme decks please use the commands listed above or click on the buttons below to navigate through all Meme Decks!
Note: Brainfreeze has ${brainFreezeDecks.memeDecks.length} Meme decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Brainfreeze Aggro Decks",
      `My Aggro decks for Brain Freeze(BF) are ${toBuildAggroString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Aggro decks please use the commands listed above or click on the buttons below to navigate through all Aggro Decks!
Note: Brainfreeze has ${brainFreezeDecks.aggroDecks.length} Aggro decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Brainfreeze Combo Decks",
      `My Combo decks for Brain Freeze(BF) are ${toBuildComboString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Combo decks please use the commands listed above or click on the buttons below to navigate through all Combo Decks!
Note: Brainfreeze has ${brainFreezeDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Brainfreeze Midrange Decks",
      `My Midrange decks for Brain Freeze(BF) are ${toBuildMidrangeString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Midrange decks please use the commands listed above or click on the buttons below to navigate through all Midrange Decks!
Note: Brainfreeze has ${brainFreezeDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    const tempoEmbed = new CreateHelpEmbed(
      "Brainfreeze Tempo Decks",
      `My Tempo decks for Brain Freeze(BF) are ${toBuildTempoString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Tempo decks please use the commands listed above or click on the buttons below to navigate through all Tempo Decks!
Note: Brainfreeze has ${brainFreezeDecks.tempoDecks.length} Tempo decks in Tbot`
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
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const bfmidgargs = new CreateDeckEmbed(result, "bfmidgargs");
    const bfplankcontrol = new CreateDeckEmbed(result, "bfplankcontrol");
    const budgetbf = new CreateDeckEmbed(result, "budgetbf");
    const gargolithtech = new CreateDeckEmbed(result, "gargolithtech");
    const himps = new CreateDeckEmbed(result, "himps");
    const lockthebathroom = new CreateDeckEmbed(result, "lockin");
    const lunchtime = new CreateDeckEmbed(result, "midpets");
    const petmop = new CreateDeckEmbed(result, "petmop");
    const racism = new CreateDeckEmbed(result, "racism");
    const raiserpackage = new CreateDeckEmbed(result, "raiserpackage");
    const slavery = new CreateDeckEmbed(result, "slavery");
    const watersports = new CreateDeckEmbed(result, "watersports");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetbf], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.reply({
          embeds: [lockthebathroom],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.reply({
          embeds: [bfplankcontrol],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "helpaggro" || i.customId == "aggrohelp") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "helpmid" || i.customId == "midhelp") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "helptempo" || i.customId == "tempohelp") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      } else if (i.customId == "bbf" || i.customId == "budgetbf") {
        await i.update({ embeds: [budgetbf], components: [bbf] });
      } else if (i.customId == "bbf2" || i.customId == "budgetbf2") {
        await i.update({ embeds: [budgetbf], components: [bbf2] });
      } else if (i.customId == "lt" || i.customId == "lunchtime") {
        await i.update({ embeds: [lunchtime], components: [lt] });
      } else if (i.customId == "lt2" || i.customId == "lunchtime2") {
        await i.update({ embeds: [lunchtime], components: [lt2] });
      } else if (i.customId == "lt3" || i.customId == "lunchtime3") {
        await i.update({ embeds: [lunchtime], components: [lt3] });
      } else if (i.customId == "sl" || i.customId == "slavery") {
        await i.update({ embeds: [slavery], components: [sl] });
      } else if (i.customId == "sl2" || i.customId == "slavery2") {
        await i.update({ embeds: [slavery], components: [sl2] });
      } else if (i.customId == "sl3" || i.customId == "slavery3") {
        await i.update({ embeds: [slavery], components: [sl3] });
      } else if (i.customId == "gt" || i.customId == "gargolithtech") {
        await i.update({ embeds: [gargolithtech], components: [gt] });
      } else if (i.customId == "gt2" || i.customId == "gargolithtech2") {
        await i.update({ embeds: [gargolithtech], components: [gt2] });
      } else if (i.customId == "gt3" || i.customId == "gargolithtech3") {
        await i.update({ embeds: [gargolithtech], components: [gt3] });
      } else if (i.customId == "hi" || i.customId == "himps") {
        await i.update({ embeds: [himps], components: [hi] });
      } else if (i.customId == "hi2" || i.customId == "himps2") {
        await i.update({ embeds: [himps], components: [hi2] });
      } else if (i.customId == "hi3" || i.customId == "himps3") {
        await i.update({ embeds: [himps], components: [hi3] });
      } else if (i.customId == "hi4" || i.customId == "himps4") {
        await i.update({ embeds: [himps], components: [hi4] });
      } else if (i.customId == "ltbr" || i.customId == "lockthebathroom") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr] });
      } else if (i.customId == "ltbr2" || i.customId == "lockthebathroom2") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr2] });
      } else if (i.customId == "pm" || i.customId == "petmop") {
        await i.update({ embeds: [petmop], components: [pm] });
      } else if (i.customId == "pm2" || i.customId == "petmop2") {
        await i.update({ embeds: [petmop], components: [pm2] });
      } else if (i.customId == "pm3" || i.customId == "petmop3") {
        await i.update({ embeds: [petmop], components: [pm3] });
      } else if (i.customId == "rac" || i.customId == "racism") {
        await i.update({ embeds: [racism], components: [rac] });
      } else if (i.customId == "rac2" || i.customId == "racism2") {
        await i.update({ embeds: [racism], components: [rac2] });
      } else if (i.customId == "rac3" || i.customId == "racism3") {
        await i.update({ embeds: [racism], components: [rac3] });
      } else if (i.customId == "rp" || i.customId == "raiserpackage") {
        await i.update({ embeds: [raiserpackage], components: [rp] });
      } else if (i.customId == "rp2" || i.customId == "raiserpackage2") {
        await i.update({ embeds: [raiserpackage], components: [rp2] });
      } else if (i.customId == "rp3" || i.customId == "raiserpackage3") {
        await i.update({ embeds: [raiserpackage], components: [rp3] });
      } else if (i.customId == "ws" || i.customId == "watersports") {
        await i.update({ embeds: [watersports], components: [ws] });
      } else if (i.customId == "ws2" || i.customId == "watersports2") {
        await i.update({ embeds: [watersports], components: [ws2] });
      } else if (i.customId == "ws3" || i.customId == "watersports3") {
        await i.update({ embeds: [watersports], components: [ws3] });
      } else if (i.customId == "ws4" || i.customId == "watersports4") {
        await i.update({ embeds: [watersports], components: [ws4] });
      } else if (i.customId == "bfmg" || i.customId == "bfmidgargs") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg] });
      } else if (i.customId == "bfmg2" || i.customId == "bfmidgargs2") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg2] });
      } else if (i.customId == "bfmg3" || i.customId == "bfmidgargs3") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg3] });
      } else if (i.customId == "bfpc" || i.customId == "bfplankcontrol") {
        await i.update({ embeds: [bfplankcontrol], components: [bfpc] });
      } else if (i.customId == "bfpc2" || i.customId == "bfplankcontrol2") {
        await i.update({ embeds: [bfplankcontrol], components: [bfpc2] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
