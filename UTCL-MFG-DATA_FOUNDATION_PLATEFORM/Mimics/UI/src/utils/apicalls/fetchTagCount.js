import axios from "axios";
import { BASE_URL } from "../../base";

export const fetchTagsCountAPI = async (plants, dispatch) => {
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
            `${BASE_URL}plantTagLineCount`,
            {
                plants,
                userId: email,
            },
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        console.log("The data is ===========================>",response?.data)
        // ✅ Direct dispatch

        return response?.data;
    } catch (error) {
        console.error("Error fetching plant tag/line count:", error);
        throw error;
    }
};