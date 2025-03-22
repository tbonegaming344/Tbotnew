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
  name: `helpcz`,
  aliases: [
    `czhelp`,
    `czcommands`,
    `commandscz`,
    `helpchomp`,
    `helpzilla`,
    `zillahelp`,
    `chompzillahelp`,
    `chompzillacommands`,
    `czdecks`,
    `chompzilladecks`,
    `helpchompzilla`,
  ],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view chompzilla's decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setEmoji("💰")
      .setDescription("A Deck that is cheap for new players"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setEmoji("<:compemote:1325461143136764060>")
      .setDescription("Some of the best decks in the game"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Decks")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>")
      .setValue("ladder"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription("Decks that are built off a weird/fun combo"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription("Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."),
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription("Focuses on slowly building a big board, winning trades and overwhelming the opponent."),
      new StringSelectMenuOptionBuilder()
      .setLabel("All Chompzilla Decks")
      .setValue("all")
      .setEmoji("<:LetsFrickenChomp:1100168574829596824>")
      .setDescription("View all Chompzilla Decks")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const chompzillaDecks = {
      budgetDecks: ["budgetmopzilla"],
      compDecks: ["healcontrol"],
      memeDecks: ["lasersnap", "moprbius"],
      ladderDecks: ["midred"],
      comboDecks: ["lasersnap", "midred", "moprbius"],
      controlDecks: ["healcontrol"],
      midrangeDecks: ["lasersnap", "midred", "moprbius"],
      tempoDecks: ["budgetmopzilla"],
      allDecks: [
        "budgetmopzilla",
        "healcontrol",
        "lasersnap",
        "midred",
        "moprbius",
      ],
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mopribus")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lsnap")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lsnap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mop")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const mop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lasersnap")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let toBuildMemeString = ""; 
    for (let i = 0; i < chompzillaDecks.memeDecks.length; i++) {
      let deck = chompzillaDecks.memeDecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mopribus4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lsnap2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lsnap2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mred2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const mred2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lasersnap2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mop2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const mop2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midred2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let toBuildComboString = "";
    for (let i = 0; i < chompzillaDecks.comboDecks.length; i++) {
      let deck = chompzillaDecks.comboDecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mopribus3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lsnap3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lsnap3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmid")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mred3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const mred3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lasersnap3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mop3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const mop3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midred3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("midhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let toBuildMidrangeString = "";
    for (let i = 0; i < chompzillaDecks.midrangeDecks.length; i++) {
      let deck = chompzillaDecks.midrangeDecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mopribus4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bmz")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bmz = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("healcon")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const healcon = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetmopzilla")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lsnap4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lsnap4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healcontrol")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mred4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const mred4= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lasersnap4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mop4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const mop4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midred4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let toBuildString = "";
    for (let i = 0; i < chompzillaDecks.allDecks.length; i++) {
      let deck = chompzillaDecks.allDecks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
      )
      .setTitle("Chompzilla Decks")
      .setDescription(`To view the Chompzilla decks please select an option from the select menu below!
Note: Chompzilla has ${chompzillaDecks.allDecks.length} total decks in Tbot`)
      .setColor("Random")
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
      )
      .setTitle("Chompzilla Meme Decks")
      .setDescription(`My Meme decks for Chompzilla(CZ) are ${toBuildMemeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Meme Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Meme decks!
Note: Chompzilla has ${chompzillaDecks.memeDecks.length} Meme decks in Tbot`,
      });
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
      )
      .setTitle("Chompzilla Decks")
      .setDescription(`My decks for Chompzilla(CZ) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all decks!
Note: Chompzilla has ${chompzillaDecks.allDecks.length} decks in Tbot`,
      });
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
      )
      .setTitle("Chompzilla Combo Decks")
      .setDescription(`My Combo decks for Chompzilla(CZ) are ${toBuildComboString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Combo Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Combo decks!
Note: Chompzilla has ${chompzillaDecks.comboDecks.length} Combo decks in Tbot`,
      });
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
      )
      .setTitle("Chompzilla Midrange Decks")
      .setDescription(`My Midrange decks for Chompzilla(CZ) are ${toBuildMidrangeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Midrange Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Midrange decks!
Note: Chompzilla has ${chompzillaDecks.midrangeDecks.length} Midrange decks in Tbot`,
      });
    let [result] = await db.query(`SELECT * from czdecks`);
    let healcontrol = new EmbedBuilder()
      .setTitle(`${result[5].apotk}`)
      .setDescription(`${result[3].apotk}`)
      .setFooter({ text: `${result[2].apotk}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].apotk}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].apotk}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].apotk}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].apotk}`);
    let budgetcz = new EmbedBuilder()
      .setTitle(`${result[5].budgetcz}`)
      .setDescription(`${result[3].budgetcz}`)
      .setFooter({ text: `${result[2].budgetcz}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetcz}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetcz}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetcz}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetcz}`);
      let lasersnap = new EmbedBuilder()
    .setTitle(`${result[5].lasersnap}`)
    .setDescription(`${result[3].lasersnap}`)
    .setFooter({text: `${result[2].lasersnap}`})
        .setColor("Random")
        .setImage(`${result[4].lasersnap}`)
            .addFields({
                name: "Deck Type",
                value: `${result[6].lasersnap}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].lasersnap}`,
                inline: true
            },{
                name: "Deck Cost", 
                value: `${result[1].lasersnap}`,
                inline: true
            })
    let midred = new EmbedBuilder()
      .setTitle(`${result[5].midred}`)
      .setDescription(`${result[3].midred}`)
      .setFooter({ text: `${result[2].midred}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].midred}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].midred}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].midred}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].midred}`);
    let mopribus = new EmbedBuilder()
      .setTitle(`${result[5].mopribus}`)
      .setDescription(`${result[3].mopribus}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].mopribus}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].mopribus}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].mopribus}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].mopribus}` })
      .setImage(`${result[4].mopribus}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "budget" || value == "tempo"){
          await i.reply({embeds: [budgetcz], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp" || value == "control"){
          await i.reply({embeds: [healcontrol], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        if(value == "ladder"){
          await i.reply({embeds: [midred], flags: MessageFlags.Ephemeral})
        }
        if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comborow]})
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
      }
      if( i.customId == "ladderhelp" || i.customId == "helpladder"){
        await i.update({embeds: [ladderEmbed], components: [ladderow]})
      }
      if(i.customId == "memehelp" || i.customId == "helpmeme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if(i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      if( i.customId == "combohelp" || i.customId == "helpcombo"){
        await i.update({embeds: [comboEmbed], components: [comborow]})
      }
      if(i.customId == "midhelp" || i.customId == "helpmid"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
      }
      if(i.customId == "healcon" || i.customId == "healcontrol"){
        await i.update({embeds: [healcontrol], components: [healcon]})
      }
      if(i.customId == "mop" || i.customId == "mopribus"){
        await i.update({embeds: [mopribus], components: [mop]})
      }
      if(i.customId == "mop2" || i.customId == "mopribus2"){
        await i.update({embeds: [mopribus], components: [mop2]})
      }
      if(i.customId == "mop3" || i.customId == "mopribus3"){
        await i.update({embeds: [mopribus], components: [mop3]})
      }
      if(i.customId == "mop4" || i.customId == "mopribus4"){
        await i.update({embeds: [mopribus], components: [mop4]})
      }
      if(i.customId == "lsnap" || i.customId == "lasersnap"){
        await i.update({embeds: [lasersnap], components: [lsnap]})
      }
      if(i.customId == "lsnap2" || i.customId == "lasersnap2"){
        await i.update({embeds: [lasersnap], components: [lsnap2]})
      }
      if(i.customId == "lsnap3" || i.customId == "lasersnap3"){
        await i.update({embeds: [lasersnap], components: [lsnap3]})
      }
      if(i.customId == "lsnap4" || i.customId == "lasersnap4"){
        await i.update({embeds: [lasersnap], components: [lsnap4]})
      }
      if(i.customId == "mred" || i.customId == "midred"){
        await i.update({embeds: [midred], components: [mred]})
      }
      if(i.customId == "mred2" || i.customId == "midred2"){
        await i.update({embeds: [midred], components: [mred2]})
      }
      if(i.customId == "mred3" || i.customId == "midred3"){
        await i.update({embeds: [midred], components: [mred3]})
      }
      if(i.customId == "mred4" || i.customId == "midred4"){
        await i.update({embeds: [midred], components: [mred4]})
      }
      if(i.customId == "bmz" || i.customId == "budgetmopzilla"){
        await i.update({embeds: [budgetcz],components: [bmz]})
      }
      
    });
  },
};
