import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/app/lib/mongodb';
import User from '@/app/models/User';
import Course from '@/app/models/Course';

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    // ✅ Fix: Use as any to avoid TypeScript error
    const user = await User.findOne({ email: session.user.email } as any);
    
    // ✅ Agar progress hai to course details bhi fetch karo
    let userCourses = [];
    
    if (user?.progress && user.progress.length > 0) {
      // Har enrolled course ki details fetch karo
      for (const progress of user.progress) {
        // ✅ Fix: Use findOne instead of findById to avoid TypeScript error
        const course = await Course.findOne({ _id: progress.courseId } as any).lean();
        if (course) {
          userCourses.push({
            id: course._id.toString(),
            title: course.title,
            total: course.totalLessons || course.lessons?.length || 0,
            completed: progress.completedLessons?.length || 0,
            progress: progress.completedLessons || []
          });
        }
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      courses: userCourses,
      totalCourses: userCourses.length
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
  }
}