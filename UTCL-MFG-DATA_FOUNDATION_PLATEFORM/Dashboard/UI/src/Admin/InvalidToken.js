const InvalidToken = (error) => {
  if (
    error?.response?.data?.error ===
      "Not authorized for admin access, token invalid" &&
    error?.response?.status === 400
  ) {
    sessionStorage.removeItem("token");
    return true;
  } else {
    return false;
  }
};
module.exports = InvalidToken;
