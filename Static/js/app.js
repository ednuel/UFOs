
const tableData = data;


var tbody = d3.select('tbody');


function buildTable(data) {
    
    tbody.html('');

    
    data.forEach((dataRow) => {
        let row = tbody.append('tr'); //html
        
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append('td'); //html
            
            cell.text(val);
        });
    });

};

var filters = {};

function updateFilters() {
    
        
        let inputElement = d3.select(this);
        let inputID = inputElement.attr("id");
        
        let inputValue = inputElement.property("value");
    
        
        if (inputValue) {
            filters[inputID] = inputValue;
        } else{filters ={};};

    

    
    filterTable(filters);
};

function filterTable(obj) {

    
    let filteredData = tableData;
    
    

    Object.entries(obj).forEach(([fkey, fval]) =>{
        
        filteredData = filteredData.filter((row) => row[fkey] === fval)
            

    });

    
    buildTable(filteredData);
};






d3.selectAll("input").on("change",updateFilters);
                    

buildTable(tableData);