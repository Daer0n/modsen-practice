"use strict";

const accessUndefinedProperty = (obj, propertyName) => {
    try {
        const value = obj[propertyName];
        return value;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Error: property is not defined");
        } else {
            throw error;
        }
    }
};

const person = {
    name: "John",
    age: 30,
};
console.log(accessUndefinedProperty(person, "name")); // John
console.log(accessUndefinedProperty(person, "address")); // Error: property is not defined
