import axios from "axios";
import { BASE_URL } from "../../base";

export const fetchDocuments = async (dispatch) => {
    try {
        const { token } = JSON.parse(localStorage.getItem("login"));

        const response = await axios.get(`${BASE_URL}getDocuments`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        console.log("Documents fetched successfully:", response.data);
        dispatch({
            type: "SET_DOCUMENTS",
            payload: response.data?.data || {},
        });

    } catch (error) {
        console.error("Error fetching documents:", error);
    }
};


export const handleDownload = async (key, name) => {
    const { token } = JSON.parse(localStorage.getItem("login"));

    try {
        const response = await axios.post(
            `${BASE_URL}getDownloadUrl`,
            { key },
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );

        const signedUrl = response?.data?.data?.url;

        if (!signedUrl) return;

        // ✅ Direct download (no new tab)
        window.location.href = signedUrl;

    } catch (error) {
        console.error("Download failed:", error);
    }
};