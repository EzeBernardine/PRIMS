const Prisoner = require('./models/prisoner');

const resolvers = {
  Query: {
   prisoners: async() => {
     return await Prisoner.find({})
   },
   prisoner: async ({id}) => {
     return await Prisoner.findOne({_id: id})
   }
  },
  Mutation: {
    addPrisoner: async(_, {data}) => {
      const newPrisoner = await new Prisoner(data);
      await newPrisoner.save();
      return 'Prisoner saved'
    }
  }
}

module.exports = resolvers;