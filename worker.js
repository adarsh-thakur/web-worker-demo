self.onmessage = function (e) {
    console.log(self)
    if (e.data.message == 'Hey Buddy Start the work') {
        self.postMessage({ message: 'Yeah! Work has been started!' });
    } else if (e.data.message == 'Hey, You Done?') {
        self.postMessage({ message: 'Yeah,Completed!' });
    } else if (e.data.message == 'That is okay! You can stop the work') {
        self.postMessage({ message: 'Worked Stopped. Please tell me when to start' });
    }
}