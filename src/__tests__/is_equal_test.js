var isEqual = require('../is_equal')

describe('isEqual', function() {
  it('returns true if passed dates are equal', function() {
    var result = isEqual(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1987, 1 /* Feb */, 11)
    )
    expect(result).to.be.true
  })

  it('returns false if passed dates are not equal', function() {
    var result = isEqual(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    expect(result).to.be.false
  })

  it('allows to pass string', function() {
    var result = isEqual(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1987, 1 /* Feb */, 11).toISOString()
    )
    expect(result).to.be.true
  })

  it('allows to pass timestamp', function() {
    var result = isEqual(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    expect(result).to.be.true
  })
})
