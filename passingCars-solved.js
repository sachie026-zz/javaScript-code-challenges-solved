// Count the number of passing cars on the road.
// input : Array A contains only 0s and/or 1s:

// 0 represents a car traveling east,
// 1 represents a car traveling west.


function solution(A) {
	
    var passCount = 0;
    var len = A.length;
    
    if(len == 0 || len == 1)
        return 0;

    var headCount = 0;
    var first = 0;
    var startDir = 0;

    for(var i = 0 ; i < len ; i++ ){
        if(A[i] == 0)
        
            if(!first){
                first++;
                headCount++;
                continue;
            
        
        else{
            if(!first)
                continue;
            
        
        
        if(startDir == A[i]){
            headCount++;
            continue;
        
        else{
            passCount += (headCount);   
        

    
    return passCount;
}
