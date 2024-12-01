import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.linkedin.com/posts/era-axis_ecowatch-ghana-awareness-activity-7249679333001236481-1Jio?utm_source=share&utm_medium=member_desktop"
          h3="Ecowatch"
          p="Gas emission monitoring device"
        />
      </div>
    </section>
  );
}

export default Projects;
