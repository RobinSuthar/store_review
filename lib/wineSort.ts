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

export function wineSort(data: Props) {
  const reviewData = {
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  };
  data.map((e) => {
    if (e.Wine == 5) {
      reviewData.fiveStar++;
    }
    if (e.Wine == 4) {
      reviewData.fourStar++;
    }

    if (e.Wine == 3) {
      reviewData.threeStar++;
    }

    if (e.Wine == 2) {
      reviewData.twoStar++;
    }

    if (e.Wine == 1) {
      reviewData.oneStar++;
    }
  });
  return reviewData;
}
