var triangle1 = [ [1], [4,3], [8,2,6], [2,3,9,7] ];

var triangle2 = [ [3], [6,4], [3,4,7], [3,8,3,6] ];

var triangle3 = [ [2], [9,6], [4,5,8], [1,2,3,6] ];

var triangle5 = [[2], [3,4], [6,5,7], [4,1,2,3], [4,2,8,1,2],[5,4,8,7,3,2]];


function split (obj, tree, row, col, parent, topObj) {
  obj.value = tree[row][col];
  obj.path = [obj.value];
  obj.total = obj.value;
  
  if (parent) {
    obj.total+= parent.total;
    obj.path = obj.path.concat(parent.path);
  }
  
  if (!topObj) {
    topObj = obj;
  }
  
  if (tree[row+1]) {
    obj.sub = [{}, {}];
    split(obj.sub[0], tree, row+1, col, obj, topObj);
    
    if (tree[row+1][col+1]) {
      split(obj.sub[1], tree, row+1, col+1, obj, topObj);
    }
  } else {
    if (topObj.winner) {
      if (topObj.winner.total > obj.total) {
        topObj.winner = obj;
      }
    } else {
      topObj.winner = obj;
    }
  }
}

var result1 = {};
split(result1, triangle1, 0, 0);

var result2 = {};
split(result2, triangle2, 0, 0);

var result3 = {};
split(result3, triangle3, 0, 0);

var result5 = {};
split(result5, triangle5, 0, 0);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result5);
