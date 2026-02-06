import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/organisms/Navigation';
import { interiorProjects } from '@/lib/mockData';
import styles from '@/styles/details.module.css';

interface PageProps {
    params: { id: string };
}

export function generateStaticParams() {
    return interiorProjects.map((project) => ({
        id: project.id,
    }));
}

export default function InteriorDetailPage({ params }: PageProps) {
    const project = interiorProjects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <Navigation />

            <div className={styles.content}>
                <Link href="/interior" className={styles.backLink}>← Back to Gallery</Link>

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
                        This project represents a unique approach to {project.category.toLowerCase()} design in {project.location}.
                        Our team focused on creating a space that balances aesthetic beauty with functional excellence.
                        Every detail, from the material selection to the lighting design, was carefully curated to enhance the user experience.
                    </p>
                    <br />
                    <p>
                        The flow of the space encourages natural movement while creating distinct zones for different activities.
                        Natural light plays a crucial role in establishing the atmosphere, changing throughout the day to reveal different aspects of the design.
                    </p>
                </div>
            </div>
        </main>
    );
}
