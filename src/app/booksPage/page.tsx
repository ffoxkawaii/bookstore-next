import path from 'path'
import { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { Open_Sans } from "next/font/google";
import BookPlaceHolder from "../components/body/bestSellingBooks/BookPlaceHolder";
import { promises as fs } from 'fs';

export const metadata: Metadata = {
  title: "Bookstore | Trang nổi bật",
  description: "Trang bán sách"
}

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
});

interface Book {
  image: string;
  type: string;
  bookName: string;
  author: string;
  price: string;
  originPrice?: string;
}

export default async function BookPage() {
  try {
    // Read JSON file
    const jsonPath = path.join(process.cwd(), 'src', 'app', 'booksPage', 'lowDB.json');
    const file = await fs.readFile(jsonPath, 'utf8');
    const data = JSON.parse(file) as { books: Book[] };

    // Validate data
    if (!data || !Array.isArray(data.books)) {
      throw new Error('Invalid data structure');
    }

    return (
      <div className={`flex flex-col justify-center items-center`}>
      <div>
        <p className={`${ebGaramond.className} font-bold text-[40px] my-[50px]`}>
        Sách
        </p>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10`}>
        {data.books.map((book, index) => (
        <BookPlaceHolder
          key={index}
          {...book}
        />
        ))}
      </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading books:', error);
    return (
      <div className="text-center py-10">
        <p>Unable to load books. Please try again later.</p>
      </div>
    );
  }
}
