// src/pages/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { projects } from '../assets/tempData/projects';
import PdfViewer from '../utils/PdfViewer';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found.</div>;

  return (
    <PdfViewer base64={project.base64} title={project.title} />
  );
}
