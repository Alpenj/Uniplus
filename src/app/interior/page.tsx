import Navigation from '@/components/organisms/Navigation';
import Hero from '@/components/organisms/Hero';
import ProjectGrid from '@/components/organisms/ProjectGrid';
import { interiorProjects } from '@/lib/mockData';
import styles from './page.module.css';

export default function InteriorPage() {
    return (
        <main>
            <Navigation />
            <Hero
                title="Living in Art"
                subtitle="Crafting atmospheres that breathe life into every corner of your space. Where comfort meets curated aesthetics."
                theme="interior"
            />
            <div className={styles.container}>
                <ProjectGrid
                    title="Curated Portfolios"
                    projects={interiorProjects}
                    basePath="/interior"
                />
            </div>
        </main>
    );
}
