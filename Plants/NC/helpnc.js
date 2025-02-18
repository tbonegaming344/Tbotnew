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
  name: `helpnc`,
  aliases: [
    `nccommands`,
    `commandsnc`,
    `nchelp`,
    `helpNight Cap`,
    `Night Caphelp`,
    `helpcap`,
    `helpnight`,
    `Night Capdecks`,
    `ncdecks`,
    `capdecks`,
    `ncdeck`
  ],
  category: `Night Cap(NC)`,
  run: async (client, message, args) => {
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
      .setLabel("Ladder Decks")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
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
      .setLabel("Midrange Decks")
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
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("speeddemon")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bc")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("sd")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("brainclones")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ladderdecks = [
      "brainclones", 
      "speeddemon"
    ]
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    };
    const memeRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("translattail")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("gp3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gp3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tl")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gangstaparadise3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const memeDecks = [
      "gangstaparadise", 
      "translattail"
    ]; 
    let toBuildMemeString = "";
    for (let i = 0; i < memeDecks.length; i++) {
      let deck = memeDecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }; 
    const comboRow= new ActionRowBuilder().addComponents(
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
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("cburn2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cburn2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnc")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("gp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cyburn2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("sd2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sd2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gangstaparadise")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tl3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("speeddemon2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const comboDecks = [
      "budgetnc", 
      "cyburn",  
      "gangstaparadise", 
      "speeddemon",
      "translattail"
    ];
    let toBuildComboString = "";
    for (let i = 0; i < comboDecks.length; i++) {
      let deck = comboDecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }; 
    const midrangeRow= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gangstaparadise2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bnc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bnc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmid")
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
      .setCustomId("gp2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gp2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cyburn3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("midhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const midrangeDecks = [ 
      "budgetnc", 
      "cyburn", 
      "gangstaparadise"
    ];
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangeDecks.length; i++) {
      let deck = midrangeDecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    };
    const tempoRow= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("translattail2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helptempo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tl2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("brainclones2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tempohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tempoDecks = [ 
      "brainclones",
      "translattail"
    ];
    let toBuildTempoString = "";
    for (let i = 0; i < tempoDecks.length; i++) {
      let deck = tempoDecks[i];
      toBuildTempoString += `\n<@1043528908148052089> **${deck}**`;
    };
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("translattail4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bc3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bc3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bnc3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bnc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("brainclones3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("cburn4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const cburn4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetnc3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("gp4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gp4= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cyburn4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("sd3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const sd3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gangstaparadise4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("tc2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const tc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("speeddemon3")
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
      "brainclones",
      "budgetnc",
      "cyburn",
      "gangstaparadise",
      "speeddemon",
      "toyotacontrolla", 
      "translattail"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    };
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
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle("Night Cap Meme Decks")
      .setDescription(`My Meme Decks for Night Cap(NC) are ${toBuildMemeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Meme Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Meme decks!
Note: Night Cap has ${memeDecks.length} Meme decks in Tbot`,
      });
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle("Night Cap Ladder Decks")
      .setDescription(`My Ladder Decks for Night Cap(NC) are ${toBuildLadderString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Ladder Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Ladder decks!
Note: Night Cap has ${ladderdecks.length} Ladder decks in Tbot`,
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
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle("Night Cap Midrange Decks")
      .setDescription(`My Midrange Decks for Night Cap(NC) are ${toBuildMidrangeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Midrange Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Midrange decks!
Note: Night Cap has ${midrangeDecks.length} Midrange decks in Tbot`,
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
    let brainclones = new EmbedBuilder()
		.setTitle(`${result[5].brainclones}`)
		.setDescription(`${result[3].brainclones}`)
		.setColor("Random")
		.setFooter({text: `${result[2].brainclones}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].brainclones}`,
			inline: true
		},
		{
			name: "Archetype",
			value: `${result[0].brainclones}`,
			inline: true
		},
		{
			name: "Deck Cost", 
			value: `${result[1].brainclones}`,
			inline: true})
.setImage(`${result[4].brainclones}`)
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

    let gangsterparadise = new EmbedBuilder()
      .setTitle(`${result[5].gangstaparadise}`)
      .setDescription(`${result[3].gangstaparadise}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gangstaparadise}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gangstaparadise}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gangstaparadise}`,
          inline: true,
        }
      )
      .setImage(`${result[4].gangstaparadise}`)
      .setFooter({ text: `${result[2].gangstaparadise}` });

      let speeddemon = new EmbedBuilder()
	.setTitle(`${result[5].speeddemon}`)
	.setDescription(`${result[3].speeddemon}`)
	.setFooter({text:`${result[2].speeddemon}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].speeddemon}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].speeddemon}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].speeddemon}`,
				inline: true
			})
		.setColor("Random")		
	.setImage(`${result[4].speeddemon}`)
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

    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value =  i.values[0]; 
        if(value == "budget"){
          await i.reply({embeds: [budgetnc], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp"){
          await i.update({embeds: [compEmbed], components: [compRow]})
        }
        if(value == "ladder"){
          await i.update({embeds: [ladderEmbed], components: [ladderrow]})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
        if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memeRow]})
        }
        if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comboRow]})
        }
        if(value == "control"){
          await i.reply({embeds: [toyotacontrolla], flags: MessageFlags.Ephemeral})
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangeRow]})
        }
        if(value == "tempo"){
          await i.update({embeds: [tempoEmbed], components: [tempoRow]})
        }

      }
     if(i.customId == "helpbudget" || i.customId == "budgethelp"){
      await i.update({embeds: [budgetEmbed], components: [budgetRow]})
     }
     if( i.customId == "helpcomp" || i.customId == "comphelp"){
      await i.update({embeds: [compEmbed], components: [compRow]})
     }
     if( i.customId == "ladderhelp" || i.customId == "helpladder"){
      await i.update({embeds: [ladderEmbed], components: [ladderrow]})
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
     if(i.customId == "bnc3" || i.customId == "budgetnc3"){
      await i.update({embeds: [budgetnc], components: [bnc3]})
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
     if(i.customId == "cburn4" || i.customId == "cyburn4"){
      await i.update({embeds: [cyburn], components: [cburn4]})
     }
     if(i.customId == "gp" || i.customId == "gangstaparadise"){
      await i.update({embeds: [gangsterparadise], components: [gp]})
     }
     if(i.customId == "gp2" || i.customId == "gangstaparadise2"){
      await i.update({embeds: [gangsterparadise], components: [gp2]})
     }
     if(i.customId == "gp3" || i.customId == "gangstaparadise3"){
      await i.update({embeds: [gangsterparadise], components: [gp3]})
     }
     if(i.customId == "gp4" || i.customId == "gangstaparadise4"){
      await i.update({embeds: [gangsterparadise], components: [gp4]})
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
     if(i.customId == "bc" || i.customId == "brainclones"){
      await i.update({embeds: [brainclones], components: [bc]})
     }
     if(i.customId == "bc2" || i.customId == "brainclones2"){
      await i.update({embeds: [brainclones], components: [bc2]})
     }
     if(i.customId == "bc3" || i.customId == "brainclones3"){
      await i.update({embeds: [brainclones], components: [bc3]})
     }
     if(i.customId == "sd" || i.customId == "speeddemon"){
      await i.update({embeds: [speeddemon], components: [sd]})
     }
     if(i.customId == "sd2" || i.customId == "speeddemon2"){
      await i.update({embeds: [speeddemon], components: [sd2]})
     }
     if(i.customId == "sd3" || i.customId == "speeddemon3"){
      await i.update({embeds: [speeddemon], components: [sd3]})
     }
    });
  },
};
