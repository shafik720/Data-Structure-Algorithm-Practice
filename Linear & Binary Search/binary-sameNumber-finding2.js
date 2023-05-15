

const dummyArray = [2,2,2,2, 5, 8, 8, 8, 8, 8, 8, 9, 12, 12, 55, 55, 55];

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let found = 0;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            // --- for right side finding
            for (let i = mid+1; arr[i] === target; i++) {
                found++;
            }

            // --- for left side 
            for (let i = mid-1; arr[i] === target; i--) {
                found++;
            }            
            found++;
            return console.log('Total found ', found);
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else if (arr[mid] > target) {
            end = mid - 1;
        }
    }

    return console.log('Total found ', found);
}

binarySearch(dummyArray, 2);