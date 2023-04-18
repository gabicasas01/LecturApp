import { Configuration, OpenAIApi } from "openai";
import { searchBooks } from "../Book/searchBook";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getRecommendation = async (req, res) => {
  try {
    const { preferences } = req.body;

    const prompt = `Recommend only title of ten popular, relevant, well-rated, and best-seller books in genres such as ${preferences.genres.join(", ")} and similar.`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.8,
      max_tokens: 400,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const books = response.data.choices[0].text
      .split("\n")
      .filter((book) => book.length > 0);

    const bookTitles = books.map(book => {
      const title = book.split('by')[0].substring(3);
      return title.replace(/\s/g, '+');
    });

    const bookDetailsResponses = await Promise.all(
      bookTitles.map((book) =>
        searchBooks({
          query: {
            title: book,
          },
        })
      )
    );

    const recommendedBooks = bookDetailsResponses.map((response) => {
      const book = response[0]

      return {
        idGoogle: book.idGoogle,
        title: book.title,
        subtitle: book.subtitle,
        authors: book.authors || [],
        publisher: book.publisher,
        genres: book.genres || [],
        description: book.description || "",
        publishedDate: book.publishedDate,
        pageCount: book.pageCount || "",
        coverImage: book.coverImage || "",
        buyLink: book.buyLink,
      };
    });

    res.status(200).send(recommendedBooks)
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send(error.message);
  }
};
