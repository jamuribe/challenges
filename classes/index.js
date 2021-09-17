// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.The methods that take an argument must accept only one argument and it has to be a string.These methods must be the only available means of interacting with the object.

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  const firstName = [firstAndLast.split(' ')[0]];
  const lastName = [firstAndLast.split(' ')[1]];

  this.setFirstName = (first) => {
    firstName.pop();
    firstName.push(first);
  };

  this.setLastName = (last) => {
    lastName.pop();
    lastName.push(last);
  };

  this.setFullName = (firstAndLast) => {
    const [first, last] = firstAndLast.split(' ');
    this.setFirstName(first);
    this.setLastName(last);
  };

  this.getFullName = function () {
    return [...firstName, ...lastName].join(' ');
  };
  this.getLastName = () => {
    return lastName[0];
  };
  this.getFirstName = () => {
    return firstName[0];
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
