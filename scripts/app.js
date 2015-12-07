angular.module('calculator', []);

angular.module('calculator').controller('MainController', ['$http', 'totalsRules', 'totalsHelpers',
  function($http, totalsRules, totalsHelpers) {

    var vm = this;

    vm.criteria = [];
    vm.totalScheme = [];
    vm.selectedSection = 'key';
    vm.getNiceSectionName = niceSectionName;
    vm.doResetSection = resetSection;

    vm.selectedIndex = 0;
    vm.select = selected;

    $http.get('https://github.com/thepeted/cambridge-exam-calculator/blob/gh-pages/data/scoring.json').success(function(data) {
      vm.criteria = data;
      totalsRules(vm);
      totalsHelpers(vm);
    });

    function selected(index) {
      vm.selectedIndex = index;
    }

    function niceSectionName(abbr){
      var nameMap = {
        key: 'Key',
        prelim: 'Preliminary',
        first: 'First',
        advanced: 'Advanced',
        prof: 'Proficiency'
      }

      return nameMap[abbr];

    };

    function resetSection(section){
      vm.criteria[section].forEach(function(groups){
        groups.criteriaData.forEach(function(el){
          delete el.score;
        });
      });
    };

  }
  ]);