import usePersian from "@components/hooks/usePersian"
import { useProject } from "@components/hooks/useProject"
import { useNavigate } from "react-router-dom"
import { FaRegCircleCheck } from "react-icons/fa6";
const NewProjectMessage = ({ messageRef }) => {
    const navigate = useNavigate();
    const { convert, addCommas } = usePersian()
    const { userProjects, userData } = useProject()
    function handleEditButtonClick() {
        navigate("/edit-plan")
    }
    return (
        <section ref={messageRef} className="profileMessage">
            <h3 className="profileMessage__title">
                <FaRegCircleCheck className="profileMessage__icon" />
                <span>خیلی ممنونیم {userData?.user?.firstName}</span>
            </h3>

            <p className="profileMessage__text">
                شما با موفقیت به پروژه <span className="profileMessage__title">{ userProjects.length > 0 ? userProjects[0]?.topic : "" } </span>
                اضافه شدید.
            </p>

            <p className="profileMessage__text">
                <span>  از این پس به مدت  </span>
                <span className="profileMessage__textBold">{userProjects?.length > 0 ? convert(userProjects[0].expiration) : 0}</span> ، مبلغ
                <span className="profileMessage__textBold">{userProjects?.length > 0 ? convert(addCommas(userProjects[0].price)) : 0}</span>
                <span >تومان ماهانه از حقوق شما کسر و صرف کمک به </span>
                <span>{userProjects?.length > 0 ? userProjects[0].topic : ""}</span>
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