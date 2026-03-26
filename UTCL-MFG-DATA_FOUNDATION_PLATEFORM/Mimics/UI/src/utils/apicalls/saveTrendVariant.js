import axios from "axios";
import { BASE_URL } from "../../base";


export const saveTrendVariant = async (
  {
    variantName,
    requestPayload,
    layout,
    graphConfig,
  }
) => {
  const login = JSON.parse(localStorage.getItem("login")) || {};
  const { token, email } = login;

  if (!token || !email) {
    return {
      success: false,
      message: "User not authenticated",
    };
  }

  try {
    const response = await axios.post(
      `${BASE_URL}plotly/saveTrendVariants`,
      {
        userId: email,
        variantName,
        module: "TREND",
        requestPayload,
        layout,
        graphConfig,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    // ✅ ALWAYS return backend response
    return response.data;

  } catch (error) {

    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to save variant";

    console.error("saveTrendVariant error:", message);
    // ✅ IMPORTANT: return structured error (NOT null)
    return {
      success: false,
      message,
    };
  }
};

export const getTrendVariants = async (plant) => {
  const { token, email } = JSON.parse(localStorage.getItem("login")) || {};

  if (!token || !email) return [];

  try {
    const response = await axios.post(
      `${BASE_URL}plotly/getTrendsVariants`,
      {
        userId: email,   // 👈 user specific
        plant
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data?.data || [];
  } catch (error) {
    console.error("Failed to fetch variants");
    return [];
  }
};