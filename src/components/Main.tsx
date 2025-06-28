const Main = () => {
  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="background-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 aos-init aos-animate">
                <div className="hero-text">
                  <h1>
                    Port<span className="accent-text">Folio</span>
                  </h1>
                  <h2>Gurneet Singh</h2>

                  <p className="lead">
                    I'm a{' '}
                    <span
                      className="typed"
                      data-typed-items="Thumbnail Designer, Video Editor, Content Creator"
                    ></span>
                  </p>
                  <p className="description">
                    Passionate about creating exceptional digital experiences
                    that blend innovative design with functional development.
                    Let's bring your vision to life.
                  </p>

                  <div className="hero-actions">
                    <a href="#portfolio" className="btn btn-primary">
                      View My Work
                    </a>
                    <a href="#contact" className="btn btn-outline">
                      Get In Touch
                    </a>
                  </div>

                  <div className="social-links">
                    <a href="#">
                      <i className="bi bi-dribbble"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-behance"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="hero-visual">
                  <div className="profile-container">
                    <div className="profile-background"></div>
                    <img
                      src="/img/person/DSCF5233.jpg"
                      alt="Alexander Chen"
                      className="profile-image"
                    />
                    <div className="floating-elements">
                      <div className="floating-icon icon-1">
                        <i className="bi bi-palette"></i>
                      </div>
                      <div className="floating-icon icon-2">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <div className="floating-icon icon-3">
                        <i className="bi bi-lightbulb"></i>
                      </div>
                      <div className="floating-icon icon-4">
                        <i className="bi bi-graph-up"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-image">
                    <img
                      src="/img/profile/DSCF5233.jpg"
                      alt="Profile Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="profile-badge">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                </div>

                <div className="profile-content">
                  <h3>Gurneet Singh</h3>
                  <p className="profession">Content creator &amp; Designer</p>

                  <div className="contact-links">
                    <a
                      href="mailto:marcus@example.com"
                      className="contact-item"
                    >
                      <i className="bi bi-envelope"></i>
                      marcus@example.com
                    </a>
                    <a href="tel:+15551234567" className="contact-item">
                      <i className="bi bi-telephone"></i>
                      +1 (555) 123-4567
                    </a>
                    <a href="#" className="contact-item">
                      <i className="bi bi-geo-alt"></i>
                      San Francisco, CA
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
              <div className="about-content">
                <div className="section-header">
                  <span className="badge-text">Get to Know Me</span>
                  <h2>Passionate About Creating Digital Experiences</h2>
                </div>

                <div className="description">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur.
                  </p>
                </div>

                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">150+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Specialization</span>
                      <span className="detail-value">
                        UI/UX Design &amp; Development
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Experience Level</span>
                      <span className="detail-value">Senior Professional</span>
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Education</span>
                      <span className="detail-value">
                        Computer Science, MIT
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Languages</span>
                      <span className="detail-value">
                        English, Spanish, French
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cta-section">
                  <a href="#" className="btn btn-primary">
                    <i className="bi bi-download"></i>
                    Download Resume
                  </a>
                  <a href="#" className="btn btn-outline">
                    <i className="bi bi-chat-dots"></i>
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="stats section light-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="stats-wrapper">
                <div
                  className="stats-item"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <div className="icon-wrapper">
                    <i className="bi bi-emoji-smile"></i>
                  </div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Happy Clients</p>
                </div>

                <div
                  className="stats-item"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-wrapper">
                    <i className="bi bi-journal-richtext"></i>
                  </div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>

                <div
                  className="stats-item"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                >
                  <div className="icon-wrapper">
                    <i className="bi bi-headset"></i>
                  </div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>

                <div
                  className="stats-item"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-wrapper">
                    <i className="bi bi-people"></i>
                  </div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="skills-category"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Front-end Development</h3>
                <div className="skills-animation">
                  <div className="skill-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>HTML/CSS</h4>
                      <span className="skill-percentage">95%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <div className="skill-tooltip">
                      Expert level knowledge of semantic HTML5 and modern CSS3
                      techniques
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>JavaScript</h4>
                      <span className="skill-percentage">85%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <div className="skill-tooltip">
                      Strong proficiency in ES6+, DOM manipulation, and modern
                      frameworks
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>React</h4>
                      <span className="skill-percentage">80%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <div className="skill-tooltip">
                      Experience with React hooks, state management, and
                      component architecture
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="skills-category"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Back-end Development</h3>
                <div className="skills-animation">
                  <div className="skill-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>Node.js</h4>
                      <span className="skill-percentage">75%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <div className="skill-tooltip">
                      Server-side JavaScript development with Express and REST
                      APIs
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>Python</h4>
                      <span className="skill-percentage">70%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <div className="skill-tooltip">
                      Python development with Django and data analysis tools
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>SQL</h4>
                      <span className="skill-percentage">65%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <div className="skill-tooltip">
                      Database design, optimization, and complex queries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div
                className="resume-side"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="profile-img mb-4">
                  <img
                    src="/img/profile/profile-square-2.webp"
                    alt="Profile"
                    className="img-fluid rounded"
                  />
                </div>

                <h3>Professional Summary</h3>
                <p>
                  Driven software architect with expertise in developing
                  scalable, high-performance enterprise solutions. Passionate
                  about leveraging cutting-edge technologies to solve complex
                  business challenges.
                </p>

                <h3 className="mt-4">Contact Information</h3>
                <ul className="contact-info list-unstyled">
                  <li>
                    <i className="bi bi-geo-alt"></i> 742 Evergreen Terrace,
                    Springfield, MA 02101
                  </li>
                  <li>
                    <i className="bi bi-envelope"></i> contact@example.com
                  </li>
                  <li>
                    <i className="bi bi-phone"></i> +1 (555) 123-4567
                  </li>
                  <li>
                    <i className="bi bi-linkedin"></i> linkedin.com/in/example
                  </li>
                </ul>

                <div className="skills-animation mt-4">
                  <h3>Technical Skills</h3>
                  <div className="skill-item">
                    <div className="d-flex justify-content-between">
                      <span>Web Development</span>
                      <span>95%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between">
                      <span>UI/UX Design</span>
                      <span>85%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between">
                      <span>Cloud Architecture</span>
                      <span>90%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between">
                      <span>Project Management</span>
                      <span>80%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 ps-4 ps-lg-5">
              <div className="resume-section" data-aos="fade-up">
                <h3>
                  <i className="bi bi-briefcase me-2"></i>Professional
                  Experience
                </h3>

                <div className="resume-item">
                  <h4>Senior Software Architect</h4>
                  <h5>2022 - Present</h5>
                  <p className="company">
                    <i className="bi bi-building"></i> Tech Innovations Inc.
                  </p>
                  <ul>
                    <li>
                      Lead the architectural design and implementation of
                      enterprise-scale applications
                    </li>
                    <li>
                      Mentor team of 12 developers and establish technical best
                      practices
                    </li>
                    <li>
                      Drive adoption of microservices architecture and
                      cloud-native solutions
                    </li>
                    <li>
                      Reduce system downtime by 75% through improved
                      architecture and monitoring
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Lead Developer</h4>
                  <h5>2019 - 2022</h5>
                  <p className="company">
                    <i className="bi bi-building"></i> Digital Solutions Corp.
                  </p>
                  <ul>
                    <li>
                      Spearheaded development of company's flagship product
                      reaching 1M+ users
                    </li>
                    <li>
                      Implemented CI/CD pipeline reducing deployment time by 60%
                    </li>
                    <li>
                      Managed team of 8 developers across multiple projects
                    </li>
                    <li>Increased code test coverage from 45% to 90%</li>
                  </ul>
                </div>
              </div>

              <div
                className="resume-section"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>
                  <i className="bi bi-mortarboard me-2"></i>Education
                </h3>

                <div className="resume-item">
                  <h4>Master of Science in Computer Science</h4>
                  <h5>2017 - 2019</h5>
                  <p className="company">
                    <i className="bi bi-building"></i> Stanford University
                  </p>
                  <p>
                    Specialized in Artificial Intelligence and Machine Learning.
                    Graduated with honors.
                  </p>
                </div>

                <div className="resume-item">
                  <h4>Bachelor of Science in Software Engineering</h4>
                  <h5>2013 - 2017</h5>
                  <p className="company">
                    <i className="bi bi-building"></i> MIT
                  </p>
                  <p>
                    Dean's List all semesters. Led university's coding club.
                  </p>
                </div>
              </div>

              <div
                className="resume-section"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>
                  <i className="bi bi-award me-2"></i>Certifications
                </h3>

                <div className="resume-item">
                  <h4>AWS Certified Solutions Architect - Professional</h4>
                  <h5>2023</h5>
                </div>

                <div className="resume-item">
                  <h4>Google Cloud Professional Architect</h4>
                  <h5>2022</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <div className="row">
              <div className="col-lg-3 filter-sidebar">
                <div
                  className="filters-wrapper"
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  <ul className="portfolio-filters isotope-filters">
                    <li data-filter="*" className="filter-active">
                      All Projects
                    </li>
                    <li data-filter=".filter-photography">Photography</li>
                    <li data-filter=".filter-design">Design</li>
                    <li data-filter=".filter-automotive">Automotive</li>
                    <li data-filter=".filter-nature">Nature</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9">
                <div
                  className="row gy-4 portfolio-container isotope-container"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="col-lg-5 col-md-5 portfolio-item isotope-item filter-photography">
                    <div className="portfolio-wrap">
                      <img
                        src="/img/portfolio/portfolio-portrait-1.webp"
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Photography</span>
                          <h4>Capturing Moments</h4>
                          <div className="portfolio-links">
                            <a
                              href="/img/portfolio/portfolio-portrait-1.webp"
                              className="glightbox"
                              title="Capturing Moments"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 portfolio-item isotope-item filter-design">
                    <div className="portfolio-wrap">
                      <img
                        src="/img/portfolio/portfolio-2.webp"
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Web Design</span>
                          <h4>Woodcraft Design</h4>
                          <div className="portfolio-links">
                            <a
                              href="/img/portfolio/portfolio-2.webp"
                              className="glightbox"
                              title="Woodcraft Design"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 portfolio-item isotope-item filter-automotive">
                    <div className="portfolio-wrap">
                      <img
                        src="/img/portfolio/portfolio-portrait-2.webp"
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Automotive</span>
                          <h4>Classic Beauty</h4>
                          <div className="portfolio-links">
                            <a
                              href="/img/portfolio/portfolio-portrait-2.webp"
                              className="glightbox"
                              title="Classic Beauty"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 portfolio-item isotope-item filter-nature">
                    <div className="portfolio-wrap">
                      <img
                        src="/img/portfolio/portfolio-portrait-4.webp"
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Nature</span>
                          <h4>Natural Growth</h4>
                          <div className="portfolio-links">
                            <a
                              href="/img/portfolio/portfolio-portrait-4.webp"
                              className="glightbox"
                              title="Natural Growth"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 portfolio-item isotope-item filter-photography">
                    <div className="portfolio-wrap">
                      <img
                        src="/img/portfolio/portfolio-5.webp"
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Photography</span>
                          <h4>Urban Stories</h4>
                          <div className="portfolio-links">
                            <a
                              href="/img/portfolio/portfolio-5.webp"
                              className="glightbox"
                              title="Urban Stories"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 portfolio-item isotope-item filter-design">
                    <div className="portfolio-wrap">
                      <img
                        src="/img/portfolio/portfolio-6.webp"
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Web Design</span>
                          <h4>Digital Experience</h4>
                          <div className="portfolio-links">
                            <a
                              href="/img/portfolio/portfolio-6.webp"
                              className="glightbox"
                              title="Digital Experience"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="service-header">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="service-intro">
                  <h2 className="service-heading">
                    <div>Innovative business</div>
                    <div>
                      <span>performance solutions</span>
                    </div>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="service-summary">
                  <p>
                    We integrate forward-thinking strategies, creative
                    approaches, and state-of-the-art technologies to deliver
                    exceptional customer experiences that drive growth and
                    engage target markets.
                  </p>
                  <a href="services.html" className="service-btn">
                    View All Services
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-palette"></i>
                </div>
                <a
                  href="service-details.html"
                  className="card-action d-flex align-items-center justify-content-center rounded-circle"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="service-details.html">
                    Creative <span>branding</span>
                  </a>
                </h3>
                <p>
                  Nulla facilisi. Maecenas eget magna neque. Suspendisse
                  potenti. Curabitur eleifend nisi non magna vulputate, vel
                  condimentum libero tempus. Proin consectetur feugiat diam.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-gem"></i>
                </div>
                <a
                  href="service-details.html"
                  className="card-action d-flex align-items-center justify-content-center rounded-circle"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="service-details.html">
                    Design <span>systems</span>
                  </a>
                </h3>
                <p>
                  Praesent euismod varius tellus, vel bibendum nunc interdum at.
                  Donec vehicula diam vel metus venenatis convallis. Aliquam
                  erat volutpat. Etiam viverra magna sit amet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-megaphone"></i>
                </div>
                <a
                  href="service-details.html"
                  className="card-action d-flex align-items-center justify-content-center rounded-circle"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="service-details.html">
                    Marketing <span>strategies</span>
                  </a>
                </h3>
                <p>
                  Vivamus tempor velit id magna dictum, sed fermentum nisi
                  faucibus. Integer nec pretium sapien. Fusce tincidunt ligula
                  et purus consequat, ac pellentesque nulla eleifend.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <a
                  href="service-details.html"
                  className="card-action d-flex align-items-center justify-content-center rounded-circle"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="service-details.html">
                    Digital <span>platforms</span>
                  </a>
                </h3>
                <p>
                  Cras fermentum odio eu feugiat malesuada. Vestibulum ante
                  ipsum primis in faucibus orci luctus et accumsan cursus. Morbi
                  placerat nulla vel nunc viverra accumsan.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <a
                  href="service-details.html"
                  className="card-action d-flex align-items-center justify-content-center rounded-circle"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="service-details.html">
                    Growth <span>acceleration</span>
                  </a>
                </h3>
                <p>
                  Aenean vel augue vel nisi bibendum posuere. Phasellus in lacus
                  quis urna sodales dignissim. Duis aliquam libero eget risus
                  facilisis. Quisque eget libero vel nisl fringilla.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-camera-video"></i>
                </div>
                <a
                  href="service-details.html"
                  className="card-action d-flex align-items-center justify-content-center rounded-circle"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="service-details.html">
                    Media <span>solutions</span>
                  </a>
                </h3>
                <p>
                  Etiam efficitur lacus in diam finibus, nec ultrices est
                  sagittis. Maecenas elementum magna sed risus faucibus, nec
                  commodo purus facilisis. Vestibulum accumsan magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="testimonials section light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="testimonial-masonry">
            <div className="testimonial-item" data-aos="fade-up">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Implementing innovative strategies has revolutionized our
                  approach to market challenges and competitive positioning.
                </p>
                <div className="client-info">
                  <div className="client-image">
                    <img src="/img/person/person-f-7.webp" alt="Client" />
                  </div>
                  <div className="client-details">
                    <h3>Rachel Bennett</h3>
                    <span className="position">Strategy Director</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="testimonial-item highlight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Exceptional service delivery and innovative solutions have
                  transformed our business operations, leading to remarkable
                  growth and enhanced customer satisfaction across all
                  touchpoints.
                </p>
                <div className="client-info">
                  <div className="client-image">
                    <img src="/img/person/person-m-7.webp" alt="Client" />
                  </div>
                  <div className="client-details">
                    <h3>Daniel Morgan</h3>
                    <span className="position">Chief Innovation Officer</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Strategic partnership has enabled seamless digital
                  transformation and operational excellence.
                </p>
                <div className="client-info">
                  <div className="client-image">
                    <img src="/img/person/person-f-8.webp" alt="Client" />
                  </div>
                  <div className="client-details">
                    <h3>Emma Thompson</h3>
                    <span className="position">Digital Lead</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Professional expertise and dedication have significantly
                  improved our project delivery timelines and quality metrics.
                </p>
                <div className="client-info">
                  <div className="client-image">
                    <img src="/img/person/person-m-8.webp" alt="Client" />
                  </div>
                  <div className="client-details">
                    <h3>Christopher Lee</h3>
                    <span className="position">Technical Director</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="testimonial-item highlight"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Collaborative approach and industry expertise have
                  revolutionized our product development cycle, resulting in
                  faster time-to-market and increased customer engagement
                  levels.
                </p>
                <div className="client-info">
                  <div className="client-image">
                    <img src="/img/person/person-f-9.webp" alt="Client" />
                  </div>
                  <div className="client-details">
                    <h3>Olivia Carter</h3>
                    <span className="position">Product Manager</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Innovative approach to user experience design has
                  significantly enhanced our platform's engagement metrics and
                  customer retention rates.
                </p>
                <div className="client-info">
                  <div className="client-image">
                    <img src="/img/person/person-m-13.webp" alt="Client" />
                  </div>
                  <div className="client-details">
                    <h3>Nathan Brooks</h3>
                    <span className="position">UX Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <div className="info-box">
                <h3>Contact Info</h3>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Vestibulum ante ipsum primis.
                </p>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="content">
                    <h4>Our Location</h4>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="content">
                    <h4>Phone Number</h4>
                    <p>+1 5589 55488 55</p>
                    <p>+1 6678 254445 41</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="content">
                    <h4>Email Address</h4>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form">
                <h3>Get In Touch</h3>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Vestibulum ante ipsum primis.
                </p>

                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required={true}
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required={true}
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required={true}
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required={true}
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
