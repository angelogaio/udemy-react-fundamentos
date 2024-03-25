import React from "react";

export default (props) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => props.clicar("João", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};
