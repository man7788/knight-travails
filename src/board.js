const Square = (x, y, up, right) => {
  const coord = [x, y];
  return { coord, up, right };
};

const Board = (x, y) => {
  if (x === undefined && y === undefined) {
    x = 0;
    y = 0;
  }

  if (x > 7 || y > 7) {
    return null;
  }

  let board = {};

  board = Square(x, y, Board(x + 1, y), Board(x, y + 1));

  return board;
};

export { Board };
