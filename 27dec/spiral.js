let array=[
    [1,2,3,4],
    [12,23,34,56],
    [7,4,2,3],
    [1,42,65,2]
]
function spiral(array){
let top=0;
let left=0;
let bottom=array.length-1;
let right=array[0].length-1;
let direction=0;

while(top<=bottom && left<=right){
    if(direction==0){
        for(let i =left;i<=right;i++){
            console.log(array[top][i])
        }
        top++

    }else if(direction==1){
        for(let i=top;i<=bottom;i++){
            console.log(array[i][right])
        }
        right--

    }
    else if(direction==2){
        for(let i=right;i>=left;i--){
            console.log(array[bottom][i])
        }
        bottom--

    }else if(direction==3){
        for(let i=bottom;i>=top;i--){
            console.log(array[i][left])
        }
        left++

    }
    direction=(direction+1)%4;
}
}
spiral(array);
