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
  name: `rose`,
  aliases: [`ro`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Rose Decks")
        .setEmoji("<:DeadInside:1100168228027760800>")
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
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
      .setValue("meme")
      .setDescription('Plant Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Tempo Deck')
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Rose Decks")
      .setValue("all")
      .setDescription('View all of Rose\'s decks')
      .setEmoji("<:DeadInside:1100168228027760800>") 
    )
    const row = new ActionRowBuilder().addComponents(select)
    const budgetdecks = [
      "budgetro"
    ];
    const compdecks = [
      "healmidrose"
    ]
    const ladderdecks = [
      "frymidrose"
    ]
    const memedecks = [
      "freezeheal"
    ];
    const combodecks = [
      "freezeheal"
    ]; 
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("violetmid2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("fmr")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const fmr= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmid")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hmr")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hmr= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("frymidrose")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("midhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const midrangedecks = [
      "frymidrose", 
      "healmidrose", 
    ];
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const tempodecks = [
      "budgetro"
    ]; 
    const alldecksrow= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healmidrose2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bro")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bro= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("fheal")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const fheal= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetro")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("fmr2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const fmr2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("freezeheal")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hmr2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hmr2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("frymidrose2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "budgetro",
      "freezeheal",
      "frymidrose",
      "healmidrose",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let ro = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/vsbattles/images/1/1f/RosePVZ.png/revision/latest?cb=20181016204100"
      )
      .setTitle(
        "Rose | <:Smarty:1062502890448638022><:Solar:1062502678384607262>"
      )
      .setDescription("**\\- Flower Hero  -**")
      .setColor("Random")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Transmogrify <:Smarty:1062502890448638022> \n Transform a Zombie into a random Zombie that costs 1<:Brainz:1062503146745774183>. \nBig Chill <:Smarty:1062502890448638022> \n <:freeze:1323059404874055774>Freeze a Zombie. \n Draw a card. \nWeed Whack <:Solar:1062502678384607262> \n A Zombies gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \nGoatify <:Smarty:1062502890448638022><:Solar:1062502678384607262> \n Transform a Zombie with the highest Strength into a Goat. \n Goat 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184>, Gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when any Goat is hurt. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "Refuses to be nerfed.",
        }
      );
      let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517"
      )
      .setTitle("Rose Decks")
      .setDescription(`To view the Rose decks please click on the buttons below!
Note: Rose has ${decks.length} total decks in Tbot`)
      .setColor("Random")
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517"
      )
      .setTitle("Rose Decks")
      .setDescription(`My decks for Rose(RO) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Rose decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Rose has ${decks.length} decks in Tbot`,
      });
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517"
      )
      .setTitle("Rose Midrange Decks")
      .setDescription(`My Midrange decks for Rose(RO) are ${toBuildMidrangeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Midrange Rose decks please use the commands listed above or click on the buttons below to navigate through all Midrange decks!
Note: Rose has ${midrangedecks.length} Midrange decks in Tbot`,
      });
    let [result] = await db.query(`SELECT * from rodecks`);
    let budgetrose = new EmbedBuilder()
      .setTitle(`${result[5].budgetro}`)
      .setDescription(`${result[3].budgetro}`)
      .setFooter({ text: `${result[2].budgetro}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetro}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetro}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetro}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetro}`);
    let freezeheal = new EmbedBuilder()
      .setTitle(`${result[5].freezeheal}`)
      .setDescription(`${result[3].freezeheal}`)
      .setFooter({ text: `${result[2].freezeheal}` })
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].freezeheal}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].freezeheal}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].freezeheal}`,
          inline: true,
        }
      )
      .setImage(`${result[4].freezeheal}`);
    let frymidrose = new EmbedBuilder()
      .setTitle(`${result[5].frymidrose}`)
      .setDescription(`${result[3].frymidrose}`)
      .setFooter({ text: `${result[2].frymidrose}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].frymidrose}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].frymidrose}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].frymidrose}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].frymidrose}`);
    let healmidrose = new EmbedBuilder()
      .setTitle(`${result[5].hmr}`)
      .setDescription(`${result[3].hmr}`)
      .setFooter({ text: `${result[2].hmr}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].hmr}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].hmr}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].hmr}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].hmr}`);
    const m = await message.channel.send({ embeds: [ro], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0]
        if(value == "budget" || value == "tempo"){
          await i.reply({embeds: [budgetrose],  flags: MessageFlags.Ephemeral})
        }
        if(value == "comp"){
          await i.reply({embeds: [healmidrose], flags: MessageFlags.Ephemeral})
        }
        if(value == "ladder"){
          await i.reply({embeds: [frymidrose], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme" || value == "combo"){
          await i.reply({embeds: [freezeheal], flags: MessageFlags.Ephemeral})
        }
       if(value == "midrange"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
       }
       if(value == "all"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
       }
      }
     if(i.customId == "allhelp" || i.customId == "helpall"){
      await i.update({embeds: [allEmbed], components: [alldecksrow]})
     }
     if( i.customId == "combohelp" || i.customId == "helpcombo"){
      await i.update({embeds: [comboEmbed], components: [comborow]})
     }
     if( i.customId == "midhelp" || i.customId == "helpmid"){
      await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
     }
     if(i.customId == "fheal" || i.customId == "freezeheal"){
      await i.update({embeds: [freezeheal], components: [fheal]})
     }
     if(i.customId == "fmr" || i.customId == "frymidrose"){
      await i.update({embeds: [frymidrose], components: [fmr]})
     }
     if(i.customId == "fmr2" || i.customId == "frymidrose2"){
      await i.update({embeds: [frymidrose], components: [fmr2]})
     }
     if(i.customId == "hmr" || i.customId == "healmidrose"){
      await i.update({embeds: [healmidrose], components: [hmr]})
     }
     if(i.customId == "hmr2" || i.customId == "healmidrose2"){
      await i.update({embeds: [healmidrose], components: [hmr2]})
     }
     if(i.customId == "bro" || i.customId == "budgetro"){
      await i.update({embeds: [budgetrose], components: [bro]})
     }
    });
  },
};
