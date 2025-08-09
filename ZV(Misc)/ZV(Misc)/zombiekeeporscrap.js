  const {
  ContainerBuilder,
  SectionBuilder,
  TextDisplayBuilder,
  ThumbnailBuilder,
  MessageFlags,
  SeparatorSpacingSize
} = require("discord.js");
module.exports = {
    name: `zombiekeeporscrap`, 
    aliases: [`zombiekeep`, `zombiescrap`, `zombiecraft`, `zombiekos`, `zombierecycle`], 
    category: `Miscellaneous`,
    run: async (client, message, args) => {
        const container = new ContainerBuilder();
        const tierText1 = new TextDisplayBuilder().setContent([
          "# Keep or Scrap For Zombies August 2025 Created By <@256910306003910658>.",
          "You can comment on [the reddit post](https://www.reddit.com/r/PvZHeroes/comments/1mkf38s/keep_or_scrap_august_2025_explanation_below/#lightbox)"
        ].join("\n"));
        const user = await client.users.fetch("256910306003910658");
        const authorImage = new ThumbnailBuilder().setURL(user.displayAvatarURL());
        const authorSection = new SectionBuilder()
          .addTextDisplayComponents(tierText1)
          .setThumbnailAccessory(authorImage);
        container.addSectionComponents(authorSection);
        container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
         const tierText2 = new TextDisplayBuilder().setContent([
                  "### Template", 
                  "- **TIERS ARE UNORDERED**",
                  "- **Craft** is a tier I'm bringing back, since it's now a lot more clear which cards are worth putting sparks towards", 
                  "- **Keep** is now two tiers; **Use** and **Keep**. **Use** means that a card is immediately helpful for budget decks while also being valuable to keep for later. **Keep** meanwhile means a card is worth keeping for decks that you'll make later once you own enough higher rarity cards", 
                  "- [tier list templates](https://www.reddit.com/r/PvZHeroes/comments/1lrx6l6/i_made_updated_tier_lists_for_every_class/)"
                ].join("\n"));
                container.addTextDisplayComponents(tierText2);
                container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
  const tierText8 = new TextDisplayBuilder().setContent([
        "# Beastly",
        "- **Hover-Goat**, **Maniacal Laughter**, **Hunting Grounds**, **Interstellar Bounty Hunter**, **Gargantuar-Throwing Gargantuar**, **Zombot 1000**, and **Fraidy Cat** are all Scrap now. They were all weak cards to recommend in the first place, and the meta shifting to zombie tempo has made cards like Maniacal and IBH way worse", 
        "- **Secret Agent** is now Keepable. It's not ran as often as before due to the aforementioned meta shift"
      ].join("\n"));
      const beastlyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403347640690933920/beastlykeep.webp?ex=689738d6&is=6895e756&hm=ae977ce831f155e7ec11f3f8a2940809a493fca36b9566ee15bf2cd7e4660eee&=&format=webp&width=991&height=873")
      const beastlySection = new SectionBuilder()
        .addTextDisplayComponents(tierText8)
        .setThumbnailAccessory(beastlyImage);
      container.addSectionComponents(beastlySection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText9 = new TextDisplayBuilder().setContent([
        "# Brainy",
        "- **Shield-Crusher Viking** is Use now. It's a decent budget option that does see use in max decks, so it's typically worth keeping"
      ].join("\n"));
      const brainyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403348049329127495/brainykeep.webp?ex=68973937&is=6895e7b7&hm=dcf77c0f0a30bfdb45655efc021a0d3fbf8d01abc5eae8600ed744a518e8d67c&=&format=webp&width=991&height=873")
      const brainySection = new SectionBuilder()
        .addTextDisplayComponents(tierText9)
        .setThumbnailAccessory(brainyImage);
      container.addSectionComponents(brainySection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText10 = new TextDisplayBuilder().setContent([
        "# Crazy",
        "- **Barrel of Deadbeards** is Keepable. It's super niche now since you just don't run it in aggro anymore. Other decks tend to not want BoD since Mission is weak and BoD itself messes with your tempo", 
        "- **Imp-Throwing Gargantuar** is scrap. Even with it costing 4, it's still pretty slow and not worth taking. It doesn't really max into anything besides Trickstache either, so keeping it on that basis is also not worth it"
      ].join("\n"));
      const crazyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403348852567838730/crazykeep.webp?ex=689739f7&is=6895e877&hm=f9378551c619afb20e2a4ab7d068b56cf9451f73f83b24cf16fdc83d9184c905&=&format=webp")
      const crazySection = new SectionBuilder()
        .addTextDisplayComponents(tierText10)
        .setThumbnailAccessory(crazyImage);
      container.addSectionComponents(crazySection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText11 = new TextDisplayBuilder().setContent([
        "# Hearty",
        "- **Zombology Teacher** and **Genetic Experiment** are in Keep and Use respectively. They were underrated at the time for being potentially outclassed by Hearty's new tempo options, but Genetic is still really useful and Teacher is still wanted in maxed decks",
        "- **Jurassic Fossilhead**, **All-Star Zombie**, and **Coffee Zombie** are Scrap. Colosseum, Sumo, and Primeval Yeti are all much more important and useful cards, and once you've unlocked them, then you're putting the sparks towards cards like Viral and Black Hole. By that point, they're hardly even relevant options anymore"
      ].join("\n"));
      const heartyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403349706616344586/heartykeep.webp?ex=68973ac3&is=6895e943&hm=8692a77bf88af276b2d47c978699d73d8eae4c00fe9010dd9c6f80c6d5623d5a&=&format=webp&width=991&height=873")
      const heartySection = new SectionBuilder()
        .addTextDisplayComponents(tierText11)
        .setThumbnailAccessory(heartyImage);
      container.addSectionComponents(heartySection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText12 = new TextDisplayBuilder().setContent([
        "# Sneaky", 
        "- **Imp-Throwing Imp**, **Toxic Waste Imp**, and **Imposter** are Keepable now. Imps as a strategy is rarely ever played on other heroes besides HG anyway, and even on HG, they're relatively weaker due to Imp Commander's change", 
        "- **Laser Base Alpha** is Keepable. It's... fine, I guess. Usable on a budget if you have nothing better, and maxes out on Impfinity now", 
        "- **Mixed-Up Gravedigger** and **Pogo Bouncer** are now Keep and Use respectively. Pogo is a lot less niche of a card people had been giving it credit for up until now, while MUG has been seeing more use in these slower Sneaky decks", 
        "- **Zombot Plank Walker**, **Excavator Zombie**, and **Tomb Raiser Zombie** are all scrap. Plankwalker is hard to justify on a budget since Quarterly is so useful on SB and no other heroes can really use this card. Excavator was Keepable for Neptuna, but she hardly runs it now. Tomb Raiser was just overhyped, honestly; it's still an easily controllable 4-drop that needs to hit face to get value"
      ].join("\n"));
      const sneakyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403350906749063271/sneakykeep.webp?ex=68973be1&is=6895ea61&hm=32ee57218052274b1fc067ceb3094c5ef670a786ed32959ebdf42876e75018c8&=&format=webp")
      const sneakySection = new SectionBuilder()
        .addTextDisplayComponents(tierText12)
        .setThumbnailAccessory(sneakyImage);
      container.addSectionComponents(sneakySection);
      container.setAccentColor(10494192);
        await message.channel.send({
      components: [container],
      flags: MessageFlags.IsComponentsV2,
      allowedMentions: { 
        users: []
      }
    });
    }
}