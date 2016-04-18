angular.module('calculator').directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
            
      var handler = function() {
        scope.scroll = window.scrollY;
      }
      
      window.addEventListener('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});