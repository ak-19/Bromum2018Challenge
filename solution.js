function solution(N, Q, B, C) {
    const length = B.length;
    const occurenceMap = [];
    for (let k = 0; k < length; k++) {
        const bucketIndex = B[k];
        const color = C[k];

        if (!occurenceMap[bucketIndex]) {
            occurenceMap[bucketIndex] = {[color]: 1}
        }else{
            const currValue = occurenceMap[bucketIndex][color];
            occurenceMap[bucketIndex][color] = (currValue || 0) + 1 ;
        }

        if(occurenceMap[bucketIndex][color] === Q){
            return k;
        }
    }
    return -1;
}

module.exports = solution;
