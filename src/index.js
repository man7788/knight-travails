import './style.css';
import { Knight } from './knight';
import { makeTree } from './move-tree';

const knightMoves = (start, end) => {
  // Make two tree
  const startTree = makeTree(start);
  const endTree = makeTree(end);
  // Find node closeset to end node (difference in coord value)
  // Find way to end node moves as target
  console.log(startTree, endTree);
};

// Outer cross = 2 steps: 1 knight, 1 end
// Adjacent = 3 steps: 1 normal, 1 knight, 1 end
// Diagonal = 2 steps: 1 knight, 1 end

knightMoves([2, 4], [6, 7]);
// console.log(Knight([6, 7]));

// const on9 = makeTree([0, 0]);
// console.log(on9);
