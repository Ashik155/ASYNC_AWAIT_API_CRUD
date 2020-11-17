const users = new CallApi;

users.get("https://jsonplaceholder.typicode.com/users")
.then(res => console.log(res))
.catch (error => error)

data = {
    username : "VIRAL",
    email : "ashiik@gmail.com",
    name : "Ashik144",
    id : '12'
 }
users.post("https://jsonplaceholder.typicode.com/users",data)
.then(data => {
    console.log(data)
})

users.put("https://jsonplaceholder.typicode.com/users/3",data)
.then(data => {
    document.body.innerHTML = `<li> ${data.username} ${data.email}</li>`
    console.log(data)
})
users.delete("https://jsonplaceholder.typicode.com/users/3")
.then(data => {
    document.body.innerHTML = `<li> ${data.username} ${data.email}</li>`
    console.log(data)
})