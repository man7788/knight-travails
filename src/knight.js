import { findUp, findDown, findRight, findLeft } from './find-moves';

const Knight = (v, h, up, down, left, right) => {
  const coord = [v, h];
  up = findUp(v, h);
  down = findDown(v, h);
  left = findLeft(v, h);
  right = findRight(v, h);

  return { coord, up, down, left, right };
};

export { Knight };
