import React from "react";

function Button({title}) {
    return (
        <button
            type="button"
            onClick={() => console.log(title)}
        >
            {title}
        </button>
    )
};

export default Button;