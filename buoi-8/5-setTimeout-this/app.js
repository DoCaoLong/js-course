const student = {
    name: "Long Do",
    sayHello() {
        console.log("NAME", this.name);
        console.log("THIS", this);
    },
};
setTimeout(student.sayHello.bind(student)); // 'Long Do'
