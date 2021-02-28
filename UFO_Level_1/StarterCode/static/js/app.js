// from data.js
let tableData = data;

// YOUR CODE HERE!
//Get a handle on the table body tags
let tbody = d3.select('tbody')

//Callback function to be use in forEach
data.forEach(processRecord);
function processRecord(record) {
let row = tbody.append('tr');
Object.values(record).forEach(
    function (value) {
        row.append('td').text(value);
    }
    );
}