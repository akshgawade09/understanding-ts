enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: "Akshay",
    age: 27,
    hobbies: ["Sports", "Reading"],
    role: Role.ADMIN
}

// person.role.push("Admin");
// person.role[1] = 10;

if (person.role === Role.ADMIN) {
    console.log("Role is Admin.");
    
}