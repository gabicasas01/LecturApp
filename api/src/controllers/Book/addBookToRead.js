import User from '../../models/User';
import Book from '../../models/Book';

export const addBookToRead = async (req, res) => {
  try {
    const { userId } = req.params;
    const { idGoogle, title, subtitle, authors, publisher, genres, description, publishedDate, pageCount, coverImage, buyLink} = req.body;

    
    if (!idGoogle) {
        return res.status(400).json({
            message: 'Se requiere el libro para agregar a la lista de libros leídos',
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

    if (user.booksToRead.length > 1) {
        var bookExists = user.booksToRead.some((bookToRead) => bookToRead.idGoogle == book.idGoogle);
    }
    if (bookExists) {
        return res.status(400).json({ message: 'El libro ya ha sido agregado anteriormente' });
    }

    let savedBook = await Book.findOne({ idGoogle: book.idGoogle });

    if (!savedBook) {
      savedBook = await Book.create(book);
    }

    user.booksToRead.push(savedBook);
    await user.save();

    res.status(200).json({ message: 'Libro agregado con éxito' });
  } catch (error) {
    console.log('ESTE ES EL ERROR:', error.message)
    res.status(500).send(error.message);
  }
};
