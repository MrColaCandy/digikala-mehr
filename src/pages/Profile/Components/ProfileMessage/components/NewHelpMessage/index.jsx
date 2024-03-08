import usePersian from "@components/hooks/usePersian";
import { Link } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";

const NewHelpMessage = ({  activeHelp, user  }) => {
 
  const { convert, addCommas } = usePersian();

  return (
    <section className="profileMessage">
      <h3 className="profileMessage__title">
        <FaRegCircleCheck className="profileMessage__icon" />
        <span>خیلی ممنونیم {user?.firstName}</span>
      </h3>

      <p className="profileMessage__text">
        شما با موفقیت به پروژه
        <span className="profileMessage__textBold">
          {" "+activeHelp?.project.topic +" "}
        </span>
        اضافه شدید.
      </p>

      <p className="profileMessage__text">
        <span> از این پس به مدت </span>
        <span className="profileMessage__textBold">
          {activeHelp?.expiration+"  ماه" }
        </span>
        ، مبلغ
        <span className="profileMessage__textBold">
          {activeHelp?.price
            ? convert(addCommas(activeHelp?.price))
            : convert("0")}
        </span>
        <span>تومان ماهانه از حقوق شما کسر و صرف کمک به </span>
        <span>{activeHelp?.project.topic}</span>
        می‌شود.
      </p>

      <p className="profileMessage__text">
        شما می‌توانید با مراجعه به بخش{" "}
        <Link to={`/edit-plan/${activeHelp?.project.id}/${activeHelp?.id}`} className="profileMessage__link">
          ویرایش
        </Link>
        ، پروژه‌ی خود را تغییر دهید یا لغو کنید.
      </p>
    </section>
  );
};

export default NewHelpMessage;
