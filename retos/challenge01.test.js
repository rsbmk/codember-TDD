import { describe, expect, it } from 'vitest'
import { countUsers } from './challenge01'
import { reallyBigDataInput } from './data'

describe('challenge - users', () => {
  it('countUseres must be a function', () => {
    expect(countUsers).toBeTypeOf('function')
  })

  it('should thorw an error if dont receive an string as argument', () => {
    expect(() => countUsers(1)).toThrowError()
    expect(() => countUsers({})).toThrowError()
    expect(() => countUsers(true)).toThrowError()
    expect(() => countUsers(null)).toThrowError()
    expect(() => countUsers(undefined)).toThrowError()
    expect(() => countUsers()).toThrowError()
    expect(() => countUsers([])).toThrowError()
  })

  it('should return a string like this "1@midudev"', () => {
    expect(countUsers('usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82')).toBe('1@midudev')
  })

  it('should return a string like with the 2 user countend and the last username', () => {
    const input = `usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

  fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World`

    expect(countUsers(input)).toBe('2@codember')
  })

  it('should validated that correct user have all requerided field', () => {
    const input = `usr:@midudev eme:mi@gmail.com age:22 loc:bcn fll:82

  fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World`

    expect(countUsers(input)).toBe('1@codember')

    const input2 = `usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

    fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

    psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com

    usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com`

    expect(countUsers(input2)).toBe('3@itziar')
  })

  it('should detect a user though it separate by line break', () => {
    const input = `usr:@midudev eme:mi@gmail.com
  age:22 loc:bcn fll:82 psw:123456

  fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World`

    expect(countUsers(input)).toBe('2@codember')
  })

  it('this is a fire test 🔥', () => {
    const response = countUsers(reallyBigDataInput)
    console.log({ response })
  })
})
