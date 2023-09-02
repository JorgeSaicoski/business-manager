import { connectDB } from '@/db/connect';
import { createItem } from '@/db/helpers/createItem';
import { getAll } from '@/db/helpers/getAll';
import  ProjectModel  from '@/db/schemas/projects'; 
import Project from '@/interfaces/Project'; 
import { Model } from 'mongoose';

import { NextResponse } from 'next/server';

export async function GET() {
    await connectDB()
    const data = await getAll(ProjectModel as Model<Project>);
    return NextResponse.json({ data });
}


 
export async function POST(request: Request) {
    await connectDB()
    try {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const client = formData.get('client') as string;

        const newProjectData: Partial<Project> = {
            name,
            client
        }

        const createdProject = await createItem<Project>(ProjectModel, newProjectData);

        return NextResponse.json({ createdProject }, { status: 201 });
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.error();
    }
}
