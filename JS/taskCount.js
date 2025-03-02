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

        let headinText = document.querySelector("#task1 > h2").innerText;
        let activityBox = document.getElementById("activity-box");
        newChild = document.createElement("p");
        const date = new Date();
        const timeDate = date.toLocaleString('en-US', {hour12: true});
        newChild.innerText ='You have Complete the The Task '+ headinText + ' at ' + timeDate;
        newChild.classList = "p-3 bg-[#F4F7FF]";
        activityBox.appendChild(newChild);



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

        let headinText = document.querySelector("#task2 > h2").innerText;
        let activityBox = document.getElementById("activity-box");
        newChild = document.createElement("p");
        const date = new Date();
        const timeDate = date.toLocaleString('en-US', {hour12: true});
        newChild.innerText ='You have Complete the The Task '+ headinText + ' at ' + timeDate;
        newChild.classList = "p-3 bg-[#F4F7FF]";
        activityBox.appendChild(newChild);

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


        let headinText = document.querySelector("#task3 > h2").innerText;
        let activityBox = document.getElementById("activity-box");
        newChild = document.createElement("p");
        const date = new Date();
        const timeDate = date.toLocaleString('en-US', {hour12: true});
        newChild.innerText ='You have Complete the The Task '+ headinText + ' at ' + timeDate;
        newChild.classList = "p-3 bg-[#F4F7FF]";
        activityBox.appendChild(newChild);

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

        let headinText = document.querySelector("#task4 > h2").innerText;
        let activityBox = document.getElementById("activity-box");
        newChild = document.createElement("p");
        const date = new Date();
        const timeDate = date.toLocaleString('en-US', {hour12: true});
        newChild.innerText ='You have Complete the The Task '+ headinText + ' at ' + timeDate;
        newChild.classList = "p-3 bg-[#F4F7FF]";
        activityBox.appendChild(newChild);

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

        let headinText = document.querySelector("#task5 > h2").innerText;
        let activityBox = document.getElementById("activity-box");
        newChild = document.createElement("p");
        const date = new Date();
        const timeDate = date.toLocaleString('en-US', {hour12: true});
        newChild.innerText ='You have Complete the The Task '+ headinText + ' at ' + timeDate;
        newChild.classList = "p-3 bg-[#F4F7FF]";
        activityBox.appendChild(newChild);

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

        let headinText = document.querySelector("#task6 > h2").innerText;
        let activityBox = document.getElementById("activity-box");
        newChild = document.createElement("p");
        const date = new Date(); 
        const timeDate = date.toLocaleString('en-US', {hour12: true});
        newChild.innerText ='You have Complete the The Task '+ headinText + ' at ' + timeDate;
        newChild.classList = "p-3 bg-[#F4F7FF]";
        activityBox.appendChild(newChild);

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