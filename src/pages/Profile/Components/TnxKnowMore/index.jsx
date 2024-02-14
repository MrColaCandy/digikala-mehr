import './style.css'

function TnxKnowMore() {
    return (
        <section className="thankMessageSection--knowMore">
            <h3 className="thankMessageSection__title">سلام سارا، می‌دونستی...</h3>
            <p className="thankMessageSection__message">
                تا حالا <span className="thankMessageSection__messagePercentageOfPartnerShip">۶۷٪</span> بچه‌ها تو این طرح شرکت
                کردن به لطف شما هر ماه <span className="thankMessageSection__messageAmountDonated"> بیش از ۹۸ میلیون تومان </span>
                برای پروژه‌های مختلف کمک جمع
                میشه.
            </p>

            <a className="thankMessageSection__knowMoreBtn" href="#">بیشتر بدانید</a>

        </section>
    )
}

export default TnxKnowMore;