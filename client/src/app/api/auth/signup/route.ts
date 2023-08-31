import { connectDB } from '@/db/connect';
import User from '@/db/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const MIN_PASSWORD_LENGTH = 6;

export async function POST(request: Request) {
  try {
    await connectDB();

    const { fullname, email, password } = await request.json();

    if (password.length < MIN_PASSWORD_LENGTH) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    const userFound = await User.findOne({ email });

    if (userFound) {
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 409 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        fullname,
        email,
        password: hashedPassword,
      });

      const savedUser = await user.save();
      console.log(savedUser);

      return NextResponse.json(
        {
          fullname,
          email,
          createdAt: savedUser.createdAt,
          updatedAt: savedUser.updatedAt,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}
