import React, { useEffect, useState } from "react";
import "../App.css";
import Navigation from "./Navigation";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { listOrders, updateState } from "../redux/actions/orders";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import moment from "moment";

const AdminOrdersView = () => {
  const [orderState, setOrderState] = useState("");
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.usertoken);
  const orders = useSelector((state) => state.orders);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-type": "aplication/json",
          Authorization: `Bearer ${token}`,
        },
        url: `${process.env.REACT_APP_URL}/api/v1/orders`,
      });

      dispatch(listOrders(response.data));
    };
    getOrders();
  }, []);

  const handleOrderState = async (e) => {
    setOrderState(e);
  };
  const handleOrderStateChange = async (id) => {
    handleClose();
    const response = await axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/order/${id}`,
      data: { orderState: orderState },
    });
    dispatch(updateState(id, orderState));
  };

  return (
    <>
      <Navigation />
      <div className="overlay"></div>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="productModal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Control
              as="select"
              multiple
              id="inlineFormCustomSelect"
              onChange={(e) => {
                handleOrderState(e.target.value);
              }}
            >
              <option value={"No pago"}>No pago</option>;
              <option value={"Pago"}>Pago</option>;
              <option value={"Enviado"}>Enviado</option>;
              <option value={"Entregado"}>Entregado</option>;
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => handleOrderStateChange(order)}
            to="#"
          >
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container my-5">
        <div className=" topDiv">
          <h3>Órdenes de compra</h3>
          <div className="tableStyle ">
            <table className="table table-bordered mt-5 table-hover">
              <thead className="bg-dark text-light">
                <tr>
                  <th scope="col">ID de Pedido</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Productos</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Fecha de creación</th>
                </tr>
              </thead>

              {orders &&
                orders.map((order) => {
                  return (
                    <tbody className="tbodyAdmin">
                      <tr>
                        {" "}
                        <td data-label="ID de Pedido">{order._id}</td>
                        <td className="" data-label="Usuario">
                          {order.buyer}
                        </td>
                        <td className="" data-label="Productos">
                          {order &&
                            order.cart.map((c) => {
                              return (
                                <div>
                                  {" "}
                                  <li>
                                    <u>
                                      <b>{c.product.name}</b>
                                    </u>
                                    <ul>
                                      <li>Precio: U$S {c.product.price}</li>
                                      <li>Cantidad: {c.quantity} </li>
                                    </ul>
                                  </li>
                                </div>
                              );
                            })}
                        </td>
                        <td data-label="Estado">
                          {order.orderState}
                          <Button
                            className="mt-2 ml-1"
                            onClick={() => (handleShow(), setOrder(order._id))}
                          >
                            Editar
                          </Button>
                        </td>
                        <td data-label="Fecha de creación">
                          {moment(order.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminOrdersView;
