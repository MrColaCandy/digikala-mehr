export function fetchSuggestions() {
    return new Promise((resolve) => {
        resolve([100000, 200000, 500000, 1000000])
    })
}

export function postPrice(data) {
    return new Promise((resolve,reject) => {
        if(data)
        {
            setTimeout(() => {
                resolve("")
            }, 1000);
        }
        else
        {
            reject(new Error("خطایی در برقراری ارتباط رخ داده است!"))
        }
    })
}