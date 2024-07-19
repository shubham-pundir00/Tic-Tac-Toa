function createEle(){
    const container = document.getElementById("container")
    for(let i = 0; i < 3; i++){
        const rowDiv = document.createElement('div')
        rowDiv.className ='row'
        for(j = 1; j <= 3; j++){
            const input = document.createElement('input');
            const id = `b${i*3+j}`;
            input.type = 'text';
            input.id = id;
            input.className = 'cell';
            input.setAttribute('readonly',true);
            input.setAttribute('onclick',`clickEvent('${id}')`);
            rowDiv.appendChild(input);

        } 
        container.appendChild(rowDiv)
    } 
}
createEle()

var firstPlayer = prompt("who want to play first 'X' or 'O'.");
var flag = (firstPlayer === 'O') ? 0 : 1;
var winningPatterns = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  
    [1, 5, 9], [3, 5, 7]              
];

function clickEvent(bId) {
    var button = document.getElementById(bId);
    if (flag == 1) { 
        button.value = "X"; 
        button.disabled = true; 
        flag = 0; 
    } else { 
        button.value = "0"; 
        button.disabled = true; 
        flag = 1; 
    }

    checkWin();
}

function checkWin() {
    var arr = [];
    for (var i = 1; i <= 9; i++) {
        arr[i] = document.getElementById("b" + i).value.toLowerCase();
    }

    for (var pattern of winningPatterns) {
        var [a, b, c] = pattern;
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            document.getElementById("result").innerHTML = arr[a] + " win";
            for (var i = 1; i <= 9; i++) {
                document.getElementById("b" + i).disabled = true;
            }
            
            document.getElementById("b" + a).style.color = "red";
            document.getElementById("b" + b).style.color = "red";
            document.getElementById("b" + c).style.color = "red";

            return;
        }
    }
}

