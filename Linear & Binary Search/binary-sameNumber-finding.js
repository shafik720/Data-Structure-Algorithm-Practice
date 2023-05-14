

const dummyArray = [2, 5, 8, 8, 8, 8, 8, 8, 9, 12, 12, 55, 55];

const binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    let found = 0;
    let midRight = 0;
    let midleft = 0;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        midRight = mid + 1;
        midleft = mid - 1;

        if (nums[mid] === target) {
            console.log('Mid Found first time');
            // found += 1 ; 
            while (nums[midRight] === target) {
                if ((nums[midRight] === target)) {
                    console.log('Mid Found Right');
                    found += 1;
                    midRight += 1;
                }
            }
            while (nums[midleft] === target) {
                if (nums[midleft] === target) {
                    console.log('Mid Found Left');
                    found += 1;
                    midleft -= 1;
                }
            }
            found += 1;
            return console.log('Total Mid Found ', found);

        } else if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        }
    }

    return console.log('No mid Found');
}

binarySearch(dummyArray, 9); 