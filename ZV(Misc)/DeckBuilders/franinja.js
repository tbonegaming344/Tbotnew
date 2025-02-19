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
  name: `franinja`,
  aliases: [`franinjadecks`, `franinjahelp`, `helpfraninja`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Franinja's Deck")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"),
      new  StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setEmoji("<:ladder:1271503994857979964>")
      .setDescription('Decks that mostly only good for ranked games'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setValue("aggro")    
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
    )
    const row = new ActionRowBuilder().addComponents(select);
    let decks = ["blobfishwrappers", "marxbolt"];
    let toBuildString = ""; 
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select blobfishwrappers, marxbolt
		from hgdecks hg inner join 
		rbdecks rb on (hg.deckinfo = rb.deckinfo)`);
    let user = await client.users.fetch("488426862058405899");
    let fran = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please selectan option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let bwrappers = new EmbedBuilder()
    .setTitle(`${result[5].blobfishwrappers}`)
    .setDescription(`${result[3].blobfishwrappers}`)
    .setFooter({ text: `${result[2].blobfishwrappers}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].blobfishwrappers}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].blobfishwrappers}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].blobfishwrappers}`,
      inline: true 
    })
    .setColor("Random")
    .setImage(`${result[4].blobfishwrappers}`);
    let marxbolt = new EmbedBuilder()
    .setTitle(`${result[5].marxbolt}`)
		.setDescription(`${result[3].marxbolt}`)
		.setFooter({text: `${result[2].marxbolt}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].marxbolt}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].marxbolt}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].marxbolt}`,
			inline: true
		})
		.setColor("Random")
		.setImage(`${result[4].marxbolt}`)
    const m = await message.channel.send({ embeds: [fran], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "comp" || value == "control" || value == "combo"){
          await i.reply({embeds: [bwrappers], flags: MessageFlags.Ephemeral});
        }
        if(value =="aggro" || value == "ladder"){
          await i.reply({embeds: [marxbolt], flags: MessageFlags.Ephemeral});
        }
      }
    });
  },
};
