

const myPromise = new Promise((resolve, error ) => {
    if (true){
        error((reason: string) => console.log('Some error happened ' + reason))
    }

    setTimeout(() => {
        resolve('foo');
    }, 300);
});
myPromise
    .then(value => {
        throw 'some'
        return value + ' and bar';
    })
    .then(value => {
        return value + ' and bar again';
    })
    .catch(err => {
        console.log('In catch ')
        err(' WoooWeee')
    })

// myPromise
//     .then(value => {
//         return value + ' and bar';
//     }, (reason) => {
//         console.log("in then "+ reason);
//         reason("wow crazy")
//     })
//     .then(value => {
//         return value + ' and bar again';
//     }, (reason) => {
//         console.log("in then 1 " + reason)
//     })
//     .then(value => {
//         return value + ' and again';
//     }, (reason) => {
//         console.log("in then" + reason)
//     })
//     .then(value => {
//         return value + ' and again';
//     }, (reason) => {
//         console.log("in then" + reason)
//     })
//     .then(value => {
//         console.log(value)
//     })
//     .catch(err => {
//         console.log('In catch')
//         console.log(err)
//     })