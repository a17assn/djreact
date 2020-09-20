import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Layout, Breadcrumb } from "antd";

import { connect } from "react-redux";

import { checkAuthenticated, load_user } from "../actions/auth";

import "./Layout.css";

const { Content, Footer } = Layout;

const CustomLayout = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await props.checkAuthenticated();
        await props.load_user();
      } catch (err) {}
    };

    fetchData();
  }, [props]);

  return (
    <Layout className="layout">
      <Navbar />

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Design ©2018 Created by alhassn
      </Footer>
    </Layout>
  );
};

export default connect(null, { checkAuthenticated, load_user })(CustomLayout);
