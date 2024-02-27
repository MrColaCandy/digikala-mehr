import usePersian from "@components/hooks/usePersian"
import { useNavigate } from "react-router-dom"
import { FaRegCircleCheck } from "react-icons/fa6";
import { useProject } from "@components/hooks/useProject";
const NewProjectMessage = ({ messageRef}) => {
    const{user,activeProject}= useProject();
    const navigate = useNavigate();
    const { convert, addCommas } = usePersian()
    function handleEditButtonClick() {
        navigate("/edit-plan")
    }
    return (
        <section ref={messageRef} className="profileMessage">
            <h3 className="profileMessage__title">
                <FaRegCircleCheck className="profileMessage__icon" />
                <span>خیلی ممنونیم {user?.user?.firstName}</span>
            </h3>

            <p className="profileMessage__text">
                شما با موفقیت به پروژه <span className="profileMessage__textBold">{" "+activeProject?.project?.topic+" "}</span>
                اضافه شدید.
            </p>

            <p className="profileMessage__text">
                <span>  از این پس به مدت  </span>
                <span className="profileMessage__textBold">{activeProject? convert(activeProject?.expiration):convert("0")}</span>، مبلغ
                <span className="profileMessage__textBold">{activeProject? convert(addCommas(activeProject.price)):convert("0")}</span>
                <span >تومان ماهانه از حقوق شما کسر و صرف کمک به </span>
                <span>{" "+activeProject?.project?.topic+" "}</span>
                می‌شود.
            </p>

            <p className="profileMessage__text">
                شما می‌توانید با مراجعه به بخش <span onClick={handleEditButtonClick} className="profileMessage__link">ویرایش</span>، پروژه‌ی خود را تغییر
                دهید یا لغو کنید.
            </p>

        </section>
    )
}

export default NewProjectMessage