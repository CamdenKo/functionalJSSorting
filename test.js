const sortingMethods = require('./sorting')

const generateTest = (method) => {
  describe(method.name, () => {
    it('works for empty set', () => {
      expect(method([])).toEqual([])
    })
    it('works for a single element', () => {
      const toTest = [1]
      expect(method(toTest)).toEqual(toTest)
    })
    it('works for a simple 2 element arr', () => {
      const toTest = [2, 1]
      expect(method(toTest)).toEqual([1, 2])
    })
    it('works for a complex arr', () => {
      const toTest = [5, 6, 9, 1, 0, 1, 0, 5, 6]
      expect(method(toTest)).toEqual([0, 0, 1, 1, 5, 5, 6, 6, 9])
    })
    it('works for strings', () => {
      const toTest = ['a', 'z', 'e', 's']
      expect(method(toTest)).toEqual(['a', 'e', 's', 'z'])
    })
  })
}

const generateTests = () =>
  Object.values(sortingMethods)
    .forEach((method) => {
      generateTest(method)
    })

generateTests()

