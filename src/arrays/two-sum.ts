function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>();

  for (let i: number = 0; i < nums.length; i++) {
    const completion: number = target - nums[i]!;

    if (numsMap.has(completion)) {
      return [numsMap.get(completion)!, i];
    }

    numsMap.set(nums[i]!, i);
  }

  return [];
}
