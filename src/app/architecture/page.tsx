import Navigation from '@/components/organisms/Navigation';
import Hero from '@/components/organisms/Hero';
import ProjectGrid from '@/components/organisms/ProjectGrid';
import { architectureProjects } from '@/lib/mockData';
import styles from './page.module.css';

export default function ArchitecturePage() {
    return (
        <main>
            <Navigation />
            <Hero
                title="Form Follows Function"
                subtitle="Structural excellence meeting aesthetic innovation. Designing skylines that define the future."
                theme="architecture"
            />
            <div className={styles.container}>
                <ProjectGrid
                    title="Selected Works"
                    projects={architectureProjects}
                    basePath="/architecture"
                />
            </div>
        </main>
    );
}
