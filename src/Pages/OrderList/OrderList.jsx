import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderList } from "../../Toolkit/orderSlice";
import { Container, CircularProgress, Typography } from "@mui/material";
import OrderList from "../../Components/OrderList";
import PageHeader from "../../Components/PageHeader";
import Loader from "../../Components/Loader";

const OrderListPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, allOrderList } = useSelector(
    (state) => state.order
  );


  useEffect(() => {
    dispatch(getAllOrderList());
  }, []);
  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Loader />
      </Container>
    );
  }
  return (
    <>
    <PageHeader title="Order List" />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {isLoading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}

        {!isLoading && allOrderList.length === 0 && (
          <Typography sx={{textAlign:"center"}} >No orders available.</Typography>
        )}

        {allOrderList.map((order) => (
          <OrderList key={order.id} order={order} />
        ))}
      </Container>
    </>
  );
};

export default OrderListPage;
