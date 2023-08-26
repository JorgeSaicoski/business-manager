import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                username: { label: "Username", type:"text", placeholder:"John Senna"},
                password: { label: "Password", type:"password"}
            },
            async authorize(credentials, req){
                const user = { id: "1", full_name: "Jorge Adriano", username: "Jorge"}
                return user
            }
        })
    ]
})

