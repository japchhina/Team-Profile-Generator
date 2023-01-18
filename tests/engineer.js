const Engineer = require("../lib/Engineers");
test ("Set GitHub account using constructor",()=> {
    const testValue = "Username";
    const e = new Engineer("Foo",1,"sample@sample.com", testValue);
    expect(e.github).toBe(testValue);
});
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer ("Foo",1,"sample@sample.com", testValue);
    expect(e.github).toBe(testValue);
});
test("Get GitHub username using getGithub()", () => {
    const testValue = "Username";
    const e = new Engineer ("Foo",1,"sample@sample.com", testValue);
    expect(e.github).toBe(testValue);
});