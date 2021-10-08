/* eslint-env mocha */

import assert from 'assert'
import subSeconds from '.'

describe('subSeconds', () => {
  it('subtracts the given number of seconds', () => {
    const result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('accepts a timestamp', () => {
    const result = subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(),
      20
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    subSeconds(date, 15)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })
})
