

function submitData(name, email) {
    const url = 'http://localhost:3000/users'; // Define url variable here
    const data = {
      name: name,
      email: email
    };
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const id = data.id;
      document.body.append(id);
    })
    .catch(error => {
      document.body.append(error.message);
    });
  }