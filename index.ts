// Import stylesheets
import './style.css';
import './accessor';
import './generics';
import './decorators';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Exercise 1 - number types
function add(a: number, b: number) {
  return a + b;
}
appDiv.innerHTML = add(2, 2) + ' is the answer';



// Exercise 2 - string & boolean types
log('in dev mode', true)
function log(msg: string, inDev: boolean = false) {
  if(inDev) {
    appDiv.innerHTML = msg;
  }
}


// Exercise 3 - object
logObj({a:3})
function logObj(o: object) {
  appDiv.innerHTML = o + '';
}



// Exercise 4 - any type
logAny('hi');
logAny(true);
logAny({a:4})
function logAny(a:any) {
  appDiv.innerHTML = a;
}