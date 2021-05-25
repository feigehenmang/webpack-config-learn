export const add = (...args) => {
    return args.reduce((a, b) => (a=a+b,a))
}