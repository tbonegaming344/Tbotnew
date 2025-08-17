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
    aliases: [`zombiekeep`, `zombiescrap`, `zombiecraft`, `zombiekos`, `zombierecycle`, `zkos`], 
    category: `Miscellaneous`,
    run: async (client, message, args) => {
        const container = new ContainerBuilder();
        const tierText1 = new TextDisplayBuilder().setContent([
          "# Keep or Scrap Created By <@256910306003910658>.",
          "[reddit post](https://www.reddit.com/r/PvZHeroes/comments/1mkf38s/keep_or_scrap_august_2025_explanation_below/#lightbox)"
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
        "- **Cyborg** in Keep since this card is not that good anymore. It's seeing less and less use due to it losing trades to 2-cost basic cards. Not that it sucks now, but you really don't need it on a budget", 
        "- **Hover-Goat**, **Hunting Grounds**, **Interstellar Bounty Hunter**, **Gargantuar-Throwing Gargantuar**, **Zombot 1000**, and **Fraidy Cat** are all Scrap now. They were all weak cards to recommend in the first place, and the meta shifting to Plant tempo has made cards like Maniacal and IBH way worse", 
        "- **Secret Agent** is now Keepable. It's not ran as often as before due to the aforementioned meta shift"
      ].join("\n"));
      const beastlyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406627010972745858/beastlykeep.webp?ex=68a326fd&is=68a1d57d&hm=a366029c8dee74588a8125235e45738a3dda7aeabe647e89a36be66397661c8d&=&format=webp&width=995&height=873")
      const beastlySection = new SectionBuilder()
        .addTextDisplayComponents(tierText8)
        .setThumbnailAccessory(beastlyImage);
      container.addSectionComponents(beastlySection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText9 = new TextDisplayBuilder().setContent([
        "# Brainy",
        "- **Teleportation Zombie** in Craft since it complements your budget decks very often. It's a Science body with great stats, Gravestone, and can teleport multiple zombies throughout the game or at once. Teleport is better sometimes, but you rarely see those opportunities on a budget since it cares a lot more about card quality and combos", 
        "- **Shield-Crusher Viking** is Use now. It's a decent budget option that does see use in max decks, so it's typically worth keeping",
      ].join("\n"));
      const brainyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406627194247315557/brainykeep.webp?ex=68a32728&is=68a1d5a8&hm=a8bf63648891c6d8957da6147aa2d4f7b93efc9b32fbe825ac16a8dffd52c226&=&format=webp&width=995&height=873")
      const brainySection = new SectionBuilder()
        .addTextDisplayComponents(tierText9)
        .setThumbnailAccessory(brainyImage);
      container.addSectionComponents(brainySection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText10 = new TextDisplayBuilder().setContent([
        "# Crazy",
        "- **Barrel of Deadbeards** in Keepable. It's super niche now since you just don't run it in aggro anymore. Other decks tend to not want BoD since Mission is weak and BoD itself messes with your tempo"
      ].join("\n"));
      const crazyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406627367946031115/crazykeep.webp?ex=68a32752&is=68a1d5d2&hm=269e0c4d6db1d78eebe1d62356ed69d692162d815701b725614b069d8b951a1e&=&format=webp")
      const crazySection = new SectionBuilder()
        .addTextDisplayComponents(tierText10)
        .setThumbnailAccessory(crazyImage);
      container.addSectionComponents(crazySection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText11 = new TextDisplayBuilder().setContent([
        "# Hearty",
        "- **Zombology Teacher** and **Genetic Experiment** are in Use. They were underrated at the time for being potentially outclassed by Hearty's new tempo options, but both are is still really useful",
        "- **Jurassic Fossilhead** and **All-Star Zombie** are Scrap. Colosseum, Sumo, and Primeval Yeti are all more important and useful cards, and once you've unlocked them, you're then putting sparks towards cards like Viral and Black Hole. Even if that wasn't the case, neither card really excels on a budget anyway, with All-Star being out-right bad without the support of the above cards", 
        "- **Weed Spray** and **Knockout** are Keepable. They're slow on a budget and not necessary to max nowadays, but are still valuable cards needed for certain strategies",
        "- **Battlecruiser** in Keepable as well. It's generally playable on a budget and sees a lot of use at max, so it's worth keeping if you don't need the sparks and are using Hearty a lot"
      ].join("\n"));
      const heartyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406627581004087449/heartykeep.webp?ex=68a32785&is=68a1d605&hm=ffee018a95e68ce5cce10c3b2468f0d81cbfa694d7cab978fcd977c72a4da4a8&=&format=webp")
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
      const sneakyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406627761530867834/sneakykeep.webp?ex=68a327b0&is=68a1d630&hm=1bab002052eeb12538703afcf5ddeba6fe69b3c75d8533ea1a23ae6d1eaf3e97&=&format=webp")
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