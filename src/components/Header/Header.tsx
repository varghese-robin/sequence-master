/** @format */

import React from "react";

import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import TabList from "./TabList/TabList";

const Header = () => {
	return (
		<div className={classes.header}>
			<Logo />
			<TabList />
		</div>
	);
};

export default Header;
