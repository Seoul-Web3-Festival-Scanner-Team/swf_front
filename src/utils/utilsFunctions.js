export const sleep = async (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export function convertNumberToMoney(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function convertUnixTimeToDateString(unixTime) {
    const date = new Date(unixTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 2자리로 표기
    const day = String(date.getDate()).padStart(2, "0"); // 일은 2자리로 표기

    return `${year}.${month}.${day}`;
}
