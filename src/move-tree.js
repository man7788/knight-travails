/* eslint-disable prefer-destructuring */
import { Knight } from './knight';

const findMoves = (x, y) => {
  const moves = Knight(
    x,
    y,
    Knight(x, y),
    Knight(x, y),
    Knight(x, y),
    Knight(x, y)
  );

  return moves;
};

const allSquares = () => {
  const list = [];

  const FirstPass = (a, b) => {
    if (a === undefined && b === undefined) {
      a = 0;
      b = 0;
    }

    if (a > 7) {
      return;
    }

    if (a === b) {
      list.push([a, b]);
      return FirstPass(a + 1, b, list);
    }

    if (a > b) {
      list.push([a, b]);
      return FirstPass(a, b + 1, list);
    }
  };

  const secondPass = (c, d) => {
    if (c === undefined && d === undefined) {
      c = 0;
      d = 0;
    }

    if (d > 7) {
      return;
    }

    if (c === d) {
      return secondPass(c, d + 1, list);
    }

    if (c < d) {
      list.push([c, d]);

      return secondPass(c + 1, d, list);
    }
  };

  FirstPass();
  secondPass();
  return list;
};

const allMoves = () => {
  const coords = allSquares();
  const totalMoves = {};

  for (let i = 0; i < coords.length; i++) {
    const vT = coords[i][0];
    const hZ = coords[i][1];
    const objKey = [vT, hZ];
    const moves = findMoves(vT, hZ);
    totalMoves[objKey] = moves;
  }

  return totalMoves;
};

const MovesTree = (
  upLeft,
  upRight,
  downLeft,
  downRight,
  leftLeft,
  leftRight,
  rightLeft,
  rightRight
) => ({
  upLeft,
  upRight,
  downLeft,
  downRight,
  leftLeft,
  leftRight,
  rightLeft,
  rightRight,
});

const makeTree = (num) => {
  console.log(num);
  let num1;
  let num2;

  if (num !== null) {
    num1 = num[0];
    num2 = num[1];
  } else {
    return null;
  }

  const coord = `${num1},${num2}`;
  const moves = allMoves();
  const directions = moves[coord];

  const split = (node) => {
    const { turnLeft } = node;
    const { turnRight } = node;
    return { turnLeft, turnRight };
  };

  const up = [];
  const down = [];
  const left = [];
  const right = [];

  if (directions.up !== null) {
    const move = split(directions.up);
    if (move.turnLeft !== null) {
      up.push(move.turnLeft.coord);
    } else {
      up.push(null);
    }
    if (move.turnRight !== null) {
      up.push(move.turnRight.coord);
    } else {
      up.push(null);
    }
  } else {
    up.push(null, null);
  }

  if (directions.down !== null) {
    const move = split(directions.down);
    if (move.turnLeft !== null) {
      down.push(move.turnLeft.coord);
    } else {
      down.push(null);
    }
    if (move.turnRight !== null) {
      down.push(move.turnRight.coord);
    } else {
      down.push(null);
    }
  } else {
    down.push(null, null);
  }

  if (directions.left !== null) {
    const move = split(directions.left);
    if (move.turnLeft !== null) {
      left.push(move.turnLeft.coord);
    } else {
      left.push(null);
    }
    if (move.turnRight !== null) {
      left.push(move.turnRight.coord);
    } else {
      left.push(null);
    }
  } else {
    left.push(null, null);
  }

  if (directions.right !== null) {
    const move = split(directions.right);
    if (move.turnLeft !== null) {
      right.push(move.turnLeft.coord);
    } else {
      right.push(null);
    }
    if (move.turnRight !== null) {
      right.push(move.turnRight.coord);
    } else {
      right.push(null);
    }
  } else {
    left.push(null, null);
  }

  const movesTree = MovesTree(
    makeTree(up[0]),
    makeTree(up[1]),
    makeTree(down[0]),
    makeTree(down[1]),
    makeTree(left[0]),
    makeTree(left[1]),
    makeTree(right[0]),
    makeTree(right[1])
  );

  // console.log(directions, up, down, left, right);
  return movesTree;
};

export { makeTree, allMoves };
