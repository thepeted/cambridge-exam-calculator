angular.module('calculator').factory('totalsRules', function(){

  var setupRules = function(vm){

    vm.totalScheme.key = [{

      sectionName: "Reading / Writing",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.key[0].criteriaData);
        return vm.convert(perc, 'key');
      }
    }, {

      sectionName: "Listening",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.key[1].criteriaData);
        return vm.convert(perc, 'key');
      }

    },  {
      sectionName: "Speaking",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.key[2].criteriaData);
        return vm.convert(perc, 'key');
      }
    }];

    vm.totalScheme.prelim = [{

      sectionName: "Reading",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.prelim[0].criteriaData);
        return vm.convert(perc, 'prelim');
      }
    }, {

      sectionName: "Writing",
      sectionFunc: function() {
        var selection1 = [
        vm.criteria.prelim[1].criteriaData[0],
        vm.criteria.prelim[1].criteriaData[1]
        ];

        var selection2 = [
        vm.criteria.prelim[1].criteriaData[2],
        vm.criteria.prelim[1].criteriaData[3],
        vm.criteria.prelim[1].criteriaData[4],
        vm.criteria.prelim[1].criteriaData[5]
        ];

        var criteria1 = [0];
        var criteria2 = [0];

        selection1.forEach(function(el){
          if (el.hasOwnProperty('score')){
            if (el.score) {
              criteria1.push(el.score)
            }
          }
        })
        
        selection2.forEach(function(el){
          if (el.hasOwnProperty('score')){
            if (el.score) {
              criteria2.push(el.score)
            }
          }
        })

        var sum1 = criteria1.reduce(function(a,b){
          return a + b;
        })

        var sum2 = criteria2.reduce(function(a,b){
          return a + b;
        })

        var perc = ((sum1 + (sum2 / 20) * 15) / 25) * 100;

        return vm.convert(perc, 'prelim');
      }

    },  {
      sectionName: "Listening",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.prelim[2].criteriaData);
        return vm.convert(perc, 'prelim');
      }

    },  {
      sectionName: "Speaking",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.prelim[3].criteriaData);
        return vm.convert(perc, 'prelim');
      }
    }];

    vm.totalScheme.first = [{

      sectionName: "Reading",
      sectionFunc: function() {
        var criteria = [
        vm.criteria.first[0].criteriaData[0],
        vm.criteria.first[0].criteriaData[4],
        vm.criteria.first[0].criteriaData[5],
        vm.criteria.first[0].criteriaData[6],
        ]

        var perc = vm.percentage(criteria);

        return vm.convert(perc, 'first');
      }
    }, {

      sectionName: "Use of English",
      sectionFunc: function() {
        var criteria = [
        vm.criteria.first[0].criteriaData[1],
        vm.criteria.first[0].criteriaData[2],
        vm.criteria.first[0].criteriaData[3]
        ]

        var perc = vm.percentage(criteria);

        return vm.convert(perc, 'first');
      }

    },  {
      sectionName: "Writing",
      sectionFunc: function() {
        var perc = (vm.percentage(vm.criteria.first[1].criteriaData) +
         vm.percentage(vm.criteria.first[2].criteriaData)) / 2;
        return vm.convert(perc, 'first');
      }
      
    },  {
      sectionName: "Listening",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.first[3].criteriaData);
        return vm.convert(perc, 'first');
      }
    }, {
      sectionName: "Speaking",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.first[4].criteriaData);
        return vm.convert(perc, 'first');
      }
    }];

    vm.totalScheme.advanced = [{

      sectionName: "Reading",
      sectionFunc: function() {
        var criteria = [
        vm.criteria.advanced[0].criteriaData[0],
        vm.criteria.advanced[0].criteriaData[4],
        vm.criteria.advanced[0].criteriaData[5],
        vm.criteria.advanced[0].criteriaData[6],
        vm.criteria.advanced[0].criteriaData[7]
        ]

        var perc = vm.percentage(criteria);

        return vm.convert(perc, 'advanced');
      }
    }, {

      sectionName: "Use of English",
      sectionFunc: function() {
        var criteria = [
        vm.criteria.advanced[0].criteriaData[1],
        vm.criteria.advanced[0].criteriaData[2],
        vm.criteria.advanced[0].criteriaData[3]
        ]

        var perc = vm.percentage(criteria);

        return vm.convert(perc, 'advanced');
      }

    },  {
      sectionName: "Writing",
      sectionFunc: function() {
        var perc = (vm.percentage(vm.criteria.advanced[1].criteriaData) +
         vm.percentage(vm.criteria.advanced[2].criteriaData)) / 2;
        return vm.convert(perc, 'advanced');
      }
      
    },  {
      sectionName: "Listening",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.advanced[3].criteriaData);
        return vm.convert(perc, 'advanced');
      }
    }, {
      sectionName: "Speaking",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.advanced[4].criteriaData);
        
        return vm.convert(perc, 'advanced');
      }
    }];

    vm.totalScheme.prof = [{

      sectionName: "Reading",
      sectionFunc: function() {
        var criteria = [
        vm.criteria.prof[0].criteriaData[0],
        vm.criteria.prof[0].criteriaData[4],
        vm.criteria.prof[0].criteriaData[5],
        vm.criteria.prof[0].criteriaData[6],
        ]

        var perc = vm.percentage(criteria);
        

        return vm.convert(perc, 'prof');
      }
    }, {

      sectionName: "Use of English",
      sectionFunc: function() {
        var criteria = [
        vm.criteria.prof[0].criteriaData[1],
        vm.criteria.prof[0].criteriaData[2],
        vm.criteria.prof[0].criteriaData[3]
        ]

        var perc = vm.percentage(criteria);

        return vm.convert(perc, 'prof');
      }

    },  {
      sectionName: "Writing",
      sectionFunc: function() {
        var perc = (vm.percentage(vm.criteria.prof[1].criteriaData) +
         vm.percentage(vm.criteria.prof[2].criteriaData)) / 2;
        return vm.convert(perc, 'prof');
      }
      
    },  {
      sectionName: "Listening",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.prof[3].criteriaData);
        return vm.convert(perc, 'prof');
      }
    }, {
      sectionName: "Speaking",
      sectionFunc: function() {
        var perc = vm.percentage(vm.criteria.prof[4].criteriaData);
        
        return vm.convert(perc, 'prof');
      }
    }];

  }

  return setupRules;


})


