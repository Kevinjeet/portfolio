import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {

  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);


  useEffect(() => {


    const sweepRows = newStage => {
      let rowsDeleted = 0

      const stg = newStage.reduce((ack, row) => {
        console.log("newStage:", newStage)
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          // Ros is full
          rowsDeleted++;

          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

      setRowsCleared(rowsDeleted);
      return stg;
    }

    const updateStage = prevStage => {
      // First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

            // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      // Then check if we got some score if collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };


    setStage(prev => updateStage(prev))
    setRowsCleared(0);
      }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared]

    };
