/** @format */

import React from "react";

import classes from "./Tab.module.css";

interface TabProp {
	tabName: string;
}

const Tab = ({ tabName }: TabProp) => {
	return (
		<div className={classes.tab}>
			<p>{tabName}</p>
		</div>
	);
};

export default Tab;
