const expect = require('expect')

const utils = require('./utils')

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11)
    
            expect(res).toBe(44).toBeA('number')
        })
    })

    it('should add two number async', (done) => {
        utils.addAsync(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number')
            done()
        })
    })

    it('should square a number', () => {
        var res = utils.square(5)

        expect(res).toBe(25).toBeA('number')
    })

    it('should square number async', (done) => {
        utils.squareAsync(3, (res) => {
            expect(res).toBe(9).toBeA('number')
            done()
        })
    })
})

it('should verify first and last names are set', () => {
    user = {
        age: 24
    }
    user = utils.setName(user, 'Tachakorn Uengpaporn')
    expect(user).toInclude({
        firstName: 'Tachakorn',
        lastName: 'Uengpaporn'
    })
})




// it('should expect some value', () => {
//     // expect({
//     //     name: 'Saint'
//     // }).toEqual({
//     //     name: 'Saint'
//     // })
//     // expect([2,3,4]).toExclude(1)
//     expect({
//         name: 'Saint',
//         age: 24
//     }).toExclude({
//         name: 'Saint',
//         age: 23
//     })
// })