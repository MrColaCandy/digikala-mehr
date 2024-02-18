export function getCode(phone) {
    // mocking response
    return new Promise((resolve, reject) => {
        if (phone) {
            setTimeout(() => {
                resolve("123456");
            }, 2000);
        }
        else {
            reject(new Error("ارسال کد ناموفق بود!"))
        }
    })
}

export function validateCode(phone, code) {
    // mocking response
    return new Promise((resolve, reject) => {
        if (phone && code) {
            setTimeout(() => {
                const token="saddddddddddddddddddddddddddddddddddddddddsadsadsad"
                resolve(token);
            }, 2000);
        }
        else {
            reject(new Error("کد ارسالی نامعتبر است!"))
        }
    })
}

export function validateToken(token){
     // mocking response
     return new Promise((resolve, reject) => {
        if (token) {
            setTimeout(() => {
                resolve(true);
            }, 500);
        }
        else {
            reject(new Error("Token is Invalid!"))
        }
    })
}