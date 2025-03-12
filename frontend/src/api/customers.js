import axios from "axios";

export const getCustomers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://127.0.0.1:8000/api/customers/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    return [];
  }
};

