import { makeTree } from './move-tree';

const preorder = (node, end, child = [], match = []) => {
  if (node === null) {
    return;
  }

  if (node.data[0] === end[0] && node.data[1] === end[1]) {
    match.push(node.data);
  }

  if (node.data[0] !== end[0] || node.data[1] !== end[1]) {
    child.push(node.data);
  }

  preorder(node.left, end, child, match);
  preorder(node.right, end, child, match);

  if (match.length > 0) {
    return match;
  }

  return child;
};

// When match found, recusively use knightMoves to find all steps
const knightMoves = (
  start,
  end,
  path = [],
  memory = {},
  temp = [],
  currentLvl = 0,
  currentData = 0
) => {
  // New level of steps finish searching, no matching found
  // Continue to next level
  if (start === undefined) {
    currentLvl += 1;
    currentData = 0;
    const searchLvl = `level${currentLvl}`;
    memory[searchLvl] = temp;
    temp = [];
    return knightMoves(
      memory[searchLvl][currentData],
      end,
      path,
      memory,
      temp,
      currentLvl,
      currentData
    );
  }

  const startTree = makeTree(start);
  const startMoves = preorder(startTree, end);

  // End of search if returned match has start as a move
  if (startMoves[0][0] === end[0] && startMoves[0][1] === end[1]) {
    const matchTree = makeTree(startMoves[0]);
    const matchMoves = preorder(matchTree, path[0]);

    if (matchMoves.length === 1) {
      return path;
    }
  }

  // Found match, continue to search for match's parent step
  if (startMoves[0][0] === end[0] && startMoves[0][1] === end[1]) {
    path.splice(1, 0, start);

    temp = [];
    currentLvl = 0;
    currentData = 0;

    return knightMoves(
      path[0],
      path[1],
      path,
      memory,
      temp,
      currentLvl,
      currentData
    );
  }

  // Record next level of temporary search memory
  if (Object.keys(memory).length > 0) {
    startMoves.forEach((coord) => {
      temp.push(coord);
    });
  }

  // Record first level of search memory, only works for first invoke
  if (Object.keys(memory).length === 0) {
    path.push(start, end);
    memory.level0 = startMoves;
  }

  // Go to next step in memory
  const searchLvl = `level${currentLvl}`;

  return knightMoves(
    memory[searchLvl][currentData],
    end,
    path,
    memory,
    temp,
    currentLvl,
    currentData + 1
  );
};

export { knightMoves };
