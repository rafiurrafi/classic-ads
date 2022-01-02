const moment = require('moment')

const getTodayDate = () => {
    const startOfDay = new Date(new Date().setHours(6, 0, 0, 0)).toISOString()
    const endOfDay = new Date(new Date().setHours(29, 59, 59,999)).toISOString()
    return {
        startOfDay,
        endOfDay
    }
} //get teh range of today's date

const getTodaysDateByIsoDateInput = (IsoDate) => {
    date = new Date(IsoDate);
        year = date.getFullYear();
        month = date.getMonth()+1;
        dt = date.getDate();

        if (dt < 10) {
        dt = '0' + dt;
        }
        if (month < 10) {
        month = '0' + month;
        }
        return {
            year,
            month,
            date: dt
        }
}


//previous 7 days
const getXDaysBefore = (day) => {
    let dateTo = moment().format('YYYY-MM-DD');
    let dateFrom = moment().subtract(day,'d').format('YYYY-MM-DD');
    // let dateFrom = moment().subtract(7,'d').format('YYYY-MM-DD');

    const from = new Date(dateFrom)
    const to = new Date(new Date(dateTo).setHours(29, 59, 59,999)) //this time will set in gmt time zone

    return {
        dateFrom : from,
        dateTo: to
    }
}


//get the next x days
const getXDaysFromToday = (day) => { // like next 7 days
    let dateTo = moment().format('YYYY-MM-DD');
    let dateFrom = moment().add(day,'d').format('YYYY-MM-DD');
    // let dateFrom = moment().subtract(7,'d').format('YYYY-MM-DD');

    const to = new Date(new Date(dateFrom).setHours(29, 59, 59, 999))
    const from = new Date(new Date(dateTo).setHours(6, 0, 0, 0))

    return {
        dateFrom : from,
        dateTo: to
    }
}

//get current month start date to current date 
const getCurrentMonthFromBeginToCurrent = () => {
    const currentMonthWithYear = `${moment().year()}-${moment().month() + 1}`
    let firstDay = Array.from({length: moment(`${currentMonthWithYear}`).daysInMonth()}, (x, i) => moment().startOf('month').add(i, 'days').format('Y-MM-DD '))[0]
    firstDay = new Date(new Date(firstDay).setHours(06, 00, 00,00))
    let currentDay = `${moment().toISOString()}`
    return {
        firstDay,
        currentDay
    }
}

//export part  
module.exports = {
    getTodayDate,
    getTodaysDateByIsoDateInput,
    getXDaysBefore,
    getXDaysFromToday,
    getCurrentMonthFromBeginToCurrent
}
