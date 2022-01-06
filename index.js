
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
createEmployeeRecord(testEmployee)

function createEmployeeRecords(employeeAray){
    employeeAray.forEach(employee => {
        createEmployeeRecord(employee)
    })
}

createEmployeeRecords(twoRows)

