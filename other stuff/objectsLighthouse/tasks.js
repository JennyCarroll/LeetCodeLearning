// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// Object to keep track of everything instead of arrays
function newTask(title, description) {
  // taskTitles.push(title);
  // taskDescription.push(description);
  // taskComplete.push(false);
  const task = {
    title: title,
    description: description,
    complete: false,
    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    completeTask: function () {
      // taskComplete[taskIndex] = true;
      this.complete = true;
    },
    // Print the state of a task to the console in a nice readable way
    logState: function () {
      // const title = taskTitles[taskIndex];
      // const complete = taskComplete[taskIndex];
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
  };
  return task;
}
//
// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
task1.logState(task1); // Clean Cat Litter has not been completed
task1.completeTask(task1);
task1.logState(task1); // Clean Cat Litter has been completed

console.log(tasks);
