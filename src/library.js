(function () {
	var Constructor = function (number) {
		this.value = number;
	};
	Constructor.prototype.plus = function (number) {
		this.value += number;
		return this;
	};
	Constructor.prototype.times = function (number) {
		this.value = this.value * number;
		return this;
	};
	Constructor.prototype.total = function () {
		return this.value;
	};

	this.math = function (number) {
		return new Constructor(number);
	};
})();
