interface CardProps {
  customerInitials: string;
  machineType: string;
  stars: string[];
  reviewText: string;
  cardClass: string;
  contentClass: string;
  avatarClass: string;
  machineTypeClass: string;
  textClass: string;
}

export function ReviewCard({
  customerInitials,
  machineType,
  stars,
  reviewText,
  cardClass,
  contentClass,
  avatarClass,
  machineTypeClass,
  textClass,
}: CardProps) {
  return (
    <div className={cardClass}>
      <div className={contentClass}>
        <div className={avatarClass}>
          <p>{customerInitials}</p>
        </div>
        <div className={machineTypeClass}>
          <p>{machineType}</p>
        </div>
      </div>
      <div className="stars">
        {stars.map((star, index) => (
          <img key={index} src={star} alt="stars" />
        ))}
      </div>
      <h3 className={textClass}>{reviewText}</h3>
    </div>
  );
}
