// 原文地址： https://juejin.im/post/57dcd394a22b9d00610c5ec8

function bubbleSort(arr) {
    console.time('改进前冒泡排序耗时')
    var len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len -1 -i; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.timeEnd('改进前冒泡排序耗时')
    return arr;
}

/**
 * 设置标志性变量 pos ，用于记录每趟排序中最后一次进行交换的位置。
 * 由于 pos 位置之后的记录均已经交换到位，故在进行下一趟排序时只要扫描到 pos 位置即可。
 * 
 */

function bubbleSort2(arr) {
    console.time('改进后的冒泡排序耗时');
    var i = arr.length - 1;
    while (i > 0) {
        var pos = 0; // 每趟开始时，无记录交换
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                pos = j; // 记录交换位置
                var tmp = arr[j+1];
                arr[j+1] = arr[J];
                arr[j] = tmp;
            }
            i = pos; // 为下一趟排序做准备
        }
        console.timeEnd('改进后的冒泡排序耗时');
        return arr;
    }
}

/**
 * 传统冒泡排序中每一趟排序只能只能找到一个最大值或最小值，
 * 我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次
 * 可以得到两个最终值（最大者和最小者），从而使排序趟数几乎
 * 减少了一半。
 */

/* function bubbleSort3(arr) {
    var low = 0;
    var high = arr.length - 1; // 设置变量的初始值
    var tmp,j;
    console.time('3.改进后冒泡排序耗时');
    while(low < high) {
        for (j = low; j < high; ++j) { // 正向排序，找到最大者
            if (arr[j] > arr[j+1]) {
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
            --high;
            for (j = high; j > low; --j) {

            }
        }
    }
} */


var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));
console.log(bubbleSort2(arr));
