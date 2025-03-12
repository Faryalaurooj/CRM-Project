import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CustomerDetails = () => {
  const { id } = useParams(); // ✅ Get customer ID from URL
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://127.0.0.1:8000/api/customers/${id}`, {
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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : customer ? (
        <div className="bg-white p-6 shadow rounded-lg">
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Address:</strong> {customer.address}</p>
        </div>
      ) : (
        <p>Customer not found.</p>
      )}
    </div>
  );
};

export default CustomerDetails;

