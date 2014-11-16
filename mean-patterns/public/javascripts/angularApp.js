angular.module('meanPatterns', ['ui.router'])
    .config([  //'home' state
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                })
                .state('patterns', {
                    url: '/patterns/{id}',
                    templateUrl: '/patterns.html',
                    controller: 'PatternsCtrl'
                });

            //if unspecified route requested, use home
            $urlRouterProvider.otherwise('home');

        }

    ])
    .factory('patterns', [function() {
        var p = {

            patterns : [
                {name: 'Trey Anastasio', upvotes: 7, comments: [
                    {author: 'Joe', body: 'Cool post!', upvotes: 0},
                    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                ]
                },
                {name: 'Page McConnel', upvotes: 5, comments: []},
                {name: 'Mike Gordon', upvotes: 4 , comments: []},
                {name: 'Jon Fishman', upvotes: 3, comments: []}
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
                    $scope.patterns.push(
                        {name: $scope.newPatternName,
                            upvotes: 0,
                            comments: []});
                    $scope.newPatternName = '';
                }
            }

            $scope.incrementUpvotes = function(pattern) {
                pattern.upvotes += 1;
            };
        }

    ])
    .controller('PatternsCtrl',[
        '$scope',
        '$stateParams',
        'patterns',
        function($scope, $stateParams, patterns) {
            $scope.pattern = patterns.patterns[$stateParams.id];

            $scope.addComment = function() {
                if($scope.body === '') {return;}
                $scope.pattern.comments.push({
                    body: $scope.body,
                    author: 'user',
                    upvotes: 0
                });
                $scope.body = '';
            };
        }

    ]);
;

