import './style.css'

function TnxKnowMore() {
    return (
        <section class="thankMessageSection--knowMore">
            <h3 class="thankMessageSection__title">سلام سارا، می‌دونستی...</h3>
            <p class="thankMessageSection__message">
                تا حالا <span class="thankMessageSection__messagePercentageOfPartnerShip">۶۷٪</span> بچه‌ها تو این طرح شرکت
                کردن به لطف شما هر ماه <span class="thankMessageSection__messageAmountDonated"> بیش از ۹۸ میلیون تومان </span>
                برای پروژه‌های مختلف کمک جمع
                میشه.
            </p>

            <a class="thankMessageSection__knowMoreBtn" href="#">بیشتر بدانید</a>

        </section>
    )
}

export default TnxKnowMore;