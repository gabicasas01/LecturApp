import axios from 'axios';
import dotenv from 'dotenv';
import { searchBooksSchema } from './validators';
dotenv.config();

const GOOGLE_BOOKS_KEY = process.env.GOOGLE_BOOKS_KEY;
const GOOGLE_URL = 'https://www.googleapis.com/books/v1/volumes'

export const searchBooks = async (req, res) => {
  try {
    const { title, author } = await searchBooksSchema.validateAsync(req.query);

    const params = {
      q: `intitle:${title}`,
      key: GOOGLE_BOOKS_KEY,
      orderBy: 'relevance',
      maxResults: 40,
    };

    if (author) {
      params.q = params.q+`+inauthor:${author}`;
    }

    const response = await axios.get(`${GOOGLE_URL}`, {
      params,
    });

    const data = response.data.items.map((item) => ({
      idGoogle: item.id,
      title: item.volumeInfo.title,
      subtitle: item.volumeInfo.subtitle,
      authors: item.volumeInfo.authors,
      publisher: item.volumeInfo.publisher,
      genres: item.volumeInfo.categories,
      description: item.volumeInfo.description,
      publishedDate: item.volumeInfo.publishedDate,
      pageCount: item.volumeInfo.pageCount,
      coverImage: item.volumeInfo.imageLinks?.thumbnail,
      buyLink: item.volumeInfo.previewLink,
    }));
    
    res.status(200).send({ data })
  } 
  catch (error) {
    res.status(500).send(error.message);
  }
};
