export const sleep = async (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export function convertNumberToMoney(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
