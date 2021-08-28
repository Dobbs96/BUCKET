module.exports = {
  format_date: (date) => {
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${month}/${day}/${year}`;
  },
};
