import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

export function sort7DaysBoolean(date) {
    const distance = formatDistanceToNowStrict(new Date(date), { unit: 'day' });
    if (parseInt(distance, 10) < 7) {
        return true;
    } return false;
}

export function sortTodayBoolean(date) {
    const distance = formatDistanceToNowStrict(new Date(date), { unit: 'day' });
    if (parseInt(distance, 10) === 1) {
        return true;
    } return false;
}
