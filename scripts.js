function wait (ms = 0) {
    return new Promise(resolve=> {setTimeout(resolve, ms)});
};

function getRandomBetween (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}