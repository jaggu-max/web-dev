const nums = [1, 2, 3];
nums.push(4); // allowed
nums[0] = 10; // allowed
console.log(nums);
// nums = [7, 8]; // TypeError: cannot reassign a const variable
