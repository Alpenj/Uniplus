import { Project } from '@/lib/mockData';
import ProjectCard from '@/components/molecules/ProjectCard';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
    projects: Project[];
    title?: string;
    basePath: string;
}

export default function ProjectGrid({ projects, title, basePath }: ProjectGridProps) {
    return (
        <section>
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        href={`${basePath}/${project.id}`}
                    />
                ))}
            </div>
        </section>
    );
}
