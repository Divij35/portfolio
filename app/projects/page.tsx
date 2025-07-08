import { Metadata } from 'next';
import ProjectsPage from './ProjectsPage';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my projects built with passion.',
};

export default function ProjectPage() {
  return <ProjectsPage />;
}
