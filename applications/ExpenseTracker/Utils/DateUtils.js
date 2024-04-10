export const minus = (currentDate,quantity) => {
    const date = new Date();
    date.setDate(currentDate.getDate()-quantity);
    date.setFullYear(currentDate.getFullYear())
    date.setMonth(currentDate.getMonth()+1);
    return date;
}

export const formattedDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
}