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
  name: `pvzfurmade`,
  aliases: [
    `decksmadebypvzfurmade`,
    `pvzfurmadedecks`,
    `pvzfurmadehelp`,
    `furmade`,
    `furmadedecks`,
    `helppvzfurmade`,
    `furmadehelp`,
    `helpfurmade`,
    `furmadedecks`,
    `furmade`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view pvzfurmade's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription('Some of the Best Decks in the game')
          .setEmoji("<:compemote:1325461143136764060>"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'), 
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
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      )
    const row = new ActionRowBuilder().addComponents(select);
    const combo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("py")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bd")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyeez")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const py = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bducks")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let combodecks = ["bonusducks", "pablosyeezys"];
    let toBuildComb = "";
    for (let i = 0; i < combodecks.length; i++) {
      toBuildComb += `\n<@1043528908148052089> **${combodecks[i]}**`;
    }
    let memedecks = ["bonusducks"];

	let [result] = await db.query(`SELECT bonusducks, pablosyeezys
from pbdecks pb 
inner join smdecks sm 
on (pb.deckinfo = sm.deckinfo)`);
    let user = await client.users.fetch("1068350961900326983");
    let fur = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${combodecks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combofur = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildComb}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName}  please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} Combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let bducks = new EmbedBuilder()
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
    let pyeez = new EmbedBuilder()
    .setTitle(`${result[5].pablosyeezys}`)	
    .setDescription(`${result[3].pablosyeezys}`)
.setFooter({text: `${result[2].pablosyeezys}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].pablosyeezys}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].pablosyeezys}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].pablosyeezys}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].pablosyeezys}`)
    const m = await message.channel.send({ embeds: [fur], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0]
        if(value == "comp"){
          await i.reply({ embeds: [pyeez], flags: MessageFlags.Ephemeral });
        }
        if(value == "meme"){
          await i.reply({ embeds: [bducks], flags: MessageFlags.Ephemeral });
        }
        if(value == "combo"){
          await i.update({ embeds: [combofur], components: [combo] });
        }
        if(value == "control"){
          await i.reply({ embeds: [bducks], flags: MessageFlags.Ephemeral });
        }
        if(value == "midrange"){
          await i.reply({ embeds: [pyeez], flags: MessageFlags.Ephemeral });
        }

      }
      if (i.customId == "bd" || i.customId == "bducks") {
        await i.update({ embeds: [bducks], components: [bd] });
      }
      if (i.customId == "py" || i.customId == "pyeez") {
        await i.update({ embeds: [pyeez], components: [py] });
      }
      if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [combofur], components: [combo] });
      }
    });
  },
};
