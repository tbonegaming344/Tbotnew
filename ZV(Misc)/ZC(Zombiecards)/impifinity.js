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
  name: `impfinity`,
  aliases: [`if`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ifhelp")
        .setLabel("Impifinity(IF) Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:Impfinity:1087754523050774659>")
    );
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wrathmartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bif")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bif = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stars")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stars = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetif")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("spl")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const spl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("spacestars")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "budgetif",
      "spacestars",
      "splimps",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Impfinity's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
      .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best Plant Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Impfinity Decks")
      .setValue("all")
      .setDescription('View all of Impfinity(IF) decks')
      .setEmoji("<:Impfinity:1087754523050774659>")
    )

    const row = new ActionRowBuilder().addComponents(select);
    let budgetdecks = [
      "budgetif", 
    ]
    let compdecks = [
      "spacestars"
    ]
    let ladderdecks = [
      "splimps", 
    ]
    let aggrodecks = [
      "splimps", 
    ]
    let combodecks = [
      "spacestars"
    ]
    let midrangedecks = [
      "spacestars"
    ]
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/8/83/Impfinity.webp/revision/latest?cb=20220421015258"
      )
      .setTitle(
        "Impfinity | <:Sneaky:1062502187781075094><:Crazy:1062502046474973224>"
      )
      .setDescription("**\\-  Imp Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Super Stench <:Sneaky:1062502187781075094> \n All Zombies get <:Deadly:1062501985795964928>__Deadly__.  \n In-Crypted <:Sneaky:1062502187781075094> \n A Zombie hides in a __Gravestone__.  \n Brute Strength <:Crazy:1062502046474973224> \n A Zombie gets +3<:Strength:1062501774612779039>. \n Triple Threat <:Sneaky:1062502187781075094><:Crazy:1062502046474973224> \n Make two 2<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Impfinity Clones with __Amphibious__ in random lanes.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: `He believes good things come in small packages. And in threes.`,
        }
      )
      .setColor("Random");
      
    let alldecksEmbed = new EmbedBuilder()
    .setThumbnail(
      "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520"
    )
    .setTitle("Impfinity(IF) Decks")
    .setDescription(`My commands for Impfinity(IF) are ${toBuildString}`)
    .setFooter({
      text: `To view the Impfinity decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Impfinity has ${decks.length} total decks in Tbot`,
    })
    .setColor("Random")
    let helpif = new EmbedBuilder()
    .setThumbnail(
      "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520"
    )
    .setTitle("Impfinity(IF) Decks")
    .setDescription(`To view the Impfinity decks please click on the buttons below!
Note: Impfinity has ${decks.length} total decks in Tbot`)
    .setColor("Random")
  let [result] = await db.query(`SELECT * FROM ifdecks`);
  let budgetif = new EmbedBuilder()
  .setTitle(`${result[5].budgetif}`)	
  .setDescription(`${result[3].budgetif}`)
  .setFooter({text: `${result[2].budgetif}`})
      .addFields({
        name: "Deck Type",
        value: `${result[6].budgetif}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].budgetif}`,
        inline: true
      },{
        name: "Deck Cost", 
        value: `${result[1].budgetif}`,
        inline: true
      })
    .setColor("Random")			
    .setImage(`${result[4].budgetif}`)
  let spacestars = new EmbedBuilder()
  .setTitle(`${result[5].spacestars}`)
  .setDescription(`${result[3].spacestars}`)
  .setFooter({ text: `${result[2].spacestars}` })
  .addFields({
    name: "Deck Type",
    value: `${result[6].spacestars}`,
    inline: true
  },{ 
    name: "Archetype", 
    value: `${result[0].spacestars}`,
    inline: true
  },{ 
    name: "Deck Cost", 
    value: `${result[1].spacestars}`,
    inline: true  
  })
  .setColor("Random")
  .setImage(`${result[4].spacestars}`);
  let splimps = new EmbedBuilder()
  .setTitle(`${result[5].splimps}`)
  .setDescription(`${result[3].splimps}`)
  .setFooter({text: `${result[2].splimps}`})
      .addFields({
        name: "Deck Type",
        value: `${result[6].splimps}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].splimps}`,
        inline: true
      },{
        name: "Deck Cost", 
        value: `${result[1].splimps}`,
        inline: true
      })
    .setColor("Random")
    .setImage(`${result[4].splimps}`)
  let wrathmartin = new EmbedBuilder()
  .setTitle(`${result[5].wrathmartin}`)
  .setDescription(`${result[3].wrathmartin}`)
  .setFooter({ text: `${result[2].wrathmartin}` })
  .addFields({
    name: "Deck Type",
    value: `${result[6].wrathmartin}`,
    inline: true
  },{ 
    name: "Archetype", 
    value: `${result[0].wrathmartin}`,
    inline: true
  },{ 
    name: "Deck Cost", 
    value: `${result[1].wrathmartin}`,
    inline: true 
  })
  .setColor("Random")
  .setImage(`${result[4].wrathmartin}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ifhelp") {
        await i.update({ embeds: [helpif], components: [row] });
      }
      if(i.customId == "select") {
        const value = i.values[0];
        if(value == "budget"){
          await i.reply({embeds: [budgetif], flags: MessageFlags.Ephemeral});
        }
        if(value == "comp" || value == "combo" || value == "midrange"){
          await i.reply({embeds: [spacestars], flags: MessageFlags.Ephemeral});
        }
        if(value == "ladder" || value == "aggro"){
          await i.reply({embeds: [splimps], flags: MessageFlags.Ephemeral});
        }
        if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]});
        }
      }
      if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      if( i.customId == "helpaggro" || i.customId == "aggrohelp") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      }
      if (i.customId == "bif" || i.customId == "budgetif") {
        await i.update({ embeds: [budgetif], components: [bif] });
      }
      if (i.customId == "stars" || i.customId == "spacestars") {
        await i.update({ embeds: [spacestars], components: [stars] });
      }
      if (i.customId == "spl" || i.customId == "splimps") {
        await i.update({ embeds: [splimps], components: [spl] });
      }
      if (i.customId == "spl2" || i.customId == "splimps2") {
        await i.update({ embeds: [splimps], components: [spl2] });
      }
      if(i.customId == "spl3" || i.customId == "splimps3") {
        await i.update({ embeds: [splimps], components: [spl3] });
      }
      if(i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
    });
  },
};
