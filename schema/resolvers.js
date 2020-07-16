import createJWT from '../helpers/createJWT.js'
import bcrypt from 'bcrypt';
import getUser from '../helpers/getUser.js';

export const resolvers = {
    Query: {
        getAllRecipes: async (root, args, { Recipe }) => {
            const allRecipes = await Recipe.find()
                .populate('user')
            return allRecipes
        },
        getRecipe: async (root, { id }, { Recipe }) => {
            const recipe = Recipe.findOne({ _id: id })
            return recipe
        },
        getUser: async (root, { token }, { User }) => {
            const currentUser = await getUser(token)
            if (currentUser) return currentUser
            return null
        }
    },
    Mutation: {
        addRecipe: async (root, { name, category, description, instructions, userID }, { Recipe }) => {
            // create recipe, save and return it
            const newRecipe = await new Recipe({
                name,
                category,
                description,
                instructions,
                user: userID
            }).save()
            return newRecipe
        },
        loginUser: async (root, { username, password }, { User, currentUser }) => {
            // find user
            const user = await User.findOne({ username: username })

            // throw error if user not found
            if (!user) throw new Error('User not found')

            // validate password, throw error if not correct password
            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) throw new Error('Incorrect password')

            // return valid token if correct credentials
            return ({
                token: createJWT(user),
            })
        },
        signupUser: async (root, { username, password, email }, { User }) => {
            // find user
            const user = await User.findOne({ username: username })

            // user already exists, throw error
            if (user) throw new Error('User already exists')

            // create new user
            const newUser = await new User({
                username: username,
                password: password,
                email: email
            }).save()

            // return valid token
            return ({ token: createJWT(newUser) })
        }
    }
}