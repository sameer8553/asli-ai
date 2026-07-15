import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
  duration: {
    type: String,
    default: '5 min',
  },
  order: {
    type: Number,
    required: true,
  },
});

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: String,
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner',
  },
  thumbnail: {
    type: String,
    default: '/images/course-default.jpg',
  },
  lessons: [LessonSchema],
  totalLessons: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
    default: 'Learn Coding Team',
  },
  language: {
    type: String,
    default: 'English',
  },
  price: {
    type: String,
    default: 'Free',
  },
  enrolled: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  tags: [String],
}, {
  timestamps: true,
});

// ✅ FIX: Proper TypeScript syntax with this: any
CourseSchema.pre('save', function(this: any, next: any) {
  if (this.lessons) {
    this.totalLessons = this.lessons.length;
  }
  next();
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);