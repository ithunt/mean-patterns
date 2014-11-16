angular.module('meanPatterns', [])
.controller('MainCtrl', [
	'$scope',
	function($scope) {
		$scope.test = 'Hello Thar!';
		$scope.patterns = [
            {name: 'Trey Anastasio', upvotes: 7},
            {name: 'Page McConnel', upvotes: 5},
            {name: 'Mike Gordon', upvotes: 4},
            {name: 'Jon Fishman', upvotes: 3}
		];

        $scope.addPattern = function() {
            if($scope.newPatternName && !($scope.newPatternName === ''))  {
                $scope.patterns.push({name: $scope.newPatternName, upvotes: 0 });
                $scope.newPatternName = '';
            }
        }

        $scope.incrementUpvotes = function(pattern) {
            pattern.upvotes += 1;
        };
	}
	]
);

