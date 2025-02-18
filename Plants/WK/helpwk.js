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
  name: `helpwk`,
  aliases: [
    `commandswk`,
    `wkcommands`,
    `wkhelp`,
    `helpwall`,
    `helpknight`,
    `helpwallknight`,
    `wkdecks`,
    `wallknighthelp`,
    `wallknightdecks`,
    `wallknightdeck`
  ],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view WallKnight's Decklists")
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
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Plant Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All WallKnight Decks")
      .setValue("all")
      .setDescription('View all WallKnight decks in Tbot')
      .setEmoji("<:wallnut:1100168145186062426>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const budgetdecks = [
      "budgetwk"
    ]
    const compdecks = [
      "chemotherapy"
    ]; 
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("shitknight")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("cknight")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cknight = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hl")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cancerknight")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("sk")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("highlander")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const memedecks = [
      "cancerknight", 
      "highlander", 
      "shitknight"
    ]; 
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    };
    const controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("chemotherapy")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("cknight2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cknight2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("controlhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("chemo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const chemo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cancerknight2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("helpcontrol")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const controldecks = [
      "cancerknight", 
      "chemotherapy", 
    ];
    let toBuildControlString = "";
    for (let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControlString += `\n<@1043528908148052089> **${deck}**`;
    };
    const midrangedecks = [
      "highlander", 
    ];
    const tempodecks = [
      "budgetwk"
    ]
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("shitknight3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bwk")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bwk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("cknight3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cknight3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetwk")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("chemo2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const chemo2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cancerknight3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hl2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hl3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("chemotherapy2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("sk3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("highlander3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "budgetwk",
      "cancerknight",
      "chemotherapy",
      "highlander",
      "shitknight",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    };
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945"
      )
      .setTitle("WallKnight Decks")
      .setDescription(`To view the WallKnight decks please select an option from the select menu below!
Note: WallKnight has ${decks.length} total decks in Tbot`)
      .setColor("Random")
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945"
      )
      .setTitle("WallKnight Decks")
      .setDescription(`My decks for Wall Knight(WK) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Wall-Knight decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: WallKnight has ${decks.length} decks in Tbot`,
      });
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945"
      )
      .setTitle("WallKnight Meme Decks")
      .setDescription(`My meme decks for Wall Knight(WK) are ${toBuildMemeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Wall-Knight meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: WallKnight has ${memedecks.length} meme decks in Tbot`,
      });
      let controlEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945"
      )
      .setTitle("WallKnight Control Decks")
      .setDescription(`My control decks for Wall Knight(WK) are ${toBuildControlString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Wall-Knight control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: WallKnight has ${controldecks.length} control decks in Tbot`,
      });
    let [result] = await db.query(`SELECT * from wkdecks`);
    let budgetwk = new EmbedBuilder()
      .setTitle(`${result[5].budgetwkmidheal}`)
      .setDescription(`${result[3].budgetwkmidheal}`)
      .setFooter({ text: `${result[2].budgetwkmidheal}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetwkmidheal}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetwkmidheal}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetwkmidheal}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetwkmidheal}`);
    let cancerknight = new EmbedBuilder()
      .setTitle("Cancer Knight")
      .setTitle(`${result[5].cancerknight}`)
      .setDescription(`${result[3].cancerknight}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].cancerknight}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].cancerknight}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].cancerknight}`,
          inline: true,
        }
      )
      .setImage(`${result[4].cancerknight}`)
      .setFooter({ text: `${result[2].cancerknight}` });
    let chemotherapy = new EmbedBuilder()
      .setTitle(`${result[5].chemotherapy}`)
      .setDescription(`${result[3].chemotherapy}`)
      .setFooter({ text: `${result[2].chemotherapy}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].chemotherapy}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].chemotherapy}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].chemotherapy}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].chemotherapy}`);
    let highlander = new EmbedBuilder()
      .setTitle(`${result[5].highlander}`)
      .setDescription(`${result[3].highlander}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].highlander}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].highlander}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].highlander}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].highlander}`,
          inline: true,
        }
      )
      .setImage(`${result[4].highlander}`);
    let shitknight = new EmbedBuilder()
      .setTitle(`${result[5].shitknight}`)
      .setDescription(`${result[3].shitknight}`)
      .setFooter({ text: `${result[2].shitknight}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].shitknight}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].shitknight}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].shitknight}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].shitknight}`);
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
          await i.reply({embeds: [budgetwk], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp"){
          await i.reply({embeds: [chemotherapy], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        if(value == "control"){
          await i.update({embeds: [controlEmbed], components: [controlrow]})
        }
        if(value == "midrange"){
          await i.reply({embeds: [highlander], flags: MessageFlags.Ephemeral})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }

      }
     else if( i.customId == "allhelp" || i.customId == "helpall"){
      await i.update({embeds: [allEmbed], components: [alldecksrow]})
     }
     else if( i.customId == "memehelp" || i.customId == "helpmeme"){
      await i.update({embeds: [memeEmbed], components: [memerow]})
     }
     else if( i.customId == "combohelp" || i.customId == "helpcombo"){
      await i.update({embeds: [comboEmbed], components: [comborow]})
     }
     else if( i.customId == "controlhelp" || i.customId == "helpcontrol"){
      await i.update({embeds: [controlEmbed], components: [controlrow]})
     }
     else if( i.customId == "helpmid" || i.customId == "midhelp"){
      await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
     }
    else if(i.customId == "cknight" || i.customId == "cancerknight"){
      await i.update({embeds: [cancerknight], components: [cknight]})
    }
    else if(i.customId == "cknight2" || i.customId == "cancerknight2"){
      await i.update({embeds: [cancerknight], components: [cknight2]})
    }
    else if(i.customId == "cknight3" || i.customId == "cancerknight3"){
      await i.update({embeds: [cancerknight], components: [cknight3]})
    }
    else if(i.customId == "hl" || i.customId == "highlander"){
      await i.update({embeds: [highlander], components: [hl]})
    }
    else if(i.customId == "hl2" || i.customId == "highlander2"){
      await i.update({embeds: [highlander], components: [hl2]})
    }
    else if(i.customId == "hl3" || i.customId == "highlander3"){
      await i.update({embeds: [highlander], components: [hl3]})
    }
    else if(i.customId == "sk" || i.customId == "shitknight"){
      await i.update({embeds: [shitknight], components: [sk]})
    }
    else if(i.customId == "sk2" || i.customId == "shitknight2"){
      await i.update({embeds: [shitknight], components: [sk2]})
    }
    else if(i.customId == "sk3" || i.customId == "shitknight3"){
      await i.update({embeds: [shitknight], components: [sk3]})
    }
    else if(i.customId == "chemo" || i.customId == "chemotherapy"){
      await i.update({embeds: [chemotherapy], components: [chemo]})
    }
    else if(i.customId == "chemo2" || i.customId == "chemotherapy2"){
      await i.update({embeds: [chemotherapy], components: [chemo2]})
    }
    else if(i.customId == "bwk" || i.customId == "budgetwk"){
      await i.update({embeds: [budgetwk], components: [bwk]})
    }
    });
  },
};
