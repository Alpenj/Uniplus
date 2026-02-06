import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/organisms/Navigation';
import { architectureProjects } from '@/lib/mockData';
import styles from '@/styles/details.module.css';

interface PageProps {
    params: { id: string };
}

export function generateStaticParams() {
    return architectureProjects.map((project) => ({
        id: project.id,
    }));
}

export default function ArchitectureDetailPage({ params }: PageProps) {
    const project = architectureProjects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <Navigation />

            <div className={styles.content}>
                <Link href="/architecture" className={styles.backLink}>← Back to Gallery</Link>

                <header className={styles.header}>
                    <span className={styles.category}>{project.category}</span>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.meta}>
                        <span>📍 {project.location}</span>
                        <span>📅 {project.year}</span>
                    </div>
                </header>

                <div className={styles.hero}>
                    <img src={project.imageUrl} alt={project.title} className={styles.heroImage} />
                </div>

                <div className={styles.description}>
                    <p>
                        A landmark {project.category.toLowerCase()} structure in {project.location}, this project challenges conventional forms.
                        The structural integrity allows for open, expansive spaces that connect the interior with the surrounding environment.
                    </p>
                    <br />
                    <p>
                        Sustainability was at the core of the design process, utilizing locally sourced materials and energy-efficient systems.
                        The facade interacts with the sunlight to create a dynamic visual experience that changes with the seasons.
                    </p>
                </div>
            </div>
        </main>
    );
}
