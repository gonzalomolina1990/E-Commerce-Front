import React, { useEffect, useState } from "react";
import "../App.css";
import Navigation from "./Navigation";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { listOrders } from "../redux/actions/orders";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

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
        url: "http://localhost:8000/api/v1/orders",
      });
      dispatch(listOrders(response.data));
    };
    getOrders();
  }, []);

  const handleOrderStateChange = async (id, e) => {
    setOrderState(e);
    const response = await axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/api/v1/order/${id}`,
      data: { orderState: orderState },
    });
    console.log(response.data);
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
                handleOrderStateChange(order, e.target.value);
              }}
            >
              <option value={11}>No pago</option>;
              <option value={21}>Pago</option>;
              <option value={31}>Enviado</option>;
              <option value={41}>Entregado</option>;
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} to="#">
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

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
                        {order.orderState}{" "}
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
    </>
  );
};

export default AdminOrdersView;
