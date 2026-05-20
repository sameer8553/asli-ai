import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from '@/app/lib/mongodb';
import User from '@/app/models/User';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // ✅ Check if credentials exists
        if (!credentials) {
          throw new Error('No credentials provided');
        }
        
        // ✅ Extract email and password safely
        const email = credentials.email as string;
        const password = credentials.password as string;
        
        console.log('📧 Email:', email);
        console.log('🔑 Password length:', password?.length);
        
        if (!email || !password) {
          console.log('❌ Missing email or password');
          throw new Error('Please enter email and password');
        }

        await connectDB();
        console.log('✅ Database connected');
        
        const user = await User.findOne({ email: email } as any);
        console.log('👤 User found:', user ? 'Yes' : 'No');
        
        if (!user) {
          throw new Error('No user found with this email');
        }
        
        const isValid = await bcrypt.compare(password, user.password);
        console.log('🔐 Password valid:', isValid);
        
        if (!isValid) {
          throw new Error('Invalid password');
        }
        
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };