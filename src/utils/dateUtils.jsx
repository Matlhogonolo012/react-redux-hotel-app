/**
 * Calculates the number of days between two dates.
 * @param {string} startDate - The start date in YYYY-MM-DD format.
 * @param {string} endDate - The end date in YYYY-MM-DD format.
 * @returns {number} - The number of days between the two dates.
 */
export const calculateDaysBetween = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const diffInMilliseconds = end - start;
  return Math.round(diffInMilliseconds / millisecondsPerDay);
};

/**
 * Formats a date to a more readable format (e.g., MM/DD/YYYY).
 * @param {string} date
 * @returns {string}
 */
export const formatDate = (date) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString(undefined, options);
};
