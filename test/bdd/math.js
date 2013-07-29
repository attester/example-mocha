describe('Math', function(){
	describe('sum', function(){
		it('adds correctly', function(){
			var two = math(1).plus(1).total();
			expect(two).to.be(2);
		});
	});

	describe('chain', function(){
		it('multiple operations', function(){
			var total = math(1).plus(1).times(4).plus(2).total();
			expect(total).to.be(10);
		});
	});
});
