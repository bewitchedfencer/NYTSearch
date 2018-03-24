import React from "react";

const Panel = props => (
    <div className="panel panel-default">
         <div className="panel-heading">
            <h3 className="panel-title">{props.panelHeading}</h3>
        </div>
    <div className="panel-body"{...props}>
    </div>
  </div>
);

export default Panel;