import to from './to.js'

// --------------------------------------------

it('returns a path to the given target from the given source', () => {
  const result = to('../source', { from: import.meta.url })
  expect(result).toContain('/to/source')
})
