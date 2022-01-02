const {getXDaysBefore,
    getCurrentMonthFromBeginToCurrent} = require('../../../utils/timeController')

const categoryFilter = (category, struct) => {
    const categoryQuery = {
        "category": {
            $in: category
        }
    }
    struct.$and.push(categoryQuery)
}

const timeDurationFilter = (duration, struct) => {
    if (duration.toLowerCase() == "latest") { //if the duration is "latest"
        const {dateFrom:startDate, dateTo:endDate} = getXDaysBefore(3) //get the date from last 3 days
        console.log({
            startDate,
            endDate
        })
        const structure = { //create the query structure when the duration filter is latest.
            "createdAt": {
                $gte : startDate,
                $lte: endDate
            }
        }
        struct.$and.push(structure) //push the structure to the main structure
    }else if (duration.toLowerCase() == "thismonth") { //if the duration is "this month"
        const {firstDay:startDate, currentDay:currentDate} = getCurrentMonthFromBeginToCurrent(29) //get the date from last 3 days
        const structure = { //create the query structure when the duration filter is thismonth.
            "createdAt": {
                $gte : startDate,
                $lte: currentDate
            }
        }
        struct.$and.push(structure) //push the structure to the main structure
    }else if (duration.toLowerCase() == "lastsevendays") { //if the duration is "last 7 days"
        const {dateFrom:startDate, dateTo:endDate} = getXDaysBefore(7) //get the date from last 3 days
        const structure = { //create the query structure when the duration filter is thismonth.
            "createdAt": {
                $gte : startDate,
                $lte: endDate
            }
        }
        struct.$and.push(structure) //push the structure to the main structure
    } 
}
const sortQuery = (sortBy, struct) => {
    if (sortBy == "latest") {
        struct["createdAt"] = -1
    }else if (sortBy == "A-Z") {
        struct["title"] = -1
    }else if (sortBy == "Z-A") {
        struct["title"] = 1
    }
}

const searchQuery = (input, struct) => {
    const string = input.split(" ").filter(data => data != "").join("|")
    const searchRegex = new RegExp(string, "ig")
    const categoryQuery = {
        $or: [
                {
                    "title": searchRegex
                },
                {
                    "category": searchRegex
                },
                {
                    "keyWord": searchRegex
                }
        ]
    }
    struct.$and.push(categoryQuery) 
}

module.exports = {
    categoryFilter,
    timeDurationFilter,
    sortQuery,
    searchQuery
}
