
export const calculateTotalPrice = (ratePerNight, numberOfNights) => {
    return ratePerNight * numberOfNights;
  };

  export const applyDiscount = (totalPrice, discountPercentage) => {
    return totalPrice - (totalPrice * discountPercentage) / 100;
  };
  