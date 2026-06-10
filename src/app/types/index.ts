export type Image = {
    id: number;
    url: string;
    projectId: number;
    isMain: boolean;
}

export type Technology = {
    id: number;
    name: string;
}

export type ProjectTechnology = {
    projectId: number;
    technologyId: number;
    technology: Technology;
}

export type ContactMessage = {
    name: string;
    company?: string;
    email: string;
    message: string;
}

export type Project = {
    id: number;
    title: string;
    description?: string;
    githubLink?: string;
    customerName?: string;
    images: Image[];
    projectTechnologies: ProjectTechnology[];
}