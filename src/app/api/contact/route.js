import { NextResponse } from 'next/server';
import { connectDB } from '../../../../lib/mongodb';
import Contact from '../../../../models/Contact';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    await connectDB();

    const newContact = await Contact.create({ name, email, message });

    return NextResponse.json({
      success: true,
      message: 'Thanks! Your message has been sent.',
      contact: newContact,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
