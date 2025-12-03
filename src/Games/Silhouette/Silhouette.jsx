import React, { useState } from "react";
import "./Silhouette.css";

import { shapes } from "./components/ShapeData";
import Piece from "./components/Piece";
import Slot from "./components/Slot";
import NotificationModal from "./components/NotificationModal.jsx";

// Shuffle helper
const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ------------------------------------
// LOCAL MODAL COMPONENT (INSIDE FILE)
// ------------------------------------

// ------------------------------------

const Silhouette = () => {
    const emptyPlaced = shapes.reduce((a, s) => ({ ...a, [s.id]: false }), {});
    const [placed, setPlaced] = useState(emptyPlaced);
    const [pieces, setPieces] = useState(() => shuffle(shapes));

    const [showModal, setShowModal] = useState(false);
    const [finishScreen, setFinishScreen] = useState(false);

    // Restart entire game
    const replayGame = () => {
        setPlaced(emptyPlaced);
        setPieces(shuffle(shapes));
        setShowModal(false);
        setFinishScreen(false);
    };

    // After "Finish"
    const finishGame = () => {
        setShowModal(false);
        setFinishScreen(true);
    };

    // Drag + drop logic
    const handleDrop = (e, target) => {
        const dragged = e.dataTransfer.getData("shape");

        if (dragged === target) {
            setPlaced((prev) => {
                const updated = { ...prev, [target]: true };

                // Win
                if (Object.values(updated).every((v) => v)) {
                    setShowModal(true);
                }

                return updated;
            });
        }
    };

    return (
        <div>
            {!finishScreen && (
        <h1 className="silhouette-title">Play the Silhouette Game</h1>)}
        <div className="game-wrapper">

            {/* FINISH SCREEN */}
            {finishScreen && (
                <div className="finish-screen">
                    <h1>🎉 You finished the game! 🎉</h1>
                    <button onClick={replayGame} className="restart-btn">
                        🔁 Restart Game
                    </button>
                </div>
            )}

            {/* WIN MODAL */}
            {showModal && (
                <NotificationModal
                    title="🎉 YOU WIN! 🎉"
                    onReplay={replayGame}
                    onFinish={finishGame}
                />
            )}

            {/* GAME BOARD */}
            {!finishScreen && (
                <div className="vertical-container">
                    {/* LEFT column — silhouettes */}
                    <div className="column">
                        {shapes.map((shape) => (
                            <Slot
                                key={shape.id}
                                shape={shape}
                                filled={placed[shape.id]}
                                onDropShape={handleDrop}
                            />
                        ))}
                    </div>

                    {/* RIGHT column — draggable pieces */}
                    <div className="column">
                        {pieces.map(
                            (shape) =>
                                !placed[shape.id] && <Piece key={shape.id} shape={shape} />
                        )}
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default Silhouette;

