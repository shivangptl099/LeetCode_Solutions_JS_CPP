var thirdMax = function(nums) {
    var max,secondMax,thirdMax;
    nums = nums.sort();
    if(nums.length >= 3){
        max = nums[nums.length-1];
        nums = nums.filter(x=> x!==max);
        secondMax = nums[nums.length-1];
        nums = nums.filter(x=> x!==secondMax);
        thirdMax = nums[nums.length - 1];
    }
    else{
        thirdMax = Math.max(...nums);
    }
    return thirdMax;
};