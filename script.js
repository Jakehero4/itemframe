// Data for items in each category
const categories = {
    tools: [
        "netherite_sword.png", "diamond_sword.png", "golden_sword.png", "iron_sword.png", "stone_sword.png", "wooden_sword.png",
        "netherite_pickaxe.png", "diamond_pickaxe.png", "golden_pickaxe.png", "iron_pickaxe.png", "stone_pickaxe.png", "wooden_pickaxe.png",
        "netherite_axe.png", "diamond_axe.png", "golden_axe.png", "iron_axe.png", "stone_axe.png", "wooden_axe.png",
        "netherite_shovel.png", "diamond_shovel.png", "golden_shovel.png", "iron_shovel.png", "stone_shovel.png", "wooden_shovel.png",
        "netherite_hoe.png", "diamond_hoe.png", "golden_hoe.png", "iron_hoe.png", "stone_hoe.png", "wooden_hoe.png",
        "bow.png", "crossbow.png", "crossbow_firework.png", "arrow.png", "spectral_arrow.png", "carrot_on_a_stick.png", "trident.png",
        "flint_and_steel.png", "shears.png", "spyglass.png", "brush.png", "bundle.png", "totem_of_undying.png",
        "goat_horn.png", "ender_pearl.png", "torch.png", "soul_torch.png"
    ],
    armor: [
        "netherite_helmet.png", "netherite_chestplate.png", "netherite_leggings.png", "netherite_boots.png",
        "diamond_helmet.png", "diamond_chestplate.png", "diamond_leggings.png", "diamond_boots.png",
        "iron_helmet.png", "iron_chestplate.png", "iron_leggings.png", "iron_boots.png",
        "golden_helmet.png", "golden_chestplate.png", "golden_leggings.png", "golden_boots.png",
        "chainmail_helmet.png", "chainmail_chestplate.png", "chainmail_leggings.png", "chainmail_boots.png",
        "leather_helmet.png", "leather_chestplate.png", "leather_leggings.png", "leather_boots.png",
        "armor_stand.png", "turtle_helmet.png", "elytra.png"
    ],
    ores: [
        "netherite_ingot.png", "netherite_scrap.png", "diamond.png", "raw_iron.png", "iron_ingot.png", 
        "iron_nugget.png", "raw_gold.png", "gold_ingot.png", "gold_nugget.png", "amethyst_shard.png", "lapis_lazuli.png", "emerald.png", "charcoal.png", "coal.png"
    ],
    food: [
        "apple.png", "golden_apple.png", "carrot_on_a_stick.png", "carrot.png", "golden_carrot.png", "beetroot.png", "honey_bottle.png", "milk_bucket.png",
        "melon_slice.png", "glistering_melon_slice.png", "potato.png", "baked_potato.png", "poisonous_potato.png",
        "suspicious_stew.png", "rabbit_stew.png", "mushroom_stew.png", "beetroot_soup.png", "bowl.png",
        "bread.png", "cookie.png", "cake.png", "sweet_berries.png", "pumpkin_pie.png",
        "mutton.png", "beef.png", "porkchop.png", "chicken.png", "rabbit.png",
        "cooked_mutton.png", "cooked_beef.png", "cooked_porkchop.png", "cooked_chicken.png", "cooked_rabbit.png",
    ],
    light: [
        "torch.png", "soul_torch.png", "redstone_torch.png", "lantern.png", "soul_lantern.png"
    ],
    transportation: [
        "minecart.png", "chest_minecart.png", "furnace_minecart.png", "hopper_minecart.png", "tnt_minecart.png", "command_block_minecart.png",
        "oak_boat.png", "spruce_boat.png", "dark_oak_boat.png", "birch_boat.png", "jungle_boat.png", "acacia_boat.png",
        "oak_chest_boat.png", "spruce_chest_boat.png", "dark_oak_chest_boat.png", "birch_chest_boat.png", "jungle_chest_boat.png", "acacia_chest_boat.png"
    ],
    wood: [
        "stick.png", "bowl.png",
        "oak_sign.png", "spruce_sign.png", "dark_oak_sign.png", "birch_sign.png", "jungle_sign.png", "acacia_sign.png"
    ],
    aquatic: [
        "trident.png", "fishing_rod.png", "sea_pickle.png", "turtle_helmet.png", "turtle_scute.png", "heart_of_the_sea.png",
        "pufferfish.png", "tropical_fish.png", , "cooked_cod.png", "cod.png", "cooked_salmon.png", "salmon.png",
        "water_bucket.png", "axolotl_bucket.png", "pufferfish_bucket.png", "tropical_fish_bucket.png", "cod_bucket.png", "salmon_bucket.png"
    ],
    redstone: [
        "redstone.png", "redstone_torch.png", "repeater.png", "comparator.png", "hopper.png"
    ],
    discs: [
        "music_disc_5.png", "music_disc_11.png", "music_disc_13.png", "music_disc_blocks.png", "music_disc_cat.png",
        "music_disc_chirp.png", "music_disc_creator.png", "music_disc_creator_music_box.png", "music_disc_far.png", "music_disc_mall.png",
        "music_disc_mellohi.png", "music_disc_otherside.png", "music_disc_pigstep.png", "music_disc_precipice.png", "music_disc_relic.png",
        "music_disc_stal.png", "music_disc_strad.png", "music_disc_wait.png", "music_disc_ward.png"
    ],
    misc: [
        "bucket.png", "water_bucket.png", "lava_bucket.png", "milk_bucket.png", "powder_snow_bucket.png", "book.png", "writable_book.png", "written_book.png", "enchanted_book.png"
    ]
};

