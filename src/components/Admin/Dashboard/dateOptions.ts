export const dateOptions = [
  {
    title: "Today",
    fromDate: new Date(new Date().setHours(0, 0, 0, 0)), // Start of today
    toDate: new Date(new Date().setHours(23, 59, 59, 999)), // End of today
  },
  {
    title: "This Week",
    fromDate: new Date(
      new Date().setDate(new Date().getDate() - new Date().getDay())
    ), // Start of the week
    toDate: new Date(), // Now
  },
  {
    title: "This Month",
    fromDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1), // Start of this month
    toDate: new Date(), // Now
  },
  {
    title: "Last 30 Days",
    fromDate: new Date(new Date().setDate(new Date().getDate() - 30)), // 30 days ago
    toDate: new Date(), // Now
  },
  {
    title: "This Year",
    fromDate: new Date(new Date().getFullYear(), 0, 1), // Start of this year
    toDate: new Date(), // Now
  },
  {
    title: "Last Year",
    fromDate: new Date(new Date().getFullYear() - 1, 0, 1), // Start of last year
    toDate: new Date(new Date().getFullYear() - 1, 11, 31, 23, 59, 59, 999), // End of last year
  },
  {
    title: "All Time",
    fromDate: null,
    toDate: null,
  },
];
