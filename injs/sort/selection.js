function selectionSort(arr) {
    var len = arr.length;
    var minIndex, tmp;
    console.time('选择排序耗时');
    for (var i = 0; i < len -1; i++) {
        minIndex = i;
        // 遍历寻找最小元素
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { // 寻找最小的数
                minIndex = j; // 保存最小数的索引
            }
        }
        // 最小元素和"第一个"元素交换
        tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));