function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isInsideBoard([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // [direction, path]
  const queue = [[start, [start]]];
  const visited = new Set([start.toString()]);

  while (queue.length) {
    const [current, path] = queue.shift();
    const [x, y] = current;

    if (x == end[0] && y == end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((element) => {
        console.log(element);
      });
      return path;
    }

    for (let [dx, dy] of moves) {
      const next = [x + dx, y + dy];
      const key = next.toString();

      if (isInsideBoard(next) && !visited.has(key)) {
        visited.add(key);
        queue.push([next, [...path, next]]);
      }
    }
  }

  return [];
}

// Example
knightMoves([0, 0], [3, 3]);
