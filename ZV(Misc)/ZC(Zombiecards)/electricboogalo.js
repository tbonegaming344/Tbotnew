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
  name: `electricboogaloo`,
  aliases: [`eb`, `boog`, `electric`, `boogaloo`, `loo`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Electric Boogaloo decks")
        .setEmoji("<:electricsleeper:1100169044440645776>")
        .setStyle(ButtonStyle.Primary)
    );
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
      .setLabel("Ladder Decks")
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
      ladderDecks: ["gargstar22", "igmaburn"],
      memeDecks: ["huntgargs", "noplayingallowed"],
      aggroDecks: ["budgetburn", "igmaburn", "seacret"],
      comboDecks: ["seacret"],
      controlDecks: ["huntgargs", "noplayingallowed"],
      midrangeDecks: ["gargstar22"],
      allDecks: ["budgetburn", "gargstar22", "huntgargs", "igmaburn", "noplayingallowed", "seacret"],
    }
    const row = new ActionRowBuilder().addComponents(select)
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gstar22")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const gstar22 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
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
      .setCustomId("iburn3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const iburn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("huntgargs")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("npa")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const npa= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmaburn3")
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
    let budgetdecks = [
      "budgetburn"
    ]
    let compdecks = [
      "seacret"
    ]
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmaburn2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("gstar222")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const gstar222 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("iburn2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const iburn2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("gargstar222")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let toBuildLadderString = "";
    for (let i=0; i < electricBoogalooDecks.ladderDecks.length; i++){
      let deck = electricBoogalooDecks.ladderDecks[i]
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
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
      .setCustomId("iburn")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const iburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sea= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("igmaburn")
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
    let combodecks = [
      "seacret", 
    ]
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
    let embed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle(
        "Electric Boogaloo | <:Beastly:1062500894744264714><:Crazy:1062502046474973224>"
      )
      .setDescription("- **Dancing Hero** -")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Dance Off <:Crazy:1062502046474973224> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Backup Dancers in a lne of your choice. Then another appears in a random lanes. \n Evaporate <:Beastly:1062500894744264714> \n Destroy a damaged Plant. \n Draw a card. \n Electrobolt <:Crazy:1062502046474973224> \n Do 3 damage to a Plant. \n Stayin' Alive <:Beastly:1062500894744264714><:Crazy:1062502046474973224> \n Do 3 damage to a Plant. \n Heal your Hero for 3. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "They say that disco is dead, but he's down with the dead.",
        }
      );
    const [result] = await db.query("select * from ebdecks")
    let helpeb= new EmbedBuilder()
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
    let ladderEmbed = new EmbedBuilder()
    .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
    .setTitle("Electric Boogaloo Ladder Decks")
    .setDescription(
      `My Ladder Decks for Electric Boogaloo(EB) are ${toBuildLadderString}`
    )
    .setFooter({
      text: `To view the Ladder Electric Boogaloo decks please use the commands listed above or navigate through all of the Ladder decks using the buttons below!
Note: Electric Boogaloo has ${electricBoogalooDecks.ladderDecks.length} Ladder decks in Tbot`,
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
  let igmaburn = new EmbedBuilder()
  .setTitle(`${result[5].igmaburn}`)	
  .setDescription(`${result[3].igmaburn}`)
.setFooter({text: `${result[2].igmaburn}`})
  .addFields({
    name: "Deck Type",
    value: `${result[6].igmaburn}`,
    inline: true
  },{
    name: "Archetype",
    value: `${result[0].igmaburn}`,
    inline: true
  },{
    name: "Deck Cost", 
    value: `${result[1].igmaburn}`,
    inline: true
  })
.setColor("Random")			
.setImage(`${result[4].igmaburn}`)
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
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [helpeb], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "budget"){
          await i.reply({embeds: [budgetburn], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp" || value == "combo"){
          await i.reply({embeds: [seacret], flags: MessageFlags.Ephemeral})
        }
        if( value == "midrange"){
          await i.reply({embeds: [gargstar22], flags: MessageFlags.Ephemeral})
        }
        if(value == "ladder"){
          await i.update({embeds: [ladderEmbed], components: [ladderrow]})
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
    //Igma Burn 
    if(i.customId == "iburn" || i.customId == "igmaburn"){
      await i.update({embeds: [igmaburn], components: [iburn]})
    }
    if(i.customId == "iburn2" || i.customId == "igmaburn2"){
      await i.update({embeds: [igmaburn], components: [iburn2]})
    }
    if(i.customId == "iburn3" || i.customId == "igmaburn3"){
      await i.update({embeds: [igmaburn], components: [iburn3]})
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
      });
  },
};
