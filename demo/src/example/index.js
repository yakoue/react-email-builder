import React, { useRef } from "react";
import styled from "styled-components";

import EmailEditor from "../../../src";
import sample from "./sample.js";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./yakoue.png";
const Editor = styled.div`
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
  const emailEditorRef = useRef(null);

  const saveTemplate = () => {
    emailEditorRef.current.instance.save((template) => {
      const { json, html } = template;
      console.log("saveTemplate", json);
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const exportHtml = () => {
    emailEditorRef.current.instance.export((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      alert("Output HTML has been logged in your developer console.");
    });
  };

  const onTemplateLoad = (data) => {
    console.log("onLoad", data);
  };

  const onLoad = (param) => {
    param.addEvent("onLoad", onTemplateLoad);
    param.setTemplate(sample);
  };

  return (
    <Container style={{ paddingLeft: 20, paddingRight: 20 }}>
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
          <Editor>
            <React.StrictMode>
              <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
            </React.StrictMode>
          </Editor>
        </Col>
      </Row>
    </Container>
    /*
    <Container>
      <Bar>
        <h1>React Email Editor (Demo)</h1>

        <button onClick={saveDesign}>Save Design</button>
        <button onClick={exportHtml}>Export HTML</button>
      </Bar>
      <Editor>
        <React.StrictMode>
          <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
        </React.StrictMode>
      </Editor>
    </Container> */
  );
};

export default Example;
