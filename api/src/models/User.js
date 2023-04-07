import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  preferences: {
    genres: [{ type: String }],
    author: [{ type: String }],
    topic: [{ type: String }]
  },
  booksRead: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }],
  booksToRead: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);

export default User;
