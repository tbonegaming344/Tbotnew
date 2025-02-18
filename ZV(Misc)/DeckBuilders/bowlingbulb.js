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
  name: `bowlingbulbenjoyer`,
  aliases: [
    `bowlingbulb`,
    `bowlingdecks`,
    `bolwingbulbhelp`,
    `bowlinghelp`,
    `bbe`,
    `bowlingbulbenjoyerdecks`,
    `bowlingbulbdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("going3nuts")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfmg")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfmg = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("allhelp")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfmidgargs")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g3n")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const g3n = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["bfmidgargs", "binaryflagwar", "goingnuts3"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view bowlingbulb's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("All BowlingBulb Enjoyer Decks")
          .setValue("all")
          .setDescription('All of bowlingbulb\'s decks')
      );

    const row = new ActionRowBuilder().addComponents(select);
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("going3nuts2")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfmg2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfmg2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpladder")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfmidgargs2")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g3n2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const g3n2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar2")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ladderhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let ladderdecks = ["bfmidgargs", "binaryflagwar", "goingnuts3"];
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("going3nuts4")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g3n4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const g3n4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar4")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let combodecks = ["binaryflagwar", "goingnuts3"];
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("going3nuts3")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfmg3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfmg3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmid")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfmidgargs3")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g3n3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const g3n3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar3")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks = ["bfmidgargs", "binaryflagwar", "goingnuts3"];
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select bfmidgargs, binaryflagwar, going3nuts 
		from zmdecks zm
		inner join ctdecks ct
		on (zm.deckinfo = ct.deckinfo)
    inner join bfdecks bf
		on (zm.deckinfo = bf.deckinfo)`);
    let user = await client.users.fetch("1051916947253629030");
    let bowlingbulbenjoyer = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks made by ${user.displayName} please select an option from the select menu below!!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let alldecksEmbed= new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to naviaget through all decks!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let ladderEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Ladder Decks`)
      .setDescription(
        `My Ladder decks made by ${user.displayName} are ${toBuildLadderString}`
      )
      .setFooter({
        text: `To view the Ladder Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to naviaget through all Ladder decks!
Note: ${user.displayName} has ${ladderdecks.length} Ladder decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let comboEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildComboString}`
      )
      .setFooter({
        text: `To view the Combo Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to naviaget through all Combo decks!
Note: ${user.displayName} has ${combodecks.length} Combo decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let midrangeEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange decks made by ${user.displayName} are ${toBuildMidrangeString}`
      )
      .setFooter({
        text: `To view the Midrange Decks made by ${user.displayName} please use the commands listed above or click on the buttons below to naviaget through all Midrange decks!
Note: ${user.displayName} has ${midrangedecks.length} Midrange decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
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
    let binaryflagwar = new EmbedBuilder()
    .setTitle(`${result[5].binaryflagwar}`)
		.setDescription(`${result[3].binaryflagwar}`)
		.setColor("Random")
		.setFooter({text: `${result[2].binaryflagwar}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].binaryflagwar}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].binaryflagwar}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].binaryflagwar}`,
			inline: true
		})
		.setImage(`${result[4].binaryflagwar}`)
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
    const m = await message.channel.send({ embeds: [bowlingbulbenjoyer], 
      components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "ladder"){
          await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
        }
        if(value == "combo"){
          await i.update({ embeds: [comboEmbed], components: [comborow] });
        }
        if(value == "midrange"){
          await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
        }
        if(value == "all"){
          await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
        }
      }
      if( i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      if( i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      if( i.customId == "midhelp" || i.customId == "helpmid") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      if( i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      if (i.customId == "bfw" || i.customId == "binaryflagwar") {
        await i.update({ embeds: [binaryflagwar], components: [bfw] });
      }
      if (i.customId == "bfw2" || i.customId == "binaryflagwar2") {
        await i.update({ embeds: [binaryflagwar], components: [bfw2] });
      }
      if (i.customId == "bfw3" || i.customId == "binaryflagwar3") {
        await i.update({ embeds: [binaryflagwar], components: [bfw3] });
      }
      if (i.customId == "bfw4" || i.customId == "binaryflagwar4") {
        await i.update({ embeds: [binaryflagwar], components: [bfw4] });
      }
      if (i.customId == "g3n" || i.customId == "going3nuts") {
        await i.update({ embeds: [going3nuts], components: [g3n] });
      }
      if (i.customId == "g3n2" || i.customId == "going3nuts2") {
        await i.update({ embeds: [going3nuts], components: [g3n2] });
      }
      if (i.customId == "g3n3" || i.customId == "going3nuts3") {
        await i.update({ embeds: [going3nuts], components: [g3n3] });
      }
      if (i.customId == "g3n4" || i.customId == "going3nuts4") {
        await i.update({ embeds: [going3nuts], components: [g3n4] });
      }
      if (i.customId == "bfmg" || i.customId == "bfmidgargs") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg] });
      }
      if (i.customId == "bfmg2" || i.customId == "bfmidgargs2") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg2] });
      }
      if (i.customId == "bfmg3" || i.customId == "bfmidgargs3") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg3] });
      }
    });
  },
};
