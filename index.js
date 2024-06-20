// Add your code here
// Define the submitData function
function submitData(name, email) {
    // Create the data object to send
    const data = {
      name: name,
      email: email
    };
  
    // Make the POST request
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
      // Append the ID to the DOM
      const body = document.querySelector('body');
      const p = document.createElement('p');
      p.textContent = json.id;
      body.appendChild(p);
    })
    .catch(error => {
      // Handle errors and append the error message to the DOM
      const body = document.querySelector('body');
      const p = document.createElement('p');
      p.textContent = error.message;
      body.appendChild(p);
    });
  }