var { getDays, every } = require('./xz.js')

describe('getDays', function () {
    it('should be defined', function () {
        expect(getDays).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof getDays).toBe('function')
    })
    it('should work only with two arguments', function () {
        expect(getDays()).toBe('error')
    })
    it("shouldn't work with one arguments", function () {
        expect(getDays(2007)).toBe('error')
    })
    it("shouldn't work if first argument is not nuber", function () {
        expect(getDays('ghghgjg', 4)).toBe("year or month is not correct")
    })
    it("shouldn't work if second argument is not nuber or string", function () {
        expect(getDays(2005, [3, 4, 5])).toBe('error')
    })
    it("shouldn't work if second argument is string, but not suitable for the requirements", function () {
        expect(getDays(2005, 'dffhdrthd')).toBe('try again')
    })
    it('should work with two numbers', function () {
        expect(getDays(2011, 4)).toBe(30)
    })
    it('should work with number and correct string', function () {
        expect(getDays(2019, 'apRil')).toBe(30)
    })
    it("should work with negative numbers", function () {
        expect(getDays(-55, 6)).toBe("year or month is not correct")
    })
    it("should work with negative numbers", function () {
        expect(getDays(2019, -6)).toBe("year or month is not correct")
    })
})

describe('isOdd', function () {
    num = new Number()
    it("should be defined", function () {
        expect(Number.prototype.isOdd).toBeDefined();
    });
    it("should be a function", function () {
        expect(typeof Number.prototype.isOdd).toBe("function");
    });
    it("must be false", function () {
        expect(num.isOdd(22)).toBe(false);
    });
    it("must be true", function () {
        expect(num.isOdd(3)).toBe(true);
    });
    it("shoudn't work if arg is not number", function () {
        expect(num.isOdd('fffffff')).toBe('error');
    });
});

describe('every', function () {
    it('should be defined', function () {
        expect(every).toBeDefined()
    })
    it('should be a function', function () {
        expect(typeof every).toBe('function')
    })
    it("shouldn't work only with two arguments", function () {
        expect(every()).toBe('error')
    })
    it("shouldn't work without one arguments", function () {
        expect(every([222, 2])).toBe('error')
    })
    it("shouldn't work if first arg is not array", function () {
        expect(every('sfsgfg', () => { })).toBe('error')
    })
    it("shouldn't work if second arg is not a function", function () {
        expect(every([9, 4, 7, 4], 'agaf')).toBe('error')
    })
    it('should work correct with 2 arguments', function () {
        expect(every([8, 2, 4], function (num) {
            return num % 2 === 0
        })).toBe(true)
    })
    it('should work correct with 2 arguments', function () {
        expect(every([8, 7, 4], function (num) {
            return num % 2 === 0
        })).toBe(false)
    })
})