const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')


describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db)

    it('should call the spy correctly', () => {
        var spy = expect.createSpy()
        spy('Saint', 24)
        expect(spy).toHaveBeenCalledWith('Saint', 24)
    })

    it('should call saveUser with user object', () => {
        var email = 'tachakorn@neversitup.com'
        var password = '123456'

        app.handleSignUp(email, password)
        expect(db.saveUser).toHaveBeenCalledWith({
            email, password
        })
    })
})