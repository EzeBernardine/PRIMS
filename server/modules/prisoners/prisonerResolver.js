const Prisoner = require('./models/prisoner');
const {UserInputError} = require('apollo-server-express')

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
      try{
        await newPrisoner.save();
      }catch(error){
        throw new UserInputError(error.message,{
          invalidArgs: data
        })
      }
      return 'Prisoner saved'
    },
    editPrisoner: async(_ ,args) => {
      const person = await Prisoner.findOne({_id: args.id})
      person.name = args.name
      person.nationality = args.nationality
      await person.save()
      return 'User edited successfully'
    }
  }
}

module.exports = resolvers;