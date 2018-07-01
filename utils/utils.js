var add = (a, b) => a + b

var addAsync = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 1990)
}

var square = (x) => x * x

var squareAsync = (x, callback) => {
    setTimeout(() => {
        callback(x * x)
    }, 1550)
}

var setName = (user, fullName) => {
    var names = fullName.split(' ')
    user.firstName = names[0]
    user.lastName = names[1]
    return user
}

module.exports = {
    add,
    addAsync,
    square,
    squareAsync,
    setName
}