import React, { useRef } from "react";
import styled from "styled-components";

import EmailBuilder from "../../../src";
import sample from "./sample.js";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./yakoue.png";
const Builder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 800px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  box-shadow: 0px -10px 38px 4px rgb(40 58 72 / 23%),
    0 2px 2px hsl(0deg 0% 100% / 14%), 0 3px 1px -2px hsl(0deg 0% 100% / 12%);
`;

const Example = (props) => {
  const saveTemplate = () => {
    this.instance.save((template) => {
      const { json, html } = template;
      console.log("saveTemplate", json);
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const exportHtml = () => {
    this.instance.export((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      alert("Output HTML has been logged in your developer console.");
    });
  };

  const onTemplateLoad = (data) => {
    console.log("onLoad", data);
  };

  const onLoad = (instance) => {
    this.instance = instance;
    this.instance.addEvent("onLoad", onTemplateLoad);
    this.instance.setTemplate(sample);
  };

  return (
    <Container style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 5 }}>
      <Row>
        <Col xs={8}>
          {" "}
          <img src={logo} alt="Logo" width="100" height="20" /> (Demo with react
          component)
        </Col>
        <Col>
          <Button variant="outline-success" onClick={saveTemplate}>
            Save MJML JSON
          </Button>{" "}
          <Button variant="outline-dark" onClick={exportHtml}>
            Export HTML
          </Button>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <Builder>
            <React.StrictMode>
              <EmailBuilder onLoad={onLoad} />
            </React.StrictMode>
          </Builder>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
