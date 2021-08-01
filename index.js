function largestSubarraySum(arr) {
  let bestSum = 0
  let currentSum = 0

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i])
    bestSum = Math.max(bestSum, currentSum)
  }

  return bestSum;
}
