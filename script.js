
let counter = 0;

const manager = new StateManager(counter);


function plusOne() {
    manager.addOne();
    updateCounter();
}

function minusOne(){
    manager.removeOne();
    updateCounter();
}

function undo(){
    manager.undo();
    updateCounter();
}

function redo(){
    manager.redo();
    updateCounter();
}

function reset(){
    manager.reset();
    updateCounter();
}

function updateCounter() {
    const counterLabel = document.getElementById('counter');
    counterLabel.innerHTML = manager.state;
}



// let counterHistory = [0]

// let historyIndex = 0;

// function plusOne() {
//     counter++;
//     counterHistory = counterHistory.slice(0, historyIndex + 1);
//     counterHistory.push(counter)
//     historyIndex++;
//     console.log(counterHistory);
//     updateCounter()
// }

// function minusOne(){
//     counter--;
//     counterHistory = counterHistory.slice(0, historyIndex + 1);
//     counterHistory.push(counter)
//     historyIndex++;
//     console.log(counterHistory);
//     updateCounter()
// }

// function updateCounter() {
//     const counterLabel = document.getElementById('counter');
//     counterLabel.innerHTML = counter;
// }

// function undo() {
//     if(historyIndex > 0){
//         historyIndex--;
//         counter = counterHistory[historyIndex];
//         updateCounter()
//     }
// }

// function redo(){
//     if (historyIndex < counterHistory.length-1) {
//         historyIndex++;
//         counter = counterHistory[historyIndex];
//         updateCounter()
//     }
// }