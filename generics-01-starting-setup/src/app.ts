

const myPromise = new Promise((resolve, error ) => {
    if (true){
        error('Some error happened')
    }
    setTimeout(() => {
        resolve('foo');
    }, 300);
});
myPromise
    .then(value => {
        return value + ' and bar';
    }, () => { console.log("in then")})
    .then(value => {
        return value + ' and bar again';
    })
    .then(value => {
        return value + ' and again';
    })
    .then(value => {
        return value + ' and again';
    })
    .then(value => {
        console.log(value)
    })
    .catch(err => {
        console.log('In catch')
        console.log(err)
    })