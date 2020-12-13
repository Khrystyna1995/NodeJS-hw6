module.exports = {
    NAME: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
    EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

}
