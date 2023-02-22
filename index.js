
//Para treinar: colocar cor dependendo a resposta

let productValue = Number(prompt('Enter the product value: '))

if (productValue >= 20) {
    document.getElementById('value').innerHTML = productValue
    document.getElementById('result').innerHTML = 'Approved'
}
else {
    document.getElementById('value').innerHTML = productValue
    document.getElementById('result').innerHTML = 'Denied :('
}