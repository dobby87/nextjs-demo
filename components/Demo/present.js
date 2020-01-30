import React from "react";
import { useSelector } from "react-redux";

import styles from "./demo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Demo = () => {
  const { str, obj, arr } = useSelector(state => state.demo);
  return (
    <div className={cx("container")}>
      <div>title: {obj.title}</div>
      <div>str: {str}</div>

      <div>
        arr:
        {arr.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div>
        <button>asd</button>
      </div>
    </div>
  );
};

export default Demo;
