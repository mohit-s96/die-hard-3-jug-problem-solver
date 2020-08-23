let curr_x = 0;
let curr_y = 0;
let max_x = 0;
let max_y = 0;
let count = 0;

function gcd(x, y){
    if( x % y !== 0){
        let temp = x;
        x = y;
        y = temp % y;
        return gcd(x, y);
    }
    else{
        return y;
    }
}

function largerToSmaller(x, y, r){
   curr_x = 0;
   curr_y = 0;
   while(curr_x !== r){
    if(curr_x === 0){
        curr_x = x;
        // console.log(curr_x, curr_y);
        ++count;
        createUI(curr_x, curr_y, x, y, count);
    }
    if(curr_y === 0){
        if( curr_x >= y){
            curr_x = curr_x - y;
            curr_y = y;
            // console.log(curr_x, curr_y);
            ++count;
            createUI(curr_x, curr_y, x, y, count);
        }
        else{
            curr_y = curr_x;
            curr_x = 0;
            // console.log(curr_x, curr_y);
            ++count;
            createUI(curr_x, curr_y, x, y, count);
        }
    }
    if(curr_x > curr_y){
       if(curr_y === y){
           curr_y = 0;
        //    console.log(curr_x, curr_y);
           ++count;
           createUI(curr_x, curr_y, x, y, count);
       }
       else{
            curr_x = curr_x - (y - curr_y);
            curr_y = y;
            // console.log(curr_x, curr_y);
            ++count;
            createUI(curr_x, curr_y, x, y, count);
       }
    }
    if(curr_y > curr_x){
        if( curr_y === y){
            curr_y = 0;
            // console.log(curr_x, curr_y);
            ++count;
            createUI(curr_x, curr_y, x, y, count);
        }
    } 
   }
}
// bucketSolver(5, 3, 4);
// console.log('Number of Iterations :',count);

//----------------------------------------------------------------

function smallerToLarger(x, y, r){
    curr_x = 0;
    curr_y = 0;
    while((curr_x !== r) && (curr_y !== r)){
        if(curr_y === 0){
            curr_y = y;
            // console.log(curr_x, curr_y);
            ++count;
            createUI(curr_x, curr_y, x, y, count);
        }
        if(curr_x === 0){
            curr_x = curr_y;
            curr_y = 0;
            // console.log(curr_x, curr_y);
            ++count;
            createUI(curr_x, curr_y, x, y, count);
        }
        if((curr_x >= curr_y) && (curr_y !== 0)){
            if(curr_x === x){
                curr_x = 0;
                // console.log(curr_x, curr_y);
                ++count;
                createUI(curr_x, curr_y, x, y, count);
            }
            else{
                if(x - curr_x > curr_y){
                    curr_x = curr_x + curr_y;
                    curr_y = 0;
                    // console.log(curr_x, curr_y);
                    ++count;
                    createUI(curr_x, curr_y, x, y, count);
                }
                else{
                    curr_y = curr_y - (x - curr_x);
                    curr_x = x;
                    // console.log(curr_x, curr_y);
                    ++count;
                    createUI(curr_x, curr_y, x, y, count);
                }
            }
        }
        if((curr_y >= curr_x) && (curr_x !== 0)){
            if((curr_y + curr_x) <= x){
                curr_x = curr_x + curr_y;
                curr_y = 0;
                // console.log(curr_x, curr_y);
                ++count;
                createUI(curr_x, curr_y, x, y, count);
            }
            else{
                curr_y = curr_y - (x - curr_x);
                curr_x = x;
                // console.log(curr_x, curr_y);
                ++count;
                createUI(curr_x, curr_y, x, y, count);
            }

        }
    }
}
// solve(11, 7, 6);
// console.log('Number of Iterations :',count);