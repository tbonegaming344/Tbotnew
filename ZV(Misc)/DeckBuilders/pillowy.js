const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    MessageFlags
  } = require("discord.js");
  let db = require("../../index.js");
  module.exports = {
    name: `pillowy`,
    aliases: [
      `decksmadebypillowy`,
      `helppillowy`,
      `pillowyhelp`,
      `pillowydecks`,
      `decksmadebypillowy`,
      `helppillowy`,
      `pillowyhelp`,
      `pillowydecks`,
    ],
    category: `DeckBuilders`,
    run: async(client, message, args)=> {
      const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Pillowy's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Deck")
        .setValue("competitive")
        .setEmoji("<:compemote:1325461143136764060>")
        .setDescription("Some of the best decks in the game"),
        new StringSelectMenuOptionBuilder()
        .setLabel("Meme Deck")
        .setValue("meme")
        .setDescription("Decks that are built off a weird/fun combo"), 
        new StringSelectMenuBuilder()
        .setLabel("Aggro Deck")
        .setValue("aggro")
        .setDescription("Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."),
        new StringSelectMenuBuilder()
        .setLabel("Combo Deck")
        .setValue("combo")
        .setDescription("Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."),
        new StringSelectMenuOptionBuilder()
        .setLabel("Midrange Deck")
        .setValue("midrange")
        .setDescription("Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game")
      )
          let decks = ["abeans", "starrings"];
          let [result] = await db.query(`SELECT abeans, sovietonion FROM gsdecks`)
          let user = await client.users.fetch("1157720864679272549");
          let pillowy = new EmbedBuilder()
            .setTitle(`${user.displayName} Decks`)
            .setDescription(
              `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
            )
            .setThumbnail(user.displayAvatarURL())
            .setColor("Random");
            let abeans = new EmbedBuilder()
	.setTitle(`${result[5].abeans}`)
	.setDescription(`${result[3].abeans}`)
	.setFooter({text: `${result[2].abeans}`})
			.addFields({
			name: "Deck Type",
			value: `${result[6].abeans}`,
			inline: true
			},
			{
			name: "Archetype",
			value: `${result[0].abeans}`,
			inline: true
			},
			{
				name: "Deck Cost", 
				value: `${result[1].abeans}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].abeans}`)
            let tsunion = new EmbedBuilder()
        .setTitle(`${result[5].sovietonion}`)
        .setDescription(`${result[3].sovietonion}`)
        .setFooter({text: `${result[2].sovietonion}`})
        .addFields({
            name: "Deck Type",
            value: `${result[6].sovietonion}`,
            inline: true
        },
        {
            name: "Archetype",
            value: `${result[0].sovietonion}`,
            inline: true
        },
        {
            name: "Deck Cost", 
            value: `${result[1].sovietonion}`,
            inline: true
        })
        .setColor("Random")
        .setImage(`${result[4].sovietonion}`)
          const m = await message.channel.send({ embeds: [pillowy], components: [row] });
          const iFilter = (i) => i.user.id === message.author.id;
          const collector = m.createMessageComponentCollector({ filter: iFilter });
          collector.on("collect", async (i) => {
            if(i.customId == "select"){
            const value = i.values[0];
            if(value == "competitive" || value == "aggro"){
              await i.reply({embeds: [abeans], flags: MessageFlags.Ephemeral})
            }
            if(value == "meme" || value == "combo" || value == "midrange"){
              await i.reply({embeds: [tsunion], flags: MessageFlags.Ephemeral})
            }
            }
          });
        },
      };