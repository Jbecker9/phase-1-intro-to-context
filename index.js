
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
    let newArray = []
    employeeAray.forEach(employee => {
        newArray.push(createEmployeeRecord(employee))
    })
    return newArray
}

function createTimeInEvent(obj, dateStamp){
    let [date, hour] = dateStamp.split(" ")
    let timeInEventObj = {
        type:"TimeIn",
        date:date,
        hour:parseInt(hour)
    }
    console.log(timeInEventObj)
    obj.timeInEvents.push(timeInEventObj)
    return obj
}


