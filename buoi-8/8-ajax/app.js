const url = "http://js-post-api.herokuapp.com/api/students?_page=1";
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.addEventListener("load", function () {
    console.log(xhr.response);
});
xhr.addEventListener("error", function () {
    console.log("Something wrong :P");
});
xhr.send();
