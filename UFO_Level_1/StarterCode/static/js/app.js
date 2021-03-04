// from data.js
let tableData = data;

//Get a handle on the table body and button tags
let tbody = d3.select('tbody');
let button = d3.select('#filter-btn');

// processRecord(tableInfo)
button.on('click', handleClick);

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

//Filter the table
function handleClick() {
    let date = d3.select('input').property('value');
    let selectData = tableInfo;

    if (date) {
        selectData = selectData.filter(row => row.datetime === date);
    };

    d3.select('input').property('value','');
    processRecord(selectData);
};
