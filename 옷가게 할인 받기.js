function solution(price) {
  if (price >= 100_000 && price < 300_000) {
    return parseInt(price * 0.95);
  } else if (price >= 300_000 && price < 500_000) {
    return parseInt(price * 0.9)
  } else if (price >= 500_000) {
    return larseInt(price * 0.8);
  } else {
    return price;
  }
}
