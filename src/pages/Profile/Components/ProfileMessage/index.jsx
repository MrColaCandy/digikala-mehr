import { useRef, useState, useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { parse, serialize } from "cookie";
import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter"
import "./style.css"
import { stats } from "../../../../data/data";
const ProfileMessage = ({ user }) => {
    const messageRef = useRef(null);
    const [newProject, setNewProject] = useState(parse(document.cookie).newProject || false);
    const { convert, addCommas } = usePersianNumberConverter();
    useEffect(() => {
        if (!messageRef.current) return;
        if (inView(messageRef.current)) {
            setNewProject(false);
            document.cookie = serialize("newProject", false);
            return;
        }
        window.addEventListener("scroll", () => {
            if (inView(messageRef.current)) {
                setNewProject(false);
                document.cookie = serialize("newProject", false);
            }
        })

    }, [])


    const newProjectMessage = <section ref={messageRef} className="profileMessage">
        <h3 className="profileMessage__title">خیلی ازت ممنونیم {user?.name}</h3>
        <p className="profileMessage__text">
            تا حالا <span className="profileMessage__textBold">{convert(stats.contribution)}%</span> بچه‌ها تو این طرح شرکت
            کردن به لطف شما هر ماه <span className="profileMessage__textBold"> بیش از {(convert(addCommas(stats.totalFund))) } میلیون تومان </span>
            برای پروژه‌های مختلف کمک جمع
            میشه.
        </p>
    </section>
    const firstProjectMessage = <section ref={messageRef} className="profileMessage">
        <h3 className="profileMessage__title">
            <FaRegCircleCheck className="profileMessage__icon" />
            <span>خیلی ممنونیم سارا</span>
        </h3>

        <p className="profileMessage__text">
            شما با موفقیت به پروژه تهیه <span className="profileMessage__title">مخزن آب برای حیات وحش گناباد</span>
            اضافه شدید.
        </p>

        <p className="profileMessage__text">
            از این پس به مدت <span className="profileMessage__textBold">{user? convert(user.currentProject.span):0}</span>، مبلغ <span
                className="profileMessage__textBold">{user? convert(addCommas(user.currentProject.cost)):0}</span> تومان ماهانه از حقوق شما کسر و صرف کمک به این پروژه
            می‌شود.
        </p>

        <p className="profileMessage__text">
            شما می‌توانید با مراجعه به بخش <span className="profileMessage__textBold">ویرایش</span>، پروژه‌ی خود را تغییر
            دهید یا لغو کنید.
        </p>

    </section>
    if(newProject==="false")
    return null;
    if (user?.projects.length === 1) {
        return firstProjectMessage;
    }
    if (user?.projects.length > 1) {
        return newProjectMessage;
    }
}
function inView(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;


    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}
export default ProfileMessage