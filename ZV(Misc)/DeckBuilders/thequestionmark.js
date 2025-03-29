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
  name: `thequestionmark`,
  aliases: [
    `thequestionmarkdecks`,
    `questionmark`,
    `questionmarkhelp`,
    `thequestionmarkhelp`,
    `helpthequestionmark`,
    `questionmarkdecks`,
    `helpthequestionmark`,
    `tqm`,
    `helptqm`,
    `tqmdecks`,
    `tqmhelp`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("splimps")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cboy")
     .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cboy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mred4")
     .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mred4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cyroboy")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("nut")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const nut = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred4")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("syard3")
     .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const syard3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nuttin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("spl")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const spl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );  
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("splimps2")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cboy2")
     .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cboy2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpladder")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mred")
     .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mred = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cyroboy2")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("syard")
     .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const syard = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("spl2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const spl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpladder")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    ); 
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view tqm's decks")
    .addOptions( 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription("Decks that are generally only good for ranked games")
      .setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
      .setDescription("Decks that are built off a weird/fun combo")
      .setValue("meme"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription("attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Decks")
      .setValue("all")
      .setDescription("An option to view all of the decks made by tqm")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nuttin2")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cboy3")
     .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cboy3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mred2")
     .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mred2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cyroboy3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("nut2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const nut2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    ); 
    let combodecks = ["cryoboy", "midred", "nuttin"]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cboy4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const cboy4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmidrange")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mred3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const mred3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cyroboy4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midrangehelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let midrangedecks = ["cryoboy", "midred"]; 
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("splimps3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("syard2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const syard2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpaggro")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("spl3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const spl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aggrohelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let aggrodecks = ["schoolyard", "splimps"]; 
    let toBuildAggroString = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      let deck = aggrodecks[i];
      toBuildAggroString += `\n<@1043528908148052089> **${deck}**`;
    }
    let ladderdecks = ["cryoboy", "midred", "schoolyard", "splimps", ]
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    let decks = ["cryoboy", "midred", "nuttin", "schoolyard", "splimps"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let user = await client.users.fetch("906888157272875048");
    let tqm = new EmbedBuilder()
    .setTitle(`${user.displayName} Decks`)
    .setDescription(
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
    )
    .setThumbnail(user.displayAvatarURL())
    .setColor("Random");
    let alldecksEmbed= new EmbedBuilder()
    .setTitle(`${user.displayName} Decks`)
    .setDescription(
      `My commands for decks made by ${user.displayName} are ${toBuildString}`
    )
    .setFooter({
      text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("Random");
    let ladderEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Ladder Decks`)
      .setDescription(
        `My ladder decks made by ${user.displayName} are ${toBuildLadderString}`
      )
      .setFooter({
        text: `To view the ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: ${user.displayName} has ${ladderdecks.length} ladder decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let comboEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My combo decks made by ${user.displayName} are ${toBuildComboString}`
      )
      .setFooter({
        text: `To view the combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: ${user.displayName} has ${combodecks.length} combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let aggroEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Aggro Decks`)
      .setDescription(
        `My Aggro decks made by ${user.displayName} are ${toBuildAggroString}`
      )
      .setFooter({
        text: `To view the aggri Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: ${user.displayName} has ${aggrodecks.length} aggro decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let midrangeEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange decks made by ${user.displayName} are ${toBuildMidrangeString}`
      )
      .setFooter({
        text: `To view the midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: ${user.displayName} has ${midrangedecks.length} midrange decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let [result] = await db.query(`select cyroboy, midred, nutting, schoolyard, splimps from hgdecks hg 
      inner join ifdecks fi on (hg.deckinfo = fi.deckinfo)
      inner join czdecks cz on (hg.deckinfo = cz.deckinfo)
      inner join ntdecks nt on (hg.deckinfo = nt.deckinfo)
      inner join spdecks sp on (hg.deckinfo = sp.deckinfo)`);

    const cyroboy = new EmbedBuilder()
    .setTitle(`${result[5].cyroboy}`)
    .setDescription(`${result[3].cyroboy}`)
    .setFooter({text: `${result[2].cyroboy}`})
    .setColor("Random")
    .addFields({
        name: 'Deck Type',
        value: `${result[6].cyroboy}`,
        inline: true
    },{
        name: 'Archtype',
        value: `${result[0].cyroboy}`,
        inline: true
    },{
        name: 'Deck Cost',
        value: `${result[1].cyroboy}`,
        inline: true
    })
    .setImage(`${result[4].cyroboy}`)
    let nuttin = new EmbedBuilder()
    .setTitle(`${result[5].nutting}`)
    .setDescription(`${result[3].nutting}`)
    .setFooter({text: `${result[2].nutting}`})
        .setColor("Random")
        .setImage(`${result[4].nutting}`)
            .addFields({
                name: "Deck Type",
                value: `${result[6].nutting}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].nutting}`,
                inline: true
            },{
                name: "Deck Cost", 
                value: `${result[1].nutting}`,
                inline: true
            })
            let midred = new EmbedBuilder()
	.setTitle(`${result[5].midred}`)
	.setDescription(`${result[3].midred}`)
	.setFooter({text: `${result[2].midred}`})
			.addFields({
			name: "Deck Type",
			value: `${result[6].midred}`,
			inline: true
			},
			{
			name: "Archetype",
			value: `${result[0].midred}`,
			inline: true
			},
			{
				name: "Deck Cost", 
				value: `${result[1].midred}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].midred}`)
    let schoolyard = new EmbedBuilder()
    .setTitle(`${result[5].schoolyard}`)
    .setDescription(`${result[3].schoolyard}`)
    .setFooter({ text: `${result[2].schoolyard}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].schoolyard}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].schoolyard}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].schoolyard}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].schoolyard}`);
    let splimps = new EmbedBuilder()
	.setTitle(`${result[5].splimps}`)
	.setDescription(`${result[3].splimps}`)
	.setFooter({text: `${result[2].splimps}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].splimps}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].splimps}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].splimps}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].splimps}`)
    const m = await message.channel.send({ embeds: [tqm], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "aggro"){
          await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
        }
        if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comborow]})
        }
        if(value == "meme"){
          await i.reply({embeds: [nuttin], flags: MessageFlags.Ephemeral})
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangrow]})
        }
        if(value == "ladder"){
          await i.update({embeds: [ladderEmbed],components: [ladderrow]})
        }
        if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
        }
      }
      if (i.customId == "cboy" || i.customId == "cyroboy") {
        await i.update({ embeds: [cyroboy], components: [cboy] });
      }
      if (i.customId == "cboy2" || i.customId == "cyroboy2") {
        await i.update({ embeds: [cyroboy], components: [cboy2] });
      }
      if (i.customId == "cboy3" || i.customId == "cyroboy3") {
        await i.update({ embeds: [cyroboy], components: [cboy3] });
      }
      if (i.customId == "cboy4" || i.customId == "cyroboy4") {
        await i.update({ embeds: [cyroboy], components: [cboy4] });
      }
      if(i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      if(i.customId == "helpcombo" || i.customId == "combohelp"){
        await i.update({embeds: [comboEmbed], components: [comborow]})
      }
      if( i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
      if(i.customId == "spl" || i.customId == "splimps"){
        await i.update({embeds: [splimps], components: [spl]})
      }
      if(i.customId == "spl2" || i.customId == "splimps2"){
        await i.update({embeds: [splimps], components: [spl2]})
      }
      if(i.customId == "spl3" || i.customId == "splimps3"){
        await i.update({embeds: [splimps], components: [spl3]})
      }
      if(i.customId == "nut" || i.customId == "nuttin"){
        await i.update({embeds: [nuttin], components: [nut]})
      }
      if(i.customId == "nut2" || i.customId == "nuttin2"){
        await i.update({embeds: [nuttin], components: [nut2]})
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
      if(i.customId == "syard" || i.customId == "schoolyard"){
        await i.update({embeds: [schoolyard], components: [syard]})
      }
      if(i.customId == "syard2" || i.customId == "schoolyard2"){
        await i.update({embeds: [schoolyard], components: [syard2]})
      }
      if(i.customId == "syard3" || i.customId == "schoolyard3"){
        await i.update({embeds: [schoolyard], components: [syard3]})
      }
      if(i.customId == "midrangehelp" || i.customId == "helpmidrange"){
        await i.update({embeds: [midrangeEmbed], components: [midrangrow]})
      }
      if(i.customId == "aggrohelp" || i.customId == "helpaggro"){
        await i.update({embeds: [aggroEmbed], components: [aggrorow]})
      }
    });
  },
};
