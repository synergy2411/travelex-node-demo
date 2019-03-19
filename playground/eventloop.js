// node filename

function shouldContinue(){
    var pendingTimers = [];         // setTimeout, setInterval etc
    var pendingAsyncTask = [];      // reading, writing over file, accessing local file system etc
    var pendingOSTasks = [];        // network connection, server running etc

    return pendingAsyncTask.length || pendingOSTasks.length || pendingTimers.length;
}

while(shouldContinue()){                // tick

    // checks : 
        // - completion of pendingAsyncTask
        // - completion of pendingOSTask
        // - completion of pendingTimerTask
    
    // - Pause and check again : 
        // - completion of pendingAsyncTask
        // - completion of pendingOSTask
        // - completion of pendingTimerTask

} 


// program terminates