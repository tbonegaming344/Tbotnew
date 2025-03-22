const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
let db = require("../../index.js");
function CreateHelpEmbed(title, description, thumbnail, footer){
	const embed = new EmbedBuilder()
	  .setTitle(title)
	  .setDescription(description)
	  .setThumbnail(thumbnail)
	  .setColor("Blue");
	if (footer) {
	  embed.setFooter({ text: `${footer}` });
	}
	return embed;
  }
module.exports = {
	name: `wildisnub`,
	aliases: [`wildhelp`, `helpwild`, `wild1`, `decksmadebywild`, `wilddecks`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
		const select = new StringSelectMenuBuilder()
		.setCustomId("select")
		.setPlaceholder("Select an option below to view Wild's decklists")
		.addOptions(
			new StringSelectMenuOptionBuilder()
			.setLabel("Meme Deck")
			.setValue("meme")
			.setDescription('Decks that are built off a weird/fun combo'), 
			new StringSelectMenuOptionBuilder()
			.setLabel("Aggro Deck")
			.setValue("aggro")
			.setDescription("Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."),
			new StringSelectMenuOptionBuilder()
			.setLabel("Combo Deck")
			.setValue("combo")
			.setDescription("Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."),
			new StringSelectMenuOptionBuilder()
			.setLabel("Tempo Deck")
			.setValue("tempo")
			.setDescription("Focuses on slowly building a big board, winning trades and overwhelming the opponent.")
		);
		const row = new ActionRowBuilder().addComponents(select)
		const wildDecks = {
			memeDecks: ["dinogloves", "terrifytricksterazzi"], 
			aggroDecks: ["dinogloves"], 
			comboDecks: ["terrifytricksterazzi"], 
			tempoDecks: ["terrifytricksterazzi"],
			allDecks: ["dinogloves", "terrifytricksterazzi"]
		}
		function CreateButtons(leftButtonId, rightButtonId) {
			return new ActionRowBuilder().addComponents(
			  new ButtonBuilder()
				.setCustomId(leftButtonId)
				.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
				.setStyle(ButtonStyle.Primary),
			  new ButtonBuilder()
				.setCustomId(rightButtonId)
				.setEmoji("<:arrowright:1271446796207525898>")
				.setStyle(ButtonStyle.Primary)
			);
		  }
		  const memerow = new CreateButtons("terrifytricksterazzi", "dgloves");
		  const dgloves = new CreateButtons("helpmeme", "tster");
		  const tster = new CreateButtons("dinogloves", "memehelp");
		
		  function BuildDeckString(decks) {
			return decks.map(deck => `\n<@1043528908148052089> **${deck}**`).join('');
		  }
		const toBuildMemeString = BuildDeckString(wildDecks.memeDecks);
		const user = await client.users.fetch("701053825628241951")
		const wild = new CreateHelpEmbed(
			"Wild Decks",
			`To view the decks made by Wild please select an option from the select menu below! select meme decks to view all decks made by Wild
Note: Wild has ${wildDecks.allDecks.length} decks in Tbot`,
			user.displayAvatarURL()
		)
		const memeEmbed = new CreateHelpEmbed(
			"Wild's Meme Decks",
			`My meme decks created by Wild are ${toBuildMemeString}`,
			user.displayAvatarURL(),
			`To view the meme decks created by Wild please use the commands listed above or click on the buttons below to browse through all the meme decks
Note: Wild has ${wildDecks.memeDecks.length} meme decks in Tbot`
		)
		let [result] = await db.query(`select dinogloves, terrifytricksterazzi from gkdecks gk 
inner join rbdecks rb on (gk.deckinfo = rb.deckinfo)`);
function CreateDeckEmbed(result, deckName) {
	const embed = new EmbedBuilder()
	  .setTitle(`${result[5][deckName]}`)
	  .setDescription(`${result[3][deckName]}`)
	  .setFooter({ text: `${result[2][deckName]}` })
	  .addFields(
		{ name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
		{ name: "Archetype", value: `${result[0][deckName]}`, inline: true },
		{ name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
	  )
	  .setColor("Blue");
	const imageUrl = result[4][deckName];
	if (imageUrl) {
	  embed.setImage(imageUrl);
	}
	return embed;
  }
  		const dinogloves = new CreateDeckEmbed(result, "dinogloves")
		const terrifytricksterazzi =new CreateDeckEmbed(result, "terrifytricksterazzi")
		const m = await	message.channel.send({embeds: [wild], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
		async function HandleSelectMenu(i){
			const value = i.values[0]
			if(value == "meme"){
				await i.update({embeds: [memeEmbed], components: [memerow]})
			}
			if(value == "aggro"){
				await i.reply({embeds: [dinogloves], flags: MessageFlags.Ephemeral})
			}
			if(value == "combo" || value == "tempo"){
				await i.reply({embeds: [terrifytricksterazzi], flags: MessageFlags.Ephemeral})
			}
		}
		async function handleButtonInteraction(i){
			if(i.customId == "dgloves" || i.customId == "dinogloves"){
				await i.update({embeds: [dinogloves], components: [dgloves]})
			}
			if(i.customId == 'tster' || i.customId == 'terrifytricksterazzi'){
				await i.update({embeds: [terrifytricksterazzi], components: [tster]})
			}
			if(i.customId == 'helpmeme' || i.customId == "memehelp"){
				await i.update({embeds: [memeEmbed], components: [memerow]})
			}
		}
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == "select"){
				await HandleSelectMenu(i)
			}
			else{
				await handleButtonInteraction(i)
			}
		})
	}
}