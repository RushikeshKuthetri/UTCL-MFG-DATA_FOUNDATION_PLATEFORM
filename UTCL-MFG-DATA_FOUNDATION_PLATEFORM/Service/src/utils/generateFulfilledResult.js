const generateFulfilledResult = (data) => {
  const final = [];
  const fulfilled = data
    .filter((result) => result.status === "fulfilled")
    .map((result) => final.push(...result.value));

  return final;
};

module.exports = generateFulfilledResult;
