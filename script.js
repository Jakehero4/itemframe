// Data for items in each category
const itemCategories = {
    tools: [
        "netherite_sword.png", "diamond_sword.png", "golden_sword.png", "iron_sword.png", "stone_sword.png", "wooden_sword.png",
        "netherite_pickaxe.png", "diamond_pickaxe.png", "golden_pickaxe.png", "iron_pickaxe.png", "stone_pickaxe.png", "wooden_pickaxe.png",
        "netherite_axe.png", "diamond_axe.png", "golden_axe.png", "iron_axe.png", "stone_axe.png", "wooden_axe.png",
        "netherite_shovel.png", "diamond_shovel.png", "golden_shovel.png", "iron_shovel.png", "stone_shovel.png", "wooden_shovel.png",
        "netherite_hoe.png", "diamond_hoe.png", "golden_hoe.png", "iron_hoe.png", "stone_hoe.png", "wooden_hoe.png",
        "bow.png", "crossbow.png", "crossbow_firework.png", "arrow.png", "spectral_arrow.png", "carrot_on_a_stick.png", "trident.png",
        "flint_and_steel.png", "compass.png", "recovery_compass.png", "clock.png", "shears.png", "spyglass.png", "brush.png", "bundle.png", "totem_of_undying.png",
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
        "iron_nugget.png", "raw_gold.png", "gold_ingot.png", "gold_nugget.png", "amethyst_shard.png", "lapis_lazuli.png", "emerald.png", "charcoal.png", "coal.png", "brick.png"
    ],
    food: [
        "apple.png", "golden_apple.png", "carrot_on_a_stick.png", "carrot.png", "golden_carrot.png", "beetroot.png", "honey_bottle.png", "milk_bucket.png",
        "melon_slice.png", "glistering_melon_slice.png", "potato.png", "baked_potato.png", "poisonous_potato.png",
        "suspicious_stew.png", "rabbit_stew.png", "mushroom_stew.png", "beetroot_soup.png", "bowl.png",
        "bread.png", "cookie.png", "cake.png", "sweet_berries.png", "pumpkin_pie.png",
        "mutton.png", "beef.png", "porkchop.png", "chicken.png", "rabbit.png",
        "cooked_mutton.png", "cooked_beef.png", "cooked_porkchop.png", "cooked_chicken.png", "cooked_rabbit.png"
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
        "stick.png", "bowl.png", "campfire.png", "soul_campfire.png",
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
        "bucket.png", "water_bucket.png", "lava_bucket.png", "milk_bucket.png", "powder_snow_bucket.png",
        "book.png", "writable_book.png", "written_book.png", "enchanted_book.png", "name_tag.png",
        "turtle_scute.png", "wheat.png", "snowball.png", "slime_ball.png", "shulker_shell.png", "painting.png",
        "sugar_cane.png", "sugar.png", "gunpowder.png", "glowstone_dust.png", "ender_eye.png", "nether_star.png",
        "ink_sac.png","glow_ink_sac.png", "glass_bottle.png", "splash_potion.png", "feather.png", "firework_rocket.png",
        "paper.png", "map.png", "bamboo.png", "bone.png", "bone_meal.png", "string.png",
        "dragon_breath.png", "egg.png", "chain.png", "honeycomb.png", "experience_bottle.png",
        "flint.png", "lead.png", "leather.png", "item_frame.png", "glow_item_frame.png", "painting.png", "fire_charge.png",
        "magma_cream.png", "blaze_powder.png", "blaze_rod.png", "nether_star.png", "saddle.png"
    ]
};

const blockCategories = {
    "blocks": [
        "command_block_front.png"
    ]
};

// Function to update the LED image and trigger the scaling animation
function updateLEDImage(imageSrc) {
    const ledImage = document.getElementById("led-image");
    ledImage.src = `item/${imageSrc}`;
    
    if (ledImage) {
        ledImage.classList.remove("selected");
        setTimeout(() => {
            ledImage.classList.add("selected");
        }, 0);
    }
}

// Function to toggle LED image scale
function toggleLEDImageScale() {
    const ledImage = document.getElementById("led-image");

    if (ledImage.classList.contains("selected")) {
        ledImage.classList.remove("selected");
    } else {
        ledImage.classList.add("selected");
    }
}

document.getElementById("led-image").addEventListener("click", toggleLEDImageScale);

