import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div>
          <h1>Andrey Sartek</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.contactInfo}>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/andrey-sartek/">https://www.linkedin.com/in/andrey-sartek/</a></p>
          <p>Email: <a href="mailto:spetsakk1@gmail.com">spetsakk1@gmail.com</a></p>
          <p>Djinni: <a href="https://djinni.co/q/1570333d0e/">https://djinni.co/q/1570333d0e/</a></p>
          <p>Phone: <a href="tel:+380931569801">+38 (093) 156-98-01</a></p>
          <p>Location: Odesa, Ukraine</p>
        </div>
      </header>

      <section className={styles.section}>
        <h2>About me</h2>
        <p className={styles.caption}>Frontend Developer with more than 5 years of experience.</p>
        <p>Skilled in building responsive and user-friendly web applications. Proficient in modern frontend technologies and frameworks, with a strong background in turning design concepts into high-quality code. Adept at collaborating in agile environments and committed to continuous learning and improvement.</p>
      </section>

      <section className={styles.section}>
        <h2>Work experience</h2>
        <div className={styles.job}>
          <h3>Konspire Creative s.r.o.</h3>
          <p className={styles.caption}>Frontend engineer</p>
          <ul>
            <li className={styles.description}>Development of web site and CRM platform for real estate trading
            </li>
          </ul>
          <p className={styles.description}>Stack: <span
            className={styles.stack}>React, Typescript, React Query, Zustand, WebSocket, Tailwind</span></p>
        </div>
        <div className={styles.job}>
          <h3>Coin Lift</h3>
          <p className={styles.caption}>Frontend engineer</p>
          <ul>
            <li className={styles.description}>Frontend architecture and development of a web application for
              cryptocurrency traders
            </li>
          </ul>
          <p className={styles.description}>Stack: <span
            className={styles.stack}>NextJS, Typescript, RTK, Tailwind</span></p>
        </div>
        <div className={styles.job}>
          <h3>Finotec Asia Corp - Manila</h3>
          <p className={styles.caption}>Frontend developer (3 years)</p>
          <ul>
            <li className={styles.description}>Development of a robust CMS and CRM platform and 10 websites based on it
              for BTC and BTB markets.
            </li>
            <li className={styles.description}>Updating and refactoring codebase, integrating the latest technologies to
              enhance functionality, performance, and user experience.
            </li>
            <li className={styles.description}>Collaborated with cross-functional teams in an agile environment, using
              Jira for project management, to ensure timely delivery of updates and improvements.
            </li>
          </ul>
          <p className={styles.description}>Stack: <span className={styles.stack}>React, Redux, NodeJS, Express/Koa, WebSocket, Webpack, MaterialUI</span>
          </p>
        </div>
        <div className={styles.job}>
          <h3>Freelance</h3>
          <p className={styles.caption}>Frontend developer (2 years)</p>
          <ul>
            <li className={styles.description}>Websites development from layouts in Figma, Zeplin, Lunacy, PSD.</li>
            <li className={styles.description}>SPA development</li>
          </ul>
          <p className={styles.description}>Stack: <span className={styles.stack}>JavaScript, CSS, HTML, Webpack, UIkit, Bootstrap, React, PHP</span>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Education</h2>
        <div className={styles.education}>
          <h3>Odessa Polytechnic National University</h3>
          <p className={styles.caption}>Specialist degree. Computer systems, Microprocessor electronics (5 years)</p>
          <p className={styles.description}>Received education covering programming languages such as ASM, C, Delphi,
            SQL and Java as part of the curriculum.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          <p>React</p>
          <p>NodeJS</p>
          <p>REST API</p>
          <p>Redux / Zustand / Mobx</p>
          <p>Express / Koa</p>
          <p>WebSockets</p>
          <p>CSS / Tailwind / JSS / MaterialUI</p>
          <p>Git</p>
          <p>Github / Vercel / Gitlab / Jenkins</p>
          <p>NextJS</p>
          <p>Webpack</p>
          <p>Jira</p>
          <p>TypeScript / JavaScript</p>
          <p>MongoDB / Mongoose</p>
          <p>Vue</p>
        </div>
      </section>

      <footer className={styles.footer} />
    </div>
  );
}
