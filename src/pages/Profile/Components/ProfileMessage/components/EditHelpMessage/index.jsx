import usePersian from "@components/hooks/usePersian"
import { FaRegCircleCheck } from "react-icons/fa6";

const EditHelpMessage = ({activeHelp}) => {

    const { convert, addCommas } = usePersian()
   
    return (
        <section  className="profileMessage">
            <h3 className="profileMessage__title">
                <FaRegCircleCheck className="profileMessage__icon" />
                <span>پروژه شما با موفقیت ویرایش شد.</span>
            </h3>

            <p className="profileMessage__text">
                از این پس به مدت <span className="profileMessage__textBold">{activeHelp ? convert(activeHelp.expiration) + "ماه" : convert("0")}</span>، مبلغ<span className="profileMessage__textBold">{activeHelp ? convert(addCommas(activeHelp.price)) : convert("0")}</span> تومان ماهانه از حقوق شما کسر و صرف کمک به <span className="profileMessage__textBold">{" " + activeHelp?.project?.topic + " "}</span>
                می‌شود.
            </p>
        </section>
    )
}

export default EditHelpMessage