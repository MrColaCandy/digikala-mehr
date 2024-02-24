import usePersian from "@components/hooks/usePersian"
import { useProject } from "@components/hooks/useProject"
import { FaRegCircleCheck } from "react-icons/fa6";
const EditProjectMessage = ({ messageRef, }) => {

    const { convert, addCommas } = usePersian()
    const { userProjects } = useProject()

    return (
        <section ref={messageRef} className="profileMessage">
            <h3 className="profileMessage__title">
                <FaRegCircleCheck className="profileMessage__icon" />
                <span>پروژه شما با موفقیت ویرایش شد.</span>
            </h3>

            <p className="profileMessage__text">
                از این پس به مدت <span className="profileMessage__textBold">{userProjects?.length > 0 ? convert(userProjects[0].expiration) + " ماه" : 0}</span>، مبلغ <span
                    className="profileMessage__textBold">{userProjects?.length > 0 ? convert(addCommas(userProjects[0].price)) : 0}</span> تومان ماهانه از حقوق شما کسر و صرف کمک به  <span className="profileMessage__textBold">{userProjects.length > 0 ? " " + userProjects[0]?.topic + " " : ""}</span>
                می‌شود.
            </p>
        </section>
    )
}

export default EditProjectMessage