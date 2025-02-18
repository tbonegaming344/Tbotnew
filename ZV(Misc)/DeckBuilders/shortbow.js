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
    name: `shortbow`,
    aliases: [`decksmadebyshortbow`, `shortbowdecks`, `shortbowhelp`, `helpshortbow`],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const alldecksrow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("raiserpackage")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("go")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const go = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpall")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("gps")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const gps = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("gomorrah")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("pts")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const pts = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("gravepiratestache")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("rpack")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const rpack = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId("pawntrickstab")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
         .setStyle(ButtonStyle.Primary),
         new ButtonBuilder()
         .setCustomId("allhelp")
         .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
      )
      let decks = ["gomorrah", "gravepiratestache", "pawntrickstab", "raiserpackage"];
      let toBuildString = "";
      for (let i = 0; i < decks.length; i++) {
        toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
      }
      const ladderrow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("raiserpackage2")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("go2")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const go2 = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpladder")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("gps2")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const gps2 = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("gomorrah2")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("rpack2")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const rpack2 = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId("gravepiratestache2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
         .setStyle(ButtonStyle.Primary),
         new ButtonBuilder()
         .setCustomId("ladderhelp")
         .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
      )
      let ladderdecks = ["gomorrah", "gravepiratestache", "raiserpackage"]; 
      let toBuildLadderString = "";
      for (let i = 0; i < ladderdecks.length; i++) {
        toBuildLadderString += `\n<@1043528908148052089> **${ladderdecks[i]}**`;
      }
      const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view ShortBow's Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Deck")
        .setDescription("Some of the Best Decks in the game")
        .setEmoji("<:compemote:1325461143136764060>")
        .setValue("comp"),
        new StringSelectMenuOptionBuilder()
        .setLabel("Ladder Decks")
        .setDescription("Decks that are generally only good for ranked games")
        .setEmoji("<:ladder:1271503994857979964>") 
        .setValue("ladder"), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Aggro Deck")
        .setDescription("attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.")
        .setValue("aggro"), 
        new StringSelectMenuOptionBuilder()
        .setLabel('Combo Deck')
        .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
        .setValue('combo'), 
        new StringSelectMenuOptionBuilder()
        .setLabel('Control Deck')
        .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
        .setValue('control'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Midrange Deck')
        .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
        .setValue('midrange'),  
        new StringSelectMenuOptionBuilder()
        .setLabel('Tempo Deck')
        .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
        .setValue('tempo'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("All Shortbow Decks")
        .setDescription("An option to view all decks")
        .setValue("all")
      )
      const row = new ActionRowBuilder()
      .addComponents(select);
      let compdecks = ["pawntrickstab"]
      let combodecks = ["gravepiratestache"]
      let contorldecks = ["pawntrickstab"]
      let aggrodecks = ["gravepiratestache"]
      let midrangedecks = ["gomorrah"]
      let tempodecks = ["raiserpackage"]
      let [result] = await db.query(`select gomorrah, gps, pawntrickstab, raiserpackage from ntdecks nt 
        inner join hgdecks hg on nt.deckinfo = hg.deckinfo
        inner join gkdecks gk on nt.deckinfo = gk.deckinfo
        inner join bfdecks bf on nt.deckinfo = bf.deckinfo`);
      let user = await client.users.fetch("824024125491380303");
      let shortbow = new EmbedBuilder()
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
        let ladderEmbed= new EmbedBuilder()
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
        let gomorrah = new EmbedBuilder()
        .setTitle(`${result[5].gomorrah}`)
        .setDescription(`${result[3].gomorrah}`)
        .setFooter({ text: `${result[2].gomorrah}` })
        .addFields({
          name: "Deck Type",
          value: `${result[6].gomorrah}`,
          inline: true,
        },{
          name: "Archetype",
          value: `${result[0].gomorrah}`,
          inline: true
        },{ 
          name: "Deck Cost", 
          value: `${result[1].gomorrah}`,
          inline: true
        })
        .setColor("Random")
        .setImage(`${result[4].gomorrah}`);
        let pawntrickstab= new EmbedBuilder()
        .setTitle(`${result[5].pawntrickstab}`)
        .setDescription(`${result[3].pawntrickstab}`)
        .setFooter({ text: `${result[2].pawntrickstab}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].pawntrickstab}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].pawntrickstab}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].pawntrickstab}`,
            inline: true,
          }
        )
        .setColor("Random")
        .setImage(`${result[4].pawntrickstab}`);
        let gravepiratestache= new EmbedBuilder()
		.setTitle(`${result[5].gps}`)
		.setDescription(`${result[3].gps}`)
	.setColor("Random")
		.setImage(`${result[4].gps}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].gps}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].gps}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].gps}`,
			inline: true
		})
		.setFooter({text: `${result[2].gps}`})
    let raiserpackage = new EmbedBuilder()
    .setTitle(`${result[5].raiserpackage}`)	
        .setDescription(`${result[3].raiserpackage}`)
    .setFooter({text: `${result[2].raiserpackage}`})
        .addFields({
          name: "Deck Type", 
          value: `${result[6].raiserpackage}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].raiserpackage}`,
          inline: true
        },{
          name: "Deck Cost", 
          value:`${result[1].raiserpackage}`,
          inline: true
        })
      .setColor("Random")			
      .setImage(`${result[4].raiserpackage}`)
      const m = await message.channel.send({ embeds: [shortbow], components: [row] });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if(i.customId == "select"){
          const value = i.values[0]
          if(value == "comp"|| value == "control"){
            await i.reply({embeds: [pawntrickstab], flags: MessageFlags.Ephemeral});
          }
          if(value == "all"){
            await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
          }
          if(value == "ladder"){
            await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
          }
          if(value == "aggro" || value == "combo"){
            await i.reply({embeds: [gravepiratestache], flags: MessageFlags.Ephemeral});
          }
          if(value == "midrange"){
            await i.reply({embeds: [gomorrah], flags: MessageFlags.Ephemeral});
          }
          if(value == "tempo"){
            await i.reply({embeds: [raiserpackage], flags: MessageFlags.Ephemeral});
          }
        }
        if (i.customId == "gps" || i.customId == "gravepiratestache") {
          await i.update({ embeds: [gravepiratestache], components: [gps] });
        }
        if (i.customId == "gps2" || i.customId == "gravepiratestache2") {
          await i.update({ embeds: [gravepiratestache], components: [gps2] });
        }
        if (i.customId == "helpall" || i.customId == "allhelp" ) {
          await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
        }
        if (i.customId == "go" || i.customId == "gomorrah") {
          await i.update({ embeds: [gomorrah], components: [go] });
        }
        if (i.customId == "go2" || i.customId == "gomorrah2") {
          await i.update({ embeds: [gomorrah], components: [go2] });
        }
        if( i.customId == "ladderhelp" || i.customId == "helpladder") {
          await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
        }
        if(i.customId == "rpack" || i.customId == "raiserpackage"){
          await i.update({embeds: [raiserpackage], components: [rpack]});
        }
        if(i.customId == "rpack2" || i.customId == "raiserpackage2"){
          await i.update({embeds: [raiserpackage], components: [rpack2]});
        }
        if(i.customId == "pts" || i.customId == "pawntrickstab"){
          await i.update({embeds: [pawntrickstab], components: [pts]});
        }
      });
    },
  };
  