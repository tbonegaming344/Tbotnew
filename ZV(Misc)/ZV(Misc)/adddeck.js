const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
module.exports = {
  name: `adddeck`,
  aliases: [
    `deckadd`,
    `deckaddition`,
    `canyouaddmydeck`,
    `addmydecktothebot`,
    `deckadditionsforthebot`,
    `deckaddrequirements`,
    `adddecks`,
	  `submit`,
	  `submitdeck`,
	  `submitdecks`,
    `addeck`,
    `addecks`,
    `suggestdeck`,
    `suggestdecks`,
    `suggestion`,
    `suggestions`,
    `add`,
    `decksubmission`,
    `decksubmissions`,
    `submitsuggestion`,
    `submitsuggestions`,
    `submitdeckupdate`,
    `submitdeckupdates`,
    `deckupdate`,
    `deckupdates`,
    `suggest`,
    `submission`
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Discord server")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/2NSwt96vmS")
        .setEmoji("<:thor_swab:1334902821249617991>")
    );
    const suggestnew = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Suggest New Deck")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("suggestnew")
        .setEmoji("🆕")
    );
    const suggestup = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Suggest Updated Deck")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("suggestup")
        .setEmoji("🔄")
    );
    const vids = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Tbot Suggestions playlist")
        .setStyle(ButtonStyle.Link)
        .setURL(
          "https://www.youtube.com/playlist?list=PLb1Bl8XSFJ_W2MihyL9FyExH2ZKK-W9H6"
        )
        .setEmoji("🎥")
    );
    let deck = new EmbedBuilder()
      .setTitle("Deck Additions for tbot")
      .addFields(
        {
          name: "Deck Guidelines/Requirements before sumbitting",
          value: `1. Deck must be decent, have a gameplan or at least a theme, no random 1x, cards that don't fit. 
2. Deck must not be hacked can't run cards not included in hero and can't run more than 4 copies of a card. Do not sumbit pvzh decks made in modded versions of the game. Tbot is solely for pvzh decks only not for pvzh mods like syndrome and others.
3. Deck is unique with a meaningful difference from ones currently posted, for example: don't make another Valkster 
4. You may still submit and replace a similar deck if you think yours is significantly better with your argument of why it's better. 
5. The goal of Tbot decks is to compile relatively optimized versions of decks of all types.
6. Please read the items below for what the fourm elements must include and sumbit your deck suggestion to the server by filling out the form below`,
        },
        {
          name: "Deck Name",
          value: `Put your decks name`,
          inline: true
        },
        {
          name: "Deck Hero", 
          value: "Input the hero name your deck is played with does not need to be full name could be abbreviated if you want",
          inline: true
        },
        {
          name: "Deck Description",
          value: `Your Description should include the following elements laid out below 
1. Description
2. Aliases
3. Deck Cost
4. Deck Type 
5. Deck Archetype
6. Other: if you are Suggesting an updated version of a deck feel free to include a lesser amount of elements deck cost is needed
Check below for an detailed explaination of these elements!`,
inline: false
        },
        {
          name: `Description`, 
          value: `A description of the deck and how to play it. Doesn't need to be too long just a couple sentences`,
          inline: true
        },
        {
          name: `Aliases`,
          value: `These are extra names/commands for the deck if you want your deck to respond to other inputs outside of the deck name (not required)`,
          inline: true
        }, 
        {
          name: `Deck Type`, 
          value: `This is the type of way your deck should be played or used Examples include 
**Budget**: Good decks for players with few sparks or a limited collection despite these restrictions and built to get players to Diamond League and access better decks. 
The next 2 Categories are for less than competitive decks that are significantly relevant in the following ways. 
**Ladder**: Useful for Ranked Online Multiplayer, but weaker than competitive decks.
**Meme**: Not designed to be competitive. Made for pulling off niche or fun combos and ideas. 
**Competitive**: The best decks in the game or competitive decks used currently`,
inline: false
        },
        {
          name: `Deck Archetype`, 
          value: `This is an indictation on how your deck is played. Is it aggro, combo, control, tempo, midrange or a mixture of them like combo midrange`, 
          inline: true
        },
        {
          name: `Deck Creator`,
          value: `Just put the creators name **Dont put created by**, however you can add inspired by someone if you want in here`, 
          inline: true
        },
        {
          name: "Deck Image", 
          value: "Must contain an image link (**.jpg, .jpeg, .webp or .png must be in the link**)", 
          inline: true
        },
        {
          name: "Other",
          value: `If you get an error while attemping to submit your suggestion, please contact <@625172218120372225> with an image of what was typed in the fourm
There is also a link attached onto one of the buttons if you need help
Please note that the deck will be reviewed and judge by judges and the communtity before being added and Tbone might not immeditately add it if he has life commitments or other projects going on`,
        }
      )
      .setFooter({
        text: `Please Read Guidlines and Format before Suggesting! 
Afterwards interact with the buttons below to suggest a deck or to suggest a deck update`,
      })
      .setColor("Random")
    const m = await message.channel.send({
      embeds: [deck],
      components: [row, suggestnew, suggestup, vids],
    });
  },
};
