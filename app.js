angular.module('meanPatterns', [])
    .factory('patterns', [function() {
        var p = {

            patterns : [
                {name: 'Trey Anastasio', upvotes: 7},
                {name: 'Page McConnel', upvotes: 5},
                {name: 'Mike Gordon', upvotes: 4},
                {name: 'Jon Fishman', upvotes: 3}
            ]
        }
        return p;
    }])
    .controller('MainCtrl', [
        '$scope', 'patterns',
        function($scope, patterns) {
            $scope.patterns = patterns.patterns;

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
    ])
;

