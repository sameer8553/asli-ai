import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/app/lib/mongodb';
import User from '@/app/models/User';

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { courseId, lessonId } = await request.json();
    
    if (!courseId || !lessonId) {
      return NextResponse.json({ error: 'Course ID and Lesson ID required' }, { status: 400 });
    }
    
    await connectDB();
    
    // ✅ Fix: Use as any to avoid TypeScript error
    const user = await User.findOne({ email: session.user.email } as any);
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Find existing course progress
    let courseProgress = user.progress.find(
      (p: any) => p.courseId.toString() === courseId
    );
    
    if (!courseProgress) {
      // Naya course add karo
      courseProgress = {
        courseId: courseId,
        
        completedLessons: [],
        lastAccessed: new Date()
      };
      user.progress.push(courseProgress);
    }
    
    // Lesson add karo agar already nahi hai
    if (!courseProgress.completedLessons.includes(lessonId)) {
      courseProgress.completedLessons.push(lessonId);
    }
    
    courseProgress.lastAccessed = new Date();
    
    await user.save(); // ✅ Database mein permanently save
    
    return NextResponse.json({ 
      success: true, 
      completed: courseProgress.completedLessons.length,
      message: 'Lesson completed successfully!'
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 });
  }
}