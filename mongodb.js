// #030201

Products.find({}).then(docs => {
  res.send(docs);
});

//#030202

Products.find({ name: "bag" }).then(docs => {
  res.send(docs);
});

// #030203

Products.findOne({}).then(doc => {
  res.send(doc);
});

// #030204

Products.findOne({ price: 100 }).then(doc => {
  res.send(doc);
});

// #030205

Products.find({ price: 100 }).then(docs => {
  res.send(docs.length);
});

// #030206

Products.create({ name: "bag", price: 50 });

// #030207

Products.findByIdAndUpdate("507f191e810c19729de860ea", { name: "umbrella" });

// #030208

Products.findByIdAndDelete("507f191e810c19729de860ea");

// #030209

Products.deleteMany({ price: 100 });
