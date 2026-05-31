/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    // let res="";
    let count=0;
  for(i=0;i<grid.length;i++)  {
    for(j=0;j<grid[i].length;j++){
        if(grid[i][j]<0){
       count++;
        }
    }
  }
  return count;
};
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNegatives([[3,2],[1,0]]))