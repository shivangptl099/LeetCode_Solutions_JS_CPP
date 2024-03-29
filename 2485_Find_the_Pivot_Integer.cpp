class Solution {
public:
    int pivotInteger(int n) {
        int leftSum = 0;
        int rightSum = (n*(n + 1))/2;
        for(int i = 1; i <= n; i++){
            leftSum += i;
            if(rightSum - leftSum + i == leftSum) return i;
        }
        return -1;
    }
};
