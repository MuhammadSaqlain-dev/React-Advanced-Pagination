import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const SingleDataCard = ({ title, body }) => {
  const [show, setShow] = useState(false);

  const checkClass = () => {};

  return (
    <div className={show ? "card card-design-true" : "card-design-false card"}>
      <div className="collapse-icons" onClick={() => setShow(!show)}>
        <h6>{title}</h6>
        {show ? <FaAngleUp color="grey" /> : <FaAngleDown color="black" />}
      </div>
      {show && <p>{body}</p>}
    </div>
  );
};

export default SingleDataCard;
