const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `bobblehead`,
	aliases: [`lefiizz`, `headhunter`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
      .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11c1d4dc-5483-433e-a5e6-d51a36c6ca1d/dfkvj2c-0bda216b-47e5-41e4-8a0d-70cdeaf6fbcb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExYzFkNGRjLTU0ODMtNDMzZS1hNWU2LWQ1MWEzNmM2Y2ExZFwvZGZrdmoyYy0wYmRhMjE2Yi00N2U1LTQxZTQtOGEwZC03MGNkZWFmNmZiY2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TYJRQ7xb6C0dQYx4vu8tnGSOlJuqU4pKHcyZ_cTnQFw")
			.setTitle("Bobblehead | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Mustache Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"}, 
                 {
                   name: "Ability", 
                   value: "When you play a Dancing card, do 2 damage to the Plant Hero. \n  __Dancing Evolution__: This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> and <:Bullseye:1062501003313819678>__Bullseye__. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Triassic - Legendary**"
                 },
                 {
                   name: "Flavor Text", 
                   value: "He offers a special deal: Two of his heads for one of yours. Anyway you slice it, you still come out a head. "
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}