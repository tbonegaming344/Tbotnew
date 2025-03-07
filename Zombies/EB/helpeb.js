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
      .setLabel("Ladder Deck")
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
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
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
    const electricBoogalooDecks = {
      budgetDecks: ["budgetburn"],
      competitiveDecks: ["seacret"],
      ladderDecks: ["gargstar22"],
      memeDecks: ["huntgargs", "noplayingallowed"],
      aggroDecks: ["budgetburn", "seacret"],
      comboDecks: ["seacret"],
      controlDecks: ["huntgargs", "noplayingallowed"],
      midrangeDecks: ["gargstar22"],
      allDecks: ["budgetburn", "gargstar22", "huntgargs", "noplayingallowed", "seacret"],
    }
    const row = new ActionRowBuilder().addComponents(select)
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("budeb")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const budeb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gstar22")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gstar22 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgeteb")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hgargs")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hgargs = new ActionRowBuilder().addComponents(
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
      .setCustomId("huntgargs")
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
    let toBuildString = ""; 
    for (let i=0; i < electricBoogalooDecks.allDecks.length; i++){
      let deck = electricBoogalooDecks.allDecks[i]
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("noplayingallowed3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hgargs2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const hgargs2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("npa2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const npa2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("huntgargs2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let toBuildMemeString = "";
    for (let i=0; i < electricBoogalooDecks.memeDecks.length; i++){
      let deck = electricBoogalooDecks.memeDecks[i]
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
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
      .setCustomId("sea")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sea= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let toBuildAggroString = "";
    for (let i=0; i < electricBoogalooDecks.aggroDecks.length; i++){
    let deck = electricBoogalooDecks.aggroDecks[i]
    toBuildAggroString += `\n<@1043528908148052089> **${deck}**`;
    }
    const controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("noplayingallowed3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hgargs3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const hgargs3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcontrol")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("npa3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const npa3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("huntgargs3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("controlhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let toBuildControlString = "";
    for (let i=0; i < electricBoogalooDecks.controlDecks.length; i++){
    let deck = electricBoogalooDecks.controlDecks[i]
    toBuildControlString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`SELECT * FROM ebdecks`);
    // Help EB command
    let embed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Decks")
      .setDescription(
        `To view the Electric Boogaloo decks please click on the buttons below!
Note: Electric Boogaloo has ${electricBoogalooDecks.allDecks.length} total decks in Tbot`
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
Note: Electric Boogaloo has ${electricBoogalooDecks.allDecks.length} total decks in Tbot`,
      })
      .setColor("Random");
      const memeEmbed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Meme Decks")
      .setDescription(
        `My Meme Decks for Electric Boogaloo(EB) are ${toBuildMemeString}`
      )
      .setFooter({
        text: `To view the Meme Electric Boogaloo decks please use the commands listed above or navigate through all of the Meme decks using the buttons below!
Note: Electric Boogaloo has ${electricBoogalooDecks.memeDecks.length} Meme decks in Tbot`,
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
Note: Electric Boogaloo has ${electricBoogalooDecks.aggroDecks.length} Aggro decks in Tbot`,
      })
      .setColor("Random");
      const controlEmbed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Control Decks")
      .setDescription(
        `My Control Decks for Electric Boogaloo(EB) are ${toBuildControlString}`
      )
      .setFooter({
        text: `To view the Control Electric Boogaloo decks please use the commands listed above or navigate through all of the Control decks using the buttons below!
Note: Electric Boogaloo has ${electricBoogalooDecks.controlDecks.length} Control decks in Tbot`,
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
      const huntgargs = new EmbedBuilder()
      .setTitle(`${result[5].huntgargs}`)
      .setDescription(`${result[3].huntgargs}`)
      .setFooter({ text: `${result[2].huntgargs}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].huntgargs}`,
        inline: true
      },{ 
        name: "Archetype", 
        value: `${result[0].huntgargs}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].huntgargs}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].huntgargs}`);
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
        if(value == "ladder" || value == "midrange"){
          await i.reply({embeds: [gargstar22], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        if(value == "aggro"){
          await i.update({embeds: [aggroEmbed], components: [aggrorow]})
        }
        if(value == "control"){
          await i.update({embeds: [controlEmbed], components: [controlrow]})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }

      }
    if( i.customId == "allhelp" || i.customId == "helpall"){
      await i.update({embeds: [allEmbed], components: [alldecksrow]})
    }
    if(i.customId == "helpmeme" || i.customId == "memehelp"){
      await i.update({embeds: [memeEmbed], components: [memerow]})
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
    if(i.customId == "npa2" || i.customId == "noplayingallowed2"){
      await i.update({embeds: [noplayingallowed], components: [npa2]})
    }
    if(i.customId == "npa3" || i.customId == "noplayingallowed3"){
      await i.update({embeds: [noplayingallowed], components: [npa3]})
    }
    if(i.customId == "gstar22" || i.customId == "gargstar22"){
      await i.update({embeds: [gargstar22], components: [gstar22]})
    }
    if(i.customId == "gstar222" || i.customId == "gargstar222"){
      await i.update({embeds: [gargstar22], components: [gstar222]})
    }
    if(i.customId == "hgargs" || i.customId == "huntgargs"){
      await i.update({embeds: [huntgargs], components: [hgargs]})
    }
    if(i.customId == "hgargs2" || i.customId == "huntgargs2"){
      await i.update({embeds: [huntgargs], components: [hgargs2]})
    }
    if(i.customId == "hgargs3" || i.customId == "huntgargs3"){
      await i.update({embeds: [huntgargs], components: [hgargs3]})
    }
    if(i.customId == "budeb" || i.customId == "budgeteb"){
      await i.update({embeds: [budgetburn], components: [budeb]})
    }
    });
  }
};
