
import { useEffect, useState } from "react";
import UserOrdersView from "./UserOrdersView";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/orderSlice";


const UserOrders = () => {
        const dispatch = useDispatch();
        const token = useSelector((state) => state.auth.token);
        const orders = useSelector((state) => state.orders.items);

        useEffect(() => {
            dispatch(fetchOrders());
        }, [token, dispatch]);
    
        return <UserOrdersView orders={orders} />;
    };

export default UserOrders;