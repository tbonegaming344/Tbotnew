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
  name: `helppb`,
  aliases: [
    `pbhelp`,
    `pbcommands`,
    `commandspb`,
    `helpprofessor`,
    `helpbrainstorm`,
    `helppbs`,
    `helpprofessorbrainstorm`,
    `pbsdecks`,
    `bsdecks`,
    `bsdeck`,
    `pbdecks`,
	  `helpbs`,
	  `bshelp`,
    `professorbrainstormdecks`,
    `professorbrainstormhelp`,
    `pbshelp`,
    `helppbs`,
  ],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    const alldecksrow =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngeggmartin")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bd")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bpb")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bpb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bonusducks")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cb")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetpb")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hb")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("congabait")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pbf")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pbf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pa")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbfeast")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ts")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ts = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("package")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valk")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const valk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickstache")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yem")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const yem = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "bonusducks",
      "budgetpb",
      "congabait",
      "hibird",
      "pbfeast",
      "professorpackage",
      "trickstache",
      "valkster",
      "youngeggmartin",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Brainstorm's decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("A deck that is cheap for new players")
          .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription("Some of the best Decks in the game")
      .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel('Ladder Decks')
      .setDescription('Decks that mostly only good for ranked games')
      .setEmoji("<:ladder:1271503994857979964>")
      .setValue('ladder'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
      .setDescription("Decks that are built off a weird/fun combo")
      .setValue("meme"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setDescription("attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.")
      .setValue("aggro"), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Combo Decks')
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue('combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Control Decks')
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue('control'),
      new StringSelectMenuOptionBuilder()
      .setLabel('Midrange Decks')
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      .setValue('midrange'),  
      new StringSelectMenuOptionBuilder()
      .setLabel('Tempo Deck')
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
      .setValue('tempo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Brainstorm Decks")
      .setValue("all")
      .setDescription("View all the Brainstorm decks")
   .setEmoji("<:HD_ProfessorBrainstorm:1088083603918958682>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    let budgetdecks = [
      "budgetpb"
    ]
    let compdecks = [
      "trickstache", 
    ]
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("valkster2")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("hb2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const hb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpladder")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("pa2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const pa2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("hibird2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("valk2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const valk2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("package2")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let ladderdecks = [
      "hibird", 
      "professorpackage",
      "valkster"
    ]
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("youngeggmartin2")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("bd2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bd2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("cb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const cb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bonusducks2")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("pbf2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const pbf2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("congabait2")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("yem2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const yem2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pbfeast2")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let memedecks = [
      "bonusducks",
      "congabait",
      "pbfeast", 
      "youngeggmartin",
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    let aggrodecks = [
      "budgetpb", 
    ]
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("youngeggmartin3")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("bd3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bd3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("cb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const cb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bonusducks3")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("hb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const hb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("congabait3")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("ts3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const ts3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("hibird3")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("valk3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const valk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("trickstache3")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("yem3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const yem3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("valkster3")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let combodecks = [
      "bonusducks", 
      "congabait",
      "hibird", 
      "trickstache", 
      "valkster",
      "youngeggmartin",
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    const controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("throwster4")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("bd4")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bd4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcontrol")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("pbf3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const pbf3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bonusducks4")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("controlhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let controldecks = [
      "bonusducks", 
      "pbfeast",
    ]
    let toBuildControlString = "";
    for (let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControlString += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("valkster4")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("cb4")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const cb4= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmid")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("hb4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const hb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("congabait4")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("ts4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const ts4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("hibird4")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("valk4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const valk4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("trickstache4")
     .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("midhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks = [
      "congabait", 
      "hibird", 
      "trickstache",
      "valkster",
    ]
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    let tempodecks = [
      "professorpackage"
    ]
    let alldecksEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle("Professor Brainstorm Decks")
      .setDescription(
        `My commands for Professor Brainstorm(PB) are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Professor Brainstrom decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Professor Brainstorm has ${decks.length } total decks in Tbot`,
      })
      .setColor("Random");

      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle("Professor Brainstorm Ladder Decks")
      .setDescription(
        `My ladder decks for Professor Brainstorm(PB) are ${toBuildLadderString}`
      )
      .setFooter({
        text: `To view the Professor Brainstrom ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Professor Brainstorm has ${ladderdecks.length} ladder decks in Tbot`,
      })
      .setColor("Random");
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle("Professor Brainstorm Meme Decks")
      .setDescription(
        `My meme decks for Professor Brainstorm(PB) are ${toBuildMemeString}`
      )
      .setFooter({
        text: `To view the Professor Brainstrom meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Professor Brainstorm has ${memedecks.length} meme decks in Tbot`,
      })
      .setColor("Random");
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle("Professor Brainstorm Combo Decks")
      .setDescription(
        `My combo decks for Professor Brainstorm(PB) are ${toBuildComboString}`
      )
      .setFooter({
        text: `To view the Professor Brainstrom combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Professor Brainstorm has ${combodecks.length} combo decks in Tbot`,
      })
      .setColor("Random");
      let controlEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle("Professor Brainstorm Control Decks")
      .setDescription(
        `My control decks for Professor Brainstorm(PB) are ${toBuildControlString}`
      )
      .setFooter({
        text: `To view the Professor Brainstrom control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: Professor Brainstorm has ${controldecks.length} control decks in Tbot`,
      })
      .setColor("Random");
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle("Professor Brainstorm Midrange Decks")
      .setDescription(
        `My midrange decks for Professor Brainstorm(PB) are ${toBuildMidrangeString}`
      )
      .setFooter({
        text: `To view the Professor Brainstrom midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Professor Brainstorm has ${midrangedecks.length} midrange decks in Tbot`,
      })
      .setColor("Random");
      let helppb = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle("Professor Brainstorm Decks")
      .setDescription(
        `To view the Professor Brainstrom decks please select an option from the select menu below!
Note: Professor Brainstorm has ${decks.length } total decks in Tbot`
      )
      .setColor("Random");
    let [result] = await db.query(`select * from pbdecks`);

    let bonusducks = new EmbedBuilder()
    .setTitle(`${result[5].bonusducks}`)
		.setDescription(`${result[3].bonusducks}`)
		.setColor("Random")
		.setFooter({text: `${result[2].bonusducks}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].bonusducks}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].bonusducks}`,
			inline: true
		},{
			name: "Deck Cost", 
			value:`${result[1].bonusducks}`,
			inline: true
		})
		.setImage(`${result[4].bonusducks}`)
    let budgetpb = new EmbedBuilder()
    .setTitle(`${result[5].budgetpb}`)	
    .setDescription(`${result[3].budgetpb}`)
.setFooter({text: `${result[2].budgetpb}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].budgetpb}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].budgetpb}`,
      inline: true
    },{
      name: "Deck Cost",
      value: `${result[1].budgetpb}`,
      inline: true
    })	
        .setImage(`${result[4].budgetpb}`)
  .setColor("Random")			
    let congabait= new EmbedBuilder()
    .setTitle(`${result[5].congabait}`)
		.setDescription(`${result[3].congabait}`)
		.setColor("Random")
		.setFooter({text: `${result[2].congabait}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].congabait}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].congabait}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].congabait}`,
			inline: true
		})
		.setImage(`${result[4].congabait}`)
    let hibird = new EmbedBuilder()
    .setTitle(`${result[5].hibird}`)
    .setDescription(`${result[3].hibird}`)
    .setFooter({text: `${result[2].hibird}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].hibird}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].hibird}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].hibird}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].hibird}`)
    let pbfeast = new EmbedBuilder()
    .setTitle(`${result[5].pbfeast}`)
    .setDescription(`${result[3].pbfeast}`)
    .setFooter({text: `${result[2].pbfeast}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].pbfeast}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].pbfeast}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].pbfeast}`,
          inline: true
        })
      .setColor("Random")		
      .setImage(`${result[4].pbfeast}`)
      let package = new EmbedBuilder()
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
    let trickstache = new EmbedBuilder()
    .setTitle(`${result[5].trickstache}`)
    .setDescription(`${result[3].trickstache}`)
    .setFooter({text: `${result[2].trickstache}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].trickstache}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].trickstache}`,
          inline: true
        },{
          name: "Deck Cost", 
          value:`${result[1].trickstache}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].trickstache}`)
    let valkster = new EmbedBuilder()
    .setTitle(`${result[5].valkster}`)
	.setDescription(`${result[3].valkster}`)
	.setFooter({text: `${result[2].valkster}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].valkster}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].valkster}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].valkster}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].valkster}`)
    //YoungEggMartin
    let youngeggmartin = new EmbedBuilder()
    .setTitle(`${result[5].youngeggmartin}`)
    .setDescription(`${result[3].youngeggmartin}`)
    .setColor("Random")
    .setFooter({ text: `${result[2].youngeggmartin}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].youngeggmartin}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].youngeggmartin}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].youngeggmartin}`,
      inline: true
    })
    .setImage(`${result[4].youngeggmartin}`);
    const m = await message.channel.send({
      embeds: [helppb],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId  == "select"){
        const value = i.values[0];
        if(value == "all"){
          await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
        }
        if(value == "comp"){
          await i.reply({ embeds: [trickstache], flags: MessageFlags.Ephemeral });
        }
        if(value == "ladder"){
          await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
        }
        if(value == "meme"){
          await i.update({ embeds: [memeEmbed], components: [memerow] });
        }
        if(value == "combo"){
          await i.update({ embeds: [comboEmbed], components: [comborow] });
        }
        if(value == "control"){
          await i.update({ embeds: [controlEmbed], components: [controlrow] });
        }
        if(value == "midrange"){
          await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
        }
        if(value == "tempo"){
          await i.reply({embeds: [package], flags: MessageFlags.Ephemeral});
        }
        if(value == "budget" || value == "aggro"){
          await i.reply({embeds: [budgetpb], flags: MessageFlags.Ephemeral})
        }

      }
      if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      if ( i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      if (i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
      if ( i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      if (i.customId == "controlhelp" || i.customId == "helpcontrol") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      }
      if ( i.customId == "midhelp" || i.customId == "helpmid") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      if (i.customId == "bpb" || i.customId == "budgetpb") {
        await i.update({ embeds: [budgetpb], components: [bpb] });
      }
      if (i.customId == "cb" || i.customId == "congabait") {
        await i.update({ embeds: [congabait], components: [cb] });
      }
      if (i.customId == "cb2" || i.customId == "congabait2") {
        await i.update({ embeds: [congabait], components: [cb2] });
      }
      if (i.customId == "cb3" || i.customId == "congabait3") {
        await i.update({ embeds: [congabait], components: [cb3] });
      }
      if (i.customId == "cb4" || i.customId == "congabait4") {
        await i.update({ embeds: [congabait], components: [cb4] });
      }
      if (i.customId == "hb" || i.customId == "hibird") {
        await i.update({ embeds: [hibird], components: [hb] });
      }
      if (i.customId == "hb2" || i.customId == "hibird2") {
        await i.update({ embeds: [hibird], components: [hb2] });
      }
      if (i.customId == "hb3" || i.customId == "hibird3") {
        await i.update({ embeds: [hibird], components: [hb3] });
      }
      if (i.customId == "hb4" || i.customId == "hibird4") {
        await i.update({ embeds: [hibird], components: [hb4] });
      }
      if (i.customId == "pa" || i.customId == "package") {
        await i.update({ embeds: [package], components: [pa] });
      }
      if (i.customId == "pa2" || i.customId == "package2") {
        await i.update({ embeds: [package], components: [pa2] });
      }
      if (i.customId == "pbf" || i.customId == "pbfeast") {
        await i.update({ embeds: [pbfeast], components: [pbf] });
      }
      if (i.customId == "pbf2" || i.customId == "pbfeast2") {
        await i.update({ embeds: [pbfeast], components: [pbf2] });
      }
      if (i.customId == "pbf3" || i.customId == "pbfeast3") {
        await i.update({ embeds: [pbfeast], components: [pbf3] });
      }
      if (i.customId == "bd" || i.customId == "bonusducks") {
        await i.update({ embeds: [bonusducks], components: [bd] });
      }
      if (i.customId == "bd2" || i.customId == "bonusducks2") {
        await i.update({ embeds: [bonusducks], components: [bd2] });
      }
      if (i.customId == "bd3" || i.customId == "bonusducks3") {
        await i.update({ embeds: [bonusducks], components: [bd3] });
      }
      if (i.customId == "bd4" || i.customId == "bonusducks4") {
        await i.update({ embeds: [bonusducks], components: [bd4] });
      }

      if (i.customId == "ts"|| i.customId == "trickstache") {
        await i.update({ embeds: [trickstache], components: [ts] });
      }
      if (i.customId == "ts2"|| i.customId == "trickstache2") {
        await i.update({ embeds: [trickstache], components: [ts2] });
      }
      if (i.customId == "ts3"|| i.customId == "trickstache3") {
        await i.update({ embeds: [trickstache], components: [ts3] });
      }
      if (i.customId == "ts4"|| i.customId == "trickstache4") {
        await i.update({ embeds: [trickstache], components: [ts4] });
      }
      if (i.customId == "valk" || i.customId == "valkster") {
        await i.update({ embeds: [valkster], components: [valk] });
      }
      if (i.customId == "valk2" || i.customId == "valkster2") {
        await i.update({ embeds: [valkster], components: [valk2] });
      }
      if (i.customId == "valk3" || i.customId == "valkster3") {
        await i.update({ embeds: [valkster], components: [valk3] });
      }
      if (i.customId == "valk4" || i.customId == "valkster4") {
        await i.update({ embeds: [valkster], components: [valk4] });
      }
    
      //YoungEggMartin
      if (i.customId == "yem" || i.customId == "youngeggmartin") {
        await i.update({ embeds: [youngeggmartin], components: [yem] });
      }
      if (i.customId == "yem2" || i.customId == "youngeggmartin2") {
        await i.update({ embeds: [youngeggmartin], components: [yem2] });
      }
      if (i.customId == "yem3" || i.customId == "youngeggmartin3") {
        await i.update({ embeds: [youngeggmartin], components: [yem3] });
      }
    });
  },
};
