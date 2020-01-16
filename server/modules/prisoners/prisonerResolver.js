const Prisoner = require('./models/prisoner');
const Staff = require('./models/staff');
const AdminLogin = require('./models/adminLogin')
const Prison = require('./models/prison')
const {UserInputError, AuthenticationError} = require('apollo-server-express');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
   prisoners: async() => {
     return await Prisoner.find({})
   },
   prisoner: async (_, {id}) => {
     return await Prisoner.findOne({_id: id})
   },
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
    },
   
    login: async (parent, { data }, { models: { AdminLogin } }, info) => {
      const admin = await AdminLogin.findOne({email: data.email }).exec();
  
      if (!admin) {
        throw new AuthenticationError('Invalid credentials');
      }
  
      const matchPasswords = bcrypt.compareSync(data.password, admin.password);
  
      if (!matchPasswords) {
        throw new AuthenticationError('Invalid credentials');
      }
  
      const token = jwt.sign({ id: admin.id }, 'mysecrettoken', { expiresIn: 24 * 10 * 50 });
  
      return {
        token,
      };
    },
    signAdmin: async (parent, {data }, { models: { AdminLogin } }, info) => {
      const admin = await AdminLogin.create({...data});
      return admin;
    },
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


//Logout algorithm
//1.Write a logout function.
//2. Get the token from local storage
//3. Use localStorage.removeItem() to remove the token
//4.Re-direct back to login.