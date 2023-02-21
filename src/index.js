import './style.css';
import { Knight } from './knight';
import { makeTree, allMoves } from './move-tree';

// const sub9 = Knight(0, 0);
// console.log(sub9);

// const diu = makeTree([0, 0]);
// console.log(diu);

// Not all combinations found
const on9 = allMoves();
console.log(on9);
