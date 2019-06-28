// In this problem, there is a given maze of size N x N. The source and the destination location is top-left cell and bottom right cell respectively. Some cells are valid to move and some cells are blocked. If one rat starts moving from start vertex to destination vertex, we have to find that is there any way to complete the path, if it is possible then mark the correct path for the rat.

// The maze is given using a binary matrix, where it is marked with 1, it is a valid path, otherwise 0 for a blocked cell.

// NOTE: The rat can only move in two directions, either to the right or to the down.

var arr = [[1, 1, 0, 0], [1, 1, 0, 1], [1, 1, 1, 0], [0, 1, 1, 1]];

var count = 0;

function canMoveLeft(x, y, n) {
  if (y <= 0) return false;
  return true;
}

function canMoveRight(x, y, n) {
  if (y >= n - 1) return false;
  return true;
}

function canMoveUp(x, y, n) {
  if (x <= 0) return false;
  return true;
}
function canMoveDown(x, y, n) {
  if (x >= n - 1) return false;
  return true;
}

function mazePath(arr, x, y, n) {
  var ret1 = 0;
  var ret2 = 0;

  if (arr[x][y] >= 1) {
    console.log(x, y);
    if (x == n - 1 && y == n - 1) {
      count++;
      return true;
    }

    if (canMoveDown(x, y, n)) {
      ret1 = mazePath(arr, x + 1, y, n);
    }
    if (canMoveRight(x, y, n)) {
      ret2 = mazePath(arr, x, y + 1, n);
    }
  }
  return false;
}

mazePath(arr, 0, 0, 4);
//console.log("rat reached to the end pos :", count > 0, "total paths : ", count);
