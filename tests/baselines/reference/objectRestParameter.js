//// [objectRestParameter.ts]
function cloneAgain({ a, ...clone }: { a: number, b: string }): void {
}

declare function suddenly(f: (a: { x: { z, ka }, y: string }) => void);
suddenly(({ x: a, ...rest }) => rest.y);
suddenly(({ x: { z, ...nested }, ...rest }) => rest.y + nested.ka);



//// [objectRestParameter.js]
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && !e.indexOf(p))
        t[p] = s[p];
    return t;
};
function cloneAgain(_a) {
    var { a } = _a, clone = __rest(_a, ["a"]);
}
suddenly((_a) => {
    var { x: a } = _a, rest = __rest(_a, ["x"]);
    return rest.y;
});
suddenly((_a) => {
    var _b = _a.x, { z } = _b, nested = __rest(_b, ["z"]), rest = __rest(_a, ["x"]);
    return rest.y + nested.ka;
});
