let taskNumber = document.getElementById('task-number');
let pointSection = document.getElementById('point-section');
document.getElementById('task1-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task1-btn");
        let updatedPoint = parseInt(pointSection.innerText);
        updatedPoint = updatedPoint +1;
        pointSection.innerText = updatedPoint;

        const headinText = document.querySelector("#task1 > h2").innerText;
        console.log(headinText);


        taskCompleteBtn.setAttribute('disabled',true);
        if (tasknum > 0){
            
            alert("updated");
        }
        else {
            alert("Congratulatoin You Have Completed All Tasks")
        }
 })
document.getElementById('task2-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task2-btn");
        let updatedPoint = parseInt(pointSection.innerText);
        updatedPoint = updatedPoint +1;
        pointSection.innerText = updatedPoint;
        taskCompleteBtn.setAttribute('disabled',true);
        if (tasknum > 0){
            
            alert("updated");
        }
        else {
            alert("Congratulatoin You Have Completed All Tasks")
        }
 })
 
document.getElementById('task3-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task3-btn");
        let updatedPoint = parseInt(pointSection.innerText);
        updatedPoint = updatedPoint +1;
        pointSection.innerText = updatedPoint;
        taskCompleteBtn.setAttribute('disabled',true);
        if (tasknum > 0){
            
            alert("updated");
        }
        else {
            alert("Congratulatoin You Have Completed All Tasks")
        }
 })
 
document.getElementById('task4-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task4-btn");
        let updatedPoint = parseInt(pointSection.innerText);
        updatedPoint = updatedPoint +1;
        pointSection.innerText = updatedPoint;
        taskCompleteBtn.setAttribute('disabled',true);
        if (tasknum > 0){
            
            alert("updated");
        }
        else {
            alert("Congratulatoin You Have Completed All Tasks")
        }
 })
 
document.getElementById('task5-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task5-btn");
        let updatedPoint = parseInt(pointSection.innerText);
        updatedPoint = updatedPoint +1;
        pointSection.innerText = updatedPoint;
        taskCompleteBtn.setAttribute('disabled',true);
        if (tasknum > 0){
            
            alert("updated");
        }
        else {
            alert("Congratulatoin You Have Completed All Tasks")
        }
 })
 
document.getElementById('task6-btn')
    .addEventListener('click', function(){
        let tasknum = parseInt(taskNumber.innerText);
        tasknum =tasknum - 1;
        taskNumber.innerText = tasknum;
        const taskCompleteBtn = document.getElementById("task6-btn");
        let updatedPoint = parseInt(pointSection.innerText);
        updatedPoint = updatedPoint +1;
        pointSection.innerText = updatedPoint;
        taskCompleteBtn.setAttribute('disabled',true);
        if (tasknum > 0){
            
            alert("updated");
        }
        else {
            alert("Congratulatoin You Have Completed All Tasks")
        }
 })
//  if (taskNumber == 0){
//     alert("Congratulaton");
//  }
console.log(taskNumber.innerText);