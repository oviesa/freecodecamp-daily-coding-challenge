function doMath(str) {
    const nums = [];
    const positions = [];
    const lengths = []; // Track actual string length of the number

    let i = 0;
    while (i < str.length) {
        if (/\d/.test(str[i])) {
            let start = i;
            let numStr = "";

            while (i < str.length && /\d/.test(str[i])) {
                numStr += str[i];
                i++;
            }

            nums.push(Number(numStr));
            positions.push(start);
            lengths.push(numStr.length); // Store original length (e.g., "09" is 2)
        } else {
            i++;
        }
    }

    if (nums.length === 0) return 0;
    let result = nums[0];

    for (let j = 1; j < nums.length; j++) {
        // Use the stored length instead of recalculating from the Number
        const prevEnd = positions[j - 1] + lengths[j - 1];
        const currStart = positions[j];

        const gap = currStart - prevEnd;

        if (gap % 2 === 0) {
            result += nums[j];
        } else {
            result -= nums[j];
        }
    }

    return result;
}
