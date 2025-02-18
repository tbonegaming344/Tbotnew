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
  name: `helpeb`,
  aliases: [
    `ebcommands`,
    `commandseb`,
    `ebhelp`,
    `helpelectric`,
    `helpelectricboog`,
    `helpboog`,
    `helpelectricboogaloo`,
    `ebdecks`,
    `electricboogaloohelp`,
    `electricboogaloodecks`,
    `deckseb`,
    `helpboogaloo`,
    `helpboogaloodecks`,
    `boogaloocommands`,
    `boogaloodecks`,
  ],
  category: `Electric Boogaloo(EB)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view electric boogaloo's decklists")
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
      .setLabel("Meme Deck")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Electric Boogaloo Decks")
      .setValue("all")
      .setDescription('View all of Electric Boogaloo\'s decks')
      .setEmoji("<:electricsleeper:1100169044440645776>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gstar22")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gstar22 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("iburn3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const iburn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargstar22")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("npa")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const npa= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmaburn3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sea2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("noplayingallowed")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "budgetburn",
      "gargstar22",
      "igmaburn",
      "noplayingallowed",
      "seacret",
    ];
    let toBuildString = ""; 
    for (let i=0; i < decks.length; i++){
      let deck = decks[i]
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let budgetdecks = [
      "budgetburn"
    ]
    let compdecks = [
      "seacret"
    ]
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmaburn2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gstar222")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const gstar222 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("iburn2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const iburn2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargstar222")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let ladderdecks = [
      "gargstar22", 
      "igmaburn"
    ]
    let toBuildLadderString = "";
    for (let i=0; i < ladderdecks.length; i++){
      let deck = ladderdecks[i]
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    let memedecks = [
      "noplayoingallowed", 
    ]
    let aggrodecks = [
      "budgetburn",
      "igmaburn", 
      "seacret"
    ]
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bburn")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const bburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpaggro")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("iburn")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const iburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sea= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmaburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let toBuildAggroString = "";
    for (let i=0; i < aggrodecks.length; i++){
      let deck = aggrodecks[i]
      toBuildAggroString += `\n<@1043528908148052089> **${deck}**`;
    }
    let combodecks = [
      "seacret", 
    ]
    let controldecks = [
      "noplayingallowed"
    ]
    let midrangedecks = [
      "gargstar22",
    ]
    let [result] = await db.query(`SELECT * FROM ebdecks`);
    // Help EB command
    let embed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Decks")
      .setDescription(
        `To view the Electric Boogaloo decks please click on the buttons below!
Note: Electric Boogaloo has ${decks.length} total decks in Tbot`
      )
      .setColor("Random");
      let allEmbed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Decks")
      .setDescription(
        `My Decks for Electric Boogaloo(EB) are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Electric Boogaloo decks please use the commands listed above or navigate through all of the decks using the buttons below!
