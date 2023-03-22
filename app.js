let WS = new WeakSet();

const Obj ={}
const foo ={}

WS.add(Obj)

console.log(WS.has(Obj)) //true 
WS.delete(Obj);
console.log(WS.has(Obj)) //false