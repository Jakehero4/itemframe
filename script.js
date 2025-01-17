// Sample item list (replace with your actual list)
const itemList = [

    "acacia_boat.png", "acacia_chest_boat.png", "acacia_door.png", "acacia_hanging_sign.png", "acacia_sign.png", "amethyst_shard.png", "apple.png", "armor_stand.png", "arrow.png", "axolotl_bucket.png", "baked_potato.png", "bamboo.png", "bamboo_chest_raft.png", "bamboo_door.png", "bamboo_hanging_sign.png", "bamboo_raft.png", "bamboo_sign.png", "barrier.png", "beef.png", "beetroot.png", "beetroot_soup.png", "bell.png", "birch_boat.png", "birch_chest_boat.png", "birch_door.png", "birch_hanging_sign.png", "birch_sign.png", "blaze_powder.png", "blaze_rod.png", "bone.png", "bone_meal.png", "book.png", "bow.png", "bowl.png", "bread.png", "brewing_stand.png", "brick.png", "brush.png", "bucket.png", "bundle_filled.png", "cake.png", "campfire.png", "carrot.png", "carrot_on_a_stick.png", "cauldron.png", "chain.png", "chainmail_boots.png", "chainmail_chestplate.png", "chainmail_helmet.png", "chainmail_leggings.png", "charcoal.png", "chest_minecart.png", "chicken.png", "clock_00.png", "coal.png", "cod.png", "cod_bucket.png", "command_block_minecart.png", "comparator.png", "compass_00.png", "cooked_beef.png", "cooked_chicken.png", "cooked_cod.png", "cooked_mutton.png", "cooked_porkchop.png", "cooked_rabbit.png", "cooked_salmon.png", "cookie.png", "crossbow_firework.png", "crossbow_standby.png", "dark_oak_boat.png", "dark_oak_chest_boat.png", "dark_oak_door.png", "dark_oak_hanging_sign.png", "dark_oak_sign.png", "diamond.png", "diamond_axe.png", "diamond_boots.png", "diamond_chestplate.png", "diamond_helmet.png", "diamond_hoe.png", "diamond_horse_armor.png", "diamond_leggings.png", "diamond_pickaxe.png", "diamond_shovel.png", "diamond_sword.png", "dragon_breath.png", "egg.png", "elytra.png", "emerald.png", "enchanted_book.png", "ender_eye.png", "ender_pearl.png", "end_crystal.png", "experience_bottle.png", "feather.png", "filled_map.png", "firework_rocket.png", "firework_star.png", "fire_charge.png", "fishing_rod.png", "flint.png", "flint_and_steel.png", "flower_pot.png", "furnace_minecart.png", "glass_bottle.png", "glistering_melon_slice.png", "glowstone_dust.png", "glow_berries.png", "glow_ink_sac.png", "glow_item_frame.png", "goat_horn.png", "golden_apple.png", "golden_axe.png", "golden_boots.png", "golden_carrot.png", "golden_chestplate.png", "golden_helmet.png", "golden_hoe.png", "golden_horse_armor.png", "golden_leggings.png", "golden_pickaxe.png", "golden_shovel.png", "golden_sword.png", "gold_ingot.png", "gold_nugget.png", "gunpowder.png", "heart_of_the_sea.png", "honeycomb.png", "honey_bottle.png", "hopper.png", "hopper_minecart.png", "ink_sac.png", "iron_axe.png", "iron_boots.png", "iron_chestplate.png", "iron_door.png", "iron_helmet.png", "iron_hoe.png", "iron_horse_armor.png", "iron_ingot.png", "iron_leggings.png", "iron_nugget.png", "iron_pickaxe.png", "iron_shovel.png", "iron_sword.png", "item_frame.png", "jungle_boat.png", "jungle_chest_boat.png", "jungle_door.png", "jungle_hanging_sign.png", "jungle_sign.png", "lantern.png", "lapis_lazuli.png", "lava_bucket.png", "lead.png", "leather.png", "leather_boots.png", "leather_chestplate.png", "leather_helmet.png", "leather_horse_armor.png", "leather_leggings.png", "magma_cream.png", "map.png", "melon_slice.png", "milk_bucket.png", "minecart.png", "mushroom_stew.png", "music_disc_11.png", "music_disc_13.png", "music_disc_5.png", "music_disc_blocks.png", "music_disc_cat.png", "music_disc_chirp.png", "music_disc_creator.png", "music_disc_creator_music_box.png", "music_disc_far.png", "music_disc_mall.png", "music_disc_mellohi.png", "music_disc_otherside.png", "music_disc_pigstep.png", "music_disc_precipice.png", "music_disc_relic.png", "music_disc_stal.png", "music_disc_strad.png", "music_disc_wait.png", "music_disc_ward.png", "mutton.png", "name_tag.png", "netherite_axe.png", "netherite_boots.png", "netherite_chestplate.png", "netherite_helmet.png", "netherite_hoe.png", "netherite_ingot.png", "netherite_leggings.png", "netherite_pickaxe.png", "netherite_scrap.png", "netherite_shovel.png", "netherite_sword.png", "nether_brick.png", "nether_star.png", "oak_boat.png", "oak_chest_boat.png", "oak_door.png", "oak_hanging_sign.png", "oak_sign.png", "painting.png", "paper.png", "poisonous_potato.png", "porkchop.png", "potato.png", "potion.png", "powder_snow_bucket.png", "pufferfish.png", "pufferfish_bucket.png", "pumpkin_pie.png", "rabbit.png", "rabbit_stew.png", "raw_gold.png", "raw_iron.png", "recovery_compass_00.png", "redstone.png", "repeater.png", "rotten_flesh.png", "saddle.png", "salmon.png", "salmon_bucket.png", "sea_pickle.png", "shears.png", "shulker_shell.png", "slime_ball.png", "snowball.png", "soul_campfire.png", "soul_lantern.png", "spectral_arrow.png", "splash_potion.png", "spruce_boat.png", "spruce_chest_boat.png", "spruce_door.png", "spruce_hanging_sign.png", "spruce_sign.png", "spyglass.png", "stick.png", "stone_axe.png", "stone_hoe.png", "stone_pickaxe.png", "stone_shovel.png", "stone_sword.png", "string.png", "sugar.png", "sugar_cane.png", "suspicious_stew.png", "sweet_berries.png", "tnt_minecart.png", "totem_of_undying.png", "trident.png", "tropical_fish.png", "tropical_fish_bucket.png", "turtle_egg.png", "turtle_helmet.png", "turtle_scute.png", "water_bucket.png", "wheat.png", "wooden_axe.png", "wooden_hoe.png", "wooden_pickaxe.png", "wooden_shovel.png", "wooden_sword.png", "writable_book.png", "written_book.png"

];

