const url = 'https://health-insurance-server.azurewebsites.net/api/data'
// This function is getting the values from the html form document
async function sendValues() {
    const age = document.getElementById('age').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const sysBloodPressure = document.getElementById('sysBloodPressure').value
    const diaBloodPressure = document.getElementById('diaBloodPressure').value
    // TODO: add cancer, alzherimers, diabetes

    // Adding cancer, alzheimers and diabetes - JB
    const cancer = document.getElementById('cancer').value
    const alzheimers = document.getElementById('alzheimers').value
    const diabetes = document.getElementById('diabetes').value

    // fetching the data
    const queryString = `?age=${age}&height=${height}&weight=${weight}&sysBloodPressure=${sysBloodPressure}&diaBloodPressure=${diaBloodPressure}&diabetes=${diabetes}&cancer=${cancer}&alzheimers=${alzheimers}`
    const res = await fetch(url + "/calculate" + queryString) // fetching the string from above
    const resText = await res.text()
    document.getElementById('results').innerHTML = resText
}

async function ping() {
    const res = await fetch(url + "/ping")
}
