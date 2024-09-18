// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  function digiAppTime() {
    const startDate = new Date("January 1, 2024");
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - startDate;

    // Convert milliseconds to years, months, and days
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = Math.floor(timeDifference / millisecondsInYear);

    const remainingMilliseconds = timeDifference % millisecondsInYear;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * (365.25 / 12);
    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);

    const remainingMillisecondsInMonth =
      remainingMilliseconds % millisecondsInMonth;
    const days = Math.floor(
      remainingMillisecondsInMonth / (1000 * 60 * 60 * 24)
    );

    return { years, months, days };
  }

  function smitTime() {
    const startDate = new Date("December 1, 2023");
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - startDate;

    // Convert milliseconds to years, months, and days
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = Math.floor(timeDifference / millisecondsInYear);

    const remainingMilliseconds = timeDifference % millisecondsInYear;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * (365.25 / 12);
    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);

    const remainingMillisecondsInMonth =
      remainingMilliseconds % millisecondsInMonth;
    const days = Math.floor(
      remainingMillisecondsInMonth / (1000 * 60 * 60 * 24)
    );

    return { years, months, days };
  }

  const digiAppExpTime = digiAppTime();
  const smitExpTime = smitTime();

  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="Building Responsive, User-Centered Web Applications with React.js and Modern Technologies"
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>DigiApps Solutions</h3>
                <h4>Junior Frontend Developer</h4>
                <h5>Karachi, Pakistan</h5>
              </span>
              <p>
                Developed responsive web applications using React.js. Collaborated with UI/UX teams to implement new designs and features.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>

        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Crea-biz Solutions</h3>
                <h4>Website Developer Intern</h4>
                <h5>Karachi, Pakistan</h5>
              </span>
              <p>
                As a Frontend Developer Intern at Crea-biz Solutions, I embarked on a rewarding journey, applying theoretical knowledge to real-world development scenarios. This internship equipped me with hands-on experience in the dynamic realm of frontend development, enhancing my skills across various frontend technologies.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>

        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Internee.pk</h3>
                <h4>Frontend Engineer ReactJS Intern (Remote)</h4>
                <h5>Karachi, Pakistan</h5>
              </span>
              <p>
              developed practice projects using React.js and other frontend technologies, completing them within the given deadlines. This experience improved my skills in creating responsive web applications and managing time effectively while collaborating remotely with the team to enhance performance and functionality.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}
