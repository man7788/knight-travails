import './style.css';
import { Knight } from './knight';
import { makeTree } from './move-tree';

const preorder = (node, end, child = [], match = []) => {
  if (node === null) {
    return;
  }

  if (node.data[0] !== end[0] || node.data[1] !== end[1]) {
    child.push(node.data);
  }

  if (node.data[0] === end[0] && node.data[1] === end[1]) {
    match.push(node.data);
  }

  if (match.length > 0) {
    return match;
  }

  preorder(node.left, end, child, match);
  preorder(node.right, end, child, match);

  return child;
};

// When match found, recusively use knightMovs to find all steps
const knightMoves = (
  start,
  end,
  genesis = [],
  memory = {},
  temp = [],
  currentLvl = 0,
  currentData = 0
) => {
  console.log(start);
  // New level of steps finish searching, no matching found
  // Continue to next level
  if (start === undefined) {
    console.log('end');
    currentLvl += 1;
    currentData = 0;
    const searchLvl = `level${currentLvl}`;
    memory[searchLvl] = temp;
    temp = [];
    return knightMoves(
      memory[searchLvl][currentData],
      end,
      genesis,
      memory,
      temp,
      currentLvl,
      currentData
    );
  }

  const startTree = makeTree(start);
  const startMoves = preorder(startTree, end);

  // Found match, continue to search for match's parent step
  if (startMoves[0][0] === end[0] && startMoves[0][1] === end[1]) {
    const firstHalf = [genesis[0]];
    firstHalf.push(start);
    const secondHalf = genesis.slice(1, genesis.length);
    genesis = firstHalf.concat(secondHalf);
    memory = {};
    temp = [];
    currentLvl = 0;
    currentData = 0;
    return genesis;
    // return console.log(genesis[0], genesis[1]);
    // if (genesis[1][0] === end[0] && genesis[1][1] === end[1]) {
    //   return genesis;
    // }
    // return knightMoves(
    //   genesis[0],
    //   genesis[1],
    //   genesis,
    //   memory,
    //   temp,
    //   currentLvl,
    //   currentData
    // );
  }

  // Record next level of temporary search memory
  if (Object.keys(memory).length > 0) {
    console.log('temp');
    startMoves.forEach((coord) => {
      temp.push(coord);
    });
  }

  // Record first level of search memory
  if (Object.keys(memory).length === 0) {
    console.log('length0');
    genesis.push(start, end);
    memory.level0 = startMoves;
  }

  // Go to next step in memory
  const searchLvl = `level${currentLvl}`;

  return knightMoves(
    memory[searchLvl][currentData],
    end,
    genesis,
    memory,
    temp,
    currentLvl,
    currentData + 1
  );
  // return memory[seachLvl][currentData];
  // return temp;
  // return startMoves;
};

const diu = knightMoves([2, 2], [4, 4]);
console.log(diu);
console.log(Knight([5, 2]));
