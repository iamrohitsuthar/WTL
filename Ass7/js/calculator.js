angular.module('CalculatorApplication',[]).controller('controller', function($scope) {
	$scope.result = function() {
		if($scope.op == "+")
			return parseInt($scope.num1) + parseInt($scope.num2);
		if($scope.op == "-")
			return parseInt($scope.num1) - parseInt($scope.num2);
		if($scope.op == "*")
			return parseInt($scope.num1) * parseInt($scope.num2);
		if($scope.op == "/") {
			if($scope.num2 != 0)
				return parseInt($scope.num1) / parseInt($scope.num2);
			else
				return "Divide by Zero";
		}
	};
});