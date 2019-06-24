
// module.exports = {
//   "db": {
//     "name": "db",
//     "connector": "memory"
//   },
//   "MongoDB": {
//     "url": "mongodb://localhost:27017",
//     "name": "MongoDB",
//     "connector": "mongodb"
//   }
// }

module.exports = {
  "MongoDB": {
    "name": "MongoDB",
    "connector": "mongodb",
    "url": process.env.MONGODB_URI
  }
}