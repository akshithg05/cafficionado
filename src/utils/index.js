export const statusLevels = {
  low: {
    color: "#047857",
    background: "#d1fae5",
    description: "Caffeine levels are mild, resulting in a light boost in alertness with minimal side effects.",
    maxLevel: 100,
  },
  moderate: {
    color: "#b45309",
    background: "#fef3c7",
    description:
      "A moderate amount of caffeine leads to noticeable stimulation, increased focus, and potential restlessness.",
    maxLevel: 200,
  },
  high: {
    color: "#e11d48",
    background: "#ffe4e6",
    description:
      "Elevated caffeine levels can cause jitteriness, rapid heartbeat, and trouble concentrating, signaling an excessive intake.",
    maxLevel: 9999,
  },
};

export const coffeeConsumptionHistory = {
  1727579064032: { name: "Americano", cost: 459.26 },
  1727629263026: { name: "Rockstar Energy (473ml)", cost: 564.1 },
  1727571485301: { name: "Macchiato", cost: 576.34 },
  1727585485245: { name: "Instant Coffee (1 tsp)", cost: 407.68 },
  1727614392214: { name: "Irish Coffee", cost: 406.01 },
  1727642088808: { name: "Flat White", cost: 419.33 },
  1727600684481: { name: "Latte", cost: 332.77 },
  1727615806680: { name: "Drip Coffee (355ml)", cost: 298.29 },
  1727609623836: { name: "Bang Energy (473ml)", cost: 285.46 },
  1727647449961: { name: "Monster Java (443ml)", cost: 369.41 },
  1727595771504: { name: "Red Eye", cost: 286.14 },
  1727586709242: { name: "5-hour Energy (59ml)", cost: 466.0 },
  1727592250322: { name: "Cortado", cost: 372.74 },
  1727630731059: { name: "NOS Energy Drink (473ml)", cost: 308.67 },
  1727584588314: { name: "Drip Coffee (355ml)", cost: 496.27 },
  1727630390005: { name: "Celsius Energy Drink (355ml)", cost: 268.26 },
  1727595715018: { name: "Matcha Latte", cost: 373.41 },
  1727605577918: { name: "AMP Energy Drink (473ml)", cost: 523.03 },
  1727565390441: { name: "Vietnamese Coffee", cost: 281.62 },
  1727641229973: { name: "Flat White", cost: 451.34 },
  1727610658037: { name: "Black Coffee (237ml)", cost: 287.07 },
  1727620751667: { name: "Bang Energy (473ml)", cost: 531.65 },
  1727597163157: { name: "Monster Energy (473ml)", cost: 566.59 },
  1727590586957: { name: "Iced Coffee (237ml)", cost: 312.83 },
  1727610760698: { name: "Monster Java (443ml)", cost: 366.31 },
  1727601688000: { name: "Nitro Cold Brew (355ml)", cost: 381.73 },
  1727602354621: { name: "Turkish Coffee", cost: 329.47 },
  1727599341790: { name: "Double Espresso", cost: 489.49 },
  1727566519925: { name: "Flat White", cost: 321.38 },
  1727554338958: { name: "Espresso", cost: 291.07 },
  1727623439992: { name: "Red Bull (248ml)", cost: 433.39 },
  1727569314281: { name: "AMP Energy Drink (473ml)", cost: 464.86 },
  1727577846796: { name: "Starbucks Doubleshot (192ml)", cost: 541.63 },
  1727651270793: { name: "Drip Coffee (355ml)", cost: 456.77 },
  1727571590403: { name: "Red Eye", cost: 304.51 },
  1727575199865: { name: "Reign Energy Drink (473ml)", cost: 577.73 },
  1727613114673: { name: "Vietnamese Coffee", cost: 339.86 },
  1727553981855: { name: "Cold Brew (355ml)", cost: 405.98 },
  1727628992138: { name: "Zipfizz (1 tube)", cost: 547.46 },
  1727626471677: { name: "Reign Energy Drink (473ml)", cost: 269.57 },
  1727618530023: { name: "Zipfizz (1 tube)", cost: 581.47 },
  1727616747401: { name: "Turkish Coffee", cost: 447.22 },
  1727635847332: { name: "Black Coffee (237ml)", cost: 508.35 },
};

export const coffeeOptions = [
  { name: "Espresso", caffeine: 63 },
  { name: "Double Espresso", caffeine: 126 },
  { name: "Americano", caffeine: 96 },
  { name: "Cappuccino", caffeine: 80 },
  { name: "Latte", caffeine: 80 },
  { name: "Mocha", caffeine: 90 },
  { name: "Macchiato", caffeine: 85 },
  { name: "Flat White", caffeine: 130 },
  { name: "Cortado", caffeine: 85 },
  { name: "Red Eye", caffeine: 159 },
  { name: "Black Coffee (237ml)", caffeine: 95 },
  { name: "Iced Coffee (237ml)", caffeine: 90 },
  { name: "Cold Brew (355ml)", caffeine: 155 },
  { name: "Nitro Cold Brew (355ml)", caffeine: 215 },
  { name: "Drip Coffee (355ml)", caffeine: 120 },
  { name: "Frappuccino", caffeine: 95 },
  { name: "Turkish Coffee", caffeine: 160 },
  { name: "Irish Coffee", caffeine: 70 },
  { name: "Vietnamese Coffee", caffeine: 100 },
  { name: "Affogato", caffeine: 65 },
  { name: "Instant Coffee (1 tsp)", caffeine: 30 },
  { name: "Decaf Coffee", caffeine: 2 },
  { name: "Chai Latte", caffeine: 40 },
  { name: "Matcha Latte", caffeine: 70 },
  { name: "Monster Energy (473ml)", caffeine: 160 },
  { name: "Red Bull (248ml)", caffeine: 80 },
  { name: "Rockstar Energy (473ml)", caffeine: 160 },
  { name: "Bang Energy (473ml)", caffeine: 300 },
  { name: "Celsius Energy Drink (355ml)", caffeine: 200 },
  { name: "5-hour Energy (59ml)", caffeine: 200 },
  { name: "NOS Energy Drink (473ml)", caffeine: 160 },
  { name: "Reign Energy Drink (473ml)", caffeine: 300 },
  { name: "Starbucks Doubleshot (192ml)", caffeine: 135 },
  { name: "Monster Java (443ml)", caffeine: 188 },
  { name: "AMP Energy Drink (473ml)", caffeine: 142 },
  { name: "Zipfizz (1 tube)", caffeine: 100 },
];

