function moveZeroes(nums: any[]): number[] {
  let lastNonZeroIndex = 0; // 🔹 ban đầu vị trí đầu tiên để đặt số khác 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // nếu là số khác 0, ta đổi chỗ nó về vị trí lastNonZeroIndex
      [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]];
      lastNonZeroIndex++; // 🔹 di chuyển sang vị trí tiếp theo
    }
  }
  return nums;
}
