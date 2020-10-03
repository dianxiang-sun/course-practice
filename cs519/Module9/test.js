var NmaeSpaceA;
(function (NmaeSpaceA) {
    NmaeSpaceA.variableA = { name: 'Kevin' };
})(NmaeSpaceA || (NmaeSpaceA = {}));
var NmaeSpaceA;
(function (NmaeSpaceA) {
    NmaeSpaceA.variableB = 'textB';
})(NmaeSpaceA || (NmaeSpaceA = {}));
var NameSpaceB;
(function (NameSpaceB) {
    var variableA = { name: 'Kevin', address: 'address' };
})(NameSpaceB || (NameSpaceB = {}));
console.log(NameSpaceA.variableA);
console.log(NameSpaceA.variableB);
