let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;
let numbers: number[] = [1, 2, 3]
let user: [number, string] = [1, 'morgan']

function render(document: number) {
  console.log(document)
}

//enums
const enum Size {Small = 1, Medium, Large}
//automatically sets each word to it's index or next greatest number. but you can manually assign a value to each as well.
//small = 1, medium = 2, large = 3 etc...
let mySize: Size = Size.Medium; // prints 2 to the console
// to run a file, use tsc to compile to javaScript, then use node to run the JS file

//functions
function calculateTax(income: number, taxYear: number = 2022): number { // the :number after the () declares the return value's type
  if (taxYear < 2022)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2023)

//objects
let programmer: {
  readonly id: number, // readonly keyword is like const, it prevents you from overriding it
  name: string,
  retire: (date: Date) => void
} = {
    id: 1,
    name: 'morgan',
    retire: (date: Date) => {
        console.log(date);
      }
  };

programmer.name = "Morgan";

//type alias, this allows you to create a custom type. I turned the programmer object into a type, and now i can create multiple versions of it. 
type Programmer = {
  readonly id: number, // readonly keyword is like const, it prevents you from overriding it
  name: string,
  retire: (date: Date) => void
}

let newProgrammer: Programmer = {
    id: 2,
    name: 'moses',
    retire: (date: Date) => {
        console.log(date);
      }
}

// unions

function kgToLbs(weight: number | string): number { // the bar after parameter means the value type for that parameter will either be a number or a string, and by 'narrowing', i can write specific functions for each case. by using the typeof function and three equal signs as seen below.
  //narrowing
  if (typeof weight === 'number')
    return weight * 2.2;
  else
    return parseInt(weight) * 2.2

}
kgToLbs(10) //returns 22
kgToLbs('10kg') //also returns 22

//intersection types

type Draggable = {
  drag: () => void
};

type Resizeable = {
  resize: () => void
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

//literal types, this uses uniuns to basically give the user of the variable specific values

let willIGetJob: 'yes' | 'no' = 'yes'; // value assigned must be a string yes or string no, anything else results in an error
// most common to do this though
type Quantity = 50 | 100;
let myQuantity: Quantity = 100; //I made a type first, then when declaring, used that type and then assigned it to 100

type Metric = 'cm' | 'inch';
let america: Metric = 'inch';
let britain: Metric = 'cm';

//nullable types

function greet(name: string | null | undefined): void {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('hola!');
}

greet(undefined) // this crashes, not allowed in TS

// optional chaining

type Customer = {
  birthday: Date
};

function getCustomer(id: number):Customer | null {
  return id === 0 ? null : {birthday: new Date()}; //? means then, so if id is zero, return null, : means else ie: return birthday
}

let customer = getCustomer(0);
//optional property access operator
console.log(customer?.birthday); //? means that this code only runs if customer is not null or undefined
//so this is where the chaining comes in
console.log(customer?.birthday?.getFullYear())
//if customer isn't null, and customer's birthday isn't null, get full year. ^^





