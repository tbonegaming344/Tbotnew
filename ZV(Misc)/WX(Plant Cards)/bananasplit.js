const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
const db = require("../../index.js");
module.exports = {
	name: `bananasplit`,
	aliases: [`bsplit`, `bs3`, `split2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select bananasplit, halfbanana from megagrowcards`);
		const half = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId("hb")
			.setStyle(ButtonStyle.Primary)
			.setLabel(`${result[1].bananasplit}`)
			.setEmoji("<:Half_Banana:1105118939631059055>")
		)
		const bs = new EmbedBuilder()
		.setThumbnail(`${result[4].bananasplit}`)
		.setTitle(`${result[7].bananasplit}`)
		.setDescription(`${result[2].bananasplit}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 value:`${result[6].bananasplit}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].bananasplit}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].bananasplit}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].bananasplit}`,
								 inline: true
							 })
		const hb = new EmbedBuilder()
		.setThumbnail(`${result[4].halfbanana}`)
		.setTitle(`${result[7].halfbanana}`)
		.setDescription(`${result[2].halfbanana}`)
		.setColor("Random")	
		.addFields({name: "Stats", 
							 value: `${result[6].halfbanana}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].halfbanana}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].halfbanana}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].halfbanana}`,
								 inline: true
							 })
			const m = await	message.channel.send({embeds: [bs], components: [half] } )
			const collector = m.createMessageComponentCollector()
		collector.on("collect", async i => {
			if(i.customId == 'hb'){
				await i.reply({embeds: [hb], flags: MessageFlags.Ephemeral})
			}
		})
	}
}