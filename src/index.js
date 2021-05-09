import React, { Component } from "react";
import getEditorNamespace from "./libs/getEditorNamespace.js";
import pkg from "../package.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default class extends Component {
  constructor(props) {
    super(props);

    this.instanceId = `yakoue-instance`;
    this.instanceUrl = "http://localhost/iframe/embed.js"; // "https://editor.yakoue.com/embed.js";
  }

  componentDidMount() {
    getEditorNamespace(this.instanceUrl, (namespace) => {
      // this.$emit("namespaceloaded", namespace);
    }).then(() => {
      if (!window.Yakoue) {
        return;
      }
      this.loadinstance();
    });
  }

  render() {
    let {
      props: { minHeight = 500, style = {} },
    } = this;

    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          minHeight: minHeight,
        }}
      >
        <div id={this.instanceId} style={{ ...style, flex: 1 }} />
      </div>
    );
  }

  loadinstance = () => {
    const options = this.props.options || {};

    this.options = this.options || {};
    this.options.id = this.instanceId;
    if (this.props.config) {
      this.options.config = this.props.config;
    }
    if (this.props.template) {
      this.options.template = this.props.template;
    }
    this.instance = window.Yakoue;

    const { onLoad } = this.props;

    this.instance.create(this.options, function () {
      onLoad && onLoad(window.Yakoue);
    });

    // All properties starting with on[Name] are registered as event listeners.
    for (const [key, value] of Object.entries(this.props)) {
      if (/^on/.test(key) && key != "onLoad") {
        this.addEvent(key, value);
      }
    }
  };
  addEvent = (type, callback) => {
    this.instance.addEvent(type, callback);
  };

  setTemplate = (template) => {
    this.instance.setTemplate(template);
  };

  save = (callback) => {
    this.instance.save(callback);
  };

  exportHtml = (callback) => {
    this.instance.expor(callback);
  };

  setFusionTags = (fusionTags) => {
    this.instance.setFusionTags(fusionTags);
  };
}
