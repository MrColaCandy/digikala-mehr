import { FaRegCircleCheck } from "react-icons/fa6";

import './style.css'


function TnxSuccessfulJoin() {
    return (
        <section className="thankMessageSection--successfulJoin">
            <h3 className="thankMessageSection__title">
                <FaRegCircleCheck className="thankMessageSection__joinSuccessfulIcon" />
                <span>خیلی ممنونیم سارا</span>
            </h3>

            <p className="thankMessageSection__message">
                شما با موفقیت به پروژه تهیه <span className="thankMessageSection__projectName">مخزن آب برای حیات وحش گناباد</span>
                اضافه شدید.
            </p>

            <p className="thankMessageSection__message">
                از این پس به مدت <span className="thankMessageSection__monthNumber">۶ ماه</span>، مبلغ <span
                    className="thankMessageSection__projectCost">۲۰۰.۰۰۰</span> تومان ماهانه از حقوق شما کسر و صرف کمک به این پروژه
                می‌شود.
            </p>

            <p className="thankMessageSection__message">
                شما می‌توانید با مراجعه به بخش <span className="thankMessageSection__editText">ویرایش</span>، پروژه‌ی خود را تغییر
                دهید یا لغو کنید.
            </p>

        </section>
    )
}

export default TnxSuccessfulJoin;