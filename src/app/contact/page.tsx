import Navigation from '@/components/organisms/Navigation';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <main>
            <Navigation />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Start Your Project</h1>
                    <p className={styles.description}>
                        Ready to transform your space? Tell us about your vision.
                    </p>

                    <form className={styles.form}>
                        <div className={styles.group}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="John Doe" />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                className={styles.textarea}
                                placeholder="Tell us about your project requirements..."
                            />
                        </div>

                        <button type="submit" className={styles.button}>Send Inquiry</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
