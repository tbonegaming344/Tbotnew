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
  name: `helpcc`,
  aliases: [
    `cccomands`,
    `commandscc`,
    `cchelp`,
    `helpcaptin`,
    `helpcombustible`,
    `helpcaptincombustible`,
    `ccdecks`,
    `captincombustiblehelp`,
    `captincombustibledecks`,
    `helpcaptain`
  ],
  category: `Captain Combustible(CC)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Captain Combustible's Decklists")
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
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Captain Combustible Decks")
      .setValue("all")
      .setDescription('View all the decks for Captain Combustible')
      .setEmoji("<a:aCombustible:1100168807391166525>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mspotk")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lcbd")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lcbd= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("msp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const msp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lifecouldbedream")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pm")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mspotk")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let memedecks = [
      "lifecouldbedream",
      "mspotk", 
      "plantmop"
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    let budgetdecks = [
      "budgetplantmop",
    ]
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("plantmop2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bpm")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bpm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("msp2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const msp2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetplantmop")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mspotk2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let combodecks = [
      "budgetplantmop",
      "mspotk",
      "plantmop",
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    let midrangedecks = ["reflourished"]
    let tempodecks = ["lifecouldbedream"]
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("reflourished")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bpm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bpm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lcbd2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lcbd2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetplantmop2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("msp3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const msp3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lifecouldbedream2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
      const pm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mspotk3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("rfl")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const rfl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("plantmop3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )

    let decks = [
      "budgetplantmop",
      "lifecouldbedream",
      "mspotk",
      "plantmop",
      "reflourished",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
      )
      .setTitle("Captain Combustible Decks")
      .setDescription(
       `To view the Captain Combustible decks please click on the buttons below!
Note: Captain Combustible has ${decks.length} total decks in Tbot`,
      )
      .setColor("Random")
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
      )
      .setTitle("Captain Combustible Decks")
      .setDescription(
        `My Decks for Captain Combustible(CC) are ${toBuildString}`
      )
      .setColor("Random")
      .setFooter({
        text: `To view the Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
Note: Captain Combustible has ${decks.length} total Decks in Tbot`,
      });
      let MemeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
      )
      .setTitle("Captain Combustible Meme Decks")
      .setDescription(
        `My Meme Decks for Captain Combustible(CC) are ${toBuildMemeString}`
      )
      .setColor("Random")
      .setFooter({
        text: `To view the Meme Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
Note: Captain Combustible has ${memedecks.length} Meme Decks in Tbot`,
      });
      let ComboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
      )
      .setTitle("Captain Combustible Combo Decks")
      .setDescription(
        `My Combo Decks for Captain Combustible(CC) are ${toBuildComboString}`
      )
      .setColor("Random")
      .setFooter({
        text: `To view the Combo Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
