
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

function hoursWorkedOnDate(obj, formDate){
    let hourOut = []
    obj['timeOutEvents']
        .forEach(el => {
        hourOut.push(el.hour, el.date)
    })

    let hourIn = []
    obj['timeInEvents']
        .forEach(el => {
            hourIn.push(el.hour, el.date)
        })

    let totalHours = 0
    if(hourOut[1] === hourOut[1]){
    totalHours = (hourOut[0] - hourIn[0]) / 100
    }
    else{
    }
    return totalHours
}

function wagesEarnedOnDate(obj, formDate){
    let salary = obj.payPerHour
    let totalOwed = salary * hoursWorkedOnDate(obj, formDate)
    return totalOwed
}

function allWagesFor(obj, formDate){
    // console.log(obj.timeInEvents, obj.timeOutEvents)
    const inEventMap = obj.timeInEvents
        .map(x =>{ return x.date})
    let payable = inEventMap.reduce((memo, formDate) =>memo + wagesEarnedOnDate(obj, formDate)
    , 0)
    return payable
}


