import Button from "../../components/Button";
import "./style.css";
import React from "react";
import { Form } from "react-bootstrap";

function Contato() {
  return (
    <div className="contato-container">
      <div className="container1">
        <div className="content">
          <h2>TELEFONES</h2>
          <p>+55 (11) 3088-0757</p>
          <h2>E-MAIL</h2>
          <p>renee@reneetrajar.com.br</p>
          <h2>ATENDIMENTO PERSONALIZADO</h2>
          <button class="btn btn-light">Clique aqui</button>
        </div>
        <div className="content1">
          <form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button>Quero um orçamento</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
