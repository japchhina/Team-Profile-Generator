const Intern = require('../lib/Intern');
test("Set school using constructor",() => {
    const testValue = "sample";
    const e = new Intern("Foo", 1, "sample@sample.com", testValue);
    expect(e.school).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "sample@sample.com", "sample");
    expect(e.getRole()).toBe(testValue);
});
test("Get school using getSchool()", () => {
    const testValue = "sample";
    const e = new Intern("Foo", 1, "sample@sample.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
