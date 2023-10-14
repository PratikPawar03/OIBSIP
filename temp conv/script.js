// script.js
document.getElementById('convert').addEventListener('click', function() {
    const input = parseFloat(document.getElementById('input').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    if (from === to) {
        document.getElementById('result').textContent = 'Please select different units.';
        return;
    }

    if (from === 'celsius' && to === 'fahrenheit') {
        const result = (input * 9/5) + 32;
        document.getElementById('result').textContent = `${input}°C is ${result.toFixed(2)}°F.`;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        const result = (input - 32) * 5/9;
        document.getElementById('result').textContent = `${input}°F is ${result.toFixed(2)}°C.`;
    }
});