angular.module('calculator').factory('totalsHelpers', function() {
  var utilities = function(vm) {
    
    vm.percentage = function(criterias) {
      var scores = [0];
      criterias.forEach(function(el) {
        if (el.hasOwnProperty('score')) {
          if (el.score) {
            scores.push(el.score);
          }
        }
      });
      
      var totalScore = scores.reduce(function(prev, curr) {
        return prev + curr;
      });
      var maxTotal = criterias.reduce(function(prev, curr) {
        return {
          max: prev.max + curr.max
        };
      }).max;
      
      return totalScore / maxTotal * 100;
    };
    
    vm.totalScheme.overAll = function(level) {
      var percTotal = 0;
      var avPerc;
      
      if (level === 'key') {
        avPerc = (((vm.totalScheme.key[0].sectionFunc().percentage * 2) + 
          vm.totalScheme.key[1].sectionFunc().percentage + vm.totalScheme.key[2].sectionFunc().percentage) / 400)
           * 100
      } else {
        vm.totalScheme[level].forEach(function(el) {
        percTotal += el.sectionFunc().percentage;
        });
        avPerc = percTotal / vm.totalScheme[level].length
        }

      return vm.convert(avPerc, level);
    };

    vm.convert = function(score, level) {
      var perc = Math.round(score);
      if (perc < 32) {
        return {
          percentage: perc,
          threshold: 0,
          grade: 'UNREPORTED'
        };
      }
      var threshold, grade, x, y;
      if (level === 'key') {
        x = 50;
      } else if (level === 'prelim') {
        x = 70;
      } else if (level === 'first') {
        x = 90;
      } else if (level === 'advanced') {
        x = 110;
      } else if (level === 'prof') {
        x = 130;
      }
      if (perc === 32 || perc === 33 || perc === 100) {
        y = 0;
      } else if (perc === 34 || perc === 35 || perc ===
        99) {
        y = 1;
      } else if (perc === 36 || perc === 37 || perc ===
        38 || perc === 98) {
        y = 2;
      } else if (perc === 39 || perc === 40 || perc ===
        41 || perc === 97) {
        y = 3;
      } else if (perc === 42 || perc === 43 || perc ===
        96) {
        y = 4;
      } else if (perc === 44 || perc === 45 || perc ===
        46 || perc === 95) {
        y = 5;
      } else if (perc === 47 || perc === 48 || perc ===
        49 || perc === 94) {
        y = 6;
      } else if (perc === 50 || perc === 51 || perc ===
        52 || perc === 91 || perc === 92 || perc === 93
        ) {
        y = 7;
      } else if (perc === 53 || perc === 54 || perc ===
        55 || perc === 72 || perc === 73 || perc === 74 ||
        perc === 75 || perc === 76 || perc === 87 ||
        perc === 88 || perc === 89 || perc === 90) {
        y = 8;
      } else if (perc === 56 || perc === 57 || perc ===
        58 || perc === 64 || perc === 65 || perc === 66 ||
        perc === 67 || perc === 68 || perc === 69 ||
        perc === 70 || perc === 71 || perc === 77 ||
        perc === 78 || perc === 83 || perc === 84 ||
        perc === 85 || perc === 86) {
        y = 9;
      } else {
        y = 10;
      }
      threshold = perc + x + y;
      if (perc < 45) {
        grade = 'Fail';
      } else if (perc >= 45 && perc < 60) {
        if (level === 'prof') {
          grade = 'Level C1';
        } else if (level === 'advanced') {
          grade = 'Level B2';
        } else {
          grade = 'Level B1';
        }
      } else if (perc >= 60 && perc < 75) {
        grade = 'Grade C';
      } else if (perc >= 75 && perc < 79) {
        grade = 'Grade B';
      } else if (perc >= 80) {
        grade = 'Grade A';
      }
      return {
        percentage: perc,
        threshold: threshold,
        grade: grade
      };
    };
  }
  
  return utilities;
  
});