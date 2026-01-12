import api from "@/lib/api";

export const getOrderStatus = async (orderId) => {
    try {
        const response = await api.get(`/order/status/${orderId}`);
        return response.data;
    } catch (error) {
        console.error("Fetch order status error:", error);
        throw error.response?.data || { message: "Failed to fetch order status" };
    }
};
