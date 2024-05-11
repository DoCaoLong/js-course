// let pending = "true"
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("long"), 3000)
//     // reject( new Error("loi roi"))
// });
// promise
//     .then(result =>  console.log(result, pending))
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log("finally")
//         pending = "false"
//         console.log(pending)
//     })

// Promise.resolve(5)
//     .then((n) => n * 2)
//     .then((n) => Promise.resolve(n * 2))
//     .then((n) => {
//         const finalNumber = n + 10;
//         console.log(finalNumber);
//         return finalNumber;
//     })
//     .catch((error) => console.log(error));

// fetch('https://js-post-api.herokuapp.com/api/students?_page=1')
//  .then(response => response.json())
//  .then(data => console.log(data))
//  .catch(error => console.log(error));

// studentApi.js
const studentApi = {
    getAll() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: [
                        { id: 1, name: "Alice" },
                        { id: 2, name: "Bob" },
                    ],
                    pagination: {
                        _total: 2,
                        _page: 1,
                        _limit: 10,
                    },
                });
            }, 2000);
        });
    },
};
studentApi.getAll().then(res => console.log(res));
// app.js
// studentApi.getAll()
//  .then(response => console.log(response))
//  .catch(error => console.log(error));