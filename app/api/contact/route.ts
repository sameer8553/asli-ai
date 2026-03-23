import { NextResponse } from 'next/server';

// Temporary storage (memory mein save hoga)
let emails: string[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Email ko memory mein save karo
    emails.push(email);
    console.log('📧 Emails saved:', emails);

    // Success response
    return NextResponse.json(
      { 
        message: 'Email saved successfully!',
        email: email,
        totalEmails: emails.length 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to see saved emails
export async function GET() {
  return NextResponse.json({ emails });
}