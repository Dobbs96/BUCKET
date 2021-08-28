module.exports = {
  format_date: (date) => {
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    return `${month}/${day}/${year}`;
  },
};
