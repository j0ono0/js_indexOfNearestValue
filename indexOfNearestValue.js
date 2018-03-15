function indexOfNearestValue(val, list){
    // Note: list must be already sorted
    var val = val,
        list = list,
        max = list.length,
        min = 0,
        bisect = min + Math.floor((max - min) / 2);
    
    while(max - min > 2){
        // Return if exact match
        if (val === list[bisect]){
            return bisect;
        }
        // Bisect while there are more than 2 entries
        if(val < list[bisect]){
            max = bisect;
        }else{
            min = bisect;
        }
        bisect = min + Math.floor((max - min) / 2);
    }
    // Compare remaining values
    return (Math.abs(val-list[min]) < Math.abs(val-list[min+1])) ? min : min+1;
}