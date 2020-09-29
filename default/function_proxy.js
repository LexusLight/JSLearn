// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log("Calling fun...")

        return target.apply(thisArg, argArray).toUpperCase()
    }
})