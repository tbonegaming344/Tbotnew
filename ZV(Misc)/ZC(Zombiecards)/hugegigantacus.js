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
  name: `hugegigantacus`,
  aliases: [`hg`, `huge`, `gigantacus`, `huge-gigantacus`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const helphg = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("teleport")
        .setLabel("Teleport")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:teleport:1087160283534991472>"),
      new ButtonBuilder()
        .setCustomId("huge")
        .setLabel("Huge Gigantacus Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:hg:1087736553557725217>")
    );
	const alldecksrow = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("youngkenmartin")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("bfwrap")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const bfwrap = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("helpall")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("bgus")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const bgus = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("blobfishwrappers")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("cl")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const cl = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("budgetgus")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("cboy")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const cboy = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("conjureleap")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("ft")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const ft = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("cryoboy")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("gps")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const gps = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
			.setCustomId("frozentelimps")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
			.setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
			.setCustomId("gs")
			.setEmoji("<:arrowright:1271446796207525898>")
			.setStyle(ButtonStyle.Primary)
		);
	  const gs = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("gravepiratestache")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("khg")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const khg = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("gravestache")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("otks")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
		const otks = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
			.setCustomId("otkblob")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
			.setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
			.setCustomId("sw")
			.setEmoji("<:arrowright:1271446796207525898>")
			.setStyle(ButtonStyle.Primary)
		);
	  const sw = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("otkswabbie")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("ti")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const ti = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("sweap")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("ykm")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  const ykm = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("telimps")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("allhelp")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
	  let decks = [
		"blobfishwrappers",
		"budgetykm",
		"conjureleap",
		"cryoboy",
		"frozentelimps",
		"gravepiratestache",
		"gravestache",
		"kitchenhg",
		"otkswabbie",
		"sweap",
		"telimps",
		"ykm",
	  ];
	  let toBuildString = "";
	  for (let i = 0; i < decks.length; i++) {
		toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
	  }
	  const select = new StringSelectMenuBuilder()
		  .setCustomId("select")
		  .setPlaceholder("Select an option below to view Huge Gigantacus decklists")
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
			  .setDescription('Decks that are built off a weird/fun combo'), 
			  new StringSelectMenuOptionBuilder()
			  .setLabel("Aggro Deck")
			  .setValue("aggro")
			  .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
			  new StringSelectMenuOptionBuilder()
			  .setLabel("Combo Decks")
			  .setValue("combo")
			  .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
			  new StringSelectMenuOptionBuilder()
			  .setLabel("Control Decks")
			  .setValue("control")
			  .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
			  new StringSelectMenuOptionBuilder()
			  .setLabel("Midrange Decks")
			  .setValue("midrange")
			  .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
			  new StringSelectMenuOptionBuilder()
			  .setLabel("Tempo Decks")
			  .setValue("tempo")
			  .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
			  new StringSelectMenuOptionBuilder()
			  .setLabel("All Huge Gigantacus Decks")
			  .setValue("all")
			  .setDescription('View all Huge Gigantacus decks')
			  .setEmoji("<:hg:1087736553557725217>")
		  )
	  const row = new ActionRowBuilder().addComponents(select)
	  const budgetrow = [
		  "budgetykm"
	  ]
	  const comprow = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("telimps2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("bfwrap2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const bfwrap2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("helpcomp")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ti2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ti2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("blobfishwrappers2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("comphelp")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const compdecks = [
		  "blobfishwrappers",
		  "telimps"
	  ]
	  let toBuildCompString = "";
	  for (let i = 0; i < compdecks.length; i++) {
		toBuildCompString += `\n<@1043528908148052089> **${compdecks[i]}**`;
	  }
	  const ladderrow = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("gravestache2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("cboy2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const cboy2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("helpladder")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("gps2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const gps2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("cryoboy2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("gs2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const gs2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("gravepiratestache2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ladderhelp")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ladderdecks = [
		  "cryoboy", 
		  "gravepiratestache",
		  "gravestache", 
	  ]
	  let toBuildLadderString = "";
	  for (let i = 0; i < ladderdecks.length; i++) {
		toBuildLadderString += `\n<@1043528908148052089> **${ladderdecks[i]}**`;
	  }
	  const memerow = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("youngkenmartin2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("cl2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const cl2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("helpmeme")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ft2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ft2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("conjureleap2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("khg2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const khg2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("frozentelimps2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("otks2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const otks2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("kitchenhg2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ykm2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ykm2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("otkswabbie2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("memehelp")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const memedecks = [
		  "conjureleap", 
		  "frozentelimps", 
		  "kitchenhg",
		  "otkswabbie",
		  "ykm"
	  ]
	  let toBuildMemeString = "";
	  for (let i = 0; i < memedecks.length; i++) {
		toBuildMemeString += `\n<@1043528908148052089> **${memedecks[i]}**`;
	  }
	  const aggrodecks = [
		  "gravepiratestache",
	  ]
	  const comborow = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("youngkenmartin3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("bfwrap3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const bfwrap3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("helpcombo")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("bgus2")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const bgus2 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("blobfishwrappers3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("cboy3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const cboy3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("budgetgus2")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ft3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ft3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("cryoboy3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("gps3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const gps3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("frozentelimps3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("gs3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const gs3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("gravepiratestache3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("khg3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const khg3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("gravestache3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("otks3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const otks3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("kitchenhg3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ti3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ti3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("otkswabbie3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ykm3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ykm3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("telimps3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("combohelp")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const combodecks = [
		  "blobfishwrappers", 
		  "budgetykm", 
		  "cryoboy", 
		  "frozentelimps", 
		  "gravepiratestache",
		  "gravestache", 
		  "kitchenhg", 
		  "otkswabbie",
		  "telimps", 
		  "ykm"
	  ]
	  let toBuildComboString = "";
	  for (let i = 0; i < combodecks.length; i++) {
		toBuildComboString += `\n<@1043528908148052089> **${combodecks[i]}**`;
	  }
	  const controlrow = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("telimps3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("bfwrap4")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const bfwrap4 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("helpcontrol")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ft4")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ft4= new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("blobfishwrappers4")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("ti4")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ti4= new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("frozentelimps4")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("controlhelp")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const controldecks = [
		  "blobfishweappers", 
		  "frozentelimps", 
		  "telimps"
	  ]
	  let toBuildControlString = "";
	  for (let i = 0; i < controldecks.length; i++) {
		toBuildControlString += `\n<@1043528908148052089> **${controldecks[i]}**`;
	  }
	  const midrangerow = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("youngkenmartin3")
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
		  .setCustomId("ykm4")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const ykm4 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("cryoboy4")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("midrangehelp")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const midrangedecks = [
		  "cryoboy", 
		  "ykm"
	  ]
	  let toBuildMidrangeString = "";
	  for (let i = 0; i < midrangedecks.length; i++) {
		toBuildMidrangeString += `\n<@1043528908148052089> **${midrangedecks[i]}**`;
	  }
	  const temporow = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("sweap3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("cl3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const cl3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("helptempo")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("sw3")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const sw3 = new ActionRowBuilder().addComponents(
		  new ButtonBuilder()
		  .setCustomId("conjureleap3")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
		  new ButtonBuilder()
		  .setCustomId("tempohelp")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  )
	  const tempodecks = [
		  "conjureleap", 
		  "sweap"
	  ]
	  let toBuildTempoString = "";
	  for (let i = 0; i < tempodecks.length; i++) {
		toBuildTempoString += `\n<@1043528908148052089> **${tempodecks[i]}**`;
	  }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
      )
      .setTitle(
        "Huge-Gigantacus | <:Brainy:1062500939908530246><:Sneaky:1062502187781075094>"
      )
      .setDescription("**\\- Science Imp Hero  -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Iron Boarder <:Brainy:1062500939908530246> \n 2<:Bullseye:1062501003313819678>/3<:Health:1062515540712751184>, <:Bullseye:1062501003313819678>Bullseye, **While in an Environment:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \n Teleportation Station <:Brainy:1062500939908530246> \n **Start of Turn:** If there's a Zombie here, gain a Teleport. \n Ice Moon <:Sneaky:1062502187781075094> \n Zombies here get <:Strikethrough:1062502987425140806>__Strikethrough__. \n **When played:** <:freeze:1323059404874055774>__Freeze__ all Plants here. \n Terror-Former 10,000 <:Brainy:1062500939908530246><:Sneaky:1062502187781075094> \n __Conjure__ an Environment and a trick. All Environment and Trick cards in your hand costs 1<:Brainz:1062503146745774183> less. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Go on, tell him he's actually quite small. \n See what happens. \n You're not going to like it.",
        }
      )
      .setColor("Random");

    let teleport = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/4/4c/Teleport_HD.png/revision/latest?cb=20181016041010"
      )
      .setTitle("Teleport | <:Brainy:1062500939908530246>")
      .setDescription("**\\- Science Trick  -**")
      .addFields(
        { name: "Stats", value: "1 <:Brainz:1062503146745774183>" },
        {
          name: "Ability",
          value:
            "You may play a Zombie when it's time for Tricks this turn. \n Draw a card.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Legendary**",
        },
        {
          name: "Flavor Text",
          value: `Feels like cheating.`,
        }
      )
      .setColor("Random");
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
      )
      .setTitle("Huge Gigantacus Decks")
      .setDescription(
        `My commands for Huge-Gigantacus(HG) are ${toBuildString}`
      )
      .setColor("Random")
      .setFooter({
        text: `To view the Huge Gigantacus decks please use the commands listed above or click on the buttons below!
Note: there are ${decks.length} total decks for Huge Gigantacus in Tbot`,
      });
	  let helphgEmbed= new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
      )
      .setTitle("Huge Gigantacus Decks")
      .setDescription(
        `To view the Huge Gigantacus decks please click on the buttons below!
Note: there are ${decks.length} total decks for Huge Gigantacus in Tbot`
      )
      .setColor("Random"); 
	  let compEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
      )
      .setTitle("Huge Gigantacus Competitive Decks")
      .setDescription(
        `My competitive decks for Huge-Gigantacus(HG) are ${toBuildCompString}`
      )
      .setColor("Random")
      .setFooter({
        text: `To view the competitive Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all competitive decks!
Note: there are ${compdecks.length} competitive decks for Huge Gigantacus in Tbot`,
      });
	  let ladderEmbed = new EmbedBuilder()
	  .setThumbnail(
		"https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
	  )
	  .setTitle("Huge Gigantacus Ladder Decks")
	  .setDescription(
		`My ladder decks for Huge-Gigantacus(HG) are ${toBuildLadderString}`
	  )
	  .setColor("Random")
	  .setFooter({
		text: `To view the ladder Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: there are ${ladderdecks.length} ladder decks for Huge Gigantacus in Tbot`,
	  });
	  let memeEmbed = new EmbedBuilder()
	  .setThumbnail(
		"https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
	  )
	  .setTitle("Huge Gigantacus Meme Decks")
	  .setDescription(
		`My meme decks for Huge-Gigantacus(HG) are ${toBuildMemeString}`
	  )
	  .setColor("Random")
	  .setFooter({
		text: `To view the meme Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: there are ${memedecks.length} meme decks for Huge Gigantacus in Tbot`,
	  }); 
	  let comboEmbed = new EmbedBuilder()
	  .setThumbnail(
		"https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
	  )
	  .setTitle("Huge Gigantacus Combo Decks")
	  .setDescription(
		`My combo decks for Huge-Gigantacus(HG) are ${toBuildComboString}`
	  )
	  .setColor("Random")
	  .setFooter({
		text: `To view the combo Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: there are ${combodecks.length} combo decks for Huge Gigantacus in Tbot`
	  })
	  let controlEmbed = new EmbedBuilder()
	  .setThumbnail(
		"https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
	  )
	  .setTitle("Huge Gigantacus Control Decks")
	  .setDescription(
		`My control decks for Huge-Gigantacus(HG) are ${toBuildControlString}`
	  )
	  .setColor("Random")
	  .setFooter({
		text: `To view the control Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: there are ${controldecks.length} control decks for Huge Gigantacus in Tbot`
	  })
	  let midrangeEmbed = new EmbedBuilder()
	  .setThumbnail(
		"https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
	  )
	  .setTitle("Huge Gigantacus Midrange Decks")
	  .setDescription(
		`My midrange decks for Huge-Gigantacus(HG) are ${toBuildMidrangeString}`
	  )
	  .setColor("Random")
	  .setFooter({
		text: `To view the midrange Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: there are ${midrangedecks.length} midrange decks for Huge Gigantacus in Tbot`
	  })
	  let tempoEmbed = new EmbedBuilder()
	  .setThumbnail(
		"https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
	  )
	  .setTitle("Huge Gigantacus Tempo Decks")
	  .setDescription(
		`My tempo decks for Huge-Gigantacus(HG) are ${toBuildTempoString}`
	  )
	  .setColor("Random")
	  .setFooter({
		text: `To view the tempo Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all tempo decks!
Note: there are ${tempodecks.length} tempo decks for Huge Gigantacus in Tbot`
	  })
    let [result] = await db.query(`SELECT * FROM hgdecks`);
	let blobfishwrappers = new EmbedBuilder()
	.setTitle(`${result[5].blobfishwrappers}`)
	.setDescription(`${result[3].blobfishwrappers}`)
	.setFooter({ text: `${result[2].blobfishwrappers}` })
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].blobfishwrappers}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].blobfishwrappers}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].blobfishwrappers}`,
		inline: true,
	  }
	)
	.setColor("Random")
	.setImage(`${result[4].blobfishwrappers}`);
  let budgetykm= new EmbedBuilder()
	.setTitle(`${result[5].budgetykm}`)
	.setDescription(`${result[3].budgetykm}`)
	.setFooter({ text: `${result[2].budgetykm}` })
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].budgetykm}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].budgetykm}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].budgetykm}`,
		inline: true,
	  }
	)
	.setColor("Random")
	.setImage(`${result[4].budgetykm}`);
  let conjureleap = new EmbedBuilder()
	.setTitle(`${result[5].conjureleap}`)
	.setDescription(`${result[3].conjureleap}`)
	.setFooter({ text: `${result[2].conjureleap}` })
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].conjureleap}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].conjureleap}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].conjureleap}`,
		inline: true,
	  }
	)
	.setColor("Random")
	.setImage(`${result[4].conjureleap}`);
  const cryoboy = new EmbedBuilder()
	.setTitle(`${result[5].cyroboy}`)
	.setDescription(`${result[3].cyroboy}`)
	.setFooter({ text: `${result[2].cyroboy}` })
	.setColor("Random")
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].cyroboy}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].cyroboy}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].cyroboy}`,
		inline: true,
	  }
	)
	.setImage(`${result[4].cyroboy}`);
  let frozentelimps = new EmbedBuilder()
	.setTitle(`${result[5].frozentelimps}`)
	.setDescription(`${result[3].frozentelimps}`)
	.setColor("Random")
	.setImage(`${result[4].frozentelimps}`)
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].frozentelimps}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].frozentelimps}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].frozentelimps}`,
		inline: true,
	  }
	)
	.setFooter({ text: `${result[2].frozentelimps}` });
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
  let gravestache = new EmbedBuilder()
	.setTitle(`${result[5].gravestache}`)
	.setDescription(`${result[3].gravestache}`)
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].gravestache}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].gravestache}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].gravestache}`,
		inline: true,
	  }
	)
	.setFooter({ text: `${result[2].gravestache}` })
	.setColor("Random")
	.setImage(`${result[4].gravestache}`);
  let kitchenhg = new EmbedBuilder()
	.setTitle(`${result[5].kitchenhg}`)
	.setDescription(`${result[3].kitchenhg}`)
	.setFooter({ text: `${result[2].kitchenhg}` })
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].kitchenhg}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].kitchenhg}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].kitchenhg}`,
		inline: true,
	  }
	)
	.setColor("Random")
	.setImage(`${result[4].kitchenhg}`);
	let otkswabbie = new EmbedBuilder()
	.setTitle(`${result[5].otkswabbie}`)
	.setDescription(`${result[3].otkswabbie}`)
	.setFooter({text: `${result[2].otkswabbie}`})
				.addFields({
					name: "Deck Type", 
					value: `${result[6].otkswabbie}`,
					inline: true
				},{
					name: "Archetype",
					value: `${result[0].otkswabbie}`,
					inline: true
				},{
					name: "Deck Cost", 
					value:`${result[1].otkswabbie}`,
					inline: true
				})
		.setColor("Random")
.setImage(`${result[4].otkswabbie}`)
  let sweap = new EmbedBuilder()
	.setTitle(`${result[5].sweap}`)
	.setDescription(`${result[3].sweap}`)
	.setFooter({ text: `${result[2].sweap}` })
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].sweap}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].sweap}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].sweap}`,
		inline: true,
	  }
	)
	.setColor("Random")
	.setImage(`${result[4].sweap}`);
  let telimps = new EmbedBuilder()
	.setTitle(`${result[5].telimps}`)
	.setDescription(`${result[3].telimps}`)
	.setFooter({ text: `${result[2].telimps}` })
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].telimps}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].telimps}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].telimps}`,
		inline: true,
	  }
	)
	.setColor("Random")
	.setImage(`${result[4].telimps}`);
  let youngkenmartin = new EmbedBuilder()
	.setTitle(`${result[5].ykm}`)
	.setDescription(`${result[3].ykm}`)
	.setFooter({ text: `${result[2].ykm}` })
	.addFields(
	  {
		name: "Deck Type",
		value: `${result[6].ykm}`,
		inline: true,
	  },
	  {
		name: "Archetype",
		value: `${result[0].ykm}`,
		inline: true,
	  },
	  {
		name: "Deck Cost",
		value: `${result[1].ykm}`,
		inline: true,
	  }
	)
	.setColor("Random")
	.setImage(`${result[4].ykm}`);
    const t = await message.channel.send({
      embeds: [embed],
      components: [helphg],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = t.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "teleport") {
        await i.reply({ embeds: [teleport], flags: MessageFlags.Ephemeral });
      }
      if (i.customId == "huge") {
        await i.update({ embeds: [helphgEmbed], components: [row] });
      }
	  if(i.customId == "select"){
		const value = i.values[0];
		if(value == "budget"){
			await i.reply({embeds: [budgetykm], flags: MessageFlags.Ephemeral})
		}
		if(value == "comp"){
			await i.update({embeds: [compEmbed], components: [comprow]})
		}
		if(value == "ladder"){
			await i.update({embeds: [ladderEmbed], components: [ladderrow]})
		}
		if(value == "meme"){
			await i.update({embeds: [memeEmbed], components: [memerow]})
		}
		if(value == "aggro"){
			await i.reply({embeds: [gravepiratestache], flags: MessageFlags.Ephemeral})
		}
		if(value == "combo"){
			await i.update({embeds: [comboEmbed], components: [comborow]})
		}
		if(value == "control"){
			await i.update({embeds: [controlEmbed], components: [controlrow]})
		}
		if(value == "midrange"){
			await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
		}
		if(value == "tempo"){
			await i.update({embeds: [tempoEmbed], components: [temporow]})
		}
		if(value == "all"){
			await i.update({embeds: [allEmbed], components: [alldecksrow]})
		}
	}
  if (i.customId == "bgus" || i.customId == "budgetgus") {
	await i.update({ embeds: [budgetykm], components: [bgus] });
  }
  if (i.customId == "bgus2" || i.customId == "budgetgus2") {
	await i.update({ embeds: [budgetykm], components: [bgus2] });
  }
  if (i.customId == "helpall" || i.customId == "allhelp" ) {
	await i.update({ embeds: [allEmbed], components: [alldecksrow] });
  }
  if (i.customId == "helpcomp" || i.customId == "comphelp" ) {
	await i.update({ embeds: [compEmbed], components: [comprow] });
  }
  if (i.customId == "helpladder" || i.customId == "ladderhelp" ) {
	await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
  }
  if (i.customId == "helpmeme" || i.customId == "memehelp" ) {
	await i.update({ embeds: [memeEmbed], components: [memerow] });
  }
  if (i.customId == "helpcombo" || i.customId == "combohelp") {
	await i.update({ embeds: [comboEmbed], components: [comborow] });
  }
  if (i.customId == "helpcontrol" || i.customId == "controlhelp" ) {
	await i.update({ embeds: [controlEmbed], components: [controlrow] });
  }
  if (i.customId == "helpmidrange" || i.customId == "midrangehelp") {
	await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
  }
  if (i.customId == "helptempo" || i.customId == "tempohelp") {
	await i.update({ embeds: [tempoEmbed], components: [temporow] });
  }
  if(i.customId == "bfwrap"|| i.customId == "blobfishwrappers"){
	await i.update({embeds: [blobfishwrappers], components: [bfwrap]})
  }
  if(i.customId == "bfwrap2"|| i.customId == "blobfishwrappers2"){
	await i.update({embeds: [blobfishwrappers], components: [bfwrap2]})
  }
  if(i.customId == "bfwrap3"|| i.customId == "blobfishwrappers3"){
	await i.update({embeds: [blobfishwrappers], components: [bfwrap3]})
  }
  if(i.customId == "bfwrap4"|| i.customId == "blobfishwrappers4"){
	await i.update({embeds: [blobfishwrappers], components: [bfwrap4]})
  }
  if (i.customId == "cl" || i.customId == "conjureleap") {
	await i.update({ embeds: [conjureleap], components: [cl] });
  }
  if (i.customId == "cl2" || i.customId == "conjureleap2") {
	await i.update({ embeds: [conjureleap], components: [cl2] });
  }
  if (i.customId == "cl3" || i.customId == "conjureleap3") {
	await i.update({ embeds: [conjureleap], components: [cl3] });
  }
  if (i.customId == "ft" || i.customId == "frozentelimps") {
	await i.update({ embeds: [frozentelimps], components: [ft] });
  }
  if (i.customId == "ft2" || i.customId == "frozentelimps2") {
	await i.update({ embeds: [frozentelimps], components: [ft2] });
  }
  if (i.customId == "ft3" || i.customId == "frozentelimps3") {
	await i.update({ embeds: [frozentelimps], components: [ft3] });
  }
  if (i.customId == "ft4" || i.customId == "frozentelimps4") {
	await i.update({ embeds: [frozentelimps], components: [ft4] });
  }
  if (i.customId == "gs" || i.customId == "gravestache") {
	await i.update({ embeds: [gravestache], components: [gs] });
  }
  if (i.customId == "gs2" || i.customId == "gravestache2") {
	await i.update({ embeds: [gravestache], components: [gs2] });
  }
  if (i.customId == "gs3" || i.customId == "gravestache3") {
	await i.update({ embeds: [gravestache], components: [gs3] });
  }
  if(i.customId == "gps" || i.customId == "gravepiratestache"){
	await i.update({embeds: [gravepiratestache], components: [gps]})
  }
  if(i.customId == "gps2" || i.customId == "gravepiratestache2"){
	await i.update({embeds: [gravepiratestache], components: [gps2]})
  }
  if(i.customId == "gps3" || i.customId == "gravepiratestache3"){
	await i.update({embeds: [gravepiratestache], components: [gps3]})
  }
  //CyroBoy
  if (i.customId == "cboy" || i.customId == "cryoboy") {
	await i.update({ embeds: [cryoboy], components: [cboy] });
  }
  if (i.customId == "cboy2" || i.customId == "cryoboy2") {
	await i.update({ embeds: [cryoboy], components: [cboy2] });
  }
  if (i.customId == "cboy3" || i.customId == "cryoboy3") {
	await i.update({ embeds: [cryoboy], components: [cboy3] });
  }
  if (i.customId == "cboy4" || i.customId == "cryoboy4") {
	await i.update({ embeds: [cryoboy], components: [cboy4] });
  }
  if (i.customId == "khg" || i.customId == "kitchenhg") {
	await i.update({ embeds: [kitchenhg], components: [khg] });
  }
  if (i.customId == "khg2" || i.customId == "kitchenhg2") {
	await i.update({ embeds: [kitchenhg], components: [khg2] });
  }
  if (i.customId == "khg3" || i.customId == "kitchenhg3") {
	await i.update({ embeds: [kitchenhg], components: [khg3] });
  }
  if(i.customId == "otks" || i.customId == "otkswabbie"){
	await i.update({ embeds: [otkswabbie], components: [otks] });
  }
  if(i.customId == "otks2" || i.customId == "otkswabbie2"){
	await i.update({ embeds: [otkswabbie], components: [otks2] });
  }
  if(i.customId == "otks3" || i.customId == "otkswabbie3"){
	await i.update({ embeds: [otkswabbie], components: [otks3] });
  }
  if (i.customId == "sw" || i.customId == "sweap") {
	await i.update({ embeds: [sweap], components: [sw] });
  }
  if (i.customId == "sw2" || i.customId == "sweap2") {
	await i.update({ embeds: [sweap], components: [sw2] });
  }
  if (i.customId == "sw3" || i.customId == "sweap3") {
	await i.update({ embeds: [sweap], components: [sw3] });
  }
  if (i.customId == "ti" || i.customId == "telimps") {
	await i.update({ embeds: [telimps], components: [ti] });
  }
  if (i.customId == "ti2" || i.customId == "telimps2") {
	await i.update({ embeds: [telimps], components: [ti2] });
  }
  if (i.customId == "ti3" || i.customId == "telimps3") {
	await i.update({ embeds: [telimps], components: [ti3] });
  }
  if (i.customId == "ti4" || i.customId == "telimps4") {
	await i.update({ embeds: [telimps], components: [ti4] });
  }
  if (i.customId == "ykm" || i.customId == "youngkenmartin") {
	await i.update({ embeds: [youngkenmartin], components: [ykm] });
  }
  if (i.customId == "ykm2" || i.customId == "youngkenmartin2") {
	await i.update({ embeds: [youngkenmartin], components: [ykm2] });
  }
  if (i.customId == "ykm3" || i.customId == "youngkenmartin3") {
	await i.update({ embeds: [youngkenmartin], components: [ykm3] });
  }
  if (i.customId == "ykm4" || i.customId == "youngkenmartin4") {
	await i.update({ embeds: [youngkenmartin], components: [ykm4] });
  }
    });
  },
};