Note: Captain Combustible has ${combodecks.length} Combo Decks in Tbot`,
      });
    let [result] = await db.query(`SELECT * from ccdecks`);
    let budetplantmop = new EmbedBuilder()
    .setTitle(`${result[5].budgetcc}`)
	.setDescription(`${result[3].budgetcc}`)
	.setFooter({text: `${result[2].budgetcc}`})
			.addFields({
				name: "Deck Type",
				value:`${result[6].budgetcc}`,
				inline: true
			},
			{
				name: "Archetype",
				value:`${result[0].budgetcc}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetcc}`,
				inline: true})
		.setColor("Random")
.setImage(`${result[4].budgetcc}`)
      let lcbdream = new EmbedBuilder()
      .setTitle(`${result[5].lcbd}`)
      .setDescription(`${result[3].lcbd}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].lcbd}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].lcbd}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].lcbd}`,
        inline: true
      },
        {
        name: "Deck Cost",
        value: `${result[1].lcbd}`,
        inline: true
      })
      .setImage(`${result[4].lcbd}`);
      let mspotk = new EmbedBuilder()
      .setTitle(`${result[5].mspotk}`)
      .setDescription(`${result[3].mspotk}`)
    .setColor("Random")
    .setFooter({ text: `${result[2].mspotk}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].mspotk}`,
      inline: true
    },
    {
      name: "Archetype",
      value: `${result[0].mspotk}`,
      inline: true
    },
      {
      name: "Deck Cost",
      value: `${result[1].mspotk}`,
      inline: true
    })
    .setImage(`${result[4].mspotk}`);
    let plantmop = new EmbedBuilder()
    .setTitle(`${result[5].plantmop}`)
    .setDescription(`${result[3].plantmop}`)
    .setFooter({text: `${result[2].plantmop}`})
          .addFields(
            {
            name: "Deck Type",
            value:`${result[6].plantmop}`,
            inline: true
            },
            {
            name: "Archetype",
            value:`${result[0].plantmop}`,
            inline: true
            },
            {
            name: "Deck Cost", 
            value: `${result[1].plantmop}`,
            inline: true
          })
      .setColor("Random")			
      .setImage(`${result[4].plantmop}`)
      let reflourished = new EmbedBuilder()
        .setTitle(`${result[5].reflourished}`)
        .setDescription(`${result[3].reflourished}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].reflourished}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].reflourished}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].reflourished}`,
        inline: true
      },
        {
        name: "Deck Cost",
        value: `${result[1].reflourished}`,
        inline: true
      })
      .setImage(`${result[4].reflourished}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "budget"){
          await i.reply({embeds: [budetplantmop], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp" || value == "midrange"){
          await i.reply({embeds: [reflourished], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme"){
          await i.update({embeds: [MemeEmbed], components: [memerow]})
        }
        if(value == "combo"){
          await i.update({embeds: [ComboEmbed], components: [comborow]})
        }
        if(value == "tempo"){
          await i.reply({embeds: [lcbdream], flags: MessageFlags.Ephemeral})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
      }
      if( i.customId == "helpall" || i.customId == "allhelp"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      if( i.customId == "helpmeme" || i.customId == "memehelp"){
        await i.update({embeds: [MemeEmbed], components: [memerow]})
      }
      if( i.customId == "helpcombo" || i.customId == "combohelp"){
        await i.update({embeds: [ComboEmbed], components: [comborow]})
      }
     if(i.customId == "pm" || i.customId == "plantmop"){
      await i.update({embeds: [plantmop], components: [pm]})
     }
    if(i.customId == "pm2" || i.customId == "plantmop2"){
  await i.update({embeds: [plantmop], components: [pm2]})
    }
    if(i.customId == "pm3" || i.customId == "plantmop3"){
      await i.update({embeds: [plantmop], components: [pm3]})
        }
      if(i.customId == "lcbd" || i.customId == "lifecouldbedream"){
        await i.update({embeds: [lcbdream], components: [lcbd]})
      }
      if(i.customId == "lcbd2" || i.customId == "lifecouldbedream2"){
        await i.update({embeds: [lcbdream], components: [lcbd2]})
      }
      if(i.customId == "msp" || i.customId == "mspotk"){
        await i.update({embeds: [mspotk], components: [msp]})
      }
      if(i.customId == "msp2" || i.customId == "mspotk2"){
        await i.update({embeds: [mspotk], components: [msp2]})
      }
      if(i.customId == "msp3" || i.customId == "mspotk3"){
        await i.update({embeds: [mspotk], components: [msp3]})
      }
      if(i.customId == "bpm" || i.customId == "budgetplantmop"){
        await i.update({embeds: [budetplantmop], components: [bpm]})
      }
      if(i.customId == "bpm2" || i.customId == "budgetplantmop2"){
        await i.update({embeds: [budetplantmop], components: [bpm2]})
      }
      if(i.customId == "rfl" || i.customId == "reflourished"){
        await i.update({embeds: [reflourished], components: [rfl]})
      }
    });
  },
};
