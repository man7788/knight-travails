import { findSquare } from './find-square';
import { Board } from './board';

const board = Board();

const findUp = (v, h) => {
  let moveTo = {};

  if (v + 2 <= 7) {
    const coordX = v + 2;

    if (h + 1 <= 7) {
      const coordY = h + 1;
      moveTo.turnRight = findSquare(board, coordX, coordY);
    } else {
      moveTo.turnRight = null;
    }

    if (h - 1 >= 0) {
      const coordY = h - 1;
      moveTo.turnLeft = findSquare(board, coordX, coordY);
    } else {
      moveTo.turnLeft = null;
    }
  } else {
    moveTo = null;
  }

  return moveTo;
};

const findDown = (v, h) => {
  let moveTo = {};

  if (v - 2 >= 0) {
    const coordX = v - 2;

    if (h + 1 <= 7) {
      const coordY = h + 1;
      moveTo.turnRight = findSquare(board, coordX, coordY);
    } else {
      moveTo.turnRight = null;
    }

    if (h - 1 >= 0) {
      const coordY = h - 1;
      moveTo.turnLeft = findSquare(board, coordX, coordY);
    } else {
      moveTo.turnLeft = null;
    }
  } else {
    moveTo = null;
  }

  return moveTo;
};

const findRight = (v, h) => {
  let moveTo = {};

  if (h + 2 <= 7) {
    const coordY = h + 2;

    if (v + 1 <= 7) {
      const coordX = v + 1;
      moveTo.turnLeft = findSquare(board, coordX, coordY);
    } else {
      moveTo.turnLeft = null;
    }

    if (v - 1 >= 0) {
      const coordX = v - 1;
      moveTo.turnRight = findSquare(board, coordX, coordY);
    } else {
      moveTo.turnRight = null;
    }
  } else {
    moveTo = null;
  }

  return moveTo;
};

const findLeft = (v, h) => {
  let moveTo = {};

  if (h - 2 >= 0) {
    const coordY = h - 2;

    if (v + 1 <= 7) {
      const coordX = v + 1;
      moveTo.turnRight = findSquare(board, coordX, coordY);
    } else {
      moveTo.turnRight = null;
    }

    if (v - 1 >= 0) {
      const coordX = v - 1;
      moveTo.turnLeft = findSquare(board, coordX, coordY);
    } else {
      moveTo.turnLeft = null;
    }
  } else {
    moveTo = null;
  }

  return moveTo;
};

export { findUp, findDown, findRight, findLeft };
