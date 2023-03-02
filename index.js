// This function is getting the values from the html form document
async function sendValues() {
    const age = document.getElementById('age').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const sysBloodPressure = document.getElementById('sysBloodPressure').value
    const diaBloodPressure = document.getElementById('diaBloodPressure').value
    // TODO: add cancer, alzherimers, diabetes

    // fetching the data
    const url = 'https://health-insurance-server.azurewebsites.net/calculate'
    const queryString = `?age=${age}&height=${height}&weight=${weight}&sysBloodPressure=${sysBloodPressure}&diaBloodPressure=${diaBloodPressure}&diabetes=${diabetes}&cancer=${cancer}&alzheimers=${alzheimers}`
    const res = await fetch(url + queryString) // fetching the string from above
    const resText = await res.text()
    document.getElementById('results').innerHTML = resText

}