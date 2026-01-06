// users get method from jscon placeholder

async function fetchUsers() {
    try {
    
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) {
            throw new Error(`failed to fetch users! ${response.status}`);
        }

        console.log(response);
        // convert json
        const data = await response.json()
        console.log("users🤖",data);
    } catch (error) {
        console.log(error);
    }
}

fetchUsers()