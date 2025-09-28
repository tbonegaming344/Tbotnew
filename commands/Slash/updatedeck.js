const {
  SlashCommandBuilder,
  ChannelType,
  EmbedBuilder,
  MessageFlags,
  AttachmentBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("updatedeck")
    .setDescription("Submit an update to a PvZ Heroes decklist in Tbot")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("Name of the deck to update")
        .setRequired(true)
        .setAutocomplete(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("deck_cost")
        .setDescription("The cost of the deck")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("hero")
        .setDescription("The hero of the deck")
        .addChoices(
          { name: "Captain Combustible", value: "1100172143603482786" },
          { name: "Chompzilla", value: "1100171601045106819" },
          { name: "Citron/BC", value: "1100171558263193700" },
          { name: "Grass Knuckles", value: "1100171819148906628" },
          { name: "Green Shadow", value: "1100172254983241820" },
          { name: "Night Cap", value: "1100171997167747172" },
          { name: "Rose", value: "1100171855316406343" },
          { name: "Solar Flare", value: "1100171646557491220" },
          { name: "Spudow", value: "1100171758256013412" },
          { name: "Wall Knight", value: "1100171712391295006" },
          { name: "Brain Freeze", value: "1100170721994477668" },
          { name: "Electric Boogaloo", value: "1100171042380578857" },
          { name: "Huge Giganticus/SB", value: "1100170925208502282" },
          { name: "Impfinity", value: "1100170791594762260" },
          { name: "Immorticia", value: "1100171253790285904" },
          { name: "Neptuna", value: "1100170647050649620" },
          { name: "Rustbolt", value: "1100171459785150585" },
          { name: "Professor Brainstorm", value: "1100171115504078901" },
          { name: "Smash", value: "1100171177529446492" },
          { name: "Zmech", value: "1100170981013729410" }
        )
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("deck_creator")
        .setDescription(
          "Put creators name. feel free to add optimized by: your name if you want credits"
        )
        .setRequired(true)
    )
    .addAttachmentOption((option) =>
      option
        .setName("image")
        .setDescription("image of the decklist")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("description")
        .setDescription("Short description of the deck (optional)")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("deck_archetype")
        .setDescription("The archetype for the deck (optional)")
        .setRequired(false)
        .addChoices(
          { name: 'Aggro', value: 'Aggro'},
        { name: 'Control', value: 'Control'},
        { name: 'Combo', value: 'Combo'},
        { name: 'Midrange', value: 'Midrange'},
        { name: "Tempo", value: 'Tempo'}, 
        {name: 'Aggro Combo', value: 'Aggro Combo'},
        {name: 'Combo Midrange', value: 'Combo Midrange'},
        {name: 'Control Combo', value: 'Control Combo'},
        {name: 'Combo Tempo', value: 'Combo Tempo'},
        {name: 'Midrange Tempo', value: 'Midrange Tempo'}
        )
    )
    .addStringOption((option) =>
      option
        .setName("deck_type")
        .setDescription("The type of deck it is (optional)")
        .setRequired(false)
        .addChoices(
          { name: "Budget", value: "Budget" },
          { name: "Competitive", value: "Competitive" },
          { name: "Ladder", value: "Ladder" },
          { name: "Meme", value: "Meme" }
        )
    ),
  async autocomplete(interaction) {
    try {
      const db = require("../../index.js");
      const focusedValue = interaction.options.getFocused();
      const [rows] = await db.query(`
        select name FROM sbdecks    
        union all select name from ccdecks 
        union all select name from sfdecks 
        union all select name from rodecks 
        union all select name from gsdecks 
        union all select name from wkdecks 
        union all select name from czdecks 
        union all select name from spdecks 
        union all select name from ctdecks 
        union all select name from bcdecks 
        union all select name from gkdecks 
        union all select name from ncdecks 
        union all select name from hgdecks 
        union all select name from zmdecks 
        union all select name from smdecks 
        union all select name from ifdecks 
        union all select name from rbdecks 
        union all select name from ebdecks 
        union all select name from bfdecks 
        union all select name from pbdecks 
        union all select name from imdecks
        union all select name from ntdecks
      `);
      // Lowercase and join names (remove spaces)
      const choices = [
        ...new Set(rows.map((r) => r.name.toLowerCase().replace(/\s+/g, "")))
      ].sort((a, b) => a.localeCompare(b));
      let filtered;
      if (!focusedValue) {
        filtered = choices.slice(0, 25);
      } else {
        filtered = choices
          .filter((choice) =>
            choice.startsWith(focusedValue.toLowerCase().replace(/\s+/g, ""))
          )
          .slice(0, 25);
      }
      await interaction.respond(
        filtered.map((choice) => ({ name: choice, value: choice }))
      );
    } catch (err) {
      console.error("Autocomplete error:", err);
      await interaction.respond([]); // Always respond, even on error
    }
  },
  async execute(interaction) {
    const db = require("../../index.js");
    const [rows] = await db.query(`
        select name FROM sbdecks    
        union all select name from ccdecks 
        union all select name from sfdecks 
        union all select name from rodecks 
        union all select name from gsdecks 
        union all select name from wkdecks 
        union all select name from czdecks 
        union all select name from spdecks 
        union all select name from ctdecks 
        union all select name from bcdecks 
        union all select name from gkdecks 
        union all select name from ncdecks 
        union all select name from hgdecks 
        union all select name from zmdecks 
        union all select name from smdecks 
        union all select name from ifdecks 
        union all select name from rbdecks 
        union all select name from ebdecks 
        union all select name from bfdecks 
        union all select name from pbdecks 
        union all select name from imdecks
        union all select name from ntdecks
      `);
    const name = interaction.options.getString("name");
    const validNames = rows.map((r) =>
      r.name.toLowerCase().replace(/\s+/g, "")
    );
    if (!validNames.includes(name.toLowerCase().replace(/\s+/g, ""))) {
      return interaction.reply({
        content:
          "❌ Invalid deck name. Please make sure the deck exists in Tbot.",
        ephemeral: true,
        withResponse: true,
      });
    }
    const description = interaction.options.getString("description");
    const decktype = interaction.options.getString("deck_type");
    const deckarchetype = interaction.options.getString("deck_archetype");
    const image = interaction.options.getAttachment("image");
    const deckcost = interaction.options.getInteger("deck_cost");
    const hero = interaction.options.getString("hero");
    const deckcreator = interaction.options.getString("deck_creator");
    const imageUrl = image.url;
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "utf-8");
    const file = new AttachmentBuilder(buffer, { name: "deck.png" });
    const tbotServer = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Tbot Server")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/2NSwt96vmS")
    );
    const replyMessage = await interaction.reply({
      content: `✅ Your deck update has  been submitted successfully! Please join the tbot server below if you haven't already to be notified of updates on your submission or of updates to the bot`,
      files: [file],
      components: [tbotServer],
      withResponse: true,
    });
    const message = replyMessage.resource.message;
    const permanentUrl = message.attachments.first().url;
    const forumChannel = interaction.client.channels.cache.get(
      "1100160031128830104"
    );

    if (!forumChannel || forumChannel.type !== ChannelType.GuildForum) {
      return interaction.reply({
        content: "❌ Forum channel not found or invalid.",
        ephemeral: true,
      });
    }
    const fields = [
      {
        name: "Deck Cost",
        value: `${deckcost.toString()}<:spar:1057791557387956274>`,
        inline: true,
      },
    ];
    if (decktype) {
      fields.push({
        name: "Deck Type",
        value: `**__${decktype}__**`,
        inline: true,
      });
    }
    if (deckarchetype) {
      fields.push({
        name: "Deck Archetype",
        value: `**__${deckarchetype}__**`,
        inline: true,
      });
    }
    const embed = new EmbedBuilder()
      .setTitle(`Update ${name}`)
      .setDescription(description)
      .addFields(fields)
      .setColor("Random")
      .setFooter({
        text: `Created By ${deckcreator} | Submitted by ${interaction.user.tag}`,
      });

    if (image?.contentType?.startsWith("image/")) {
      embed.setImage(permanentUrl);
    }

    // Create the thread in the forum
    const thread = await forumChannel.threads.create({
      name: `${name} needs an update`,
      message: {
        embeds: [embed],
      },
      appliedTags: [hero],
    });
    const starterMessage = await thread.fetchStarterMessage();
    await starterMessage.pin();
    await starterMessage.react("<:upvote:1081953853903220876>");
    await starterMessage.react("<:downvote:1081953860534403102>");
  },
};
