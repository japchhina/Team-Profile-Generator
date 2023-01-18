const Employee = require(",,/lib/Employees");

describe("Employee", () => {
    const name = "Sample";
    const id = 1;
    const email = "";
    const role ="";
    const employee = new Employee(name, id, email, role);
}

test ("Set name", () => {
    const name = "Sample";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
}  
test ("Set id", () => {
    const id = 1;
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
}
test ("Set email", () => {
    const email = "";
    const employee = new Employee(email);
    expect(employee.email).toBe(email);
}
test ("Set role", () => {
    const role = "";
    const employee = new Employee(role);
    expect(employee.role).toBe(role);
}
test ("Get name", () => {
    const name = "Sample";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
}
test ("Get id", () => {
    const id = 1;
    const employee = new Employee(id);
    expect(employee.getId()).toBe(id);
}
test ("Get email", () => {
    const email = "";
    const employee = new Employee(email);
    expect(employee.getEmail()).toBe(email);
}
test ("Get role", () => {
    const role = "";
    const employee = new Employee(role);
    expect(employee.getRole()).toBe(role);
}

