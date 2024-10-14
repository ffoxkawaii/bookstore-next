import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import { Open_Sans } from "next/font/google";

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
});

type BookPlaceHolder = {
  image: string;
  type: string;
  bookName: string;
  author: string;
  price: string;
  originPrice?: string;
};

const BookPlaceHolder = ({
  image,
  type,
  bookName,
  author,
  price,
  originPrice,
}: BookPlaceHolder) => {
  return (
    <div>
      <div className={`mt-[50px]`}>
        <Image
          src={image}
          width={250}
          height={0}
          alt={`Bìa sách ${bookName}`}
          className={`rounded-xl`}
        ></Image>
      </div>
      <div
        className={`${openSans.className}
        text-[14px] text-[#95989d]
        mt-[9px]`}
      >
        <p>{type}</p>
      </div>
      <div className={`${ebGaramond.className} w-[250px] h-auto mt-[5px]`}>
        <p className={`font-bold text-[24px] leading-[35px] text-[#25272d]`}>
          {bookName}
        </p>
        <p className={`${openSans.className} text-[#62666c]`}>{author}</p>
      </div>
      <div
        className={`${openSans.className} mt-[5px] text-[#565a61] font-bold flex flex-row gap-x-[5px] justify-start`}
      >
        {originPrice && (
          <p className={`text-[#a4a7ac] line-through`}>{originPrice}</p>
        )}
        <p>{price}</p>
      </div>
    </div>
  );
};

export default BookPlaceHolder;
