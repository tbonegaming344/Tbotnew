const {EmbedBuilder, SlashCommandBuilder, MessageFlags} = require('discord.js');
let db;
module.exports = {
  data: new SlashCommandBuilder()
    .setName('randomdeck')
    .setDescription('Get a random deck from the Tbot database')
    .addStringOption( option => option.setName('hero').setDescription('The hero of the wheel deck').addChoices(
        {name: "Beta Carrotina", value: "Beta Carrotina"},
        { name: "Captain Combustible", value: "Captain Combustible"},
        { name: "Chompzilla", value: "Chompzilla"}, 
        { name: "Citron", value: "Citron"}, 
        {name: "Grass Knuckles", value: "Grass Knuckles"}, 
        {name: "Green Shadow", value: "Green Shadow"},
        {name: "Night Cap", value: "Night Cap"},
        {name: "Rose", value: "Rose"},
        {name: "Solar Flare", value: "Solar Flare"},
        {name: "Spudow", value: "Spudow"}, 
        {name: "Wall Knight", value: "Wall Knight"}, 
        {name: "Brain Freeze", value: "Brain Freeze"}, 
        {name: "Electric Boogaloo", value: "Electric Boogaloo"},
        {name: "Huge Giganticus", value: "Huge Giganticus"},
        {name: "Super Brainz", value: "Super Brainz"},
        {name: "Impfinity", value: "Impfinity"}, 
        {name: "Immorticia", value: "Immorticia"}, 
        {name: "Neptuna", value: "Neptuna"}, 
        {name: "Rustbolt", value: "Rustbolt"}, 
        {name: "Professor Brainstorm", value: "Professor Brainstorm"}, 
        {name: "Smash", value: "Smash"}, 
        {name: "Zmech", value: "Zmech"},
        {name: "Plants", value: "Plants"},
        {name: "Zombies", value: "Zombies"}, 
        {name: "na", value: "na"}
      ).setRequired(true)),
  async execute(interaction) {
    if (!db) {
      db = require("../../index.js");
    }
    const heroInput = interaction.options.getString('hero');

    // Helper function to get a deck and reply, avoiding repeated code
    const getAndSendRandomDeck = async (query, title, description) => {
      try {
        const [result] = await db.query(query);

        if (!result || result.length === 0 || !result[0]) {
          throw new Error("No decks found in the database for this category.");
        }

        const deck = [];
        for (const key in result[0]) {
          const value = result[0][key];
          if (
            typeof value === 'string' &&
            (value.includes(".png") || value.includes(".jpg") || value.includes(".jpeg") || value.includes(".webp")) &&
            !value.includes("budget")
          ) {
            deck.push(value);
          }
        }

        if (deck.length === 0) {
          throw new Error("No valid deck images found in the result.");
        }

        const embed = new EmbedBuilder()
          .setTitle(title)
          .setDescription(description)
          .setColor("Random")
          .setImage(deck[Math.floor(Math.random() * deck.length)]);

        await interaction.reply({
          embeds: [embed],
          flags: MessageFlags.Ephemeral,
        });
      } catch (err) {
        console.error(err);
        await interaction.reply({
          content: "Oops, something went wrong or no decks were found. Please try again later.",
          flags: MessageFlags.Ephemeral,
        });
      }
    };

    const heroDeckTables = {
      "Beta Carrotina": "bcdecks", "Citron": "ctdecks", "Captain Combustible": "ccdecks",
      "Chompzilla": "czdecks", "Grass Knuckles": "gkdecks", "Green Shadow": "gsdecks",
      "Night Cap": "ncdecks", "Rose": "rodecks", "Solar Flare": "sfdecks",
      "Spudow": "spdecks", "Wall Knight": "wkdecks", "Brain Freeze": "bfdecks",
      "Electric Boogaloo": "ebdecks", "Huge Giganticus": "hgdecks", "Impfinity": "ifdecks",
      "Immorticia": "imdecks", "Neptuna": "ntdecks", "Professor Brainstorm": "pbdecks",
      "Rustbolt": "rbdecks", "Smash": "smdecks", "Zmech": "zmdecks", "Super Brainz": "sbdecks",
    };
    const tableName = heroDeckTables[heroInput];

    if (heroInput === "na") {
      const query = `SELECT image FROM sbdecks where type NOT LIKE '%budget%'
      union all SELECT image from ccdecks where type NOT LIKE '%budget%'
      union all SELECT image from sfdecks where type NOT LIKE '%budget%'
      union all SELECT image from rodecks where type NOT LIKE '%budget%'
      union all SELECT image from gsdecks where type NOT LIKE '%budget%'
      union all SELECT image from wkdecks where type NOT LIKE '%budget%'
      union all SELECT image from czdecks where type NOT LIKE '%budget%'
      union all SELECT image from spdecks where type NOT LIKE '%budget%'
      union all SELECT image from ctdecks where type NOT LIKE '%budget%'
      union all SELECT image from bcdecks where type NOT LIKE '%budget%'
      union all SELECT image from gkdecks where type NOT LIKE '%budget%'
      union all SELECT image from ncdecks where type NOT LIKE '%budget%'
      union all SELECT image from hgdecks where type NOT LIKE '%budget%'
      union all SELECT image from zmdecks where type NOT LIKE '%budget%'
      union all SELECT image from smdecks where type NOT LIKE '%budget%'
      union all SELECT image from ifdecks where type NOT LIKE '%budget%'
      union all SELECT image from rbdecks where type NOT LIKE '%budget%'
      union all SELECT image from ebdecks where type NOT LIKE '%budget%'
      union all SELECT image from bfdecks where type NOT LIKE '%budget%'
      union all SELECT image from pbdecks where type NOT LIKE '%budget%'
      union all SELECT image from imdecks where type NOT LIKE '%budget%'
      union all SELECT image from ntdecks where type NOT LIKE '%budget%'`;
      await getAndSendRandomDeck(query, "Random Deck", "Here is your random deck");
    } else if (heroInput === "Plants") {
      const query = `SELECT image from ccdecks where type NOT LIKE '%budget%' 
      union all SELECT image from sfdecks where type NOT LIKE '%budget%'
      union all SELECT image from rodecks where type NOT LIKE '%budget%'
      union all SELECT image from gsdecks where type NOT LIKE '%budget%'
      union all SELECT image from wkdecks where type NOT LIKE '%budget%'
      union all SELECT image from czdecks where type NOT LIKE '%budget%'
      union all SELECT image from spdecks where type NOT LIKE '%budget%'
      union all SELECT image from ctdecks where type NOT LIKE '%budget%'
      union all SELECT image from bcdecks where type NOT LIKE '%budget%'
      union all SELECT image from gkdecks where type NOT LIKE '%budget%'
      union all SELECT image from ncdecks where type NOT LIKE '%budget%'`;
      await getAndSendRandomDeck(query, "Random Plant Deck", "Here is your random plant Deck");
    } else if (heroInput === "Zombies") {
      const query = `SELECT image FROM sbdecks where type NOT LIKE '%budget%' 
      union all SELECT image from hgdecks where type NOT LIKE '%budget%' 
      union all SELECT image from zmdecks where type NOT LIKE '%budget%'
      union all SELECT image from smdecks where type NOT LIKE '%budget%'
      union all SELECT image from ifdecks where type NOT LIKE '%budget%'
      union all SELECT image from rbdecks where type NOT LIKE '%budget%'
      union all SELECT image from ebdecks where type NOT LIKE '%budget%'
      union all SELECT image from bfdecks where type NOT LIKE '%budget%'
      union all SELECT image from pbdecks where type NOT LIKE '%budget%'
      union all SELECT image from imdecks where type NOT LIKE '%budget%'
      union all SELECT image from ntdecks where type NOT LIKE '%budget%'`;
      await getAndSendRandomDeck(query, "Random Zombie Deck", "Here is your random Zombie Deck");
    } else if (tableName) {
      // This is now the final case for a valid hero
      const query = `SELECT image FROM ${tableName} where type NOT LIKE '%budget%'`;
      const title = `Random ${heroInput.charAt(0).toUpperCase() + heroInput.slice(1)} Deck`;
      const description = `Here is your random ${heroInput} deck`;
      await getAndSendRandomDeck(query, title, description);
    } else {
      // This handles any other invalid input
      await interaction.reply({
        content: "Invalid hero name. Please try again.",
        flags: MessageFlags.Ephemeral,
      });
    }
  },
};
