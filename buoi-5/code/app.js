const student = {
    name: 'Long Do',
    age: 18,
    address: {
        city: "ho chi minh",
        ward: "binh thanh",
        car: {
            color: "red",
            brand: "audi"
        }
    }
}

const cloneStudent = {
    ...student,
    address:{
        ...student.address,
        car:{
            ...student.address.car
        }
    }
}

cloneStudent.address.ward = "quan 1"

cloneStudent.address.car.color = "blue"

console.log('student :>> ', student);

console.log("cloneStudent",cloneStudent)


