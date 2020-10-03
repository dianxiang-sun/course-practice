namespace NameSpaceB {
interface MyInterface {
    [propName: string]: string;
    address: string;
}
const variableA: MyInterface = { name: 'Kevin', address: 'address' };
}

console.log(NameSpaceA.variableA);
console.log(NameSpaceA.variableB);