// Object to store categorized items
const categories = {
    "Tools": [],
    "Food": [],
    "Armor": [],
    "Ores": [],
    "Aquatic": [],
    "Discs": [],
    "Misc": []
};

// Categorize items based on file names
itemList.forEach(item => {

    // Tools
    if (item.includes("axe") || item.includes("trident") || item.includes("shears") || item.includes("fishing_rod") || item.includes("brush") || item.includes("pickaxe") || item.includes("shovel") || item.includes("hoe") || item.includes("flint_and_steel") || item.includes("sword") || item.includes("bow") || item.includes("arrow") || item.includes("crossbow")) {
        categories["Tools"].push(item);
    }
    // Food: apple, bread, beef, cookie, etc.
    else if (item.includes("apple") || item.includes("beef") || item.includes("bread") || item.includes("cookie") || item.includes("melon") || item.includes("cooked") || item.includes("beetroot") || item.includes("potato") || item.includes("porkchop") || item.includes("pie") || item.includes("chicken") || item.includes("stew") || item.includes("soup") || item.includes("sweet_berries") || item.includes("carrot") || item.includes("cake") || item.includes("rabbit") || item.includes("mutton")) {
        categories["Food"].push(item);
    }
    // Armor: helmet, chestplate, leggings, boots, etc.
    else if (item.includes("helmet") || item.includes("chestplate") || item.includes("leggings") || item.includes("boots") || item.includes("horse_armor") || item.includes("elytra")) {
        categories["Armor"].push(item);
    }
    // Ores
    else if (item.includes("ingot") || item.includes("netherite") || item.includes("raw") || item.includes("diamond") || item.includes("lapis") || item.includes("nugget") || item.includes("emerald")) {
        categories["Ores"].push(item);
    }
    // Aquatic
    else if (item.includes("fish") || item.includes("bucket")) {
        categories["Aquatic"].push(item);
    }
    // Music Discs
    else if (item.includes("disc")) {
        categories["Discs"].push(item);
    }
    // Miscellaneous items (anything else)
    else {
        categories["Misc"].push(item);
    }
});

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    return str
        .replace(/_/g, " ") // Replace underscores with spaces
        .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter of each word
}

// Function to display categorized items as images in the HTML
function displayCategories() {
    const categoryMap = {
        "Tools": "tools",
        "Food": "food",
        "Armor": "armor",
        "Ores": "ores",
        "Aquatic": "aquatic",
        "Discs": "discs",
        "Misc": "misc"
    };

    for (const [category, items] of Object.entries(categories)) {
        const categoryDiv = document.getElementById(categoryMap[category]);
        const itemListDiv = categoryDiv.querySelector(".item-list");

        // Clear existing content
        itemListDiv.innerHTML = "";

        // Add item images with labels under them to the category
        items.forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item-container");

            const imgElement = document.createElement("img");
            imgElement.src = `item/${item}`; // Correctly set the image source with extension
            imgElement.alt = item.replace(".png", "").replace(/_/g, " "); // Alt text for accessibility
            imgElement.classList.add("item-image"); // Add a CSS class for styling

            const label = document.createElement("p");
            label.textContent = capitalizeWords(item.replace(".png", "")); // Capitalize the label text

            itemContainer.appendChild(imgElement);
            itemContainer.appendChild(label);
            itemListDiv.appendChild(itemContainer);
        });
    }
}

// Call the function to display items
displayCategories();