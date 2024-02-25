import usePersian from "@components/hooks/usePersian"
import { useProject } from "@components/hooks/useProject"
import { FaRegCircleCheck } from "react-icons/fa6";
const EditProjectMessage = ({ messageRef, }) => {

    const { convert, addCommas } = usePersian()
    const { activeProject } = useProject()

    return (
        <section ref={messageRef} className="profileMessage">
            <h3 className="profileMessage__title">
                <FaRegCircleCheck className="profileMessage__icon" />
                <span>پروژه شما با موفقیت ویرایش شد.</span>
            </h3>

            <p className="profileMessage__text">
                از این پس به مدت <span className="profileMessage__textBold">{activeProject ? convert(activeProject.expiration) + "ماه" : convert("0")}</span>، مبلغ<span className="profileMessage__textBold">{activeProject ? convert(addCommas(activeProject.price)) : convert("0")}</span> تومان ماهانه از حقوق شما کسر و صرف کمک به <span className="profileMessage__textBold">{" " + activeProject?.topic + " "}</span>
                می‌شود.
            </p>
        </section>
    )
}

export default EditProjectMessage