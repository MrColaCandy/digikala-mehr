const useMoney = () => {
    const ones = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
    const tens = ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
    const teens = ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هیجده', 'نونزده'];
    const hundreds = ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];

    function convert_millions(num) {
        if (num >= 1000000) {
            return convert_millions(Math.floor(num / 1000000)) + " ملیون " + convert_thousands(num % 1000000);
        } else {
            return convert_thousands(num);
        }
    }

    function convert_thousands(num) {
        if (num >= 1000) {
            return convert_hundreds(Math.floor(num / 1000)) + " هزار " + convert_hundreds(num % 1000);
        } else {
            return convert_hundreds(num);
        }
    }

    function convert_hundreds(num) {
        if (num > 99) {
            let remainder = num % 100;
            if (remainder !== 0) {
                return hundreds[Math.floor(num / 100)] + " و " + convert_tens(remainder);
            } else {
                return hundreds[Math.floor(num / 100)];
            }
        } else {
            return convert_tens(num);
        }
    }

    function convert_tens(num) {
        if (num < 10) return ones[num];
        else if (num >= 10 && num < 20) return teens[num - 10];
        else {
            let remainder = num % 10;
            if (remainder !== 0) {
                return tens[Math.floor(num / 10)] + " و " + ones[num % 10];
            } else {
                return tens[Math.floor(num / 10)];
            }
        }
    }

    function convertToLetters(num) {
        if (num == 0) return "صفر";
        else return convert_millions(num);
    }

    return { convertToLetters };
}

export default useMoney;
