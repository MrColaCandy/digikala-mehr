

const usePersianNumberConverter = () => {
    const convert = (number) => {
        const persian = {
            0: "۰",
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
        };
        return number.toString().replace(/[0-9]/g, (digit) => persian[digit]);
    };

    const addCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return {  convert, addCommas };
};

export default usePersianNumberConverter;
