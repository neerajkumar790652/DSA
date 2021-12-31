// order of n^2 represent the time complexity of alog whose performance is proportional to the square
// of the size of input
let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
function fn(array){
for(let i =0;i<=array.length-1;i++){
    for(let j=0;j<=array[i].length-1;j++){
         console.log(array[i][j]);
    }
}
}
fn(array);