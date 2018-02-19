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

const merge = (arr1, arr2) => {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      result.push(arr1[leftIndex])
      leftIndex++
    } else {
      result.push(arr2[rightIndex])
      rightIndex++
    }
  }

  return [
    ...result,
    ...arr1.slice(leftIndex),
    ...arr2.slice(rightIndex),
  ]
}

const mergeSort = (arr) => {
  if (!arr.length || arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(
    mergeSort(left),
    mergeSort(right),
  )
}

module.exports = {
  bubbleSort,
  mergeSort,
}
