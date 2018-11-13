function insertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}

/**
 * 查找插入位置时使用二分查找方式
 */

function binaryInsertionSort(arr) {
    console.time('二分插入排序耗时：');
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i], left = 0, right = i -1;
        while(left <= right) {
            var middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                // 向左移动
                right = middle -1;
            } else {
                // 向右移动
                left = middle + 1;
            }
        }

        for (var j = i -1; j >= left; j--) {
            arr[j+1] = arr[j];
        }
        arr[left]  = key;
    }
    console.timeEnd('二分插入排序耗时：')
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(insertionSort(arr));
console.log(binaryInsertionSort(arr));