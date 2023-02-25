/* eslint-disable prefer-destructuring */
import { Knight } from './knight';

const Node = (data, left, right) => ({ data, left, right });

const moveList = (node) => {
  const rawlist = [];
  const list = [];
  rawlist.push(
    node.upL,
    node.upR,
    node.downL,
    node.downR,
    node.leftL,
    node.leftR,
    node.rightL,
    node.rightR
  );
  rawlist.forEach((num) => {
    if (num !== null) {
      list.push(num);
    }
  });
  return list;
};

const BstTree = (array) => {
  const sorted = array.sort();
  const start = 0;
  const end = sorted.length - 1;
  const mid = Math.floor((start + end) / 2);

  const left = [];
  const right = [];

  if (start > end) {
    return null;
  }

  sorted.forEach((num) => {
    if (num < sorted[mid]) {
      left.push(num);
    } else if (num > sorted[mid]) {
      right.push(num);
    }
  });

  const root = Node(sorted[mid], BstTree(left), BstTree(right));
  return root;
};

const makeTree = (coord) => {
  const knight = Knight(coord);
  const moves = moveList(knight);
  return BstTree(moves);
};
export { makeTree };
