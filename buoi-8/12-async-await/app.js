async function getAllStudent() {
    try {
        const url = "http://js-post-api.herokuapp.com/api/students?_page=6";
        const response = await fetch(url); // 3s
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// add
async function addNewStudent(newStudent) {
    try {
        const url = "http://js-post-api.herokuapp.com/api/students?_page=1";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
        }); 
        const data = await response.json
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const newStudent = {
    name: "Long pro vip no 1",
    age: 18,
    mark: 9,
    gender: "male",
}

// delete
async function deleteStudent(id) {
    try {
        const url = `http://js-post-api.herokuapp.com/api/students/${id}?_page=6`;
        const response = await fetch(url, {
            method: 'DELETE',
        }); 
        const data = await response.json
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// addNewStudent(newStudent)
let idUser = "o1dSms8"
// deleteStudent(idUser)

getAllStudent()
