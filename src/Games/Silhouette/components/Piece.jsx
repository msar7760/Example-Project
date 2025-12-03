import React from "react";
import PropTypes from "prop-types";

export const Piece = ({ shape }) => {
    return (
        <div
            className="piece"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("shape", shape.id)}
        >
            {shape.filled}
        </div>
    );
};

Piece.propTypes = {
    shape: PropTypes.shape({
        id: PropTypes.string.isRequired,
        filled: PropTypes.string.isRequired
    }).isRequired,
};

export default Piece;
