/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here

  // must be a valid Direction, see Direction.js
var newMatrix = [];
if (direction === Direction.CW){
for (var i =0; i< this.matrix.length; i++){
  newMatrix.push([]);
  for (var j = this.matrix.length -1; j >=0; j--){
    newMatrix[i].push(this.matrix[j][i]);
  }
  }
}else {
  for (var k =0; k< this.matrix.length; k++){
    var newRow = [];
    for (var l = this.matrix.length -1; l >=0; l--){
      newRow.push(this.matrix[k][l]);
    }
    newMatrix.unshift(newRow);
  }
}
console.log(newMatrix);
this.matrix = newMatrix;
};

