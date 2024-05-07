export default function FormatDate (isoDateString) {
    const date = new Date(isoDateString);

    const Year = date.getFullYear();
    const Month = String(date.getMonth() + 1).padStart(2, "0");
    const Day = String(date.getDate()).padStart(2, "0");
    const Hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const Seconds = String(date.getSeconds()).padStart(2, "0");

    return `${Year}-${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`;
}