
function createEmployeeRecord(employeeInfo){
    let employeeObj = {
        firstName:employeeInfo[0],
        familyName:employeeInfo[1],
        title:employeeInfo[2],
        payPerHour:parseInt(employeeInfo[3]),
        timeInEvents:[],
        timeOutEvents:[]
        }
    return employeeObj
}



function createEmployeeRecords(employeeAray){
    return employeeAray.forEach(employee => {
        return createEmployeeRecord(employee)
    })
}

// createEmployeeRecords(twoRows)

