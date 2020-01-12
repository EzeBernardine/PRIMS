const Prisoner = require('./models/prisoner');
const Staff = require('./models/staff');
const Prison = require('./models/prison')
const {UserInputError} = require('apollo-server-express')

const resolvers = {
  Query: {
   prisoners: async() => {
     return await Prisoner.find({})
   },
   prisoner: async (_, {id}) => {
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
    deletePrisonerRecord: async(_, {id}) => {
      await Prisoner.findByIdAndDelete({_id: id})
      return 'Prisoner deleted successfuly'
    },
    addStaff: async(_, {data}) => {
      const staffData = await new Staff(data)
      await staffData.save();
      return 'Staff data added'
    },
    addPrison: async(_, {data}) => {
      const prison = await new Prison(data)
      await prison.save();
      return 'Prison created successfully'
    }
    // editPrisoner: async(_ ,args) => {
    //   const person = await Prisoner.findOne({_id: args.id})
    //   person.name = args.name
    //   person.nationality = args.nationality
    //   await person.save()
    //   return 'User edited successfully'
    // }
  }
}

module.exports = resolvers;