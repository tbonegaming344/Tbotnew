const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `witch'sfamiliar`,
	aliases: [`witchsfamiliar`, `imsig`, `wf`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('Zombats')
                    .setLabel('Zombats')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:zombats:1087159395965734962>')
            );
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/48/WitchsFamiliarCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226111928")
			.setTitle("Witch's Familiar | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Make __Zom-Bats__." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Immorticia was cleaning out-her belfry when, lo and behold, she found bats in there.`
								 })
		.setColor("Random")			
	
			let test = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/Zom-Bats_%28Card%29.png/revision/latest/scale-to-width-down/250?cb=20161026140138")
			.setTitle("Zom-Bats | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait",  
									 value: "__Amphibious__"
								 },
								 {
									 name: "Ability", 
									 value: "When this hurts a Plant, draw a card."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Token**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Like chihuahuas with wings... and fangs... and a taste for Plants.`
								 })
		.setColor("Random")			
	
	const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'Zombats')  {	
				await i.reply({embeds: [ test], flags: MessageFlags.Ephemeral} )
			}
		})
		}
}