import { FaRegCircleCheck } from "react-icons/fa6";

import './style.css'


function TnxSuccesfullJoin() {
    return (
        <section class="thankMessageSection--successfulJoin">
            <h3 class="thankMessageSection__title">
                <FaRegCircleCheck className="thankMessageSection__joinSuccessfulIcon" />
                <span>خیلی ممنونیم سارا</span>
            </h3>

            <p class="thankMessageSection__message">
                شما با موفقیت به پروژه تهیه <span class="thankMessageSection__projectName">مخزن آب برای حیات وحش گناباد</span>
                اضافه شدید.
            </p>

            <p class="thankMessageSection__message">
                از این پس به مدت <span class="thankMessageSection__monthNumber">۶ ماه</span>، مبلغ <span
                    class="thankMessageSection__projectCost">۲۰۰.۰۰۰</span> تومان ماهانه از حقوق شما کسر و صرف کمک به این پروژه
                می‌شود.
            </p>

            <p class="thankMessageSection__message">
                شما می‌توانید با مراجعه به بخش <span class="thankMessageSection__editText">ویرایش</span>، پروژه‌ی خود را تغییر
                دهید یا لغو کنید.
            </p>

        </section>
    )
}

export default TnxSuccesfullJoin;