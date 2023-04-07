import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  idGoogle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  authors: [{
    type: String,
    required: true,
  }],
  publisher: {
    type: String,
    required: false,
  },
  genres: [{
    type: String,
    required: false,
  }],
  description: {
    type: String,
    required: false,
  },
  publishedDate: {
    type: String,
    required: false,
  },
  pageCount: {
    type: String,
    required: false,
  },
  coverImage: {
    type: String,
    required: false,
  },
  buyLink: {
    type: String,
    required: false,
  },
});

bookSchema.index({ "$**": "text" });

const Book = mongoose.model('Book', bookSchema);

export default Book;
