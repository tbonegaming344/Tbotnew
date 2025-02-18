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
  name: `creeperblade`,
  aliases: [
    `helpcreeperblade`,
    `creeperbladehelp`,
    `decksmadebycreeperblade`,
    `creeperbladedecks`,
    `creeperdecks`,
    `creeper`,
    `cpb`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view creeperblade's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Decks")
        .setValue("comp")
        .setEmoji("<:compemote:1325461143136764060>")
        .setDescription('Some of the Best Decks in the game'), 
        new StringSelectMenuOptionBuilder()
        .setLabel('Ladder Decks')
					.setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
        .setLabel("Aggro Deck")
        .setValue("aggro")
        .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Combo Deck")
        .setValue("combo")
        .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Midrange Decks")
        .setValue("midrange")
        .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Tempo Deck")
        .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.') 
        .setValue("tempo"), 
        new StringSelectMenuOptionBuilder()
        .setLabel("All Decks")
        .setDescription("All decks made by creeperblade")
        .setValue("all")

      );
      const row = new ActionRowBuilder().addComponents(select);
    const comprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pablosyeezys")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ab")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const ab = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcomp")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("py")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const py = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("abeans")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("comphelp")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const compdecks = [
      "abeans", 
      "pablosyeezys"
    ]
    let toBuildComp = "";
    for (let i = 0; i < compdecks.length; i++) {
      let deck = compdecks[i];
     toBuildComp += `\n<@1043528908148052089> **${deck}**`;
    }
    const combodecks =[ 
      "pablosyeezys"
    ]
    let ladderdecks = [
      "professorpackage"
    ]
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pablosyeezys3")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gtech2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const gtech2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmid")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("py3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const py3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("abeans")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("comphelp")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const midrangedecks = [
      "gargolithtech", 
      "pablosyeeyz"
    ]
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("professorpackage")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ab2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ab2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("gtech")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gtech = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("abeans2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("py2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const py2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("abeans2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("propack")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const propack = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pablosyeezys2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
      
    let decks = [
      "abeans",
      "gargolithtech",
      "pablosyeezys", 
      "professorpackage"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
     toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select abeans,
		gargolithtech, pablosyeezys, professorpackage
		from gsdecks gs 
    inner join bfdecks bf
    on (gs.deckinfo = bf.deckinfo)
		inner join smdecks sm 
		on (gs.deckinfo = sm.deckinfo)
    inner join pbdecks pb 
    on (gs.deckinfo = pb.deckinfo)`);
    let user = await client.users.fetch("738926530000060416");
    let creep = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let comp = new EmbedBuilder()
      .setTitle(`${user.displayName} Competitive Decks`)
      .setDescription(
        `My Competitive Decks made by ${user.displayName} are: ${toBuildComp}`
      )
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL())
      .setFooter({text: `To view the Competitive Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${compdecks.length} competitive decks in Tbot`})
let midrangeEmbed =  new EmbedBuilder()
.setTitle(`${user.displayName} Midrange Decks`)
.setDescription(
  `My Midrange Decks made by ${user.displayName} are: ${toBuildMidrangeString}`
)
.setColor("Random")
.setThumbnail(user.displayAvatarURL())
.setFooter({text: `To view the Midrange Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${midrangedecks.length} midrange decks in Tbot`})
let alldecksEmbed = new EmbedBuilder()
.setTitle(`${user.displayName} Decks`)
.setDescription(
  `My Decks made by ${user.displayName} are: ${toBuildString}`
)
.setColor("Random")
.setThumbnail(user.displayAvatarURL())
.setFooter({text: `To view the Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`})
      let abeans = new EmbedBuilder()
	.setTitle(`${result[5].abeans}`)
	.setDescription(`${result[3].abeans}`)
	.setFooter({text: `${result[2].abeans}`})
			.addFields({
			name: "Deck Type",
			value: `${result[6].abeans}`,
			inline: true
			},
			{
			name: "Archetype",
			value: `${result[0].abeans}`,
			inline: true
			},
			{
				name: "Deck Cost", 
				value: `${result[1].abeans}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].abeans}`)
    let gargolithtech= new EmbedBuilder()
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
    let pyeez = new EmbedBuilder()
    .setTitle(`${result[5].pablosyeezys}`)	
			.setDescription(`${result[3].pablosyeezys}`)
	.setFooter({text: `${result[2].pablosyeezys}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].pablosyeezys}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].pablosyeezys}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].pablosyeezys}`,
				inline: true
			})
		.setColor("Random")			
		.setImage(`${result[4].pablosyeezys}`)
    let professorpackage = new EmbedBuilder()
    .setTitle(`${result[5].professorpackage}`)
    .setDescription(`${result[3].professorpackage}`)
    .setFooter({ text: `${result[2].professorpackage}` })
    .setColor("Random")
    .setImage(`${result[4].professorpackage}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].professorpackage}`,
      inline: true
    },{ 
      name: "Archetype",
      value: `${result[0].professorpackage}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].professorpackage}`,
      inline: true
    });
    const m = await message.channel.send({
      embeds: [creep],
      components: [row] 
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "comp"){
          await i.update({embeds: [comp], components: [comprow]});
        }
        if(value == "ladder" || value == "tempo"){
          await i.reply({embeds: [professorpackage], flags: MessageFlags.Ephemeral})
        }
        if(value == "aggro"){
          await i.reply({embeds: [abeans], flags: MessageFlags.Ephemeral});
        }
        if(value == "combo"){
          await i.reply({embeds: [pyeez], flags: MessageFlags.Ephemeral});
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangerow]});
        }
        if(value == "meme"){
          await i.reply({embeds: [gargolithtech], flags: MessageFlags.Ephemeral})
        }
        if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
        }
      }
      if(i.customId == "helpcomp" || i.customId == "comphelp"){
        await i.update({embeds: [comp], components: [comprow]});
      }
      if(i.customId == "py" || i.customId == "pablosyeezys"){
        await i.update({embeds: [pyeez], components: [py]});
      }
      if(i.customId == "py2" || i.customId == "pablosyeezys2"){
        await i.update({embeds: [pyeez], components: [py2]});
      }
      if(i.customId == "py3" || i.customId == "pablosyeezys3"){
        await i.update({embeds: [pyeez], components: [py3]});
      }
      if(i.customId == "ab" || i.customId == "abeans"){
        await i.update({embeds: [abeans], components: [ab]});
      }
      if(i.customId == "ab2" || i.customId == "abeans2"){
        await i.update({embeds: [abeans], components: [ab2]});
      }
      if(i.customId == "propack" || i.customId == "professorpackage"){
        await i.update({embeds: [professorpackage], components: [propack]})
      }
      if(i.customId == "helpall" || i.customId== "allhelp"){
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
      if(i.customId == "gtech" || i.customId == "gargolithtech"){
        await i.update({embeds: [gargolithtech], components: [gtech]});
      }
      if(i.customId == "gtech2" || i.customId == "gargolithtech2"){
        await i.update({embeds: [gargolithtech], components: [gtech2]});
      }
    });  
  },
};
