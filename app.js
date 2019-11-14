// калькулятор
document.addEventListener('DOMContentLoaded', function () {
    let expression = '';
    let button = document.getElementsByClassName('btn'); // массив с кнопками

    // функция отображения в поле input
    let showPushButton = function() {

        for(let i = 0; i < button.length; i++) {
                button[i].onclick = function(event) {

                    if(event.target.innerHTML === 'C') {
                        expression = '';
                        document.getElementById('inptext').value = '';
                    } else if (event.target.innerHTML === 'CE') {
                        expression = expression.substring(0, expression.length-1);
                        document.getElementById('inptext').value = expression;
                    } else if(event.target.innerHTML === '=') {
                        if (expression.includes('+')) {
                            plus();
                        } else if (expression.includes('/')) {
                            devision();
                        } else if (expression.includes('*')) {
                            multy();
                        } else if (expression.includes('-')) {
                            minus();
                        }
                    } else {
                        expression += event.target.innerHTML;
                        console.log('eee', expression, typeof (expression));
                        let r = document.getElementById('inptext').value += event.target.innerHTML;
                        if(r.toString() === isNan(r)) {
                            document.getElementById('inptext').value = 'Error';
                            }
                        }
                    }
                };
            }
    showPushButton();

    function plus() {
        let arrayExpr = expression.split('+');
        let result = Number(arrayExpr[0]) + Number(arrayExpr[1]);
        document.getElementById('inptext').value = result;
    };

    function devision() {
        let arrayExpr = expression.split('/');
        if(arrayExpr[1] === '0') {
            alert('Division error');
        } else {
        let result = Number(arrayExpr[0]) / Number(arrayExpr[1]);
        document.getElementById('inptext').value = result;
        }
    };

    function multy() {
        let arrayExpr = expression.split('*');
        let result = Number(arrayExpr[0]) * Number(arrayExpr[1]);
        document.getElementById('inptext').value = result;
    };

    function minus() {
        let arrayExpr = expression.split('-');
        let result = Number(arrayExpr[0]) - Number(arrayExpr[1]);
        document.getElementById('inptext').value = result;
    };
});