export type MenuItem = { name: string; description?: string };
export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  subgroups?: { title: string; items: MenuItem[] }[];
};

export const menu: MenuCategory[] = [
  {
    id: "soups",
    title: "Soups",
    subtitle: "Slow-simmered, made fresh daily",
    items: [
      { name: "Broccoli Soup", description: "Blanched broccoli blended and simmered in a rich creamy broth" },
      { name: "Tomato & Basil Soup", description: "Basil and tomato pureed in a delicately seasoned sauce" },
      { name: "Popeye Almond Soup", description: "Roasted almonds and blanched spinach soup" },
      { name: "Mushroom & Parmesan Soup", description: "Rich cheesy mushroom soup" },
      { name: "Chicken Almond Soup", description: "Marinated chicken with toasted almonds in a hearty broth" },
      { name: "Classic Chicken Soup", description: "Marinated chicken cooked in garlic butter and clear stock" },
      { name: "Pumpkin Soup" },
      { name: "Basil Italian Chicken Soup" },
      { name: "Mixed Vegetable Soup" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    subtitle: "Crisp, fresh and beautifully tossed",
    items: [
      { name: "Potato Mustard Salad" },
      { name: "Fresh Watermelon Salad" },
      { name: "Glen's Special Salad" },
      { name: "Chicken Salami Salad" },
      { name: "Buffalo Chicken Salad" },
      { name: "Grilled Chicken Corn Salad" },
      { name: "Caesar Salad Veg" },
      { name: "Caesar Salad Non-Veg" },
      { name: "Pasta Fruit Salad" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Hand-stretched, stone-baked",
    items: [
      { name: "Margherita" },
      { name: "Aloha Hawaiian" },
      { name: "Pizza Primavera" },
      { name: "Paneer Goes Mexican" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "Built on freshly baked bread",
    items: [],
    subgroups: [
      {
        title: "Vegetarian",
        items: [
          { name: "Traditional Pesto" },
          { name: "Creamy Mushroom" },
          { name: "Spinach & Corn" },
        ],
      },
      {
        title: "Non-Vegetarian",
        items: [
          { name: "Sage Chicken" },
          { name: "Roast Chicken" },
          { name: "Green Pesto Chicken" },
          { name: "Red Pesto Chicken" },
          { name: "Smoked Chicken & Sesame Seeds" },
          { name: "Chicken Hot Dog" },
        ],
      },
      {
        title: "Croissant Sandwiches",
        items: [
          { name: "Paneer & Cheese" },
          { name: "Chicken Tikka" },
          { name: "Chicken Salami" },
        ],
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Brioche buns, hand-pressed patties",
    items: [
      { name: "Vegetable Burger" },
      { name: "Chicken Burger" },
      { name: "Fried Chicken Burger" },
      { name: "BBQ Sriracha Chicken Burger" },
    ],
  },
  {
    id: "hot-beverages",
    title: "Hot Beverages",
    subtitle: "Artisan coffee & teas",
    items: [
      { name: "Espresso" },
      { name: "Americano" },
      { name: "Cappuccino" },
      { name: "Latte" },
      { name: "Glen's Signature Coffee" },
      { name: "Willy's Classic Hot Chocolate" },
      { name: "Hot Mocha" },
      { name: "Hot Teas" },
      { name: "Speciality Hot Tea" },
    ],
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages",
    subtitle: "Cool, crafted & refreshing",
    items: [
      { name: "Cold Coffee" },
      { name: "Cold Coffee Vanilla" },
      { name: "Cold Coffee Chocolate" },
      { name: "Glen's Signature Cold Coffee" },
      { name: "Frappe" },
      { name: "Milkshakes" },
      { name: "Real Fruit Milkshakes" },
      { name: "Iced Teas" },
      { name: "Smoothies" },
      { name: "Bubble Burst Fruit Flavors" },
      { name: "Mojito Mint" },
      { name: "Fresh Lime Water" },
      { name: "Fresh Lime Soda" },
      { name: "Fresh Watermelon Juice" },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "Served all day, every day",
    items: [],
    subgroups: [
      {
        title: "Weekend Breakfast",
        items: [
          { name: "Eggs (Omelette, Fried, Scrambled, Boiled)" },
          { name: "Chicken Sausage" },
          { name: "Chicken Salami" },
          { name: "Croquette" },
          { name: "Potato Wedges" },
          { name: "Potato Mash" },
          { name: "Toasts" },
          { name: "Baked Beans" },
          { name: "Croissant" },
          { name: "Cinnamon Roll" },
          { name: "Cakes" },
          { name: "Waffles" },
          { name: "Pancakes" },
          { name: "French Toast" },
          { name: "Cereals" },
          { name: "Coffee & Tea" },
          { name: "Fresh Fruit Juice" },
        ],
      },
      {
        title: "Round The Clock Breakfast",
        items: [
          { name: "Bagels" },
          { name: "Waffles" },
          { name: "Pancakes" },
        ],
      },
      {
        title: "Combo Breakfast",
        items: [
          { name: "Eggs" },
          { name: "Sausage" },
          { name: "Salami" },
          { name: "Multigrain Bread" },
          { name: "Baked Beans" },
          { name: "Coffee & Tea" },
        ],
      },
    ],
  },
  {
    id: "italian",
    title: "Italian Favorites",
    subtitle: "Comfort classics from the oven",
    items: [],
    subgroups: [
      {
        title: "Lasagna",
        items: [{ name: "Vegetable Lasagna" }, { name: "Chicken Lasagna" }],
      },
      {
        title: "Quiche",
        items: [
          { name: "Creamy Mushroom Quiche" },
          { name: "Spinach & Corn Quiche" },
          { name: "Chicken American Corn Quiche" },
        ],
      },
    ],
  },
  {
    id: "specials",
    title: "Glen's Bakehouse Specials",
    subtitle: "Signature dishes from our kitchen",
    items: [
      { name: "Cauliflower & Corn Bake" },
      { name: "Grilled Chicken Steak" },
      { name: "Pesto Chicken Steak" },
      { name: "Honey Mustard Chicken Steak" },
      { name: "Spicy Citrus Chicken Steak" },
      { name: "Pot Roast Chicken" },
      { name: "Cheesy Chicken Bake" },
      { name: "Chicken Pot Pie" },
    ],
  },
  {
    id: "risotto",
    title: "Risotto",
    subtitle: "Slow-stirred, perfectly creamy",
    items: [{ name: "Mushroom Risotto" }, { name: "Chicken Risotto" }],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Baked with love",
    items: [
      { name: "Great Baked Cheesecake Sundae" },
      { name: "Tres Leches Cake" },
      { name: "Tiramisu" },
      { name: "Frozen Mudpie" },
      { name: "Cookies & Cream" },
      { name: "Red Velvet Sundae" },
      { name: "Hot Fudge Nutty Sundae" },
    ],
  },
  {
    id: "cheesecakes",
    title: "Baked Cheesecakes",
    subtitle: "Slow-baked, silky-smooth",
    items: [
      { name: "Blueberry Cheesecake" },
      { name: "Blueberry Eggless Cheesecake" },
      { name: "Creamy Caramel Cheesecake" },
    ],
  },
];

export const testimonials = [
  {
    name: "Priya R.",
    rating: 5,
    text: "Their croissants are unreal — buttery, flaky and always fresh. Glen's signature cold coffee is a must-try every visit.",
  },
  {
    name: "Arjun M.",
    rating: 5,
    text: "Best breakfast spot in Kalyan Nagar. The combo breakfast and pancakes are absolutely worth it. Cozy ambience too.",
  },
  {
    name: "Sneha K.",
    rating: 4,
    text: "The tiramisu and red velvet sundae are my comfort desserts. Always packed but service is warm and quick.",
  },
  {
    name: "Rohan D.",
    rating: 5,
    text: "Pizza is wood-fired perfection and the chicken lasagna is comfort food at its finest. Highly recommend.",
  },
  {
    name: "Aisha S.",
    rating: 5,
    text: "Lovely cafe with brilliant baked goods. The cheesecake is heavenly and the staff are very friendly.",
  },
  {
    name: "Karthik V.",
    rating: 4,
    text: "Glen's has been our weekend ritual for years. The breakfast spread and coffee never disappoint.",
  },
];
