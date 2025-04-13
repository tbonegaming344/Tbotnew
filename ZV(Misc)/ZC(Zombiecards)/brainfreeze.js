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
  name: `brainfreeze`,
  aliases: [`bf`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("BrainFreeze(BF) Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:Brain_FreezeH:1088196729192587284>")
    );
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
      "banhammer",
      "watersports",
    ],
    aggroDecks: ["budgetbf"],
    comboDecks: ["banhammer", "himpter", "watersports"],
    controlDecks: ["bfplankcontrol"],
    midrangeDecks: [
      "bhammer",
      "bfmidgargs",
      "gargolithtech",
      "himpter",
      "lunchtime",
      "petmop",
      "watersports",
    ],
    tempoDecks: ["lockthebathroom", "raiserpackage"],
    allDecks: [
      "banhammer",
      "bfmidgargs",
      "bfplankcontrol",
      "budgetbf",
      "gargolithtech",
      "himpter",
      "lunchtime",
      "lockthebathroom",
      "petmop",
      "raiserpackage",
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
  const alldecksrow = new CreateButtons("watersports", "bhammer");
  const bhammer = new CreateButtons("helpall", "bfmg");
  const bfmg = new CreateButtons("banhammer", "bbf");
  const bbf = new CreateButtons("bfmidgargs", "bfpc");
  const bfpc = new CreateButtons("budgetbf", "gt");
  const gt = new CreateButtons("bfplankcontrol", "hi");
  const hi = new CreateButtons("gargolithtech", "lt");
  const lt = new CreateButtons("himps", "ltbr");
  const ltbr = new CreateButtons("lunchtime", "pm");
  const pm = new CreateButtons("lockthebathroom", "rp");
  const rp = new CreateButtons("petmop", "ws");
  const ws = new CreateButtons("raiserpackage", "allhelp");
  const ladderrow = new CreateButtons("watersports", "bfmg2");
  const bfmg2 = new CreateButtons("helpladder", "bfpc2");
  const bfpc2 = new CreateButtons("bfmidgargs2", "rp2");
  const rp2 = new CreateButtons("bfplancontrol2", "ladderhelp");
  const memerow = new CreateButtons("watersports2", "bhammer2");
  const bhammer2 = new CreateButtons("helpmeme", "gt2");
  const gt2 = new CreateButtons("banhammer2", "hi2");
  const hi2 = new CreateButtons("gargolithtech2", "lt2");
  const lt2 = new CreateButtons("himps2", "pm2");
  const pm2 = new CreateButtons("lunchtime2", "ws2");
  const ws2 = new CreateButtons("petmop2", "memehelp");
  const comborow = new CreateButtons("watersports3", "bhammer3");
  const bhammer3 = new CreateButtons("helpcombo", "hi3");
  const hi3 = new CreateButtons("banhammer3", "ws3");
  const ws3 = new CreateButtons("himps3", "combohelp");
  const midrangerow = new CreateButtons("watersports4", "bhammer4");
  const bhammer4= new CreateButtons("helpmid", "bfmg3");
  const bfmg3 = new CreateButtons("banhammer4", "gt3");
  const gt3 = new CreateButtons("bfmidgargs3", "hi4");
  const hi4 = new CreateButtons("gargolithtech3", "lt3");
  const lt3 = new CreateButtons("himps4", "pm3");
  const pm3 = new CreateButtons("lunchtime3", "ws4");
  const ws4 = new CreateButtons("petmop3", "midhelp");
  const temporow = new CreateButtons("raiserpackage3", "ltbr2");
  const ltbr2 = new CreateButtons("helptempo", "rp3");
  const rp3 = new CreateButtons("lockthebathroom2", "tempohelp");
    const [result] = await db.query(`select * from bfdecks`);
    const embed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle(
        "Brain Freeze | <:Sneaky:1062502187781075094><:Beastly:1062500894744264714>"
      )
      .setDescription("**\\- Pet Monster Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Dolphinado <:Sneaky:1062502187781075094> \n __Bounce__ a random Plant. \n Acid Rain <:Beastly:1062500894744264714> \n All Plants on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Galvanize <:Beastly:1062500894744264714> \n A Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \n Frozen Tundra <:Sneaky:1062502187781075094><:Beastly:1062500894744264714> \n <:freeze:1323059404874055774>__Freeze__ all Plants.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Loves ice cream, snowstorms, and brains...not necessarily in that order.",
        }
      )
      .setColor("#000000");
    const allEmbed = new CreateHelpEmbed(
      "Brainfreeze Decks",
      `My commands for Brain Freeze(BF) are ${toBuildString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze decks please use the commands listed above or click on the buttons below!
     Note: Brainfreeze has ${brainFreezeDecks.allDecks.length} total decks in Tbot`
    );
    const helpbf = new CreateHelpEmbed(
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
    const banhammer= new CreateDeckEmbed(result, "racism");
    const raiserpackage = new CreateDeckEmbed(result, "raiserpackage");
    const watersports = new CreateDeckEmbed(result, "watersports");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (value == "budget" || value == "aggro") {
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
      const buttonActions = {
        cmd: { embed: helpbf, component: row },
        helpall: {embed: allEmbed, component: alldecksrow},
        allhelp: {embed: allEmbed, component: alldecksrow},
        helpladder: {embed: ladderEmbed, component: ladderrow},
        ladderhelp: {embed: ladderEmbed, component: ladderrow},
        helpmeme: {embed: memeEmbed, component: memerow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpcombo: {embed: comboEmbed, component: comborow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpmid: {embed: midrangeEmbed, component: midrangerow},
        midhelp: {embed: midrangeEmbed, component: midrangerow},
        helptempo: {embed: tempoEmbed, component: temporow},
        tempohelp: {embed: tempoEmbed, component: temporow},
        bhammer: {embed: banhammer, component: bhammer},
        banhammer: {embed: banhammer, component: bhammer},
        bhammer2: {embed: banhammer, component: bhammer2},
        banhammer2: {embed: banhammer, component: bhammer2},
        bhammer3: {embed: banhammer, component: bhammer3},
        banhammer3: {embed: banhammer, component: bhammer3},
        bhammer4: {embed: banhammer, component: bhammer4},
        banhammer4: {embed: banhammer, component: bhammer4},
        bbfmg: {embed: bfmidgargs, component: bfmg},
        bfmidgargs: {embed: bfmidgargs, component: bfmg},
        bfmg2: {embed: bfmidgargs, component: bfmg2},
        bfmidgargs2: {embed: bfmidgargs, component: bfmg2},
        bfmg3: {embed: bfmidgargs, component: bfmg3},
        bfmidgargs3: {embed: bfmidgargs, component: bfmg3},
        bfpc: {embed: bfplankcontrol, component: bfpc},
        bfplankcontrol: {embed: bfplankcontrol, component: bfpc},
        bfpc2: {embed: bfplankcontrol, component: bfpc2},
        bfplankcontrol2: {embed: bfplankcontrol, component: bfpc2},
        bbf: {embed: budgetbf, component: bbf},
        budgetbf: {embed: budgetbf, component: bbf},
        gt: {embed: gargolithtech, component: gt}, 
        gargolithtech: {embed: gargolithtech, component: gt},
        gt2: {embed: gargolithtech, component: gt2}, 
        gargolithtech2: {embed: gargolithtech, component: gt2},
        gt3: {embed: gargolithtech, component: gt3}, 
        gargolithtech3: {embed: gargolithtech, component: gt3},
        hi: {embed: himps, component: hi}, 
        himps: {embed: himps, component: hi},
        hi2: {embed: himps, component: hi2}, 
        himps2: {embed: himps, component: hi2},
        hi3: {embed: himps, component: hi3}, 
        himps3: {embed: himps, component: hi3},
        hi4: {embed: himps, component: hi4}, 
        himps4: {embed: himps, component: hi4},
        ltbr: {embed: lockthebathroom, component: ltbr}, 
        lockthebathroom: {embed: lockthebathroom, component: ltbr},
        ltbr2: {embed: lockthebathroom, component: ltbr2}, 
        lockthebathroom2: {embed: lockthebathroom, component: ltbr2},
        lt: {embed: lunchtime, component: lt},
        lunchtime: {embed: lunchtime, component: lt},
        lt2: {embed: lunchtime, component: lt2},
        lunchtime2: {embed: lunchtime, component: lt2},
        lt3: {embed: lunchtime, component: lt3},
        lunchtime3: {embed: lunchtime, component: lt3},
        pm: {embed: petmop, component: pm},
        petmop: {embed: petmop, component: pm},
        pm2: {embed: petmop, component: pm2},
        petmop2: {embed: petmop, component: pm2},
        pm3: {embed: petmop, component: pm3},
        petmop3: {embed: petmop, component: pm3},
        rp: {embed: raiserpackage, component: rp},
        raiserpackage: {embed: raiserpackage, component: rp},
        rp2: {embed: raiserpackage, component: rp2},
        raiserpackage2: {embed: raiserpackage, component: rp2},
        rp3: {embed: raiserpackage, component: rp3},
        raiserpackage3: {embed: raiserpackage, component: rp3},
        ws: {embed: watersports, component: ws},
        watersports: {embed: watersports, component: ws},
        ws2: {embed: watersports, component: ws2},
        watersports2: {embed: watersports, component: ws2},
        ws3: {embed: watersports, component: ws3},
        watersports3: {embed: watersports, component: ws3},
        ws4: {embed: watersports, component: ws4},
        watersports4: {embed: watersports, component: ws4},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unknown button interaction.",
          flags: MessageFlags.Ephemeral,
        });
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
