function sum(a, b) { // es muy común
  return a + b;
}

const sum02 = function (a, b) { // no es muy común 
  return a + b;
};

const sum03 = (a, b) => { // es la mas nueva. Por tanto, bastante común
  return a + b;
};

console.log(sum03(5,10));
