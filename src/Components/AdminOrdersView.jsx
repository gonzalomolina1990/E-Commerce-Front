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

      <div className="container mt-5">
        <div className="row topDiv">
          <div className="col">
            <h3 className="mt-4">Órdenes de compra</h3>

            <Table striped bordered hover className="mt-5">
              <thead className="bg-dark text-light">
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
                            order.cart.map((c) => {
                              return (
                                <>
                                  <li>
                                    {c.product.name} / U$S {c.product.price} /{" "}
                                    {c.quantity} un.
                                  </li>
                                </>
                              );
                            })}
                        </ul>
                      </td>
                      <td>
                        {order.orderState}
                        <Button
                          onClick={() => (handleShow(), setOrder(order._id))}
                        >
                          Actualizar
                        </Button>
                      </td>
                      <td>{order.createdAt}</td>
                    </tbody>
                  );
                })}
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminOrdersView;
