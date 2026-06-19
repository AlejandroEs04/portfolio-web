import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ContactMe } from './pages/contact-me/contact-me';
import { Projects } from './pages/projects/projects';
import { Project } from './pages/project/project';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'contact-me',
        component: ContactMe
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'projects/:projectId',
        component: Project
    }
];
