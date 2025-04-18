const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
  name: `tourneys`,
  aliases: [
    `touraments`,
    `pvzhtourneys`,
    `tourneyspvzh`,
    `tourney`,
    `tournamentspvzh`,
    `pvzhtournaments`,
    `tournamentsforpvzh`,
    `tournaments`, 
    `tournament`,
    `servers`,
    `pvzhservers`,
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    if(message.guild && message.guild.id == "285818469960646657"){
      return message.author.send("This command is disabled in this server please use it in another server");
    }
    else{
    message.channel.send({
      content:
        `PVZH players are you looking for tourneys! Below you can click on the buttons to join servers for pvzh tournaments!
If you are looking for servers currently hosting touranments that **you can signup to** please check out the currently accepting signups section of the [TQM Spreadsheet](https://docs.google.com/spreadsheets/d/1UQ5SvmCsAq8SpOz8Dk46UM8Wpd40uxZXXXbgZWmmNjI/edit?usp=sharing)
otherwise you can join the servers listed in [tbone's spreadsheet](https://docs.google.com/spreadsheets/d/1H6nPs_oFqnfHVPNX3bM2R0zGoZ8j6iv70slk0UqSwFk/edit?usp=sharing) and wait for one to start!`
    });
  }
  },
};
