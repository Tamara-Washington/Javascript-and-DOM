// from data.js
let tableData = data;

//Get a handle on the table body 
let tbody = d3.select('tbody');
//Get a handle on the button
let button = d3.select('#filter-btn');

button.on('click', handleClick);


//Callback function to be use in forEach
    data.forEach(function(record){
    let row = tbody.append('tr');
    Object.values(record).forEach(
        function (value) {
            row.append('td').text(value);
        }
    );
})

//Filter the table
function handleClick() {

    let inputElement = d3.select('#datetime');
    //Capture date entered
    let inputValue = inputElement.property('value');
    console.log(inputValue);
    //Empty original data
    d3.select('tbody').html('');
    var tbody = d3.select ('tbody')
    if (inputValue) {
        selectData = tableData.filter(row => row.datetime == inputValue);
    };
    console.log(selectData);
    selectData.forEach(processRecord);
    function processRecord(record) {
        let row = tbody.append('tr');
        Object.values(record).forEach(
            function (value) {
                row.append('td').text(value);
            }
        );
    }

};
