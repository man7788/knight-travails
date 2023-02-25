import { findUp, findDown, findRight, findLeft } from './find-moves';

// const Knight = (coord) => {
//   const v = coord[0];
//   const h = coord[1];

//   const up = findUp(v, h);
//   const down = findDown(v, h);
//   const left = findLeft(v, h);
//   const right = findRight(v, h);

//   return { coord, up, down, left, right };
// };

const Knight = (coord) => {
  if (coord === null) {
    return null;
  }

  const v = coord[0];
  const h = coord[1];

  const up = findUp(v, h);
  const down = findDown(v, h);
  const left = findLeft(v, h);
  const right = findRight(v, h);

  let upL = null;
  let upR = null;
  let downL = null;
  let downR = null;
  let leftL = null;
  let leftR = null;
  let rightL = null;
  let rightR = null;

  if (up !== null) {
    if (up.turnLeft !== null) {
      upL = up.turnLeft.coord;
    }

    if (up.turnRight !== null) {
      upR = up.turnRight.coord;
    }
  }

  if (down !== null) {
    if (down.turnLeft !== null) {
      downL = down.turnLeft.coord;
    }

    if (down.turnRight !== null) {
      downR = down.turnRight.coord;
    }
  }

  if (left !== null) {
    if (left.turnLeft !== null) {
      leftL = left.turnLeft.coord;
    }

    if (left.turnRight !== null) {
      leftR = left.turnRight.coord;
    }
  }

  if (right !== null) {
    if (right.turnLeft !== null) {
      rightL = right.turnLeft.coord;
    }

    if (right.turnRight !== null) {
      rightR = right.turnRight.coord;
    }
  }

  return { coord, upL, upR, downL, downR, leftL, leftR, rightL, rightR };
};

export { Knight };
