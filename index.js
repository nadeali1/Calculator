let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                // Replace % with /100
                let evaluatedString = string.replace(/(\d+)%/g, (match, p1) => {
                    return (parseFloat(p1) / 100);
                });

                string = eval(evaluatedString);
                input.value = string;
            } catch (err) {
                input.value = "Error";
            }
        } else if (value == 'AC') {
            string = '';
            input.value = string;
        } else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});

