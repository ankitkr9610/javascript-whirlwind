/*
    Dominant writing direction
    Write a function that computes the dominant writing direction in a string of text. 
    Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

    The dominant direction is the direction of a majority of the characters that have a script associated with them. 
    The characterScript and countBy functions defined earlier in the chapter are probably useful here.

*/

import SCRIPTS from './scripts';

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) { 
      let scriptObj = groupName(item);
      name = scriptObj.name;
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, direction: scriptObj.direction, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  function getMax(arr, prop) {
      var max;
      for (var i=0 ; i<arr.length ; i++) {
          if (max == null || (arr[i][prop]) > (max[prop]))
              max = arr[i];
      }
      return max;
  }
  
  
  function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script : "none";
    }).filter(({name}) => name != "undefined");    
    
    maxScript = getMax(scripts, "direction");
    return maxScript.direction;
  
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl