export function getCode(phone) {
    // mocking response
    return new Promise((resolve, reject) => {
        if (phone) {
            setTimeout(() => {
                resolve("here your fake code: 123456");
            }, 2000);
        }
        else {
            reject(new Error("can't send you a fake code!"))
        }
    })
}

export function validateCode(phone, code) {
    // mocking response
    return new Promise((resolve, reject) => {
        if (phone && code) {
            setTimeout(() => {
                const token="sdasds2as15d15sa2defsldmfsd"
                resolve(token);
            }, 2000);
        }
        else {
            reject(new Error("code is not valid!"))
        }
    })
}