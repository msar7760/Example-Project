import React from "react";
import PropTypes from "prop-types";

export const Slot = ({ shape, filled, onDropShape }) => {
    return (
        <div
            className={`silhouette-slot ${filled ? "filled" : ""}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDropShape(e, shape.id)}
        >
            {shape.outline}
        </div>
    );
};

Slot.propTypes = {
    shape: PropTypes.shape({
        id: PropTypes.string.isRequired,
        outline: PropTypes.string.isRequired,
        filled: PropTypes.string
    }).isRequired,
    filled: PropTypes.bool.isRequired,
    onDropShape: PropTypes.func.isRequired
};

export default Slot;
