export function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomIndex);

export function getRandomItem(array) {
    const random = getRandomIndex(array.length);
    const item = array[random];
    return item;
}
console.log(getRandomItem);