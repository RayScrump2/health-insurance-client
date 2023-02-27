/*
 * Getting data from the form in the index.html
 * file. Any questions let me know - Brian
*/
const formEl = document.querySelector('.form');

// This will execute when someone clicks "submit"
formEl.addEventListener('submit', event => {
    event.preventDefault(); // prevents the page from refreshing on submission.

    const formData = new FormData(formEl); // get all data from the form.
    const data = Object.fromEntries(formData); // storing the data as a JS object

    /*
     * fetch API will will send the data to the server (our health insurance server)
     * current being sent to localhost:3000 for testing. Once done testing, should
     * be sent to https://health-insurance-server.azurewebsites.net/api/data
     * which is our server.
    */
    fetch('https://reqres.in/api/users', {
        method: 'POST', // POST is for sending data to the server.
        headers: {
            'Content-Type': 'application/json' // Specifies what we're sending
        }, 
        body: JSON.stringify(data)
    }).then(res => res.json()) // response is getting data back as JSON
      .then(data => console.log(data)) // then it takes data and logs it
      .catch (error => console.log(error)); // this occurs of there is an error.
});