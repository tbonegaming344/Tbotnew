const {
  ActionRowBuilder,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `helpbc`,
  aliases: [
    `bchelp`,
    `bccommands`,
    `commandsbc`,
    `helpbeta`,
    `helpcarrotina`,
    `helpbetacarrotina`,
    `betacarrotinahelp`,
    `beta-carrotinadecks`,
    `betacarrotinadecks`,
    `bcdecks`,
    `betacarrotinacommands`,
    `betadecks`,
    `betahelp`,
    `carrotinadecks`,
    `bcdeck`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setDescription('Some of the Best Plant Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>")
      .setValue("competitive"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setDescription('Decks that mostly only good for ranked games')
      .setEmoji("<:ladder:1271503994857979964>")
      .setValue("ladder"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue("control"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
      .setValue("tempo")
    )
    const row = new ActionRowBuilder().addComponents(select);
    let decks = ["anti", "shamcontrolbc"];
    let [result] = await db.query("SELECT * FROM bcdecks");
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist"
      )
      .setTitle("BC Commands")
      .setDescription(
        `To view the Beta Carrotina decks please select an option from the select menu below
Note: Beta Carrotina has ${decks.length} total decks in Tbot`
      )
      .setColor("Random")
    let anti = new EmbedBuilder()
    .setTitle(`${result[5].anti}`)
		  .setDescription(`${result[3].anti}`)
		  .setFooter({text: `${result[2].anti}`})
				  .addFields({
					name: "Deck Type", 
					value: `${result[6].anti}`,
					inline: true
				  },
				  {
					name: "Archetype",
					value: `${result[0].anti}`,
					inline: true
				  },
				  {
					name: "Deck Cost", 
					value: `${result[1].anti}`,
					inline: true
				})
			  .setColor("Random")
			  .setImage(result[4].anti)
    let shamcontrol = new EmbedBuilder()
    .setTitle(`${result[5].shamcontrol}`)
    .setDescription(`${result[3].shamcontrol}`)
    .setFooter({ text: `${result[2].shamcontrol}` })
    .addFields({ 
      name: "Deck Type",
      value: `${result[6].shamcontrol}`,
      inline: true,   
    },
    {
      name: "Archetype",
      value: `${result[0].shamcontrol}`,
      inline: true
    },
    {
      name: "Deck Cost", 
      value: `${result[1].shamcontrol}`,
      inline: true,
    })
    .setColor("Random")
    .setImage(`${result[4].shamcontrol}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "ladder" || value == "tempo"){
          await i.reply({embeds: [anti], flags: MessageFlags.Ephemeral})
        }
        if(value == "control" || value == "competitive"){
          await i.reply({embeds: [shamcontrol], flags: MessageFlags.Ephemeral})
        }
      }
    });
  },
};
