/**
 * 方法说明：快速排序
 * @param {Array} array 待排序数组
 * @return {Array}
 */
function quickSort(arr,low,high) {
    var i=low+1;
    var j=high-1;
    var temp;
    if(low<high-1) {
        while (i <= j) {
            for (; i < high && arr[i] < arr[low]; i++);
            for (; j > low && arr[j] >= arr[low]; j--);
            if (i<j) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if(j>low){
        temp=arr[j];
        arr[j]=arr[low];
        arr[low]=temp;
    }
    if(j>low){
        quickSort(arr,low,j);
    }
    if(low<high-1){
        quickSort(arr,j+1,high);
    }
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr,0,arr.length));
