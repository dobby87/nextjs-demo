import React from "react";

import styles from "./demo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Demo = () => {
  return <div className={cx("container")}>demo component</div>;
};

export default Demo;
