let displayCalculator = document.getElementById('display-calculator');
displayCalculator.value.max = 9;
let form = document.getElementById('form');

form.addEventListener('click', (e) => {
    if (e.target.value !== undefined && e.target.name !== 'display') {
        if (e.target.value === 'AC')
            displayCalculator.value = '';
        else if (e.target.value === 'DE') {
            let currentValue = displayCalculator.value;
            displayCalculator.value = currentValue.slice(0, -1);
        }
        else if (e.target.value === '=') {
            try {
                let result = eval(displayCalculator.value);
                if (result.toString().length > 9) {
                    result = result.toExponential();
                }
                displayCalculator.value = result;
            } catch {
                displayCalculator.value = 'Error(syn)';
                displayCalculator.classList.add('depasse-limit')
                setTimeout(() => {
                    displayCalculator.classList.remove('depasse-limit')
                }, 600);

                setTimeout(() => {
                    displayCalculator.value = ''
                }, 600);

                console.error('Invalid syntaxe');
            }

        }
        else if (displayCalculator.value.length < 10) {
            displayCalculator.value += e.target.value
        }

        else {
            displayCalculator.classList.add('depasse-limit')
            setTimeout(() => {
                displayCalculator.classList.remove('depasse-limit')
            }, 600);
        }
    }
})
