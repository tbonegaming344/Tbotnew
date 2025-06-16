const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
const db = require("../../index.js");
module.exports = {
	name: `atomicbombegranate`,
	aliases: [`atomic`, `bombegranate`, `bomb2`, `ab`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select atomicbombegranate, seedling from kabloomcards`);
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('seed')
                    .setLabel(`${result[1].atomicbombegranate}`)
                    .setStyle(ButtonStyle.Success)
					.setEmoji('<:seed:1094704185074794578>')
            );
		const ab = new EmbedBuilder()
		.setThumbnail(`${result[4].atomicbombegranate}`)
		.setTitle(`${result[7].atomicbombegranate}`)
		.setDescription(`${result[2].atomicbombegranate}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 value: `${result[6].atomicbombegranate}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].atomicbombegranate}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].atomicbombegranate}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].atomicbombegranate}`,
								 inline: true
							 })
		const seed = new EmbedBuilder()
		.setThumbnail(`${result[4].seedling}`)
		.setTitle(`${result[7].seedling}`)
		.setDescription(`${result[2].seedling}`)
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: `${result[6].seedling}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].seedling}`,
								 inline: true
							 },
							 {
								 name:"Set-Rarity",
								 value: `${result[5].seedling}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].seedling}`,
								 inline: true
							 })
			const m = await	message.channel.send({embeds: [ab], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'seed')  	{
				await i.reply({embeds: [seed], flags: MessageFlags.Ephemeral} )
			}
		})
	}
}