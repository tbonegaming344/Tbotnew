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
  name: `helpgs`,
  aliases: [
    `gscommands`,
    `commandsforgs`,
    `gshelp`,
    `helpgreen`,
    `helpshadow`,
    `gsdecks`,
    `decksgs`,
    `greenshadowhelp`,
    `shadowhelp`,
    `shadowdecks`,
    `greenshadowdecks`,
  ],
  category: `Green Shadow(GS)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Green Shadow's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Plant Decks that are cheap for new players')
			.setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best  Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("All Green Shadow Decks")
      .setValue("all")
      .setDescription("View All Green Shadow Decks")
      .setEmoji("<a:GreenShadow:1100168011270328390>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const budgetdecks = [
      "budgetmopshadow"
    ]
    const compdecks = [
      "abeans",
    ]; 
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("starrings")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("wr100")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const wr100 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("smf")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const smf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("winrate100")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("srings")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const srings = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("savagemayflower")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const memedecks = [
      "100%winrate",
      "savagemayflower", 
      "starrings"
    ]; 
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const aggrodecks = [
      "abeans"
    ]; 
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("starrings2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("smf2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const smf2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("srings2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const srings2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("savagemayflower2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const combodecks = [
      "savagemayflower", 
      "starrings", 
    ]; 
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    };
    const midrangedecks = [ 
      "starrings", 
    ]; 
    const temporow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetmopshadow")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("wr1002")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const wr1002 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helptempo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bms")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bms = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("winrate1002")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tempohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tempodecks = [
      "100%winrate",
      "budgetmopshadow", 
    ];
    let toBuildTempoString = "";
    for (let i = 0; i < tempodecks.length; i++) {
      let deck = tempodecks[i];
      toBuildTempoString += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("yuletide4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("wr1003")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const wr1003 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ab")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ab= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("winrate1003")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bms2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bms2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("abeans")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("smf3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const smf3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetmopshadow2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("srings4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const srings4= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("savagemayflower3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const decks = [
      "100%winrate",
      "abeans",
      "budgetmopshadow",
      "savagemayflower",
      "starrings",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png"
      )
      .setTitle("Green Shadow Decks")
      .setDescription(`To view the Green Shadow decks please select an option from the select menu below!
