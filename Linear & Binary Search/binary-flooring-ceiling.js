

const dummynums = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 57;

const binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    if (target > nums[nums.length - 1] || target < nums[start]) {
        return console.log('Data not found in array');
    } else {
        while (start <= end) {
            mid = Math.floor((start + end) / 2);

            if (nums[mid] === target) {
                return 'Data Found at ', mid;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else if (nums[mid] > target) {
                end = mid - 1
            }
        }

        console.log('Ceiling ', nums[mid]);
        console.log('Flooring ', nums[mid - 1]);
    }
    return;
}

binarySearch(dummynums, 27);