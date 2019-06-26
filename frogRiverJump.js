//The goal is to find the earliest time when the frog can jump to the other side of the river
// from can jump on the leaves only
// input : array contains positiong of the leaves falling from the tree

// Solution 1

// Time complexity :  O(N) or O(N * log(N))

function solution(X, A) {
  
    var leaves = {};
    var count = 0;
    
    var len = A.length;
    
    if(len == 0)
        return -1;
    if(len == 1){
        if(A[0] == 1)
            return 1;
        else
            return -1
    }    
    
    for(var i= 0 ; i <  len; i++){
        if(A[i] in leaves)
            continue;
        else{
            leaves[A[i]] = true;
            count++;
        }    
        if(count == X)
            return i;
            
    
    
    return -1;
}


// Solution 2:
// Using linked list
