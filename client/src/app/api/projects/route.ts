import { connectDB } from '@/db/connect';
import { createItem } from '@/db/helpers/createItem';
import { getAll } from '@/db/helpers/getAll';
import { ProjectDB, ProjectModel } from '@/db/schemas/projects';

import { NextResponse } from 'next/server';

export async function GET() {
    await connectDB()
    const data = await getAll(ProjectModel);
    return NextResponse.json({ data });
}


 
export async function POST(request: Request) {
    await connectDB()
    try {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const client = formData.get('client') as string;

        const newProjectData: Partial<ProjectDB> = {
            name,
            client
        }

        const createdProject = await createItem(ProjectModel, newProjectData); 

        return NextResponse.json({ createdProject }, { status: 201 });
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.error();
    }
}
