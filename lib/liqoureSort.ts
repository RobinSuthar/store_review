type Props = [
  {
    id: string;
    StoreId: number;
    Name: string;
    Wine: number;
    Beer: number;
    Liquore: number;
    Question1: string;
    Question2: string;
  }
];

export function LiqourSort(data: Props) {
  const reviewData = {
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  };
  data.map((e) => {
    if (e.Liquore == 5) {
      reviewData.fiveStar++;
    }
    if (e.Liquore == 4) {
      reviewData.fourStar++;
    }

    if (e.Liquore == 3) {
      reviewData.threeStar++;
    }

    if (e.Liquore == 2) {
      reviewData.twoStar++;
    }

    if (e.Liquore == 1) {
      reviewData.oneStar++;
    }
  });
  return reviewData;
}
