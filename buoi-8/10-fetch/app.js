// Add new student
// fetch("https://js-post-api.herokuapp.com/api/students", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         name: "Long pro vip",
//         age: 18,
//         mark: 9,
//         gender: "male",
//     }),
// })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// delete new student
// fetch("https://js-post-api.herokuapp.com/api/students/5ew9UBR", {
//     method: "DELETE",
// })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// get new student
fetch("https://js-post-api.herokuapp.com/api/students", {
    method: "GET",
})
    .then((response) => {
        response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// fetch("https://js-post-api.herokuapp.com/api/invalid-endpoint", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     },
// })
//     .then((response) => {
//         if (response.ok) return response.json();
//         // TODO: How you handle errors here? --> It depends on what your API returns;
//         // Solution 1: return Promise.reject(new Error('Something wrong!'));
//         // Solution 2: throw new Error(response.statusText);
//         // sau khi throw error thì nó sẽ nhảy lỗi vô catch.
//         return response.json().then((data) => {
//             throw new Error(data?.message);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//         // Toast message
//         // alert(error)
//         // Send report to log server (Sentry)
//     });

