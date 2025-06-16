const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags} = require('discord.js');
const db = require("../../index.js")
module.exports = {
	name: `astrocado`,
	aliases: [`cado`, `astro2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select astrocado, astrocadopit from solarcards`)		 
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cado')
                    .setLabel(`${result[1].astrocado}`)
                    .setStyle(ButtonStyle.Success)
					.setEmoji('<:AstrocadoPitCardImage:1107464101103411280>')
            );
		const cado = new EmbedBuilder()
		.setThumbnail(`${result[4].astrocado}`)
		.setTitle(`${result[7].astrocado}`)
		.setDescription(`${result[2].astrocado}`)
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: `${result[6].astrocado}`,
								inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].astrocado}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].astrocado}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].astrocado}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].astrocado}`,
								 inline: true
							 })
		const pit = new EmbedBuilder()
		.setThumbnail(`${result[4].astrocadopit}`)
		.setTitle(`${result[7].astrocadopit}`)
		.setDescription(`${result[2].astrocadopit}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].astrocadopit}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].astrocadopit}`, 
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].astrocadopit}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].astrocadopit}`,
								 inline: true
							 })
			const m = await	message.channel.send({embeds: [cado], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'cado')  {
				await i.reply({embeds: [pit], flags: MessageFlags.Ephemeral})
			}
			})
	}
}