import React from "react";

const NotificationModal = ({ title, onReplay, onFinish }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h2>{title}</h2>
                <div className="modal-buttons">
                    <button className="modal-btn replay" onClick={onReplay}>
                        🔄 Replay
                    </button>
                    <button className="modal-btn finish" onClick={onFinish}>
                        ✔ Finish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotificationModal;