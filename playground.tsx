import React from "react";

// Type script recommends to use interfaces over types when possible
// Interfaces describe the data structure in more natural way.
// Shipment, Orders
// Type is used when we want to create aliases.
// Types are better to describe functions

class Logger<T> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => callback(item));
  }
}

interface Person {
  name: String;
  age: Number;
}

export default function Playground() {
  const logger3 = new Logger<Person>();

  const cars3 = [
    { name: "abhishekh", age: 27 },
    { name: "anisha", age: 28 },
  ];

  logger3.log(cars3, (car: any) => console.log(car));
  return (
    <>
      <p>Playground</p>
    </>
  );
}
