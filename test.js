let data = [
    {
        "room_number": 1,
        "room_type": "single room",
        "headcount": 1,
        "room_status": 1,
        "room_fee": 2700
    },
    {
        "room_number": 2,
        "room_type": "single room",
        "headcount": 1,
        "room_status": 1,
        "room_fee": 2700
    },
    {
        "room_number": 3,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 4,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 5,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 6,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 7,
        "room_type": "double room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 3500
    },
    {
        "room_number": 8,
        "room_type": "double room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 3500
    },
    {
        "room_number": 9,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 10,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 11,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 12,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 13,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 14,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 15,
        "room_type": "single room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 2700
    },
    {
        "room_number": 16,
        "room_type": "double room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 3500
    },
    {
        "room_number": 17,
        "room_type": "double room",
        "headcount": 0,
        "room_status": 0,
        "room_fee": 3500
    }
]
function filterList(data, filterType) {
    let x = [];
    if (filterType === "double room" || filterType === "single room") {
        x = data.filter((element) => {
            return element.room_type === filterType
        });
    }
    else if (filterType === 2700 || filterType === 3500) {
        x = data.filter((element) => {
            return element.room_fee === filterType
        });
    }
    else if (filterType === 0 || filterType === 1) {
        x = data.filter((element) => {
            return element.room_status === filterType
        });
    }
    return x
}
console.log(filterList(data, 1));