import User from '../../models/User';

export const removeBookFromRead = async (req, res) => {
    try {
      const { userId, bookId } = req.params;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      if (user.booksRead) {
        const index = user.booksRead.findIndex((bookRead) => bookRead == bookId);
        if (index === -1) {
          return res.status(404).json({ message: 'Libro no encontrado en la lista de libros leídos' });
        }
        user.booksRead.splice(index, 1);
        await user.save();
    
        res.status(200).json({ message: 'Libro removido con éxito' });
      }

      else {
        return res.status(404).json({ message: 'Libro no encontrado en la lista de libros leídos' });
      }

    } catch (error) {
      console.log('ESTE ES EL ERROR:', error.message)
      res.status(500).send(error.message);
    }
  };