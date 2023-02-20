let id = 0;

// create a new row in table when click a button 
document.getElementById('add').addEventListener('click', () => {
    //insert row
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    // set element for row
    row.setAttribute('id', `item-${id}`);
    // to set the value of cell in the row
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-class').value;
    row.insertCell(2).innerHTML = document.getElementById('new-subject').value;
    row.insertCell(3).innerHTML = document.getElementById('new-received-date').value;
    row.insertCell(4).innerHTML = document.getElementById('new-deadline-date').value;
    // compare receive date and deadline date 
    // create receive date and deadlind date
    let receiveDate = new Date(document.getElementById('new-received-date').value);
    let deadlineDate = new Date(document.getElementById('new-deadline-date').value);
    let actions = row.insertCell(5);
    // create buttons with the check mark and x mark emojis and labels
    const checkMarkEmoji = '✅';
    const xMarkEmoji = '❌';
    
    if (receiveDate <= deadlineDate) {
        // If assignment received before or on deadline, add a ")n-tine" button
        let btn = document.createElement('button');
        btn.className = 'btn btn-success';
        btn.id = id;
        btn.innerHTML = checkMarkEmoji + 'On-time';
        actions.appendChild(btn);
    } else {
        // If assignment received after deadline, add  "Late" button
        let btn = document.createElement('button');
        btn.className = 'btn btn-danger';
        btn.id = id;
        btn.innerHTML = xMarkEmoji + 'Late';
        actions.appendChild(btn);
    }
    // ensure that each new row added to the table has a unique identifier
    id++;

});  