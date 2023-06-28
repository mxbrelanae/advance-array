//const doubleValues = [1,2,3]; //2,4,6

//for each functions

function doubleValues(array){
    let newArray = [];

  array.forEach(function(val){
    newArray.push(val * 2);
    });
    
  return newArray;
}
//[1,2,3,4] returns [2,4]
function onlyEvenValues(arr){
  let newEvens = [];
  arr.forEach(function(vals){
    if(vals % 2 === 0) //this basically says "if the index is even"
    newEvens.push(vals)
  });
  
  return newEvens;
}
//showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
function showFirstAndLast(arrs){
  let newArrs = [];

  arrs.forEach(function(valu){
  newArrs.push(valu[0] + valu[valu.length-1]);
  });
  
  return newArrs;
}

//('Elie') // {e:2,i:1};
function vowelCount(str) {
  let splitArray = str.split("");
  let object = {};
  const keyVowels = "a,e,i,o,u";

  splitArray.forEach(function(char) {
    let lowerCase = char.toLowerCase()
    if (keyVowels.indexOf(lowerCase) !== -1) {
      if (object[lowerCase]) {
        object[lowerCase]++;
      } else {
        object[lowerCase] = 1;
      }
    }
  });
  return object;
}

//{name: 'Elie', title:'instructor'}
function addKeyAndValue(arrrs, key, value) {
  arrrs.forEach(function(vall) {
    vall[key] = value;
  });
  return arrrs;
}


//map functions
//([1,2,3]) // [2,4,6]
function doubleValuesWithMap(arrays) {
  return arrays.map(function(valus) {
    return valus * 2;
  });
}

//([1,2,3]) // [0,2,6]
function valTimesIndex(arrys) {
  return arrys.map(function(vali, indexs) {
    return vali * indexs;
  });
}

// // ['Elie', 'Tim', Matt', 'Colt']
function extractKey(ar, keys) {
  return ar.map(function(valt) {
    return valt[keys];
  });
}

//['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
function extractFullName(arrs) {
  return arrs.map(function(values) {
    return values.first + " " + values.last;
  });
}

// filter functions
//{first: 'Colt', last:"Steele", isCatOwner: true}
function filterByValue(ray, kee) {
  return ray.filter(function(vol) {
    return vol[kee] !== undefined;
  });
}

//find([1,2,3,4,5], 3) // 3
function find(airy, fValue) {
  return airy.filter(function(valo) {
    return valo === fValue;
  })[0];
}

//{first: 'Tim', last:"Garcia", isCatOwner: true}
function findInObj(arr2, key2, fValue2) {
  return arr2.filter(function(val2) {
    return val2[key2] === fValue2;
  })[0];
}

//('Elie') // ('l')
function removeVowels(strs) {
  const vowelsAgain = "a,e,i,o,u";
  return strs.toLowerCase()
        .split("")
        .filter(function(val) {
        return vowelsAgain.indexOf(val) === -1;})
    .join("");
}

//([1,2,3,4,5]) // [2,6,10]
function doubleOddNumbers(arrA) {
  return arrA.filter(function(vally) {
      return vally % 2 !== 0;})
      
      .map(function(vally) {
      return vally * 2;
    });
  }



