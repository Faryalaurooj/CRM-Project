import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://127.0.0.1:8000/api/customers/${id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCustomer(response.data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://127.0.0.1:8000/api/customers/${id}/`, customer, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/customers"); // Redirect back to customer list
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Customer</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2">Phone:</label>
          <input
            type="text"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2">Address:</label>
          <input
            type="text"
            name="address"
            value={customer.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default EditCustomer;

