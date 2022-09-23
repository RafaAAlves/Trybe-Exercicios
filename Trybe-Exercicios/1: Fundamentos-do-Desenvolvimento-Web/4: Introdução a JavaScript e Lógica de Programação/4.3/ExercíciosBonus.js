n = 5
let aster = []

for (index = 0; index < n; index += 1) {
    aster = aster + '*'
}
for (index2 = 0; index2 < n; index2 += 1) {
    console.log(aster)
}
console.log('')
console.log('')
console.log('')
console.log('')


n2 = 5
let aster2 = []

for (index = 0; index < n2; index += 1) {
    for (index2 = 0; index2 < n2; index2 += 8) {
        aster2 = aster2 + '*'
        console.log(aster2)
    }    
}   
