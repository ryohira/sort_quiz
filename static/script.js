document.getElementById('form1').onsubmit = function(e) {
    event.preventDefault();
    const elem = document.getElementById('form1');
    const input_text = elem.input_text.value;
    showOutput(input_text);
}

function showOutput(input_text) {
    let input_text_vec = input_text.split('');
    input_text_vec.sort();
    let output = input_text_vec .join('');
    let result = document.getElementById('result');
    result.textContent = output;
}