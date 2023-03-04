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
    const heightType = document.getElementById('heightType').value 
    let height

    // checking if they preferred inches or feet
    if (heightType == 'inches') {
        height = document.getElementById('height').value
    } else if (heightType == 'feet') {
        height = document.getElementById('height').value * 12 // converts feet back to inches for calculation purposes
    }

    // fetching the data
    const queryString = `?age=${age}&height=${height}&weight=${weight}&sysBloodPressure=${sysBloodPressure}&diaBloodPressure=${diaBloodPressure}&diabetes=${diabetes}&cancer=${cancer}&alzheimers=${alzheimers}`
    const res = await fetch(url + "/calculate" + queryString) // fetching the string from above
    const resText = await res.text()
    document.getElementById('results').innerHTML = resText
}

async function ping() {
    const res = await fetch(url + "/ping")
}
