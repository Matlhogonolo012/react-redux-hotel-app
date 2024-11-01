export const calculateTotalPrice = (ratePerNight, numberOfNights) => {
  if (typeof ratePerNight !== "number" || typeof numberOfNights !== "number") {
    throw new Error("Both ratePerNight and numberOfNights must be numbers");
  }

  if (ratePerNight < 0 || numberOfNights < 0) {
    throw new Error("Rate per night and number of nights must be non-negative");
  }

  return ratePerNight * numberOfNights;
};

export const applyDiscount = (totalPrice, discountPercentage) => {
  if (
    typeof totalPrice !== "number" ||
    typeof discountPercentage !== "number"
  ) {
    throw new Error("Both totalPrice and discountPercentage must be numbers");
  }

  if (totalPrice < 0) {
    throw new Error("Total price must be non-negative");
  }

  if (discountPercentage < 0) {
    discountPercentage = 0;
  } else if (discountPercentage > 100) {
    discountPercentage = 100;
  }

  return totalPrice - (totalPrice * discountPercentage) / 100;
};
