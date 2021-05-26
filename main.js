
var worker;
function startWork() {
    if (window.Worker) {
        worker = new Worker('./worker.js');
        worker.onmessage = function (e) {
            document.getElementById('workerMessage').innerHTML = e.data.message;
        };
        worker.postMessage({ 'message': 'Hey Buddy Start the work' });
    }
}
function sendMessage() {
    if (worker) {
        worker.postMessage({ 'message': 'Hey, You Done?' });
    } else {
        document.getElementById('workerMessage').innerHTML = "Please start the worker";
    }
}
function stopWork() {
    if (worker) {
        worker.postMessage({ 'message': 'That is okay! You can stop the work' });
        setTimeout(() => worker.terminate(), 100);
    } else {
        document.getElementById('workerMessage').innerHTML = "Work has stopped. Already please start again";
    }

}