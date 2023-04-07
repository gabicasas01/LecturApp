Book.find({ $text: { $search: "Harry" } }, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      console.log(books);
    }
  });
  