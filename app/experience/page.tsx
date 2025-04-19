import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Award, GraduationCap } from "lucide-react"

export default function ExperiencePage() {
  const workExperience = [
    {
      company: "Bloombyte Software Solutions",
      position: "Front-End Developer",
      period: "2023 - Present",
      description:
        "Working as a Front-End Developer on Education ERP Software solutions, including School Management System, College Management System, and Training Institute Software.",
      responsibilities: [
        "Developing responsive and user-friendly web interfaces using React, Redux, and modern JavaScript",
        "Implementing UI designs with Bootstrap and custom CSS to ensure cross-browser compatibility",
        "Collaborating with back-end developers to integrate front-end components with server-side logic",
        "Optimizing application performance and ensuring code quality through testing and refactoring",
        "Participating in Agile development processes, including sprint planning and code reviews",
        "Mentoring junior developers and providing technical guidance on front-end best practices",
      ],
      technologies: ["React", "Redux", "JavaScript", "Bootstrap", "CSS", "HTML", "REST API"],
    },
  ]

  const education = [
    {
      institution: "Anna University",
      degree: "B.E - Computer Science and Engineering",
      period: "2019 - 2023",
      description:
        "Graduated with honors, focusing on web development, algorithms, and software engineering principles.",
      courses: [
        "Web Development",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "User Interface Design",
      ],
    },
  ]

  const certifications = [
    {
      name: "React Developer Certification",
      issuer: "React Training",
      date: "2023",
      description: "Advanced certification covering React hooks, context API, and performance optimization.",
    },
    {
      name: "Front-End Web Development",
      issuer: "Udemy",
      date: "2022",
      description: "Comprehensive course on modern front-end development techniques and best practices.",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2021",
      description: "Certification covering JavaScript fundamentals, algorithms, and data structures.",
    },
  ]

  return (
    <div className="container py-12 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">My Experience</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A timeline of my professional journey, education, and certifications in the field of Front-End Development.
        </p>
      </section>

      {/* Work Experience */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter">Work Experience</h2>
        </div>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{job.position}</h3>
                    <p className="text-lg text-muted-foreground">{job.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {job.period}
                  </Badge>
                </div>
                <p className="mb-6">{job.description}</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">Key Projects at Bloombyte Software Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "School Management System",
              description:
                "Developed the front-end for a comprehensive school management system with student, teacher, and admin portals.",
              achievements: [
                "Implemented responsive dashboards for different user roles",
                "Created interactive data visualization components",
                "Optimized application performance by 40%",
              ],
            },
            {
              title: "College Management System",
              description:
                "Built a feature-rich platform for college administration with course registration and student management.",
              achievements: [
                "Designed and implemented a modular component architecture",
                "Created an intuitive course registration workflow",
                "Integrated with multiple APIs for data synchronization",
              ],
            },
            {
              title: "Training Institute Software",
              description:
                "Developed a custom solution for training institutes to manage courses, students, and instructors.",
              achievements: [
                "Built a flexible course management interface",
                "Implemented real-time progress tracking features",
                "Created a responsive design that works across all devices",
              ],
            },
          ].map((project, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {edu.period}
                  </Badge>
                </div>
                <p className="mb-6">{edu.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <Badge key={i} variant="secondary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Award className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                <p>{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Growth */}
      <section className="bg-muted/40 rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center">Professional Growth</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Skills Development</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Expanded expertise in React ecosystem, including hooks, context API, and performance optimization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mastered responsive design techniques for cross-device compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed proficiency in state management with Redux and Context API</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Enhanced knowledge of modern JavaScript (ES6+) features and best practices</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Professional Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Led the front-end development of the School Management System, which was successfully deployed to
                    20+ schools
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Improved application performance by 40% through code optimization and lazy loading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mentored junior developers, conducting code reviews and knowledge sharing sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Contributed to open-source projects and published technical articles on front-end development
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
