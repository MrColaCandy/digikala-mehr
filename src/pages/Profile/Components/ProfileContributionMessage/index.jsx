

const ProfileContributionMessage = ({user,total}) => {
  return (
    <section className="profileMessage">
    <h3 className="profileMessage__title">خیلی ازت ممنونیم {user.name}</h3>
    <p className="profileMessage__message">
      تا حالا <span className="profileMessage__messagePercentageOfPartnerShip">{total.contribution}%</span> بچه‌ها تو این طرح شرکت
      کردن به لطف شما هر ماه <span className="profileMessage__messageAmountDonated"> بیش از {total.fund} میلیون تومان </span>
      برای پروژه‌های مختلف کمک جمع
      میشه.
    </p>
  </section>
  )
}

export default ProfileContributionMessage