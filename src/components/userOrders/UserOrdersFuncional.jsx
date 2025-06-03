
import { useEffect, useState } from "react";
import UserOrdersView from "./UserOrdersView";

const UserOrders = ({ token }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
        try {
            const response = await fetch("http://localhost:8080/orders", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });

            if (!response.ok) throw new Error("Error al obtener órdenes");

            const data = await response.json();
            setOrders(data);
        } catch (err) {
            console.error(err);
            alert("No se pudieron obtener las órdenes");
        }
        };

        fetchOrders();
    }, [token]);

    return <UserOrdersView orders={orders} />;
    };

export default UserOrders;