export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length - 1;
    let middle = 0;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (haystack[middle] === needle) {
            return true;
        }
        if (haystack[middle] < needle) {
            left = middle + 1;
        } else if (haystack[middle] > needle) {
            right = middle - 1;
        }
    }
    return false;
}

const haystack = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
const needle = 69;

console.log(bs_list(haystack, needle));
