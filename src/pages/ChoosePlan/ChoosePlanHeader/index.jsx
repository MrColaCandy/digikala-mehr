import "./style.css"

const ChoosePlaneHeader = () => {
    return (
        <section className="choosePlan">
            <div className="choosePlan__header">
                <div className="choosePlan__currentPhase">مرحله ۲ از ۳</div>
                <div className="choosePlan__headerTextGreen">از اینکه تصمیم گرفتی با ما همراه باشی ازت ممنونیم.</div>
                <div className="choosePlan__headerText">حالا تو این مرحله باید انتخاب کنی کمک‌ات صرف چه <span className="choosePlane_TextGreen">کار خیری</span> بشه.</div>
            </div>
        </section>
    )
}

export default ChoosePlaneHeader