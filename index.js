/*
 * https://health-insurance-server.azurewebsites.net
 * The above is the link to the server where we want to send the
 * data we collect from this form, which is currently on the client side.
*/
const url = 'https://health-insurance-server.azurewebsites.net'
// This function is getting the values from the html form document
async function sendValues() {
    // variables
    const age = document.getElementById('age').value
    const weight = document.getElementById('weight').value
    const sysBloodPressure = document.getElementById('sysBloodPressure').value
    const diaBloodPressure = document.getElementById('diaBloodPressure').value
    const cancer = document.getElementById('cancer').value
    const alzheimers = document.getElementById('alzheimers').value
    const diabetes = document.getElementById('diabetes').value
    const inches = document.getElementById('inches').value 
    const feet = document.getElementById('feet').value

    // verifying valid input 
    const ageInfo = document.getElementById('age')
    ageInfo.setAttribute('min', '0')
    const weightInfo = document.getElementById('weight')
    weightInfo.setAttribute('min', '0')
    const sysBloodPressureInfo = document.getElementById('sysBloodPressure')
    sysBloodPressureInfo.setAttribute('min', '0')
    const diaBloodPressureInfo = document.getElementById('diaBloodPressure')
    diaBloodPressureInfo.setAttribute('min', '0')

    const formInfo = document.getElementById('myForm')
    if (formInfo.checkValidity()) {
    // fetching the data
    const queryString = `?age=${age}&feet=${feet}&inches=${inches}&weight=${weight}&sysBloodPressure=${sysBloodPressure}&diaBloodPressure=${diaBloodPressure}&diabetes=${diabetes}&cancer=${cancer}&alzheimers=${alzheimers}`
    const res = await fetch(url + "/calculate" + queryString) // fetching the string from above
    const resText = await res.text()
    document.getElementById('results').innerHTML = resText
    const submitButton = document.getElementById('buttonSubmit')
    submitButton.style.display = 'none'
    document.getElementById('goAgain').innerHTML = 'Do you have another patient?'
    document.getElementById('refreshButton').removeAttribute('hidden')
    }
}

async function ping() {
    const res = await fetch(url + "/ping")
}
function refreshPage() {
    window.location.reload();
}
