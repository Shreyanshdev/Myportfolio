import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/StudyNotion.png';
import freshBurger from '../../assets/razorpay.png';
import hipsster from '../../assets/analysis.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Shreyanshdev/StudyNotion"
          h3="Study Notion"
          p="ED-tech App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Shreyanshdev/razor-pay_clone"
          h3="Razorpay-clone"
          p="Frontend ui"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Shreyanshdev/analysis_parkinson"
          h3="Parkinson's Disease"
          p="Data Analysis"
        />
        
      </div>
    </section>
  );
}

export default Projects;
