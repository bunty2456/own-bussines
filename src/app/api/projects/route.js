import { connectDB } from '@/lib/mongodb';
import Project from '@/models/Project';

export async function GET() {
  await connectDB();
  const projects = await Project.find({});
  return Response.json(projects);
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const project = new Project(body);
  await project.save();
  return Response.json({ success: true, message: 'Project created' });
}
