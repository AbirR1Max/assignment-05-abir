let taskNumber = document.getElementById('task-number');
document.getElementById('task1-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task1-btn");
        taskCompleteBtn.setAttribute('disabled',true);
        alert("updated");
 })
document.getElementById('task2-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task2-btn");
        taskCompleteBtn.setAttribute('disabled',true);
        alert("updated");
 })
 
document.getElementById('task3-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task3-btn");
        taskCompleteBtn.setAttribute('disabled',true);
        alert("updated");
 })
 
document.getElementById('task4-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task4-btn");
        taskCompleteBtn.setAttribute('disabled',true);
        alert("updated");
 })
 
document.getElementById('task5-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task5-btn");
        taskCompleteBtn.setAttribute('disabled',true);
        alert("updated");
 })
 
document.getElementById('task6-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task6-btn");
        taskCompleteBtn.setAttribute('disabled',true);
        alert("updated");
 })
//  if (taskNumber == 0){
//     alert("Congratulaton");
//  }
console.log(taskNumber.innerText);