Note: Electric Boogaloo has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random");
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Ladder Decks")
      .setDescription(
        `My Ladder Decks for Electric Boogaloo(EB) are ${toBuildLadderString}`
      )
      .setFooter({
        text: `To view the Ladder Electric Boogaloo decks please use the commands listed above or navigate through all of the Ladder decks using the buttons below!
Note: Electric Boogaloo has ${ladderdecks.length} Ladder decks in Tbot`,
      })
      .setColor("Random");
      let aggroEmbed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Aggro Decks")
      .setDescription(
        `My Aggro Decks for Electric Boogaloo(EB) are ${toBuildAggroString}`
      )
      .setFooter({
        text: `To view the Aggro Electric Boogaloo decks please use the commands listed above or navigate through all of the Aggro decks using the buttons below!
Note: Electric Boogaloo has ${aggrodecks.length} Aggro decks in Tbot`,
      })
      .setColor("Random");
    //Deck Embeds
    let budgetburn = new EmbedBuilder()
    .setTitle(`${result[5].budgetburn}`)
    .setDescription(`${result[3].budgetburn}`)
    .setFooter({ text: `${result[2].budgetburn}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].budgetburn}`,
      inline: true
    },{ 
      name: "Archetype", 
      value: `${result[0].budgetburn}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].budgetburn}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].budgetburn}`);
      let gargstar22 = new EmbedBuilder()
      .setTitle(`${result[5].gargstar22}`)
      .setDescription(`${result[3].gargstar22}`)
      .setFooter({ text: `${result[2].gargstar22}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].gargstar22}`,
        inline: true
      },{ 
        name: "Archetype", 
        value: `${result[0].gargstar22}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].gargstar22}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].gargstar22}`);
    let igmaburn = new EmbedBuilder()
    .setTitle(`${result[5].igmaburn}`)	
    .setDescription(`${result[3].igmaburn}`)
.setFooter({text: `${result[2].igmaburn}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].igmaburn}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].igmaburn}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].igmaburn}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].igmaburn}`)
    //No Playing Allowed
    let noplayingallowed = new EmbedBuilder()
    .setTitle(`${result[5].noplayingallowed}`)
	.setDescription(`${result[3].noplayingallowed}`)
	.setFooter({text: `${result[2].noplayingallowed}`})
				.addFields({
					name: "Deck Type",
					value: `${result[6].noplayingallowed}`,
					inline: true
				},{
					name: "Archetype",
					value: `${result[0].noplayingallowed}`,
					inline: true
				},{
					name: "Deck Cost", 
					value: `${result[1].noplayingallowed}`,
					inline: true
				})
		.setColor("Random")
		.setImage(`${result[4].noplayingallowed}`)
    // Seacret
    let seacret = new EmbedBuilder()
    .setTitle(`${result[5].seacret}`)
		.setDescription(`${result[3].seacret}`)
		.setColor("Random")
		.setFooter({text: `${result[2].seacret}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].seacret}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].seacret}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].seacret}`,
			inline: true
		})		
		.setImage(`${result[4].seacret}`)
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
          await i.reply({embeds: [budgetburn], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp" || value == "combo"){
          await i.reply({embeds: [seacret], flags: MessageFlags.Ephemeral})
        }
        if( value == "midrange"){
          await i.reply({embeds: [gargstar22], flags: MessageFlags.Ephemeral})
        }
        if(value == "ladder"){
          await i.update({embeds: [ladderEmbed], components: [ladderrow]})
        }
        if(value == "meme" || value == "control"){
          await i.reply({embeds: [noplayingallowed], flags: MessageFlags.Ephemeral})
        }
        if(value == "aggro"){
          await i.update({embeds: [aggroEmbed], components: [aggrorow]})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }

      }
    if( i.customId == "allhelp" || i.customId == "helpall"){
      await i.update({embeds: [allEmbed], components: [alldecksrow]})
    }
    if( i.customId == "aggrohelp" || i.customId == "helpaggro"){
      await i.update({embeds: [aggroEmbed], components: [aggrorow]})
    }
    if( i.customId == "controlhelp" || i.customId == "helpcontrol"){
      await i.update({embeds: [controlEmbed], components: [controlrow]})
    }
    if(i.customId == "ladderhelp" || i.customId == "helpladder"){
      await i.update({embeds: [ladderEmbed], components: [ladderrow]})
    }
    //Budget Burn
    if(i.customId == "bburn" || i.customId == "budgetburn") {
      await i.update({embeds: [budgetburn], components: [bburn]})
    }
    //Igma Burn 
    if(i.customId == "iburn" || i.customId == "igmaburn"){
      await i.update({embeds: [igmaburn], components: [iburn]})
    }
    if(i.customId == "iburn2" || i.customId == "igmaburn2"){
      await i.update({embeds: [igmaburn], components: [iburn2]})
    }
    if(i.customId == "iburn3" || i.customId == "igmaburn3"){
      await i.update({embeds: [igmaburn], components: [iburn3]})
    }
    //Seacret
    if(i.customId == "sea" || i.customId == "seacret"){
      await i.update({embeds: [seacret], components: [sea]})
    }
    if(i.customId == "sea2" || i.customId == "seacret2"){
      await i.update({embeds: [seacret], components: [sea2]})
    }
    //No Playing Allowed
    if(i.customId == "npa" || i.customId == "noplayingallowed"){
      await i.update({embeds: [noplayingallowed], components: [npa]})
    }
    if(i.customId == "gstar22" || i.customId == "gargstar22"){
      await i.update({embeds: [gargstar22], components: [gstar22]})
    }
    if(i.customId == "gstar222" || i.customId == "gargstar222"){
      await i.update({embeds: [gargstar22], components: [gstar222]})
    }
    });
  }
};
