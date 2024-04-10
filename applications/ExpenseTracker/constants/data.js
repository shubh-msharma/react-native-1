const descriptions = [
  "bought shoes for sister's birthday gift",
  "purchased groceries for the week",
  "paid electricity bill",
  "dinner with friends",
  "movie night with family",
  "donation to charity",
  "shopping for home decor",
  "bought new headphones",
  "lunch at a fancy restaurant",
  "renewed gym membership",
  "bought books from bookstore",
  "ordered pizza for dinner",
  "filled up gas tank",
  "online shopping spree",
  "haircut at salon",
  "bought concert tickets",
  "gift for friend's wedding",
  "coffee with colleagues",
  "purchased new phone",
  "weekend getaway"
];

const categories = [
  "Groceries",
  "Utilities",
  "Entertainment",
  "Dining",
  "Shopping",
  "Health",
  "Travel",
  "Gifts",
  "Personal Care",
  "Miscellaneous"
];

const foodTags = ["food", "paani puri", "junk food", "samosa", "pizza", "burger", "pasta", "ice cream", "cake"];
const travelTags = ["travel", "mountains", "beach", "historical place", "hill station", "city", "temple", "wildlife sanctuary", "adventure"];
const styleTags = ["style", "clothes", "shoes", "accessories", "fashion", "outfit", "street style", "trend", "shopping"];

function getRandomDescription() {
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function getRandomCategory() {
  return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomDate() {
  const start = new Date(2024, 1, 20); // Feb 20, 2024
  const end = new Date(2024, 2, 12); // March 12, 2024
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomTags(category) {
  switch (category) {
    case "Groceries":
      return ["groceries", "shopping", "food"];
    case "Utilities":
      return ["bills", "utilities", "payments"];
    case "Entertainment":
      return ["entertainment", "movies", "games"];
    case "Dining":
      return foodTags.slice(0, 3); // Select up to 3 food-related tags
    case "Shopping":
      return styleTags.slice(0, 3); // Select up to 3 style-related tags
    case "Health":
      return ["health", "fitness", "wellness"];
    case "Travel":
      return travelTags.slice(0, 3); // Select up to 3 travel-related tags
    case "Gifts":
      return ["gifts", "present", "celebration"];
    case "Personal Care":
      return ["personal care", "self-care", "well-being"];
    case "Miscellaneous":
      return ["miscellaneous", "other", "random"];
    default:
      return [];
  }
}

const jsonArray = [];

for (let i = 0; i < 25; i++) {
  const category = getRandomCategory();
  const json = {
    amount: Math.floor(Math.random() * 1000) + 100,
    description: getRandomDescription(),
    category: category,
    tags: getRandomTags(category),
    date: getRandomDate(),
    id:i+1
  };
  jsonArray.push(json);
}
  export const expenses = [...jsonArray];