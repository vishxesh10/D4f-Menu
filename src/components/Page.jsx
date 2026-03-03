import React, { forwardRef } from "react";
import "./Page.css";

const Page = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-border">{props.children}</div>
        <div className="page-footer">
          {props.number && <span className="page-number">{props.number}</span>}
        </div>
      </div>
    </div>
  );
});

export default Page;