// Function to populate items in each category
function populateItems() {
    for (const [category, items] of Object.entries(categories)) {
        const itemList = document.querySelector(`#${category} .item-list`);
        items.forEach(item => {
            const button = document.createElement("button");
            button.classList.add("item-button");
            button.innerHTML = `
                <img src="item/${item}" alt="${item.split('.')[0]}">
            `;
            itemList.appendChild(button);

            // Add click event to handle selection and LED update
            button.addEventListener("click", () => {
                // Remove 'selected' class from all buttons
                document.querySelectorAll(".item-button").forEach(btn => btn.classList.remove("selected"));

                // Add 'selected' class to the clicked button
                button.classList.add("selected");

                // Update the LED display
                const ledImage = document.getElementById("led-image");
                ledImage.src = `item/${item}`;
            });
        });
    }
}

// Get the LED image and item buttons
const ledImage = document.getElementById("led-image");

// Function to handle item selection
function selectItem(item) {
    // Remove 'selected' class from all items
    const allItems = document.querySelectorAll('.item-button');
    allItems.forEach(button => button.classList.remove('selected'));

    // Add 'selected' class to the clicked item
    item.classList.add('selected');

    // Update the LED display image
    const ledImage = document.getElementById('led-image');
    ledImage.src = item.querySelector('img').src;  // Set LED image to the clicked item's image source

    // Ensure the checkmark disappears if the LED image is clicked
    const checkmark = item.querySelector('.checkmark');
    if (checkmark) {
        checkmark.style.display = 'none';
    }
}

// Add event listeners to all item buttons
const itemButtons = document.querySelectorAll('.item-button');
itemButtons.forEach(button => {
    button.addEventListener('click', () => selectItem(button));
});

// Add event listener to the LED display image to reset the selection
const ledDisplay = document.getElementById('led-display');
ledDisplay.addEventListener('click', () => {
    // Reset all selections when the LED display is clicked
    const allItems = document.querySelectorAll('.item-button');
    allItems.forEach(button => button.classList.remove('selected'));

    // Clear the LED display image
    const ledImage = document.getElementById('led-image');
    ledImage.src = '';  // Clear the LED image
});

// Initialize the items on page load
populateItems();