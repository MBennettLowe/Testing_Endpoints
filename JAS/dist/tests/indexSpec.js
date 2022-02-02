"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
// it('expect myFunc(9) to be 45', () => {
//     expect(myFunc(9)).toBe(45);
// });
// describe(“suite description”, () => {
//     it(“describes the spec”, () => {
//         const myVar = true;
//         expect(myVar).toBe(true);
//     });
// }); 
it('expect myFunc(8.9) to be in the range 44 with 0 precision', () => {
    expect((0, index_1.default)(8.9)).toBeCloseTo(45, 0);
});