document.getElementById("led-image").addEventListener("click", () => {
    document.querySelector(".item-button, .block-button").classList.remove("selected");
    document.querySelector(".item-button, .block-button").classList.toggle("selected");
    document.querySelectorAll(".item-button, .block-button").forEach((button) => {
        button.classList.remove("selected");
    });
});

// Function to populate items in each category
function populateItems() {
    console.log("Populating items...");
    console.log("Item categories:", itemCategories);

    for (const [category, items] of Object.entries(itemCategories)) {
        console.log(`Populating category: ${itemCategories}`);
        console.log("Items in category:", items);

        // Get the item list container
        const itemList = document.querySelector(`#${category} .item-list`);
        console.log(`Item list container for category ${itemCategories}:`, itemList);

        // Add each item in the category
        items.forEach(item => {
            const baseButton = document.createElement("button");
            const checkmark = baseButton.querySelector(".checkmark");
            baseButton.classList.add("item-button");
            baseButton.innerHTML = `<img src="item/${item}" alt="${item}">`;

            // Add click event for the base item
            baseButton.addEventListener("click", () => {
                updateLEDImage(item);  // Update the LED display with the selected item
                
                // Deselect all other buttons and hide their checkmarks
                document.querySelectorAll(".item-button").forEach(btn => {
                    btn.classList.remove("selected");
                    const btnCheckmark = btn.querySelector(".checkmark");
                    if (btnCheckmark) btnCheckmark.style.display = "none";  // Hide checkmark
                });

                document.querySelectorAll(".block-button").forEach(btn => {
                    btn.classList.remove("selected");
                    const btnCheckmark = btn.querySelector(".checkmark");
                    if (btnCheckmark) btnCheckmark.style.display = "none";  // Hide checkmark
                });

                // Select the clicked button and show its checkmark
                baseButton.classList.add("selected");
            });

            // Add the item button to the item list
            itemList.appendChild(baseButton);
        });
    }
}

// Function to populate items in each category
function populateBlocks() {
    console.log("Populating blocks...");
    console.log("block categories:", blockCategories);

    for (const [category, blocks] of Object.entries(blockCategories)) {
        console.log(`Populating category: ${blockCategories}`);
        console.log("blocks in category:", blocks);

        const blockCategoriesContainer = document.createElement('div');
        blockCategoriesContainer.classList.add('block-categories-container');

        // Create the item container element
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        // Get the block list container
        const blockList = document.querySelector(`#${category} .block-list`);
        console.log(`block list container for category ${blockCategories}:`, blockList);

        // Add each block in the category
        blocks.forEach(block => {
            const baseButton = document.createElement("button");
            baseButton.classList.add("block-button");
            baseButton.innerHTML = `<img src="block/${block}" alt="${block}">`;

            // Add click event for the base block
            baseButton.addEventListener("click", () => {
                updateLEDImage(block);  // Update the LED display with the selected block
                
                // Deselect all other buttons and hide their checkmarks
                document.querySelectorAll(".block-button").forEach(btn => {
                    btn.classList.remove("selected");
                    const btnCheckmark = btn.querySelector(".checkmark");
                    if (btnCheckmark) btnCheckmark.style.display = "none";  // Hide checkmark
                });

                document.querySelectorAll(".item-button").forEach(btn => {
                    btn.classList.remove("selected");
                    const btnCheckmark = btn.querySelector(".checkmark");
                    if (btnCheckmark) btnCheckmark.style.display = "none";  // Hide checkmark
                });

                // Select the clicked button and show its checkmark
                baseButton.classList.add("selected");
            });

            // Add the block button to the block list
            blockList.appendChild(baseButton);
        });
    }
}

// Scroll-to-top button logic
let isHolding = false;
document.getElementById("scroll-to-top").addEventListener("mousedown", () => {
    isHolding = true;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.getElementById("scroll-to-top").addEventListener("mouseup", () => {
    isHolding = false;
});

document.getElementById("scroll-to-top").addEventListener("mouseleave", () => {
    isHolding = false;
});

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const scrollButton = document.getElementById("scroll-to-top");
    scrollButton.style.opacity = scrollPosition > 50 ? 1 : 0;
    scrollButton.style.transform = scrollPosition > 50 ? "scale(1.2)" : "scale(1)";
});

document.addEventListener("DOMContentLoaded", function() {
    populateItems();  // Populate items with varieties
    populateBlocks();  // Display block categories and items
});