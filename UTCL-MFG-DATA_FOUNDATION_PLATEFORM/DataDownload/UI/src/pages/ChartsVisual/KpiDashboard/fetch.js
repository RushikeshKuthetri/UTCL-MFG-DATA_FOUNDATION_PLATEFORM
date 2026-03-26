// const fetch = async (url, body, token) => {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     return error;
//   }
// };

// export default fetch;

const fetch = async (url, body, token) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return { error: error.message || "Something went wrong." };
  }
};

export default fetch;
