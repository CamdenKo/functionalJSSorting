const swap = (arr, index1, index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const bubbleSort = (arr) => {
  for (let first = 0; first < arr.length - 1; first++) {
    for (let second = first + 1; second < arr.length; second++) {
      if (arr[first] > arr[second]) {
        swap(arr, first, second)
      }
    }
  }
  return arr
}

module.exports = {
  bubbleSort,
}
