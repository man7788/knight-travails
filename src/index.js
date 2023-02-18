import './style.css';
import { Board } from './board';
import { findUp, findDown, findRight, findLeft } from './find-moves';

const Knight = (v, h, up, down, left, right) => {
  const coord = [v, h];
  up = findUp(v, h);
  down = findDown(v, h);
  left = findLeft(v, h);
  right = findRight(v, h);

  return { coord, up, down, left, right };
};

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
  const KnightMoves = {};

  for (let i = 0; i < coords.length; i++) {
    const vT = coords[i][0];
    const hZ = coords[i][1];
    const objKey = [vT, hZ];
    const moves = findMoves(vT, hZ);
    KnightMoves[objKey] = moves;
  }

  return KnightMoves;
};

const Tree = (up, down, left, right) => [up, down, left, right];

// const makeTree = () => {
//   const moves = allMoves();
//   tree = moves['0,0'];
//   let tree = Tree;
//   return tree;
// };
// const diu = Board();
// console.log(diu);

// const on9 = findMoves(0, 0);
// console.log(on9);

// const head7 = allSquares();
// console.log(head7);

// const sub9 = makeTree();

// console.log(sub9);
