import { useRef, useState, useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { parse, serialize } from "cookie";
import usePersian from "@components/hooks/usePersian"
import "./style.css"
import statsData from "@components/data/stats.json";
import { useNavigate } from "react-router-dom"
const ProfileMessage = ({  data }) => {

    const navigate = useNavigate()
    const messageRef = useRef(null);
    const [newProject, setNewProject] = useState(parse(document.cookie).newProject || "false");
    const { convert, addCommas } = usePersian();
    function handleEditButtonClick() {
        navigate("/edit-plan")
    }
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
    const noNewProjectMessage = <section className="profileMessage">
        <h3 className="profileMessage__title">سلام {data?.user?.firstName}، می‌دونستی...</h3>
        <p className="profileMessage__text">
            تا حالا <span className="profileMessage__textBold">{convert(statsData.contribution)}%</span> بچه‌ها تو این طرح شرکت
            کردن به لطف شما هر ماه <span className="profileMessage__textBold"> بیش از {convert(statsData.totalFund)} میلیون تومان </span>
            برای پروژه‌های مختلف کمک جمع
            میشه.
        </p>
    </section>

    const newProjectMessage = <section ref={messageRef} className="profileMessage">
        <h3 className="profileMessage__title">خیلی ازت ممنونیم {data?.user?.firstName}</h3>
        <p className="profileMessage__text">
            تا حالا <span className="profileMessage__textBold">{convert(statsData.contribution)}%</span> بچه‌ها تو این طرح شرکت
            کردن به لطف شما هر ماه <span className="profileMessage__textBold"> بیش از {(convert(addCommas(statsData.totalFund)))} میلیون تومان </span>
            برای پروژه‌های مختلف کمک جمع
            میشه.
        </p>
    </section>
    const firstProjectMessage = <section ref={messageRef} className="profileMessage">
        <h3 className="profileMessage__title">
            <FaRegCircleCheck className="profileMessage__icon" />
            <span>خیلی ممنونیم {data?.user?.firstName}</span>
        </h3>

        <p className="profileMessage__text">
            شما با موفقیت به پروژه <span className="profileMessage__title">{" " + data?.help_history?.length>0? data?.help_history[0]?.name  :""+ " "} </span>
            اضافه شدید.
        </p>

        <p className="profileMessage__text">
            از این پس به مدت <span className="profileMessage__textBold">{data?.help_history?.length>0  ? convert(data?.help_history[0].total_months) : 0}</span>، مبلغ <span
                className="profileMessage__textBold">{data?.help_history?.length>0 ? convert(addCommas(data?.help_history[0].price)) : 0}</span> تومان ماهانه از حقوق شما کسر و صرف کمک به این پروژه
            می‌شود.
        </p>

        <p className="profileMessage__text">
            شما می‌توانید با مراجعه به بخش <span onClick={handleEditButtonClick} className="profileMessage__link">ویرایش</span>، پروژه‌ی خود را تغییر
            دهید یا لغو کنید.
        </p>

    </section>
    if (newProject !="false") {
        if (data?.help_history?.length === 1) {
            return firstProjectMessage;
        }
        if (data?.help_history?.length > 1) {
            return newProjectMessage;
        }
    }
    else {
        if (data?.help_history?.length === 0) return null;
        if (data?.help_history?.length > 0) {
            return noNewProjectMessage;
        }
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