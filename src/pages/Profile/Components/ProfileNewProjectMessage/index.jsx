import { FaRegCircleCheck } from "react-icons/fa6";

const ProfileNewProjectMessage = ({user}) => {
  return (
    <section className="profileMessage">
            <h3 className="profileMessage__title">
                <FaRegCircleCheck className="profileMessage__joinSuccessfulIcon" />
                <span>خیلی ممنونیم {user.name}</span>
            </h3>

            <p className="profileMessage__message">
                شما با موفقیت به پروژه تهیه <span className="profileMessage__projectName">{user.currentProject.title}</span>
                اضافه شدید.
            </p>

            <p className="profileMessage__message">
                از این پس به مدت <span className="profileMessage__monthNumber">{user.currentProject.timeSpan} ماه</span>، مبلغ <span
                    className="profileMessage__projectCost">{user.currentProject.price}</span> تومان ماهانه از حقوق شما کسر و صرف کمک به این پروژه
                می‌شود.
            </p>

            <p className="profileMessage__message">
                شما می‌توانید با مراجعه به بخش <span className="profileMessage__editText">ویرایش</span>، پروژه‌ی خود را تغییر
                دهید یا لغو کنید.
            </p>

        </section>
  )
}

export default ProfileNewProjectMessage