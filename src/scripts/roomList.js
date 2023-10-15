const list = (data) => {
    let initialList = data;
    let filteredList = [];
    let priceFiltered = false;
    let roomFiltered = false;
    let filterPrice2k = () => {
        if (roomFiltered) {
            filteredList = filteredList.filter((element) => {
                return element.room_fee === 2700
            });
        }
        else {
            filteredList = initialList.filter((element) => {
                return element.room_fee === 2700
            });

        }
    }
    let filterPrice3k = () => {
        if (roomFiltered) {
            filteredList = filteredList.filter((element) => {
                return element.room_fee === 3500
            });
        }
        else {
            filteredList = initialList.filter((element) => {
                return element.room_fee === 3500
            });
        }
    }
    let filterTypeOccupied = () => {
        if (priceFiltered) {
            filteredList = filteredList.filter((element) => {
                return element.room_status === 1
            });

        } else {
            filteredList = initialList.filter((element) => {
                return element.room_status === 1
            });
        }

    }
    let filterTypeVacant = () => {
        if (priceFiltered) {
            filteredList = filteredList.filter((element) => {
                return element.room_status === 0
            });
        } else {
            filteredList = initialList.filter((element) => {
                return element.room_status === 0
            });
        }
    }
    let getFilteredList = ()=>{
        return filteredList;
    }
    let getInitialList = ()=>{
        return initialList;
    }
    return { getInitialList, getFilteredList, filterPrice2k, filterPrice3k, filterTypeOccupied, filterTypeVacant }
}

export default list;