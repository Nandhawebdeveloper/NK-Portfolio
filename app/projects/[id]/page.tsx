import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // This would typically come from a database or API
  const projects = [
    {
      id: "school-management",
      title: "School Management System",
      category: "Education ERP",
      description:
        "A comprehensive ERP solution for schools with student, teacher, and admin portals. Features include attendance tracking, grade management, and communication tools.",
      longDescription:
        "The School Management System is a comprehensive ERP solution designed to streamline administrative tasks and enhance communication between students, teachers, and parents. Built with React and Redux, this application provides a robust platform for managing various aspects of school operations, from attendance tracking to grade management and fee collection. The system features role-based access control, ensuring that users only have access to the information and features relevant to their role.",
      image: "/images/school-management.png",
      gallery: ["/images/school-management.png", "/images/college-management.png", "/images/training-institute.png"],
      technologies: ["React", "Redux", "Bootstrap", "REST API", "Node.js", "MongoDB"],
      features: [
        "Student Information Management",
        "Attendance Tracking",
        "Grade Management",
        "Parent Communication Portal",
        "Fee Management",
        "Timetable Generation",
      ],
      challenges: [
        "Implementing a complex role-based access control system",
        "Designing an intuitive interface for users with varying technical abilities",
        "Ensuring data consistency across multiple interconnected modules",
        "Optimizing performance for large datasets",
      ],
      solutions: [
        "Utilized Redux for centralized state management",
        "Implemented a component-based architecture for reusability",
        "Used React Router for efficient navigation between modules",
        "Optimized database queries for faster data retrieval",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "college-management",
      title: "College Management System",
      category: "Education ERP",
      description:
        "Feature-rich platform for college administration and student management. Includes course registration, faculty management, and student performance analytics.",
      longDescription:
        "The College Management System is a comprehensive platform designed to streamline administrative processes in higher education institutions. This system facilitates course registration, faculty management, and provides detailed analytics on student performance. Built with React and modern JavaScript, the application offers a responsive and intuitive interface for administrators, faculty, and students. The system integrates with various APIs to provide real-time data and automate routine tasks.",
      image: "/images/college-management.png",
      gallery: ["/images/college-management.png", "/images/school-management.png", "/images/admin-dashboard.png"],
      technologies: ["React", "JavaScript", "CSS", "REST API", "Node.js", "PostgreSQL"],
      features: [
        "Student Registration",
        "Course Management",
        "Faculty Portal",
        "Examination System",
        "Library Management",
        "Student Performance Analytics",
      ],
      challenges: [
        "Managing complex relationships between courses, students, and faculty",
        "Implementing a flexible examination system",
        "Creating intuitive data visualization for performance analytics",
        "Ensuring system scalability for large institutions",
      ],
      solutions: [
        "Designed a normalized database schema for efficient data management",
        "Implemented reusable components for consistent UI/UX",
        "Used Chart.js for interactive data visualization",
        "Optimized API calls with caching strategies",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "training-institute",
      title: "Training Institute Software",
      category: "Education ERP",
      description:
        "Custom solution for training institutes to manage courses, students, and instructors. Includes features for online course delivery and progress tracking.",
      longDescription:
        "The Training Institute Software is a specialized solution designed for educational institutions offering professional training courses. This platform enables efficient management of courses, students, and instructors, while also providing tools for online course delivery and progress tracking. Built with React and Redux, the application offers a responsive interface that works seamlessly across devices. The system includes features for certificate generation, payment processing, and detailed reporting on student progress and course effectiveness.",
      image: "/images/training-institute.png",
      gallery: ["/images/training-institute.png", "/images/e-learning.png", "/images/admin-dashboard.png"],
      technologies: ["React", "Redux", "Responsive Design", "REST API", "Express.js", "MySQL"],
      features: [
        "Course Catalog Management",
        "Student Enrollment",
        "Instructor Assignment",
        "Progress Tracking",
        "Certificate Generation",
        "Payment Processing",
      ],
      challenges: [
        "Creating a flexible course management system",
        "Implementing secure payment processing",
        "Designing an intuitive progress tracking interface",
        "Ensuring system reliability for critical operations",
      ],
      solutions: [
        "Implemented a modular architecture for easy feature extension",
        "Integrated secure payment gateways with proper error handling",
        "Used interactive charts for visualizing progress data",
        "Implemented comprehensive testing for critical system components",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "admin-dashboard",
      title: "Admin Dashboard",
      category: "Web Application",
      description:
        "Responsive admin dashboard with data visualization, user management, and reporting features. Built with modern UI components and real-time updates.",
      longDescription:
        "The Admin Dashboard is a powerful web application designed to provide administrators with comprehensive control over system operations. This dashboard features interactive data visualization, user management capabilities, and detailed reporting tools. Built with React and Material UI, the application offers a modern and intuitive interface that adapts to different screen sizes. The dashboard includes real-time updates for critical metrics and supports both light and dark themes for optimal viewing in different environments.",
      image: "/images/admin-dashboard.png",
      gallery: ["/images/admin-dashboard.png", "/images/school-management.png", "/images/college-management.png"],
      technologies: ["React", "Material UI", "Chart.js", "REST API", "Socket.io", "Firebase"],
      features: [
        "Interactive Data Visualization",
        "User Management",
        "Role-based Access Control",
        "Real-time Updates",
        "Customizable Reports",
        "Dark/Light Theme",
      ],
      challenges: [
        "Designing an intuitive interface for complex data",
        "Implementing real-time updates without performance issues",
        "Creating flexible reporting tools for diverse use cases",
        "Ensuring security for administrative operations",
      ],
      solutions: [
        "Used Material UI components for consistent and professional UI",
        "Implemented Socket.io for efficient real-time updates",
        "Created modular report components with customization options",
        "Implemented comprehensive authentication and authorization",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "e-learning-platform",
      title: "E-Learning Platform",
      category: "Web Application",
      description:
        "Interactive e-learning platform with course management, video lessons, quizzes, and student progress tracking.",
      longDescription:
        "The E-Learning Platform is a comprehensive solution designed to facilitate online education through interactive courses, video lessons, and assessment tools. Built with React and Redux, this platform offers a seamless learning experience for students and powerful management tools for instructors. The system includes features for course creation, video content delivery, interactive quizzes, and detailed progress tracking. The platform also incorporates discussion forums to foster community learning and engagement among students.",
      image: "/images/e-learning.png",
      gallery: ["/images/e-learning.png", "/images/training-institute.png", "/images/portfolio-template.png"],
      technologies: ["React", "Redux", "Bootstrap", "Video.js", "Node.js", "MongoDB"],
      features: [
        "Course Creation Tools",
        "Video Lessons",
        "Interactive Quizzes",
        "Progress Tracking",
        "Discussion Forums",
        "Certificate Generation",
      ],
      challenges: [
        "Implementing efficient video streaming",
        "Creating interactive quiz components",
        "Designing an intuitive course creation interface",
        "Ensuring system performance with concurrent users",
      ],
      solutions: [
        "Integrated Video.js for optimized video playback",
        "Developed reusable quiz components with various question types",
        "Implemented a drag-and-drop interface for course creation",
        "Optimized database queries and implemented caching",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "responsive-portfolio",
      title: "Responsive Portfolio Template",
      category: "Web Design",
      description:
        "Fully responsive portfolio template for creative professionals with customizable sections and smooth animations.",
      longDescription:
        "The Responsive Portfolio Template is a modern, customizable solution designed for creative professionals to showcase their work and skills. Built with HTML5, CSS3, and JavaScript, this template features a fully responsive design that adapts seamlessly to different screen sizes. The template includes smooth animations powered by GSAP, creating an engaging user experience. With customizable sections for projects, skills, and testimonials, this template provides a flexible foundation for personal branding.",
      image: "/images/portfolio-template.png",
      gallery: ["/images/portfolio-template.png", "/images/admin-dashboard.png", "/images/e-learning.png"],
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
      features: [
        "Responsive Design",
        "Project Showcase",
        "Smooth Animations",
        "Contact Form",
        "Skills Display",
        "Testimonials Section",
      ],
      challenges: [
        "Creating a design that works across all device sizes",
        "Implementing smooth animations without affecting performance",
        "Designing an intuitive project showcase",
        "Ensuring accessibility while maintaining visual appeal",
      ],
      solutions: [
        "Used CSS Grid and Flexbox for responsive layouts",
        "Optimized GSAP animations for performance",
        "Implemented a filterable project gallery",
        "Followed WCAG guidelines for accessibility",
      ],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16 space-y-12">
      {/* Back Button */}
      <Link href="/projects">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Button>
      </Link>

      {/* Project Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="outline">{project.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">{project.title}</h1>
        </div>
        <p className="text-xl text-muted-foreground">{project.description}</p>
      </div>

      {/* Project Image */}
      <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      {/* Project Details */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="challenges">Challenges & Solutions</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">{project.longDescription}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <Link href={project.demoLink}>
              <Button className="gap-2">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </Button>
            </Link>
            <Link href={project.codeLink}>
              <Button variant="outline" className="gap-2">
                <Github className="h-4 w-4" /> View Code
              </Button>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="features" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="gallery" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, i) => (
              <div key={i} className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="challenges" className="mt-6 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Challenges</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p>{challenge}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Solutions</h3>
            <ul className="space-y-2">
              {project.solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>{solution}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Projects */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <Card key={relatedProject.id} className="overflow-hidden">
                <div className="relative h-[150px] w-full">
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{relatedProject.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                  <Link href={`/projects/${relatedProject.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  )
}
