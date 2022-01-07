
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
    obj.timeInEvents.push(timeInEventObj)
    return obj
}

function createTimeOutEvent(obj, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let timeOutObj = {
        type:"TimeOut",
        date:date,
        hour:parseInt(hour)
    }
    obj.timeOutEvents.push(timeOutObj)
    return obj
}

function hoursWorkedOnDate(employeeObj, soughtDate){
    let wageDateIn = employeeObj.timeInEvents.find(el => {
      return el.date === soughtDate
    })
    let wageDateOut = employeeObj.timeOutEvents.find(el => {
        return el.date === soughtDate
    })
    let totalHours = (wageDateOut.hour - wageDateIn.hour) / 100
    return totalHours
}

function wagesEarnedOnDate(EmployeeRecordObj, formDate){
    let salary = EmployeeRecordObj.payPerHour
    let totalOwed = salary * hoursWorkedOnDate(EmployeeRecordObj, formDate)
    return totalOwed
}

function allWagesFor(employeeRecordObj){
    const inEventMap = employeeRecordObj.timeInEvents
    .map(timeInObj => {
       return wagesEarnedOnDate(employeeRecordObj, timeInObj.date)
    })
    let payable = inEventMap.reduce((a, b) => a + b)
    return payable
}

function calculatePayroll(EmployeeRecordArray){
    let wageArray = EmployeeRecordArray
        .map(employee => { 
            let wage = allWagesFor(employee)
            return wage
        })
    
    let totalPayroll = wageArray.reduce(
        (a, b) => a + b
        )
    return totalPayroll
}


