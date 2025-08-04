const now = new Date();
console.log(`Current Date and Time: ${now.toString()}`);

const especificDate = "2023-10-01T00:00:00";
console.log(`Specific Date: ${especificDate}`);

const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1; // Months are zero-indexed
const currentDate = now.getDate();
console.log(`Current Year: ${currentYear}`);
console.log(`Current Month: ${currentMonth}`);
console.log(`Current Date: ${currentDate}`);
console.log(`Formatted Date: ${now.toLocaleDateString()}`);
