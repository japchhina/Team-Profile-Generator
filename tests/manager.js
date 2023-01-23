const manager = require("../lib/manager");
const assert = require("assert");
const employee = require("../lib/employee");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
        const obj = new manager("Bob", 1, "
[...]
});

test("Set office number using constructor argument",() => {
    const testValue = 100;
    const e = new manager("Foo", 1, "sample@sample.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"manager\"", () => {
    const testValue = "manager";
    const e = new manager("Foo", 1, "sample@sample.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Get office number using getOffice()", () => {
    const testValue = 100;
    const e = new manager("Foo", 1, "sample@sample.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
