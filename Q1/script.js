const user = {};
let propertyName = prompt("Enter property:");
let propertyValue = prompt("Enter property value:");

function setterGenerator(property) {
  function nameSetter(val) {
    user[property] = val;
    return user;
  }
  return nameSetter(propertyValue);
}
console.log(setterGenerator(propertyName));
