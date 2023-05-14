

// const dummyArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

const dummyArray = [120, 110, 100, 90, 80, 70,  60,  50, 40, 30, 20, 10];


const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid ;


    while ( start <= end ) {
        console.log('Entered in loop') ;
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return console.log('Data found at ', + mid);
        } else if (arr[mid] < target) {
            end = mid - 1;
        } else if (arr[mid] > target) {
            start = mid + 1;
        }
    }
    return console.log('Data Not Found !') ;
}

binarySearch(dummyArray, 110) ;

// dummyArray.sort((a,b) => b - a) ;

// console.log(dummyArray) ; 