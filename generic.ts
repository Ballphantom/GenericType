//Generic Arr------------------------------------------------------
const last = <T>(arr: T[]) => {
  return arr[arr.length-1];
};

const lastNumber = last([1, 2, 3]);
console.log(lastNumber);
const lastString = last<String>(["Hello", "Hi", "What is up"]);
console.log(lastString);
console.log("=======================================");

// 2 Array Generic-------------------------------------------------
const newArray = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const newNumber = newArray(1, 2);
const newString = newArray("Bonjour", "Bon Appeti");
const newParam = newArray<string | null, number>("One", 5);
console.log(newNumber);
console.log(newString);
console.log(newParam);
console.log("=======================================");

//Object generic
const makeFullName = <T extends { firstName: String; lastName: String }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const genName = makeFullName({
  firstName: "Ariana",
  lastName: "Grande",
  age: 25,
});
console.log(genName);
