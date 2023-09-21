
const arg = process.argv.slice(2)

const daireninAlani = (r) => {
    const alan = 3 * (r*r)
    console.log(alan);
}

daireninAlani(arg[0] * 1)
