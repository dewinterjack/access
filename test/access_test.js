var expect = require ('chai').expect;

describe('Store',function(){
    it('should start with an undefined write variable.', function(){
        var write;
        expect(write).eq(undefined, 'write is defined.');
    });
});