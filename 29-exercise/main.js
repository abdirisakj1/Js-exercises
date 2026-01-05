async function fetchData() {
    const response = await fetch('data.json');
    
    // convert to Json
    const data = await response.json()
    console.log("response:", data);

    // acces person
    console.log(data[2]);
    // acces person key
    console.log(data[3].name);
}

fetchData();