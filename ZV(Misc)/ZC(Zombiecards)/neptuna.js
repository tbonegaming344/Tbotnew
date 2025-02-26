const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `neptuna`,
  aliases: [`nt`, `tuna`, `np`, `neptune`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpnt")
        .setLabel("Neptuna Decks")
        .setStyle(ButtonStyle.Danger)
        .setEmoji("<:NeptunaH:1087845030867247174>")
    );
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ag")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //agraves
    const ag = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("anti")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //Antiagro
    const anti = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agraves")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aaa")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //antiagoragor
    const aaa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagor")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnt")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //budget nt
    const bnt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagoragor")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fl")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //Floss
    const fl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetnt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("go")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //gomorrah
    const go = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("floss")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ib")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //IceBox
    const ib = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lt")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //ladytuna 
    const lt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("icebox")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sy")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //Schoolyard
    const sy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladytuna")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sl")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    //Sunlord
    const sl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "agraves",
      "antiagor",
      "antiagoragor",
      "budgetnt",
      "floss",
      "gomorrah",
      "icebox",
      "ladytuna",
      "schoolyard",
      "sunlord",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Please select an option below to view Neptuna Decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setDescription('A Deck that is cheap for new players')
      .setEmoji("💰")
      .setValue("budget"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setDescription('Some of the best Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>")
      .setValue("comp"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Decks")
      .setDescription("Decks that are generally only good for ranked games")
      .setEmoji("<:ladder:1271503994857979964>") 
      .setValue("ladder"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setDescription("Decks that are built off a weird/fun combo")
      .setValue("meme"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setDescription("attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.")
      .setValue("aggro"), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Combo Decks')
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue('combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Control Deck')
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
      .setLabel("All Neptuna Decks")
      .setDescription("An option to view all decks")
      .setEmoji("<:NeptunaH:1087845030867247174>")
      .setValue("all")
    )
    const row = new ActionRowBuilder()
			.addComponents(select);
    let budgetdecks = [
      "budgetnt",
    ]
    let compdecks = [
      "icebox",
    ]
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ag2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ag2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpladder")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("go2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const go2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agraves2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sy2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sy2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ladderhelp")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let ladderdecks = [
      "agraves",
      "gomorrah",
      "schoolyard"
    ];
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("anti2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const anti2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmeme")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aaa2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const aaa2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagor2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fl2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagoragor2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lt2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("floss2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sl2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladytuna2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("memehelp")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let memedecks =[
      "antiagor", 
      "antiagoragor",
      "floss",
      "ladytuna",
      "sunlord",
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ag3")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ag3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpaggro")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sy3")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sy3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agraves3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aggrohelp")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let aggrodecks = [
      "agraves",
      "schoolyard",
    ]
    let toBuildAggroString = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      let deck = aggrodecks[i];
      toBuildAggroString += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("anti3")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const anti3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aaa3")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const aaa3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagor3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fl3")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagoragor3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sl3")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("floss3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let combodecks =[
      "antiagor",
      "antiagoragor",
      "floss",
      "sunlord",
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    let controldecks = [
      "antiagoragor",
    ]
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("go3")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const go3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmid")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ib2")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ib2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lt3")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("icebox2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sl4")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sl4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladytuna3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midhelp")
    .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks = [
      "gomorrah",
      "icebox",
      "ladytuna",
      "sunlord",
    ]
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    let tempodecks = [
      "budgetnt",
    ]
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle(
        "Neptuna | <:Hearty:1062501636557242429><:Sneaky:1062502187781075094>"
      )
      .setDescription("**\\- Pet Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Dolphinado <:Sneaky:1062502187781075094> \n __Bounce__ a random Plant. \n Possessed <:Hearty:1062501636557242429> \n A Zombie gets +2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. \n In-Crypted <:Sneaky:1062502187781075094> \n A Zombie hides in a __Gravestone__. \n Draw a card. \n Octo-Pult <:Hearty:1062501636557242429><:Sneaky:1062502187781075094> \n Make a 3<:Strength:1062501774612779039>/2<:Health:1062515540712751184> Octo-Pet with __Amphibious__, __Frenzy__.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "She is the first Zombie to fight in a tank.",
        }
      )
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle("Neptuna Decks")
      .setDescription(`My commands for Neptuna(NT) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Neptuna decks please use the commands listed above or click on the buttons below!
Note: Neptuna has ${decks.length} total decks in Tbot`,
      });
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle("Neptuna Ladder Decks")
      .setDescription(`My ladder decks for Neptuna(NT) are ${toBuildLadderString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Neptuna ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Neptuna has a total of ${ladderdecks.length} ladder decks in Tbot`,
      });

      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle("Neptuna Meme Decks")
      .setDescription(`My meme decks for Neptuna(NT) are ${toBuildMemeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Neptuna meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Neptuna has a total of ${memedecks.length} meme decks in Tbot`,
      });
      let aggroEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle("Neptuna Aggro Decks")
      .setDescription(`My aggro decks for Neptuna(NT) are ${toBuildAggroString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Neptuna aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Neptuna has a total of ${aggrodecks.length} aggro decks in Tbot`,
      });
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle("Neptuna Combo Decks")
      .setDescription(`My combo decks for Neptuna(NT) are ${toBuildComboString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Neptuna combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Neptuna has a total of ${combodecks.length} combo decks in Tbot`,
      });
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle("Neptuna Midrange Decks")
      .setDescription(`My midrange decks for Neptuna(NT) are ${toBuildMidrangeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Neptuna midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Neptuna has a total of ${midrangedecks.length} midrange decks in Tbot`,
      });
      let nthelp = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle("Neptuna Decks")
      .setDescription(`To view the Neptuna decks please select an option from the select menu below!
Note: Neptuna has ${decks.length} total decks in Tbot`)
      .setColor("Random")
      let [result] = await db.query(`select * from ntdecks`);
      let agraves = new EmbedBuilder()
        .setTitle(`${result[5].agraves}`)
        .setDescription(`${result[3].agraves}`)
        .setFooter({ text: `${result[2].agraves}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].agraves}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].agraves}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].agraves}`,
            inline: true,
          }
        )
        .setColor("Random")
        .setImage(`${result[4].agraves}`);
      let antiagor = new EmbedBuilder()
        .setTitle(`${result[5].antiagor}`)
        .setDescription(`${result[3].antiagor}`)
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].antiagor}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].antiagor}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].antiagor}`,
            inline: true,
          }
        )
        .setFooter({ text: `${result[2].antiagor}` })
        .setColor("Random")
        .setImage(`${result[4].antiagor}`);
      let antiagoragor = new EmbedBuilder()
        .setImage(`${result[4].antiagoragor}`)
        .setTitle(`${result[5].antiagoragor}`)
        .setDescription(`${result[3].antiagoragor}`)
        .setColor("Random")
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].antiagoragor}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].antiagoragor}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].antiagoragor}`,
            inline: true,
          }
        )
        .setFooter({ text: `${result[2].antiagoragor}` });
      let budgetnt = new EmbedBuilder()
        .setTitle(`${result[5].budgetnt}`)
        .setDescription(`${result[3].budgetnt}`)
        .setFooter({ text: `${result[2].budgetnt}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].budgetnt}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].budgetnt}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].budgetnt}`,
            inline: true,
          }
        )
        .setColor("Random")
        .setImage(`${result[4].budgetnt}`);
      //Floss
      let floss = new EmbedBuilder()
        .setTitle(`${result[5].floss}`)
        .setDescription(`${result[3].floss}`)
        .setColor("Random")
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].floss}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].floss}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].floss}`,
            inline: true,
          }
        )
        .setFooter({ text: `${result[2].floss}` })
        .setImage(`${result[4].floss}`);
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
      let icebox = new EmbedBuilder()
        .setTitle(`${result[5].icebox}`)
        .setDescription(`${result[3].icebox}`)
        .setFooter({ text: `${result[2].icebox}` })
        .setColor("Random")
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].icebox}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].icebox}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].icebox}`,
            inline: true,
          }
        )
        .setImage(`${result[4].icebox}`);
        let ladytuna = new EmbedBuilder()
        .setTitle(`${result[5].ladytuna}`)
        .setDescription(`${result[3].ladytuna}`)
        .setFooter({text: `${result[2].ladytuna}`})
            .setColor("Random")
            .setImage(`${result[4].ladytuna}`)
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].ladytuna}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].ladytuna}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].ladytuna}`,
                    inline: true
                })
      let schoolyard = new EmbedBuilder()
        .setTitle(`${result[5].schoolyard}`)
        .setDescription(`${result[3].schoolyard}`)
        .setFooter({ text: `${result[2].schoolyard}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].schoolyard}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].schoolyard}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].schoolyard}`,
            inline: true,
          }
        )
        .setColor("Random")
        .setImage(`${result[4].schoolyard}`);
      let sunlord = new EmbedBuilder()
        .setTitle(`${result[5].wimps}`)
        .setDescription(`${result[3].wimps}`)
        .setFooter({ text: `${result[2].wimps}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].wimps}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].wimps}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].wimps}`,
            inline: true,
          }
        )
        .setColor("Random")
        .setImage(`${result[4].wimps}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpnt") {
        await i.update({ embeds: [nthelp], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0]
        if(value == "all"){
          await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
        }
        if(value == "comp"){
          await i.reply({embeds: [icebox], flags: MessageFlags.Ephemeral});
        }
        if(value == "ladder"){
          await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
        }
        if(value == "meme"){
          await i.update({ embeds: [memeEmbed], components: [memerow] });
        }
        if(value == "aggro"){
          await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
        }
        if(value == "combo"){
          await i.update({ embeds: [comboEmbed], components: [comborow] });
        }
        if(value == "control"){
          await i.reply({embeds: [antiagoragor], flags: MessageFlags.Ephemeral});
        }
        if(value == "midrange"){
          await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
        }
        if(value == "budget" || value== "tempo"){
          await i.reply({embeds: [budgetnt], flags: MessageFlags.Ephemeral});
        }

      }
      if (i.customId == "ag" || i.customId == "agraves") {
        await i.update({ embeds: [agraves], components: [ag] });
      }
      if (i.customId == "ag2" || i.customId == "agraves2") {
        await i.update({ embeds: [agraves], components: [ag2] });
      }
      if (i.customId == "ag3" || i.customId == "agraves3") {
        await i.update({ embeds: [agraves], components: [ag3] });
      }
      if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      
      if (i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      if ( i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
      if ( i.customId == "helpaggro" || i.customId == "aggrohelp") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      }
      if ( i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      if ( i.customId == "helpcontrol" || i.customId == "controlhelp") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      }
      if ( i.customId == "helpmid" || i.customId == "midhelp") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      if (i.customId == "anti" || i.customId == "antiagor") {
        await i.update({ embeds: [antiagor], components: [anti] });
      }
      if (i.customId == "anti2" || i.customId == "antiagor2") {
        await i.update({ embeds: [antiagor], components: [anti2] });
      }
      if (i.customId == "anti3" || i.customId == "antiagor3") {
        await i.update({ embeds: [antiagor], components: [anti3] });
      }
      if (i.customId == "bnt" || i.customId == "budgetnt") {
        await i.update({ embeds: [budgetnt], components: [bnt] });
      }
      //Floss
      if (i.customId == "fl" || i.customId == "floss") {
        await i.update({ embeds: [floss], components: [fl] });
      }
      if (i.customId == "fl2" || i.customId == "floss2") {
        await i.update({ embeds: [floss], components: [fl2] });
      }
      if (i.customId == "fl3" || i.customId == "floss3") {
        await i.update({ embeds: [floss], components: [fl3] });
      }
      //IceBox
      if (i.customId == "ib" || i.customId == "icebox") {
        await i.update({ embeds: [icebox], components: [ib] });
      }
      if (i.customId == "ib2" || i.customId == "icebox2") {
        await i.update({ embeds: [icebox], components: [ib2] });
      }
      if(i.customId == "lt" || i.customId == "ladytuna") {
        await i.update({ embeds: [ladytuna], components: [lt] });
      }
      if(i.customId == "lt2" || i.customId == "ladytuna2") {
        await i.update({ embeds: [ladytuna], components: [lt2] });
      }
      if(i.customId == "lt3" || i.customId == "ladytuna3") {
        await i.update({ embeds: [ladytuna], components: [lt3] });
      }
      if (i.customId == "sy" || i.customId == "schoolyard") {
        await i.update({ embeds: [schoolyard], components: [sy] });
      }
      if (i.customId == "sy2" || i.customId == "schoolyard2") {
        await i.update({ embeds: [schoolyard], components: [sy2] });
      }
      if (i.customId == "sy3" || i.customId == "schoolyard3") {
        await i.update({ embeds: [schoolyard], components: [sy3] });
      }
      if (i.customId == "aaa" || i.customId == "antiagoragor") {
        await i.update({ embeds: [antiagoragor], components: [aaa] });
      }
      if (i.customId == "aaa2" || i.customId == "antiagoragor2") {
        await i.update({ embeds: [antiagoragor], components: [aaa2] });
      }
      if (i.customId == "aaa3" || i.customId == "antiagoragor3") {
        await i.update({ embeds: [antiagoragor], components: [aaa3] });
      }
      if (i.customId == "sl" || i.customId == "sunlord") {
        await i.update({ embeds: [sunlord], components: [sl] });
      }
      if (i.customId == "sl2" || i.customId == "sunlord2") {
        await i.update({ embeds: [sunlord], components: [sl2] });
      }
      if (i.customId == "sl3" || i.customId == "sunlord3") {
        await i.update({ embeds: [sunlord], components: [sl3] });
      }
      if (i.customId == "sl4" || i.customId == "sunlord4") {
        await i.update({ embeds: [sunlord], components: [sl4] });
      }
      if(i.customId == "go" || i.customId == "gomorrah") {
        await i.update({ embeds: [gomorrah], components: [go] });
      }
      if(i.customId == "go2" || i.customId == "gomorrah2") {
        await i.update({ embeds: [gomorrah], components: [go2] });
      }
      if(i.customId == "go3" || i.customId == "gomorrah3") {
        await i.update({ embeds: [gomorrah], components: [go3] });
      }
    });
  },
};
