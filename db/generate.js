module.exports = function () {
  let categories = ["Politics", "Technology", "Religion", "Programming", "Music", "Sports", "Crime", "Psychology"];
  const generateCategory = () => categories[Math.floor(Math.random() * categories.length)];
  let faker = require("faker");
  let _ = require("lodash");
  return {
    posts: _.times(10, n => {
      return {
        id: n,
        title: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        body: faker.lorem.paragraphs(5),
        likesCount: faker.random.number(),
        created_at: faker.date.future(),
        creator: faker.name.findName(),
        avatar: faker.internet.avatar(),
        category: generateCategory(categories),
      }
    }),
    comments: _.times(5, n => {
      return {
        id: n,
        commentBody: faker.lorem.paragraphs(5),
        created_at: faker.date.recent(),
        commenter: faker.name.findName(),
        avatar: faker.internet.avatar(),
      }
    }),
    replies: _.times(5, n => {
      return {
        id: n,
        body: faker.lorem.sentences(),
        created_at: faker.date.future(),
        replier: faker.name.findName(),
        avatar: faker.internet.avatar(),
      }
    }),
    likes: _.times(2, n => {
      return {
        id: n,
        likesCount: faker.random.number(),
        created_at: faker.date.recent(),
        creator: faker.name.findName(),
        avatar: faker.internet.avatar(),
      }
    })
  }
}