Note: Green Shadow has ${decks.length} total decks in Tbot`)
      .setColor("Random")
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png"
      )
      .setTitle("Green Shadow Decks")
      .setDescription(`My decks for Green Shadow(GS) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Green Shadow has ${decks.length} decks in Tbot`,
      });
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png"
      )
      .setTitle("Green Shadow Meme Decks")
      .setDescription(`My meme decks for Green Shadow(GS) are ${toBuildMemeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the meme Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Green Shadow has ${memedecks.length} meme decks in Tbot`,
      });
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png"
      )
      .setTitle("Green Shadow Combo Decks")
      .setDescription(`My combo decks for Green Shadow(GS) are ${toBuildComboString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the combo Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Green Shadow has ${combodecks.length} combo decks in Tbot`,
      });
      let tempoEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png"
      )
      .setTitle("Green Shadow Tempo Decks")
      .setDescription(`My tempo decks for Green Shadow(GS) are ${toBuildTempoString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the tempo Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all tempo decks!
Note: Green Shadow has ${tempodecks.length} tempo decks in Tbot`,
      });
    let [result] = await db.query(`SELECT * from gsdecks`);
    let winrate100 = new EmbedBuilder()
      .setTitle(`${result[5].wr100}`)
      .setDescription(`${result[3].wr100}`)
      .setFooter({ text: `${result[2].wr100}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].wr100}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].wr100}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].wr100}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].wr100}`);
    let abeans = new EmbedBuilder()
      .setTitle(`${result[5].abeans}`)
      .setDescription(`${result[3].abeans}`)
      .setFooter({ text: `${result[2].abeans}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].abeans}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].abeans}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].abeans}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].abeans}`);
    let budgetgs = new EmbedBuilder()
      .setTitle(`${result[5].budgetgs}`)
      .setDescription(`${result[3].budgetgs}`)
      .setFooter({ text: `${result[2].budgetgs}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetgs}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetgs}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetgs}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetgs}`);
    let savagemayflower = new EmbedBuilder()
      .setTitle(`${result[5].savagemayflower}`)
      .setDescription(`${result[3].savagemayflower}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].savagemayflower}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].savagemayflower}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].savagemayflower}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].savagemayflower}` })
      .setImage(`${result[4].savagemayflower}`);
    let starrings = new EmbedBuilder()
      .setTitle(`${result[5].sovietonion}`)
      .setDescription(`${result[3].sovietonion}`)
      .setFooter({ text: `${result[2].sovietonion}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].sovietonion}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].sovietonion}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].sovietonion}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].sovietonion}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const Filter = (i) => i.user.id === message.author.id;
    const collect = m.createMessageComponentCollector({ filter: Filter });
    collect.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0]; 
        if(value == "budget"){
          await i.reply({embeds: [budgetgs], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp" || value == "aggro"){
          await i.reply({embeds: [abeans], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comborow]})
        }
        if(value == "midrange"){
          await i.reply({embeds: [starrings], flags: MessageFlags.Ephemeral})
        }
        if(value == "tempo"){
          await i.update({embeds: [tempoEmbed], components: [temporow]})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
      }
      if( i.customId == "helpall" || i.customId == "allhelp"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      if(i.customId == "memehelp" || i.customId == "helpmeme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if( i.customId == "combohelp" || i.customId == "helpcombo"){
        await i.update({embeds: [comboEmbed], components: [comborow]})
      }
      if(i.customId == "helpmid" || i.customId == "midhelp"){
        await i.update({embeds: [midrnageEmbed], components: [midrangerow]})
      }
      if( i.customId == "helptempo" || i.customId == "tempohelp"){
        await i.update({embeds: [tempoEmbed], components: [temporow]})
      }
      if(i.customId == "ab" || i.customId == "abeans"){
        await i.update({embeds: [abeans], components: [ab]})
      }
      if(i.customId == "srings" || i.customId == "starrings"){
        await i.update({embeds: [starrings], components: [srings]})
      }
      if(i.customId == "srings2" || i.customId == "starrings2"){
        await i.update({embeds: [starrings], components: [srings2]})
      }
      if(i.customId == "srings3" || i.customId == "starrings3"){
        await i.update({embeds: [starrings], components: [srings3]})
      }
      if(i.customId == "srings4" || i.customId == "starrings4"){
        await i.update({embeds: [starrings], components: [srings4]})
      }
      if(i.customId == "wr100" || i.customId == "winrate100"){
        await i.update({embeds: [winrate100], components: [wr100]})
      }
      if(i.customId == "wr1002" || i.customId == "winrate1002"){
        await i.update({embeds: [winrate100], components: [wr1002]})
      }
      if(i.customId == "wr1003" || i.customId == "winrate1003"){
        await i.update({embeds: [winrate100], components: [wr1003]})
      }
      if(i.customId == "smf" || i.customId == "savagemayflower"){
        await i.update({embeds: [savagemayflower], components: [smf]})
      }
      if(i.customId == "smf2" || i.customId == "savagemayflower2"){
        await i.update({embeds: [savagemayflower], components: [smf2]})
      }
      if(i.customId == "smf3" || i.customId == "savagemayflower3"){
        await i.update({embeds: [savagemayflower], components: [smf3]})
      }
      if(i.customId == "bms" || i.customId == "budgetmopshadow"){
        await i.update({embeds: [budgetgs], components: [bms]})
      }
      if(i.customId == "bms2" || i.customId == "budgetmopshadow2"){
        await i.update({embeds: [budgetgs], components: [bms2]})
      }
    });
  },
};
