const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");
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
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfmg")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfmg = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbf")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bbf= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfmidgargs")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfpc")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfpc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetbf")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gt")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const gt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfplankcontrol")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hi")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hi = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargolithtech")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lt")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himps")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ltbr")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ltbr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lunchtime")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pm")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lockthebathroom")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rac")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rac = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("petmop")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rp")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("racism")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sl")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("raiserpackage")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ws")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ws = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("slavery")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
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
      "watersports"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n <@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Brainfreeze's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
			.setEmoji("💰"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Decks")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Brainfreeze Decks")
      .setValue("all")
      .setDescription('View all of Brainfreeze\'s decks')
      .setEmoji("<:Brain_FreezeH:1088196729192587284>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const budgetdecks = [
      "budgetbf"
    ]
    const compdecks = [
      "lockthebathroom",
    ]
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("raiserpackage2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bfmg2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bfmg2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bfpc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bfpc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bfmidgargs2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("rp2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const rp2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bfplancontrol2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ladderdecks = [
      "bfmidgargs", 
      "bfplankcontrol",
      "raiserpackage", 
    ]
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n <@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watersports2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("gt2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hi2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hi2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargolithtech2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("lt2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("himps2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("pm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lunchtime2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("rac2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const rac2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("petmop2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("sl2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("racism2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ws2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ws2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("slavery2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const memedecks = [
      "gargolithtech", 
      "himpter", 
      "lunchtime",
      "petmop", 
      "racism",
      "slavery", 
      "watersports"
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n <@1043528908148052089> **${deck}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("slavery3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bbf2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bbf2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpaggro")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("sl3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetbf2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const aggrodecks = [
      "budgetbf", 
      "slavery"
    ]; 
    let toBuildAggroString = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      let deck = aggrodecks[i];
      toBuildAggroString += `\n <@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watersports3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hi3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hi3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ws3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    
    const ws3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("himps3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const combodecks = [
      "himpter", 
      "watersports"
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n <@1043528908148052089> **${deck}**`;
    }
    const controldecks =[
      "bfplankcontrol"
    ]
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watersports4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bfmg3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bfmg3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmid")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gt3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bfmidgargs3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hi4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hi4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargolithtech3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lt3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("himps4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lunchtime3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ws4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ws4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("petmop3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("midhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const midrangedecks = [
      "bfmidgargs",
      "gargolithtech", 
      "himpter", 
      "lunchtime", 
      "petmop", 
      "watersports"
    ]
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n <@1043528908148052089> **${deck}**`;
    }
    const temporow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("raiserpackage3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ltbr2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ltbr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helptempo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("rac3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const rac3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lockthebathroom2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("rp3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const rp3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("racism3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tempohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tempodecks = [
      "lockthebathroom", 
      "racism", 
      "raiderpackage"
    ]; 
    let toBuildTempoString = "";
    for (let i = 0; i < tempodecks.length; i++) {
      let deck = tempodecks[i];
      toBuildTempoString += `\n <@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select * from bfdecks`)
    let embed = new EmbedBuilder()
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
      .setColor("Random");
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("Brainfreeze Decks")
      .setDescription(`My commands for Brain Freeze(BF) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Brain Freeze decks please use the commands listed above or click on the buttons below!
Note: Brainfreeze has ${decks.length} total decks in Tbot`,
      });
      let helpbf= new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("Brainfreeze Decks")
      .setDescription(`To view the Brain Freeze decks please select an option from the select menu below!
Note: Brainfreeze has ${decks.length} total decks in Tbot`)
      .setColor("Random");
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("Brainfreeze Ladder Decks")
      .setDescription(`My Ladder decks for Brain Freeze(BF) are ${toBuildLadderString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Brain Freeze Ladder decks please use the commands listed above or click on the buttons below to navigate through all Ladder Decks!
Note: Brainfreeze has ${ladderdecks.length} Ladder decks in Tbot`,
      }); 
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("Brainfreeze Meme Decks")
      .setDescription(`My Meme decks for Brain Freeze(BF) are ${toBuildMemeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Brain Freeze Meme decks please use the commands listed above or click on the buttons below to navigate through all Meme Decks!
Note: Brainfreeze has ${memedecks.length} Meme decks in Tbot`,
      });
    let aggroEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("Brainfreeze Aggro Decks")
      .setDescription(`My Aggro decks for Brain Freeze(BF) are ${toBuildAggroString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Brain Freeze Aggro decks please use the commands listed above or click on the buttons below to navigate through all Aggro Decks!
Note: Brainfreeze has ${aggrodecks.length} Aggro decks in Tbot`,
      });
    let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("Brainfreeze Combo Decks")
      .setDescription(`My Combo decks for Brain Freeze(BF) are ${toBuildComboString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Brain Freeze Combo decks please use the commands listed above or click on the buttons below to navigate through all Combo Decks!
Note: Brainfreeze has ${combodecks.length} Combo decks in Tbot`,
      });
    let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("Brainfreeze Midrange Decks")
      .setDescription(`My Midrange decks for Brain Freeze(BF) are ${toBuildMidrangeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Brain Freeze Midrange decks please use the commands listed above or click on the buttons below to navigate through all Midrange Decks!
Note: Brainfreeze has ${midrangedecks.length} Midrange decks in Tbot`,
      });
      let tempoEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("Brainfreeze Tempo Decks")
      .setDescription(`My Tempo decks for Brain Freeze(BF) are ${toBuildTempoString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Brain Freeze Tempo decks please use the commands listed above or click on the buttons below to navigate through all Tempo Decks!
Note: Brainfreeze has ${tempodecks.length} Tempo decks in Tbot`,
      });
  let bfmidgargs = new EmbedBuilder()
  .setTitle(`${result[5].bfmidgargs}`)
  .setDescription(`${result[3].bfmidgargs}`)
  .setColor("Random")
  .setFooter({text: `${result[2].bfmidgargs}`})
  .addFields({
    name: "Deck Type", 
    value: `${result[6].bfmidgargs}`,
    inline: true
  },{
    name: "Archetype",
    value: `${result[0].bfmidgargs}`,
    inline: true
  },{
    name: "Deck Cost", 
    value: `${result[1].bfmidgargs}`,
    inline: true
  })
  .setImage(`${result[4].bfmidgargs}`)
  let bfplankcontrol = new EmbedBuilder()
  .setTitle(`${result[5].bfplankcontrol}`)
  .setDescription(`${result[3].bfplankcontrol}`)
  .setFooter({text: `${result[2].bfplankcontrol}`})
              .addFields({
                  name: "Deck Type",
                  value: `${result[6].bfplankcontrol}`,
                  inline: true
              },{
                  name: "Archetype",
                  value: `${result[0].bfplankcontrol}`,
                  inline: true
              },{
                  name: "Deck Cost", 
                  value: `${result[1].bfplankcontrol}`,
                  inline: true
              })
      .setColor("Random")
      .setImage(`${result[4].bfplankcontrol}`)
    let budgetbf = new EmbedBuilder()
    .setTitle(`${result[5].budgetbf}`)
    .setDescription(`${result[3].budgetbf}`)
    .setFooter({text: `${result[2].budgetbf}`})
        .addFields({
          name: "Deck Type", 
          value: `${result[6].budgetbf}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].budgetbf}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].budgetbf}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].budgetbf}`)
    let gargolithtech = new EmbedBuilder()
    .setTitle(`${result[5].gargolithtech}`)	
    .setDescription(`${result[3].gargolithtech}`)
.setFooter({text: `${result[2].gargolithtech}`})
    .addFields({
      name: "Deck Type", 
      value: `${result[6].gargolithtech}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].gargolithtech}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].gargolithtech}`,
      inline: true
    })
  .setColor("Random")					
  .setImage(`${result[4].gargolithtech}`)
    let himps = new EmbedBuilder()
    .setTitle(`${result[5].himps}`)	
    .setDescription(`${result[3].himps}`)
.setFooter({text: `${result[2].himps}`})
    .addFields({
      name: "Deck Type", 
      value: `${result[6].himps}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].himps}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].himps}`,
      inline: true
    })
  .setColor("Random")		
  .setImage(`${result[4].himps}`)
      let lockthebathroom = new EmbedBuilder()
      .setTitle(`${result[5].lockin}`)	
			.setDescription(`${result[3].lockin}`)
	.setFooter({text: `${result[2].lockin}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].lockin}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].lockin}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].lockin}`,
				inline: true
			})
		.setColor("Random")			
		.setImage(`${result[4].lockin}`)
    let lunchtime = new EmbedBuilder()
    .setTitle(`${result[5].midpets}`)
		.setDescription(`${result[3].midpets}`)
		.setColor("Random")
		.setImage(`${result[4].midpets}`)
		.setFooter({text: `${result[2].midpets}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].midpets}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].midpets}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].midpets}`,
			inline: true
		})
let petmop = new EmbedBuilder()
.setTitle(`${result[5].petmop}`)
.setDescription(`${result[3].petmop}`)
.setColor("Random")
.setFooter({text: `${result[2].petmop}`})
  .addFields({
    name: "Deck Type", 
    value: `${result[6].petmop}`,
    inline: true
  },{
    name: "Archetype",
    value: `${result[0].petmop}`,
    inline: true
  },{
    name: "Deck Cost", 
    value:`${result[1].petmop}`,
    inline: true
  })
.setImage(`${result[4].petmop}`)
    let racism = new EmbedBuilder()
    .setTitle(`${result[5].racism}`)
		.setDescription(`${result[3].racism}`)
		.setColor("Random")
		.addFields({
			name: "Deck Type", 
			value: `${result[6].racism}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].racism}`,
			inline: true
		},{
			name: "Deck Cost", 
			value:`${result[1].racism}`,
			inline: true
		})
		.setFooter({text: `${result[2].racism}`})
.setImage(`${result[4].racism}`)
    let raiserpackage = new EmbedBuilder()
    .setTitle(`${result[5].raiserpackage}`)	
    .setDescription(`${result[3].raiserpackage}`)
.setFooter({text: `${result[2].raiserpackage}`})
    .addFields({
      name: "Deck Type", 
      value: `${result[6].raiserpackage}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].raiserpackage}`,
      inline: true
    },{
      name: "Deck Cost", 
      value:`${result[1].raiserpackage}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].raiserpackage}`)
    let slavery = new EmbedBuilder()
    .setTitle(`${result[5].slavery}`)
		.setDescription(`${result[3].slavery}`)
		.setColor("Random")
		.setFooter({text: `${result[2].slavery}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].slavery}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].slavery}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].slavery}`,
			inline: true
		})
    .setImage(`${result[4].slavery}`)
    let watersports = new EmbedBuilder()
		.setTitle(`${result[5].watersports}`)
		.setDescription(`${result[3].watersports}`)
		.setColor("Random")
		.setFooter({text: `${result[2].watersports}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].watersports}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].watersports}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].watersports}`,
			inline: true
		})
		.setImage(`${result[4].watersports}`)
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [helpbf], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "all"){
          await i.update({ embeds: [allEmbed], components: [alldecksrow] });
        }
        if(value == "budget"){
          await i.reply({embeds: [budgetbf], flags: MessageFlags.Ephemeral});
        }
        if(value == "comp"){
          await i.reply({embeds: [lockthebathroom], flags: MessageFlags.Ephemeral});
        }
        if(value == "ladder"){
          await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
        }
        if(value == "meme"){
          await i.update({ embeds: [memeEmbed], components: [memerow] });
        }
        if(value == "aggro"){
          await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
        }
        if(value == "combo"){
          await i.update({ embeds: [comboEmbed], components: [comborow] });
        }
        if(value == "control"){
          await i.reply({embeds: [bfplankcontrol], flags: MessageFlags.Ephemeral});
        }
        if(value == "midrange"){
          await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
        }
        if(value == "tempo"){
          await i.update({ embeds: [tempoEmbed], components: [temporow] });
        }

      }
      if ( i.customId == "helpall" ||i.customId == "allhelp") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
      if ( i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      if ( i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
      if (i.customId == "helpaggro" || i.customId == "aggrohelp") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      }
      if ( i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      if ( i.customId == "helpmid" || i.customId == "midhelp") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      if ( i.customId == "helptempo" || i.customId == "tempohelp") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      }
      if (i.customId == "bbf" ||i.customId == "budgetbf") {
        await i.update({ embeds: [budgetbf], components: [bbf] });
      }
      if (i.customId == "bbf2" ||i.customId == "budgetbf2") {
        await i.update({ embeds: [budgetbf], components: [bbf2] });
      }
      if (i.customId == "lt" || i.customId == "lunchtime") {
        await i.update({ embeds: [lunchtime], components: [lt] });
      }
      if (i.customId == "lt2" || i.customId == "lunchtime2") {
        await i.update({ embeds: [lunchtime], components: [lt2] });
      }
      if (i.customId == "lt3" || i.customId == "lunchtime3") {
        await i.update({ embeds: [lunchtime], components: [lt3] });
      }
      if (i.customId == "sl" || i.customId == "slavery") {
        await i.update({ embeds: [slavery], components: [sl] });
      }
      if (i.customId == "sl2" || i.customId == "slavery2") {
        await i.update({ embeds: [slavery], components: [sl2] });
      }
      if (i.customId == "sl3" || i.customId == "slavery3") {
        await i.update({ embeds: [slavery], components: [sl3] });
      }
      if (i.customId == "gt" || i.customId == "gargolithtech") {
        await i.update({ embeds: [gargolithtech], components: [gt] });
      }
      if (i.customId == "gt2" || i.customId == "gargolithtech2") {
        await i.update({ embeds: [gargolithtech], components: [gt2] });
      }
      if (i.customId == "gt3" || i.customId == "gargolithtech3") {
        await i.update({ embeds: [gargolithtech], components: [gt3] });
      }
      if (i.customId == "hi" || i.customId == "himps") {
        await i.update({ embeds: [himps], components: [hi] });
      }
      if (i.customId == "hi2" || i.customId == "himps2") {
        await i.update({ embeds: [himps], components: [hi2] });
      }
      if (i.customId == "hi3" || i.customId == "himps3") {
        await i.update({ embeds: [himps], components: [hi3] });
      }
      if (i.customId == "hi4" || i.customId == "himps4") {
        await i.update({ embeds: [himps], components: [hi4] });
      }
      if (i.customId == "ltbr" || i.customId == "lockthebathroom") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr] });
      }
      if (i.customId == "ltbr2" || i.customId == "lockthebathroom2") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr2] });
      }
      if (i.customId == "pm" || i.customId == "petmop") {
        await i.update({ embeds: [petmop], components: [pm] });
      }
      if (i.customId == "pm2" || i.customId == "petmop2") {
        await i.update({ embeds: [petmop], components: [pm2] });
      }
      if (i.customId == "pm3" || i.customId == "petmop3") {
        await i.update({ embeds: [petmop], components: [pm3] });
      }
      if (i.customId == "rac" || i.customId == "racism") {
        await i.update({ embeds: [racism], components: [rac] });
      }
      if (i.customId == "rac2" || i.customId == "racism2") {
        await i.update({ embeds: [racism], components: [rac2] });
      }
      if (i.customId == "rac3" || i.customId == "racism3") {
        await i.update({ embeds: [racism], components: [rac3] });
      }
      if (i.customId == "rp" || i.customId == "raiserpackage") {
        await i.update({ embeds: [raiserpackage], components: [rp] });
      }
      if (i.customId == "rp2" || i.customId == "raiserpackage2") {
        await i.update({ embeds: [raiserpackage], components: [rp2] });
      }
      if (i.customId == "rp3" || i.customId == "raiserpackage3") {
        await i.update({ embeds: [raiserpackage], components: [rp3] });
      }
      if(i.customId == "ws" || i.customId == "watersports"){
        await i.update({embeds: [watersports], components: [ws]});
      }
      if(i.customId == "ws2" || i.customId == "watersports2"){
        await i.update({embeds: [watersports], components: [ws2]});
      }
      if(i.customId == "ws3" || i.customId == "watersports3"){
        await i.update({embeds: [watersports], components: [ws3]});
      }
      if(i.customId == "ws4" || i.customId == "watersports4"){
        await i.update({embeds: [watersports], components: [ws4]});
      }
      if(i.customId == "bfmg" || i.customId == "bfmidgargs"){
        await i.update({embeds: [bfmidgargs], components: [bfmg]});
      }
      if(i.customId == "bfmg2" || i.customId == "bfmidgargs2"){
        await i.update({embeds: [bfmidgargs], components: [bfmg2]});
      }
      if(i.customId == "bfmg3" || i.customId == "bfmidgargs3"){
        await i.update({embeds: [bfmidgargs], components: [bfmg3]});
      }
      if(i.customId == "bfpc" || i.customId == "bfplankcontrol"){
        await i.update({embeds: [bfplankcontrol], components: [bfpc]});
      }
      if(i.customId == "bfpc2" || i.customId == "bfplankcontrol2"){
        await i.update({embeds: [bfplankcontrol], components: [bfpc2]});
      }
    });
  },
};
