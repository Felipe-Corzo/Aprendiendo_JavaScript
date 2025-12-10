const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

let expression = "";

keys.forEach(key => {
    key.addEventListener("click", () => {

        const value = key.textContent;

        if (!isNaN(value) || value === ".") {
            expression += value;
            display.textContent = expression;
            return;
        }

        if (value === "C") {
            expression = "";
            display.textContent = "0";
            return;
        }

        if (value === "=") {
            try {
                const result = eval(expression);
                display.textContent = result;
                expression = result.toString(); 
            } catch {
                display.textContent = "Error";
                expression = "";
            }
            return;
        }

        const op = value.replace("×", "*").replace("÷", "/");

        if ("+-*/".includes(expression.slice(-1))) {
 
            expression = expression.slice(0, -1) + op;
        } else {
            expression += op;
        }

        display.textContent = expression;
    });
});
