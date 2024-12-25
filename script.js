// Task 1: Random Promise Outcome
// Create a function that returns a promise that randomly resolves or rejects after a random delay (between 1 and 3 seconds). Use Math.random() and Math.floor() to decide the outcome (resolved or rejected).

// Task 2: Promise.all with Random Delays
// Create three promises that each resolve after a random delay (between 1 and 3 seconds). Use Promise.all() to wait for all promises to resolve and then log the results.

// Task 3: Promise.race with Random Delays
// Create two promises that resolve after random delays (between 1 and 3 seconds). Use Promise.race() to log the result of the first promise to resolve.

// Task 4: Multiple Promises with Random Success or Failure
// Create five promises that randomly resolve or reject after random delays (between 1 and 4 seconds). Use Promise.all() to wait for all promises to settle and log the results. Handle both success and failure cases appropriately.


//task 1




//task 2

function task1 () {
    return new Promise (resolve => setTimeout(() => resolve("Task 1 is completed"), 1000));
}

function task2 () {
    return new Promise (resolve => setTimeout(() => resolve("Task 2 is completed"), 2000));
}

function task3 () {
    return new Promise (resolve => setTimeout(() => resolve("Task 3 is completed"), 3000));
}

Promise.all([task1(),task2(),task3()])
  .then(results => {console.log(results)})
  .catch(error => console.log(error));



//task 3

function task11 () {
    return new Promise (resolve => setTimeout(() => resolve("this task11 is already here"), 1000));
}

function task22 () {
    return new Promise (resolve => setTimeout(() => resolve("this task22 is already here"), 3000));
}


Promise.race([task11(), task22()])
  .then(result => console.log(result))
  .catch(error => console.log(error));