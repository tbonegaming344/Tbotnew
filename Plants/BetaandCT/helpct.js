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
  name: `helpct`,
  aliases: [
    `ctcommands`,
    `commandsct`,
    `cthelp`,
    `helpcitron`,
    `helptron`,
    `ctdecks`,
    `citronhelp`,
    `citrondecks`,
    `citroncommands`,
    `ctdeck`
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Citron's Decklists")
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
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
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
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Citron Decks")
      .setValue("all")
      .setDescription('View all of Citron\'s decks')
      .setEmoji("<:Citron_Pog:1100168420743450654>")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const budgetdecks = [
      "budgetct", 
    ]
    const tempodecks = [
      "budgetct",
    ]
    const ladderdecks = [
      "going3nuts",

    ]
    const memedecks = [
      "startron"
    ]
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("startron")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("g3n")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const g3n = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("star")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const star = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("going3nuts")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const combodecks = [
      "going3nuts", 
      "startron"
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("startron2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("g3n2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const g3n2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmid")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("star2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const star2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("going3nuts2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("midhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const midrangedecks = [
      "going3nuts", 
      "startron",
    ]
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
   
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watertron")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bct2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bct2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("g3n3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const g3n3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetct2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("star3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const star3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("going3nuts3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("wt")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const wt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("startron3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )

    let decks = [
      "budgetct",
      "goingnuts3",
      "startron",
      "watertron"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747"
      )
      .setTitle("Citron Decks")
      .setDescription(`To view the Citron decks please click on the buttons below!
Note: Citron has ${decks.length} total decks in Tbot`)
      .setColor("Random")
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747"
      )
      .setTitle("Citron Decks")
      .setDescription(`My decks for Citron(CT) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Citron decks please use the commands listed above or click on the buttons below to navigate through all Citron decks!
Note: Citron has ${decks.length} total decks in Tbot`
      })
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747"
      )
      .setTitle("Citron Combo Decks")
      .setDescription(`My Combo decks for Citron(CT) are ${toBuildComboString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the combo Citron decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Citron has ${combodecks.length} combo decks in Tbot`
      });
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747"
      )
      .setTitle("Citron Midrange Decks")
      .setDescription(`My midrange decks for Citron(CT) are ${toBuildMidrangeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the midrange Citron decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Citron has ${midrangedecks.length} midrange decks in Tbot`
      });
    let [result] = await db.query("SELECT * FROM ctdecks");
    let budgetct = new EmbedBuilder()
    .setTitle(`${result[5].budgetct}`)
    .setDescription(`${result[3].budgetct}`)
    .setFooter({text: `${result[2].budgetct}`})
        .addFields(
          {
            name: "Deck Type", 
            value: `${result[6].budgetct}`,
            inline: true
          },
          {
            name: "Archetype",
            value: `${result[0].budgetct}`,
            inline: true
          },
          {	name: "Deck Cost", 
            value: `${result[1].budgetct}`,
            inline: true
          })
      .setColor("Random")
    .setImage(`${result[4].budgetct}`)
    let going3nuts = new EmbedBuilder()
    .setTitle(`${result[5].going3nuts}`)
		.setDescription(`${result[3].going3nuts}`)
		.setColor("Random")
		.setFooter({text: `${result[2].going3nuts}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].going3nuts}`,
			inline: true
		},
		{
			name: "Archetype",
			value: `${result[0].going3nuts}`,
			inline: true
		},
		{	
			name: "Deck Cost",
			value: `${result[1].going3nuts}`,
			inline: true
		})
		.setImage(`${result[4].going3nuts}`)
    let startron = new EmbedBuilder()
    .setTitle(`${result[5].startron}`)
    .setDescription(`${result[3].startron}`)
    .setFooter({ text: `${result[2].startron}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].startron}`,
      inline: true
    },
    {
      name: "Archetype",
      value: `${result[0].startron}`,
      inline: true
    },
    { name: "Deck Cost",
      value: `${result[1].startron}`,
      inline: true
    })
    .setImage(`${result[4].startron}`)
    .setColor("Random");
    let watertron = new EmbedBuilder()
    .setTitle(`${result[5].watertron}`)
    .setDescription(`${result[3].watertron}`)
    .setFooter({ text: `${result[2].watertron}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].watertron}`,
      inline: true
    },
    {
      name: "Archetype",
      value: `${result[0].watertron}`,
      inline: true
    },
    { name: "Deck Cost",
      value: `${result[1].watertron}`,
      inline: true
    })
    .setImage(`${result[4].watertron}`)
    .setColor("Random");
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
          await i.reply({embeds: [budgetct], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp" || value == "aggro"){
          await i.reply({embeds: [watertron], flags: MessageFlags.Ephemeral})
        }
        if(value == "ladder"){
          await i.reply({embeds: [going3nuts], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme"){
          await i.reply({embeds: [startron], flags: MessageFlags.Ephemeral})
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
      if( i.customId == "helpall" || i.customId =="allhelp"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      if(i.customId == "helpmeme" || i.customId == "memehelp"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if(i.customId == "combohelp" || i.customId == "helpcombo"){
        await i.update({embeds: [comboEmbed], components: [comborow]})
      }
      if( i.customId == "helpmid" || i.customId == "midhelp"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
      }
      if(i.customId == "tempohelp" || i.customId == "helptempo"){
        await i.update({embeds: [tempoEmbed], components: [temporow]})
      }
      //Budget CT
      if(i.customId == "bct" || i.customId == "budgetct"){
        await i.update({embeds: [budgetct], components: [bct]})
      }
      if(i.customId == "bct2" || i.customId == "budgetct2"){
        await i.update({embeds: [budgetct], components: [bct2]})
      }
      if(i.customId == "star"|| i.customId == "startron"){
      await i.update({embeds: [startron], components: [star]})
      }
      if(i.customId == "star2"|| i.customId == "startron2"){
      await i.update({embeds: [startron], components: [star2]})
      }
      if(i.customId == "star3"|| i.customId == "startron3"){
      await i.update({embeds: [startron], components: [star3]})
      }
      if(i.customId == "g3n" || i.customId == "going3nuts"){
        await i.update({embeds: [going3nuts], components: [g3n]})
      }
      if(i.customId == "g3n2" || i.customId == "going3nuts2"){
        await i.update({embeds: [going3nuts], components: [g3n2]})
      }
      if(i.customId == "g3n3" || i.customId == "going3nuts3"){
        await i.update({embeds: [going3nuts], components: [g3n3]})
      }
      if(i.customId == "wt" || i.customId == "watertron"){
        await i.update({embeds: [watertron], components: [wt]})
      }
    });
  },
};
