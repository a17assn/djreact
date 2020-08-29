import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import "./Layout.css";

import { checkAuthenticated, load_user } from "../actions/auth";

import { Layout, Breadcrumb } from "antd";

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
				</Breadcrumb>
				<div className="site-layout-content">{props.children}</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>Design By Alhassn</Footer>
		</Layout>
	);
};

export default connect(null, { checkAuthenticated, load_user })(CustomLayout);

// <Layout className="layout">
// <Header>
//     <div className="logo" />
//     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
//         <Menu.Item key="1">nav 1</Menu.Item>
//         <Menu.Item key="2">nav 2</Menu.Item>
//         <Menu.Item key="3">nav 3</Menu.Item>
//     </Menu>
// </Header>
// <Content style={{ padding: "0 50px" }}>
//     <Breadcrumb style={{ margin: "16px 0" }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//     </Breadcrumb>
//     <div className="site-layout-content">{props.children}</div>
// </Content>
// <Footer style={{ textAlign: "center" }}>Design By Alhassn</Footer>
// </Layout>
