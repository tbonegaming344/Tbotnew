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
  name: `dozza`,
  aliases: [`decksmadebydozza`, `helpdozza`, `dozzahelp`, `dozzadecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view dozza's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setEmoji("<:ladder:1271503994857979964>")
          .setDescription('Decks that mostly only good for ranked games'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'), 
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
          .setLabel("All Decks")
          .setValue("all")
          .setDescription('View all of dozza\'s decks')
      );
    const row = new ActionRowBuilder().addComponents(select);
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickmech")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mr")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladderhelp")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tmech")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tmech = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpladder")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let ladderdecks = [
      "midred",
      "trickmech"
    ]
    let toBuildLadder = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      toBuildLadder += `\n<@1043528908148052089> **${ladderdecks[i]}**`;
    }
    let combodecks =[
      "midred"
    ]
    let midrange = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
       .setCustomId("hland")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let hlander = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midhelp")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mr3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let mr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hlander")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpmid")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks = [
      'highlander',
      "midred",
    ]
    let toBuildMid = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      toBuildMid += `\n<@1043528908148052089> **${midrangedecks[i]}**`;
    }
    let meme = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hland2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dm")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let dm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("memehelp")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hland2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let hland2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dmech")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpmeme")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let memedecks = [
      "dozzamech",
      "highlander",
    ]
    let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      toBuildMeme += `\n<@1043528908148052089> **${memedecks[i]}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickmech2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dm2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("aggrohelp")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tmech2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const tmech2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dozzamech2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpaggro")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let aggrodecks = [
      "dozzamech",
      "trickmech"
    ]
    let toBuildAggro = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      toBuildAggro += `\n<@1043528908148052089> **${aggrodecks[i]}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pcontrol2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dm3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("allhelp")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hland3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const hland3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dozzamech")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mr4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const mr4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hlander3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "dozzamech",
      "highlander",
      "midred",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select dozzamech, highlander, 
midred, trickmech
from zmdecks zm 
inner join wkdecks wk 
on (zm.deckinfo = wk.deckinfo) 
inner join czdecks cz 
on (zm.deckinfo = cz.deckinfo)`);
let user = await client.users.fetch("1143937777763889324");
    let dozza = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: Dozza has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
  let ladderdozza = new EmbedBuilder()
    .setTitle(`${user.displayName} Ladder Decks`)
    .setDescription(
      `My Ladder decks made by ${user.displayName} are ${toBuildLadder}`
    )
    .setFooter({
      text: `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${ladderdecks.length} Ladder decks in Tbot`
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("Random");
    let alldozza = new EmbedBuilder()
    .setTitle(`${user.displayName} All Decks`)
    .setDescription(
      `My Decks made by ${user.displayName} are ${toBuildString}`
    )
    .setFooter({
      text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("Random");
      let middozza = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange decks made by ${user.displayName} are ${toBuildMid}`
      )
      .setFooter({
        text: `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${midrangedecks.length} Midrange decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let memedozza = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} Meme decks in Tbot`
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let aggrodozza = new EmbedBuilder()
      .setTitle(`${user.displayName} Aggro Decks`)
      .setDescription(
        `My Aggro decks made by ${user.displayName} are ${toBuildAggro}`
      )
      .setFooter({
        text: `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${aggrodecks.length} Aggro decks in Tbot`
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let dmech = new EmbedBuilder()
    .setTitle(`${result[5].dozzamech}`)
    .setDescription(`${result[3].dozzamech}`)
    .setFooter({text: `${result[2].dozzamech}`})
        .addFields({
          name: "Deck Type", 
          value: `${result[6].dozzamech}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].dozzamech}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].dozzamech}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].dozzamech}`)
    let hland = new EmbedBuilder()
    .setTitle(`${result[5].highlander}`)
		.setDescription(`${result[3].highlander}`)
		.setColor("Random")
		.setFooter({text: `${result[2].highlander}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].highlander}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].highlander}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].highlander}`,
			inline: true
		})
		.setImage(`${result[4].highlander}`)
    let mred = new EmbedBuilder()
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
      let trickmech= new EmbedBuilder()
      .setTitle(`${result[5].trickmech}`)
      .setDescription(`${result[3].trickmech}`)
      .setFooter({ text: `${result[2].trickmech}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].trickmech}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].trickmech}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].trickmech}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].trickmech}`);
    const m = await message.channel.send({
      embeds: [dozza],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
    if(i.customId == "select"){
      const value = i.values[0]
      if(value == "ladder"){
        await i.update({embeds: [ladderdozza], components: [ladderrow]});
      }
      if(value == "combo"){
        await i.reply({embeds: [mred], flags: MessageFlags.Ephemeral})
      }
      if(value == "midrange"){
        await i.update({embeds: [middozza], components: [midrange]});
      }
      if(value == "meme"){
        await i.update({embeds: [memedozza], components: [meme]});
      }
      if(value == "aggro"){
        await i.update({embeds: [aggrodozza], components: [aggrorow]});
      }
      if(value == "all"){
        await i.update({embeds: [alldozza], components: [alldecksrow]})
      }
    }
    if(i.customId === "mr" || i.customId === "midred") {
      await i.update({embeds: [mred], components: [mr]});
    }
    if(i.customId === "helpladder" || i.customId == "ladderhelp") {
      await i.update({embeds: [ladderdozza], components: [ladderrow]});
    }
    if(i.customId == "mr2" || i.customId == "midred2") {
      await i.update({embeds: [mred], components: [mr2]});
    }
    // Midrange Decks
    if(i.customId == "mr3" || i.customId == "midred3") {
      await i.update({embeds: [mred], components: [mr3]});
    }
    if(i.customId == "mr4" || i.customId == "midred4") {
      await i.update({embeds: [mred], components: [mr4]});
    }
    if(i.customId == "hland" || i.customId == "hlander") {
      await i.update({embeds: [hland], components: [hlander]});
    }
    if(i.customId === "helpmid" || i.customId == "midhelp") {
      await i.update({embeds: [middozza], components: [midrange]});
    }
    // Meme Decks
    if(i.customId == "hland2" || i.customId == "hlander2") {
      await i.update({embeds: [hland], components: [hland2]});
    }
    if(i.customId == "hland3" || i.customId == "hlander3") {
      await i.update({embeds: [hland], components: [hland3]});
    }
    if(i.customId == "dm" || i.customId == "dmech") {
      await i.update({embeds: [dmech], components: [dm]});
    }
    if(i.customId == "dm2" || i.customId == "dmech2") {
      await i.update({embeds: [dmech], components: [dm2]});
    }
    if(i.customId == "dm3" || i.customId == "dozzamech3") {
      await i.update({embeds: [dmech], components: [dm3]});
    }
    if(i.customId == "memehelp" || i.customId == "helpmeme") {
      await i.update({embeds: [memedozza], components: [meme]});
    }
    if(i.customId == "aggrohelp" || i.customId == "helpaggro"){
      await i.update({embeds: [aggrodozza], components: [aggrorow]})
    }
    if(i.customId == "tmech" || i.customId == "trickmech"){
      await i.update({embeds: [trickmech], components: [tmech]})
    }
    if(i.customId == "tmech2" || i.customId == "trickmech2"){
      await i.update({embeds: [trickmech], components: [tmech2]})
    }
    if(i.customId == "helpall" || i.customId == "allhelp"){
      await i.update({embeds: [alldozza], components: [alldecksrow]})
    }
    });
  },
};
