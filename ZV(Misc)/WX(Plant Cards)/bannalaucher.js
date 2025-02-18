const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `bananalauncher`,
	aliases: [`blauncher`, `launcher`, `bl`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('bl')
                    .setLabel('Banna Bomb')
                    .setStyle(ButtonStyle.Primary)
					.setEmoji('<:bbomb:1091067039818461224>')
            );
		let bl = new EmbedBuilder()
		.setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5fa8d6d-871b-469c-9c1a-2422c6c23196/dbm0p56-3a32e815-f522-4ccc-b215-310785f40628.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1ZmE4ZDZkLTg3MWItNDY5Yy05YzFhLTI0MjJjNmMyMzE5NlwvZGJtMHA1Ni0zYTMyZTgxNS1mNTIyLTRjY2MtYjIxNS0zMTA3ODVmNDA2MjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yYEhbZJKXgCvPjzoykD4692L__Q-RcyLleM_FkSkSjc")
		.setTitle("Banana Launcher | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** Gain a __Banana Bomb__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He only knows one word. But it's a good one."
							 })
		let bb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a4/BananaLTarget.png/revision/latest/scale-to-width-down/334?cb=20221031054544")
		.setTitle("Banana Bomb | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Fruit Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 2 damage to a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Beware fruity vengeance from above."
							 })
				const m = await	message.channel.send({embeds: [ bl], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'bl')  	{
				await i.reply({embeds: [bb], flags: MessageFlags.Ephemeral} )
			}
		})
	}
}