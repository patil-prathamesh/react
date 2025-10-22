import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password
            })
            console.log(user, " <-user")
            if (user) {
                this.login({ email, password })
            } else {
                return user
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession({ email, password })
            console.log(session, " <-session")
            return session
        } catch (error) {

        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get()
            console.log(user, " <-user")
            return user
        } catch (error) {
            console.log(error, " <- error")
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            
        }
    }
}

const authService = new AuthService();

export default authService;