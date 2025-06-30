export enum CategoryType {
  option1 = "Wine",
  option2 = "Beer",
  option3 = "Staff",
  option4 = "Liquore",
}

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

//Return This
//  Ratings: {
//     oneStar: number;
//     twoStar: number;
//     threeStar: number;
//     fourStar: number;
//     fiveStar: number;
//   };

export function reviewSort(data: Props, basedOn: CategoryType) {
  const reviewData = {
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  };
  data.map((e) => {
    const selecction = e[basedOn as keyof typeof e];
    console.log(selecction);
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
