document.querySelector('#buttonToConvert').addEventListener('click', buttonRuns)
document.querySelector('#celciusButton').addEventListener('click', celciusButton)

function buttonRuns(/*paramater*/){
    const userInfo = document.querySelector('#userInput').value
    const fahrenheitMath = (userInfo - 32) * 5/9
    console.log(fahrenheitMath)
    document.querySelector('#finalOutPut').innerText = fahrenheitMath + ' ' + 'Celcius'
}

function celciusButton(/*parameter*/){
    const userinput_2 = document.querySelector('#userinput_2').value
    const celciusMath = (userinput_2 * 5/9) + 32
    console.log(celciusMath)
    document.querySelector('#celciusOutput').innerText = celciusMath + ' ' + 'Fahrenheit'
}