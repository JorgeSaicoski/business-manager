/*
import { getAll } from '@/db/helpers/getAll';
import  ProjectModel  from '@/db/schemas/projects'; 
import Project from '@/interfaces/Project'; 
import { Model } from 'mongoose';

import { NextResponse } from 'next/server';

export async function GET() {
    const data = await getAll(ProjectModel as Model<Project>);
    return NextResponse.json({ data });
}