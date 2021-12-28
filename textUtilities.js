// taking only expect function from Chai library instead of loading everything
var expect = require('chai').expect;

// function made steps by steps with the tests
function titleCase (title) {
    var words = title.split(' ');
    var titleCaseWords = words.map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
    });
    return titleCaseWords.join(' ');
}

// most difficult test to be last
expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');