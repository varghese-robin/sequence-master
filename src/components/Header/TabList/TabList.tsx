/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Tab from "./Tab/Tab";

import classes from "./TabList.module.css";

const tabs = [
	{ name: "Sequences", highlight: false, url: "sequences" },
	{ name: "New Sequence", highlight: true, url: "new-sequence" },
];

const activeClass = {
	textDecoration: "underline",
};

const inactiveClass = {
	textDecoration: "none",
};

const TabList = () => {
	return (
		<div className={classes.tabList}>
			<ul className={classes.tabList__list}>
				{tabs.map((tab) => (
					<li className={classes.tabList__item}>
						<NavLink
							to={tab.url}
							style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
						>
							<Tab tabName={tab.name} />
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TabList;
