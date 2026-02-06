import Link from 'next/link';
import { Project } from '@/lib/mockData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
    href: string;
}

export default function ProjectCard({ project, href }: ProjectCardProps) {
    return (
        <Link href={href} className={styles.card}>
            {/* 
        Using standard img tag for now to avoid Next.js Image configuration complexity with external URLs 
        In production, we would configure next.config.js for remote patterns
      */}
            <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.image}
                loading="lazy"
            />
            <div className={styles.overlay}>
                <p className={styles.subtitle}>{project.category}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.location}>📍 {project.location}</p>
            </div>
        </Link>
    );
}
