const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  MessageFlags, 
  ContainerBuilder,
  SectionBuilder,
  TextDisplayBuilder,
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
    `decksuggestion`,
	  `submit`,
	  `submitdeck`,
	  `submitdecks`,
    `addeck`,
    `addecks`,
    `update`, 
    `updatedeck`,
    `deckupdate`,
    `suggestdeck`,
    `suggestdecks`,
    `suggestion`,
    `suggestions`,
    `add`,
    `decksubmission`,
    `decksubmissions`,
    `submitsuggestion`,
    `submitsuggestions`,
    `propose`,
    `proposals`,
    `proposedeck`,
    `proposedecks`,
    `suggest`,
    `submission`
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    const container = new ContainerBuilder();
    const addDeckText1 = new TextDisplayBuilder().setContent([
      "# Deck Guidelines/Requirements before sumbitting",
      "1. Deck must be decent, have a gameplan or at least a theme, no random 1x, cards that don't fit. ", 
      "2. Deck must not be hacked can't run cards not included in hero and can't run more than 4 copies of a card. Do not sumbit pvzh decks made in modded versions of the game. Tbot is solely for pvzh decks only not for pvzh mods like syndrome and others.",
      "3. Deck is unique with a meaningful difference from ones currently in Tbot, for example: don't make another Valkster",
      "4. You may still submit and replace a similar deck if you think yours is significantly better with your argument of why it's better through the deck update button",
      "5. The goal of Tbot decks is to compile relatively optimized versions of decks of all types.",
      "6. Please read the items below for what the fourm elements must include and sumbit your deck suggestion to the server by clicking and filling out the Add New Deck form below",
    ].join("\n"));
    container.addTextDisplayComponents(addDeckText1);
    const addDeckText2 = new TextDisplayBuilder().setContent([
      "# Click on the Add New Deck button to sumbit your deck, Below are the elements you need to fill out in the Form",
      "1. Deck Name - Put your decks name",
      "2. Deck Hero - Input the hero name",
      "3. Deck Description - The description of the deck and how to play it. Doesn't need to be too long just a couple sentences",
      "4. Deck Creator - Just put the creators name **Dont put created by**, however you can add inspired by someone if you want in here. Yes you can submit other peoples decks but you still need to fill out the form and give credit to that creator",
      "5. Deck Image - Must contain an image link (**.jpg, .jpeg, .webp or .png must be in the link**)",
      "**Notable things to include in your description include:** Deck Cost, Deck Type, Deck Archetype should be included after your description of the deck. Aliases while aren't required could be included if your deck goes by more than one name.", 
      "If you are sumbitting a deck update, then the **Notable things to include in your description include:** Deck Cost, and a reason for the card changes or a reason why your list is better than the current list on Tbot"
    ].join("\n"));
     const suggestnew = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Add New Deck")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("suggestnew")
        .setEmoji("🆕"), 
         new ButtonBuilder()
        .setLabel("Update Deck in Tbot")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("suggestup")
        .setEmoji("🔄")
     )
    container.addTextDisplayComponents(addDeckText2)
    container.addActionRowComponents(suggestnew)
    const addDeckText3 = new TextDisplayBuilder().setContent([
      "# Deck Type",
      "This is the type of way your deck should be played or used Examples include",
      "**Budget**: Good decks for players with few sparks or a limited collection despite these restrictions and built to get players to Diamond League and access better decks.",
      "The next 2 Categories are for less than competitive decks that are significantly relevant in the following ways.",
      "**Ladder**: Useful for Ranked Online Multiplayer, but weaker than competitive decks.",
      "**Meme**: Not designed to be competitive. Made for pulling off niche or fun combos and ideas.",
      "**Competitive**: The best decks in the game or competitive decks used currently",
      "# Deck Archetype",
      "This is an indictation on how your deck is played. Is it aggro, combo, control, tempo, midrange or a mixture of them like combo midrange. Note that you can only have a max of two archetypes and that **Aggro Control** is not a thing.",
      "# Other",
      "If you get an error while attemping to submit your suggestion, please contact <@625172218120372225> with an image of what was typed in the fourm",
      "Please note that the deck will be reviewed and judged by judges and the communtity in the Tbot server before being added.", 
      "### Please read Guidelines posted above before sumbitting a deck to Tbot"
    ].join("\n"));
    container.addTextDisplayComponents(addDeckText3);
    container.setAccentColor(0x00FF00);
     const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Tbot server")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/2NSwt96vmS")
        .setEmoji("<:batman:1373302805326200842>"), 
            new ButtonBuilder()
        .setLabel("Tbot Tutorials")
        .setStyle(ButtonStyle.Link)
        .setURL(
          "https://www.youtube.com/playlist?list=PLb1Bl8XSFJ_W2MihyL9FyExH2ZKK-W9H6"
        )
        .setEmoji("🎥")
    );
    container.addActionRowComponents(row);
    await message.channel.send({
      components: [container], 
      flags: MessageFlags.IsComponentsV2,
    });
  },
};
