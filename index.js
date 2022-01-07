
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

function wagesEarnedOnDate(EmployeeRecordObj, formDate){
    let salary = EmployeeRecordObj.payPerHour
    let totalOwed = salary * hoursWorkedOnDate(EmployeeRecordObj, formDate)
    return totalOwed
}

function allWagesFor(employeeRecordObj){
const dateArray = [
    '0044-03-14',
    '0044-03-14'
]

    // console.log(employeeRecordObj.timeInEvents, employeeRecordObj.timeOutEvents)

// 1. pair matching time objects

// 2. grab their hours 

// 3. subtract the hours(out first)

// 4. subtractTotal * payperhour 

// 5. push into empty array (map)

// 6. reduce array values

// 7. return reduction

    const inEventMap = employeeRecordObj.timeInEvents
    .map(x => x)
    for(let i = inEventMap; i===i ; i++){
       let total = (wagesEarnedOnDate(employeeRecordObj,i) + wagesEarnedOnDate(employeeRecordObj,i))
       return total
    }
    return total
    // console.log(employeeRecordObj)
    // console.log("this is an event map")
    // console.log(inEventMap)
    // let payable = inEventMap.reduce((memo, formDate) =>memo + wagesEarnedOnDate(employeeRecordObj, formDate)
    // , 0)
    // return payable
}


