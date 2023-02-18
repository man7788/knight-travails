const findSquare = (square, p, q) => {
  if (square.coord[0] !== p) {
    square = square.up;
    return findSquare(square, p, q);
  }

  if (square.coord[0] === p) {
    if (square.coord[1] !== q) {
      square = square.right;
      return findSquare(square, p, q);
    }
    if (square.coord[1] !== q) {
      return;
    }
  }
  return square;
};

export { findSquare };
