import User from '../../models/User';
import Book from '../../models/Book';

export const addBookToRead = async (req, res) => {
  try {
    const { userId } = req.params;
    const { idGoogle, title, subtitle, authors, publisher, genres, description, publishedDate, pageCount, coverImage, buyLink } = req.body;


    if (!idGoogle || !userId) {
      return res.status(400).json({
        message: 'Se requiere el libro y el usuario para agregar a la lista de libros por leer',
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const book = {
      idGoogle,
      title,
      subtitle,
      authors,
      publisher,
      genres,
      description,
      publishedDate,
      pageCount,
      coverImage,
      buyLink
    };

    let savedBook = await Book.findOne({ idGoogle: idGoogle });

    if (!savedBook) {
      savedBook = await Book.create(book);
    }
    
    if (user.booksToRead) {
      var bookIndex = user.booksToRead.indexOf(savedBook._id);
    }

    if (bookIndex >= 0) {
      return res.status(400).json({ message: 'El libro ya ha sido agregado anteriormente' });
    }

    user.booksToRead.push(savedBook._id);
    await user.save();

    res.status(200).json({ message: 'Libro agregado con éxito' });

  } catch (error) {
    console.log('ESTE ES EL ERROR:', error.message)
    res.status(500).send(error.message);
  }
};
