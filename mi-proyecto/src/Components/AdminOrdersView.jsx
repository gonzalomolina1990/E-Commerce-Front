import React, { useEffect } from "react";
import "../App.css";
import Navigation from "./Navigation";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { listOrders } from "../redux/actions/orders";

const AdminOrdersView = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.usertoken);
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-type": "aplication/json",
          Authorization: `Bearer ${token}`,
        },
        url: "http://localhost:8000/api/v1/orders",
      });
      dispatch(listOrders(response.data));
    };
    getOrders();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID de Pedido</th>
                  <th>Usuario</th>
                  <th>Productos</th>
                  <th>Estado</th>
                  <th>Fecha de creación</th>
                </tr>
              </thead>

              {orders &&
                orders.map((order) => {
                  return (
                    <tbody>
                      <td>{order._id}</td>
                      <td>{order.buyer.name}</td>
                      <td>
                        <ul>
                          {order &&
                            order.products.map((product) => {
                              return (
                                <>
                                  <li>{product.name}</li>
                                </>
                              );
                            })}
                        </ul>
                      </td>
                      <td>{order.orderState}</td>
                      <td>{order.createdAt}</td>
                    </tbody>
                  );
                })}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrdersView;
