import { createItem } from '@/db/helpers/createItem';
import { ProjectDB, ProjectModel } from '@/db/schemas/projects';

import { NextResponse } from 'next/server';

 
export async function POST(request: Request) {
    try {
        const requestData = await request.json();

        const name = requestData.name as string;
        const client = requestData.client as string;

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
