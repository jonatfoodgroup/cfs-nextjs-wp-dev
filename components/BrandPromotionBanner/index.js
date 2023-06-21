{/* this would be a static promo banner leaderboard if a brand has one*/}


function BrandPromo() {
    return (
        <>
      <div>
        
        <img
        className="promotionBanner"
        src="https://via.placeholder.com/728x90"
        alt="banner text"
        width={728}
        height={90}
      />
      </div>
      </>
    );
  }
  
  export default function BrandPromotionBanner() {
    return (
      <BrandPromo />
    );
  }

  