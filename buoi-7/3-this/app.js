const obj = {
    name: "bé",
    func: setTimeout(() => {
        console.log(this.name);
    }, 1000),
};

obj.func
