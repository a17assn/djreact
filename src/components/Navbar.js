import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const navbar = ({ isAuthenticated, logout }) => {
	const authLinks = (
		<li className="nav-item">
			<a className="nav-link" onClick={logout} href="#!">
				Logout
			</a>
		</li>
	);

	const guestLinks = (
		<Fragment>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/login">
					Login
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/signup">
					Sign Up
				</NavLink>
			</li>
		</Fragment>
	);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Auth System
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" exact to="/">
							Home
						</NavLink>
					</li>
					{<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(navbar);

/* <Header>
	<div className="logo" />
	<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
		<Menu.Item key="1">nav 1</Menu.Item>
		<Menu.Item key="2">nav 2</Menu.Item>
		<Menu.Item key="3">nav 3</Menu.Item>
	</Menu>
</Header> */
