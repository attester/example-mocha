// Chai should assertion style
chai.should();

suite('Math', function(){
	suite('sum', function(){
		test('adds correctly', function(){
			math(1).plus(1).total().should.equal(2);
		});
	});

	suite('chain', function(){
		test('multiple operations', function(){
			math(1).plus(1).times(4).plus(2).total().should.equal(10);
		});
	});
});
