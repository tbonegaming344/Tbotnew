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
  name: `nightcap`,
  aliases: [`nc`, `night`, `cap`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Night Cap Decks")
        .setEmoji("<:NCShrug:831993812788051978>")
        .setStyle(ButtonStyle.Primary)
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("select an option below to view Nightcap's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
			.setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
      .setValue("meme")
      .setDescription('Plant Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
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
      .setLabel('Tempo Decks')
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Nightcap Decks")
      .setDescription("All of nightcap's decks")
      .setValue("all")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const budgetDecks = [
      "budgetnc"
    ]; 
    const compRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("toyotacontrolla")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("cburn")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcomp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tc")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cyburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("comphelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const compDecks = [
      "cyburn", 
      "toyotacontrolla"
    ]; 
    let toBuildCompString = "";
    for (let i = 0; i < compDecks.length; i++) {
      let deck = compDecks[i];
      toBuildCompString += `\n<@1043528908148052089> **${deck}**`;
    };
    const memeDecks = [
      "translattail"
    ]; 
    const comboRow= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("translattail2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("cburn2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cburn2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tl2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cyburn2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const comboDecks = [
      "cyburn",  
      "translattail"
    ];
    let toBuildComboString = "";
    for (let i = 0; i < comboDecks.length; i++) {
      let deck = comboDecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }; 
    const midrangeDecks = [ 
      "cyburn", 
    ];
    const tempoRow= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("translattail3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bnc")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bnc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helptempo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tl3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnc")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tempohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tempoDecks = [
      "budgetnc", 
      "translattail"
    ];
    let toBuildTempoString = "";
    for (let i = 0; i < tempoDecks.length; i++) {
      let deck = tempoDecks[i];
      toBuildTempoString += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("translattail4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bnc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bnc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("cburn3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cburn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnc2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cyburn3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tl4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tl4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("toyotacontrolla2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "budgetnc",
      "cyburn",
      "toyotacontrolla", 
      "translattail"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    };
    let nc = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle(
        "Nightcap | <:Kabloom:1062502137826910268><:Smarty:1062502890448638022>"
      )
      .setDescription("**\\- Mushroom Hero  -**")
      .setColor("Random")

      .addFields(
        {
          name: "Superpowers",
          value:
            "More Spore <:Kabloom:1062502137826910268> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Button Mushrooms in a lane of your choice. Then another  appears in a random lanes. \nWhirlwind <:Smarty:1062502890448638022> \n Bounce a random Zombie. \nStorm Front <:Kabloom:1062502137826910268> \n All Plants get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \nMush-Boom <:Kabloom:1062502137826910268><:Smarty:1062502890448638022> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Poison Mushroom with Anti-Hero 2. \n Do 2 damage to a Zombie there. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "He'a fun guy.",
        }
      );
      let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle("Night Cap(NC) Decks")
      .setDescription(`To view the Night Cap decks please select an option from the select menu below!
Note: Night Cap has ${decks.length} total decks in Tbot`)
      .setColor("Random")
      let compEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle("Night Cap Competitive Decks")
      .setDescription(`My Competitive Decks for Night Cap(NC) are ${toBuildCompString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Competitive Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Competitive decks!
Note: Night Cap has ${compDecks.length} Competitive decks in Tbot`,
      });
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle("Night Cap Decks")
      .setDescription(`My Decks for Night Cap(NC) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Night Cap decks!
Note: Night Cap has ${decks.length} decks in Tbot`,
      });
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle("Night Cap Combo Decks")
      .setDescription(`My Combo Decks for Night Cap(NC) are ${toBuildComboString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Combo Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Combo decks!
Note: Night Cap has ${comboDecks.length} Combo decks in Tbot`,
      });
      let tempoEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle("Night Cap Tempo Decks")
      .setDescription(`My Tempo Decks for Night Cap(NC) are ${toBuildTempoString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Tempo Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Tempo decks!
Note: Night Cap has ${tempoDecks.length} Tempo decks in Tbot`,
      });
    let [result] = await db.query(`SELECT * from ncdecks`);
    //budgetnc
    let budgetnc = new EmbedBuilder()
      .setTitle(`${result[5].budgetnc}`)
      .setDescription(`${result[3].budgetnc}`)
      .setFooter({ text: `${result[2].budgetnc}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetnc}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetnc}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetnc}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetnc}`);
    let cyburn = new EmbedBuilder()
      .setTitle(`${result[5].cyburn}`)
      .setDescription(`${result[3].cyburn}`)
      .setFooter({ text: `${result[2].cyburn}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].cyburn}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].cyburn}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].cyburn}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].cyburn}`);
      let toyotacontrolla = new EmbedBuilder()
	.setTitle(`${result[5].toyotacontrolla}`)
	.setDescription(`${result[3].toyotacontrolla}`)
	.setFooter({text: `${result[2].toyotacontrolla}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].toyotacontrolla}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].toyotacontrolla}`,
				inline: true
			},
			{
				name: "Deck Cost", 
				value:`${result[1].toyotacontrolla}`,
				inline: true
			})
		.setColor("Random")		
		.setImage(`${result[4].toyotacontrolla}`)
    let translattail = new EmbedBuilder()
	.setTitle(`${result[5].translattail}`)
	.setDescription(`${result[3].translattail}`)
	.setFooter({text: `${result[2].translattail}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].translattail}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].translattail}`,
				inline: true
			},
			{
				name: "Deck Cost", 
				value:`${result[1].translattail}`,
				inline: true
			})
		.setColor("Random")		
		.setImage(`${result[4].translattail}`)
    const m = await message.channel.send({ embeds: [nc], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if(i.customId == "select"){
        const value =  i.values[0]; 
        if(value == "budget"){
          await i.reply({embeds: [budgetnc], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp"){
          await i.update({embeds: [compEmbed], components: [compRow]})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
        if(value == "meme"){
          await i.reply({embeds: [translattail], flags: MessageFlags.Ephemeral})
        }
        if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comboRow]})
        }
        if(value == "control"){
          await i.reply({embeds: [toyotacontrolla], flags: MessageFlags.Ephemeral})
        }
        if(value == "midrange"){
          await i.reply({embeds: [cyburn], flags: MessageFlags.Ephemeral})
        }
        if(value == "tempo"){
          await i.update({embeds: [tempoEmbed], components: [tempoRow]})
        }
      }
     if( i.customId == "helpcomp" || i.customId == "comphelp"){
      await i.update({embeds: [compEmbed], components: [compRow]})
     }
     if(i.customId == "allhelp" || i.customId == "helpall"){
      await i.update({embeds: [allEmbed], components: [alldecksrow]})
     }
     if( i.customId == "helpmeme" || i.customId == "memehelp"){
      await i.update({embeds: [memeEmbed], components: [memeRow]})
     }
     if( i.customId == "combohelp" || i.customId == "helpcombo"){
      await i.update({embeds: [comboEmbed], components: [comboRow]})
     }
     if(i.customId == "helpmid" || i.customId == "midhelp"){
      await i.update({embeds: [midrangeEmbed], components: [midrangeRow]})
     }
     if( i.customId == "helptempo" || i.customId == "tempohelp"){
      await i.update({embeds: [tempoEmbed], components: [tempoRow]})
     }
     if(i.customId == "bnc" || i.customId == "budgetnc"){
      await i.update({embeds: [budgetnc], components: [bnc]})
     }
     if(i.customId == "bnc2" || i.customId == "budgetnc2"){
      await i.update({embeds: [budgetnc], components: [bnc2]})
     }
     if(i.customId == "cburn" || i.customId == "cyburn"){
      await i.update({embeds: [cyburn], components: [cburn]})
     }
     if(i.customId == "cburn2" || i.customId == "cyburn2"){
      await i.update({embeds: [cyburn], components: [cburn2]})
     }
     if(i.customId == "cburn3" || i.customId == "cyburn3"){
      await i.update({embeds: [cyburn], components: [cburn3]})
     }
     if(i.customId == "tc" || i.customId == "toyotacontrolla"){
      await i.update({embeds: [toyotacontrolla], components: [tc]})
     }
     if(i.customId == "tc2" || i.customId == "toyotacontrolla2"){
      await i.update({embeds: [toyotacontrolla], components: [tc2]})
     }
     if(i.customId == "tl" || i.customId == "translattail"){
      await i.update({embeds: [translattail], components: [tl]})
     }
     if(i.customId == "tl2" || i.customId == "translattail2"){
      await i.update({embeds: [translattail], components: [tl2]})
     }
     if(i.customId == "tl3" || i.customId == "translattail3"){
      await i.update({embeds: [translattail], components: [tl3]})
     }
     if(i.customId == "tl4" || i.customId == "translattail4"){
      await i.update({embeds: [translattail], components: [tl4]})
     }
    });
  },
};