const halfLifeHours = 5;

export function calculateCurrentCaffeineLevel(historyData) {
  const currentTime = Date.now();
  const halfLife = halfLifeHours * 60 * 60 * 1000; // 5 hours in milliseconds
  const maxAge = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

  let totalCaffeine = 0;

  for (const [timestamp, entry] of Object.entries(historyData)) {
    const timeElapsed = currentTime - parseInt(timestamp);

    // Ignore entries older than 48 hours
    if (timeElapsed <= maxAge) {
      const caffeineInitial = getCaffeineAmount(entry.name);
      // Calculate the remaining caffeine using the half-life formula
      const remainingCaffeine = caffeineInitial * Math.pow(0.5, timeElapsed / halfLife);
      totalCaffeine += remainingCaffeine;
    }
  }

  return totalCaffeine.toFixed(2);
}

// Helper function to get caffeine amount based on the coffee name
export function getCaffeineAmount(coffeeName) {
  const coffee = coffeeOptions.find((c) => c.name === coffeeName);
  return coffee ? coffee.caffeine : 0;
}

export function getTopThreeCoffees(historyData) {
  const coffeeCount = {};

  // Count occurrences of each coffee type
  for (const entry of Object.values(historyData)) {
    const coffeeName = entry.name;
    if (coffeeCount[coffeeName]) {
      coffeeCount[coffeeName]++;
    } else {
      coffeeCount[coffeeName] = 1;
    }
  }

  // Convert coffeeCount object to an array of [coffeeName, count] and sort by count
  const sortedCoffees = Object.entries(coffeeCount).sort((a, b) => b[1] - a[1]);

  // Calculate total coffees consumed
  const totalCoffees = Object.values(coffeeCount).reduce((sum, count) => sum + count, 0);

  // Get the top 3 most popular coffees
  const topThree = sortedCoffees.slice(0, 3).map(([coffeeName, count]) => {
    const percentage = ((count / totalCoffees) * 100).toFixed(2);
    return {
      coffeeName: coffeeName,
      count: count,
      percentage: percentage + "%",
    };
  });

  return topThree;
}

export function timeSinceConsumption(utcMilliseconds) {
  const now = Date.now();
  const diffInMilliseconds = now - utcMilliseconds;

  // Convert to seconds, minutes, hours, days, and months
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  // Get the remainder for each unit
  const remainingDays = days % 30;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  // Construct the string
  let result = "";
  if (months > 0) result += `${months}M `;
  if (remainingDays > 0) result += `${remainingDays}D `;
  if (remainingHours > 0) result += `${remainingHours}H `;
  if (remainingMinutes > 0) result += `${remainingMinutes}M `;
  if (remainingSeconds > 0 || result === "") result += `${remainingSeconds}S`; // Show seconds even if they're 0 if nothing else exists

  return result.trim(); // Remove any trailing space
}

export function calculateCoffeeStats(coffeeConsumptionHistory) {
  const dailyStats = {};
  let totalCoffees = 0;
  let totalCost = 0;
  let totalCaffeine = 0;
  let totalDaysWithCoffee = 0;

  for (const [timestamp, coffee] of Object.entries(coffeeConsumptionHistory)) {
    const date = new Date(parseInt(timestamp)).toISOString().split("T")[0]; // Extract date in YYYY-MM-DD format
    const caffeine = getCaffeineAmount(coffee.name);
    const cost = parseFloat(coffee.cost);

    // Initialize or update the daily stats
    if (!dailyStats[date]) {
      dailyStats[date] = { caffeine: 0, cost: 0, count: 0 };
    }

    dailyStats[date].caffeine += caffeine;
    dailyStats[date].cost += cost;
    dailyStats[date].count += 1;

    // Update totals
    totalCoffees += 1;
    totalCost += cost;
  }

  const days = Object.keys(dailyStats).length;
  const dailyCaffeine = {};
  for (const [date, stats] of Object.entries(dailyStats)) {
    if (stats.caffeine > 0) {
      totalCaffeine += stats.caffeine;
      totalDaysWithCoffee += 1; // Count days when caffeine was consumed
    }
  }

  // Calculate average daily caffeine and average daily cost
  const averageDailyCaffeine = totalDaysWithCoffee > 0 ? (totalCaffeine / totalDaysWithCoffee).toFixed(2) : 0;
  const averageDailyCost = totalDaysWithCoffee > 0 ? (totalCost / totalDaysWithCoffee).toFixed(2) : 0;
  console.log(totalCost, typeof totalCost);
  return {
    daily_caffeine: averageDailyCaffeine,
    daily_cost: averageDailyCost,
    average_coffees: (totalCoffees / days).toFixed(2),
    total_cost: totalCost.toFixed(2),
  };
}
