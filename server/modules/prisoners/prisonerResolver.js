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
    
  }
}

module.exports = resolvers;