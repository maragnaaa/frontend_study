import { ReviewCard } from '../ui/ReviewCard';
import '../../styles/reviews.css';

function Reviews() {
  return (
    <div className="review-section">
      <h1 className="review-title">Customer Reviews</h1>
      <div className="cards-row">
        <ReviewCard
          customerInitials="R.M."
          machineType="ThinkPad X1 Carbon"
          stars={[
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
          ]}
          reviewText='"Surprisingly light for how sturdy it feels, and it has kept up with a full workday of meetings without slowing down."'
          cardClass="review-card"
          contentClass="review-card-row"
          avatarClass="review-avatar"
          machineTypeClass="review-product"
          textClass="review-text"
        />
        <ReviewCard
          customerInitials="A.K."
          machineType="Yoga 9i"
          stars={[
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
          ]}
          reviewText='"The OLED screen is the best part — switching between laptop and tablet mode is smooth and the pen just works."'
          cardClass="review-card"
          contentClass="review-card-row"
          avatarClass="review-avatar"
          machineTypeClass="review-product"
          textClass="review-text"
        />
        <ReviewCard
          customerInitials="D.S."
          machineType="ThinkCentre"
          stars={[
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star.svg',
            '/src/assets/icons/star-off.svg',
          ]}
          reviewText='"Set it up in minutes and it has not given us a single issue running daily business tasks."'
          cardClass="review-card"
          contentClass="review-card-row"
          avatarClass="review-avatar"
          machineTypeClass="review-product"
          textClass="review-text"
        />
      </div>
    </div>
  );
}

export default Reviews;
