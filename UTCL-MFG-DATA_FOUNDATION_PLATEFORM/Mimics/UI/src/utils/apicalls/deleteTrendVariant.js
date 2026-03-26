import axios from "axios";
import { BASE_URL } from "../../base";


export const deleteTrendVariant = async (variantId) => {
    const login = JSON.parse(localStorage.getItem("login")) || {};
    const { token, email } = login;

    if (!token || !email) {
        return {
            success: false,
            message: "User not authenticated",
        };
    }

    if (!variantId) {
        return {
            success: false,
            message: "Variant ID is required",
        };
    }

    try {
        const response = await axios.post(
            `${BASE_URL}plotly/deleteTrendVariant`,
            {
                userId: email,
                variantId,
            },
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;

    } catch (error) {
        const message =
            error.response?.data?.message ||
            error.message ||
            "Failed to delete variant";

        console.error("deleteTrendVariant error:", message);

        return {
            success: false,
            message,
        };
    }
};
