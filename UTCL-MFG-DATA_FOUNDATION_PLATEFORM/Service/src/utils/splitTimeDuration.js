module.exports = {
  splitTimeDuration: (input) => {
    const match = input.match(/^(\d+)([a-zA-Z]+)$/);
    if (match) {
      const number = parseInt(match[1], 10); // Extract the numeric part
      const unit = match[2]; // Extract the letter part
      return { number, unit };
    } else {
      throw new Error("Invalid input format");
    }
  },
};
