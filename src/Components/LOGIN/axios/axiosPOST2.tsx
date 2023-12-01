import axios from "axios";

export const post = async (url:string, body:object) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL_SST}/${url}`,
       body,
      );

      console.log("Response from the server:", response.data);
    } catch (error) {
      console.error("Error sending email to the backend:", error);
    }
  };