type Props = [
  {
    id: string;
    StoreId: number;
    Name: string;
    Wine: number;
    Beer: number;
    Staff: number;
    Liquore: number;
    Question1: string;
    Question2: string;
  }
];

export function StaffSort(data: Props) {
  const reviewData = {
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  };
  data.map((e) => {
    if (e.Staff == 5) {
      reviewData.fiveStar++;
    }
    if (e.Staff == 4) {
      reviewData.fourStar++;
    }

    if (e.Staff == 3) {
      reviewData.threeStar++;
    }

    if (e.Staff == 2) {
      reviewData.twoStar++;
    }

    if (e.Staff == 1) {
      reviewData.oneStar++;
    }
  });
  return reviewData;
}
