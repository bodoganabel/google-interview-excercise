const arr = [1, 6, 3, 87, 89, 3, 5, 7, 43, 8, 3]; //sorted: [1, 3, 3, 3, 5, 6, 7, 8, 43, 87, 89]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        console.log(arr);
    }
    return arr;
}

//console.log(bubbleSort(arr));


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
        console.log(arr);
    }
    return arr;
}

//console.log(selectionSort(arr));

// [1, 6, 3, 87, 89, 3, 5, 7, 43, 8, 3]

function insertionSort(arr) {
    console.log(arr);
    if (arr.length < 1) return arr;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i];
            let j = i;
            while (j > 0 && arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = temp;

        }
        //console.log(arr);
    }
    return arr;

}


console.log(insertionSort(arr));
