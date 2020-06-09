export const convertTime = (time: number) => {
    const hours = +(time / 100).toFixed();
    const minutes = '' + time % 100;

    const hoursString = ('0' + (hours % 12 || 12)).slice(-2);
    const minuteString = ('0' + minutes).slice(-2);

    return `${hoursString} : ${minuteString} ${hours >= 12 ? 'PM' : 'AM'}`;
}

export const weekDayString = (day: number) => {
    switch (day) {
        case 0: {
            return "Sunday";
        }
        case 1: {
            return "Monday";
        }
        case 2: {
            return "Tuesday";
        }
        case 3: {
            return "Wednesday";
        }
        case 4: {
            return "Thursday";
        }
        case 5: {
            return "Friday";
        }
        case 6: {
            return "Saturday";
        }
        default: {
            return `Invalid day - ${day}`
        }
    }
}