import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const projects = [
    {
      id: "school-management",
      title: "School Management System",
      category: "Education ERP",
      description:
        "A comprehensive ERP solution for schools with student, teacher, and admin portals. Features include attendance tracking, grade management, and communication tools.",
      image: "/images/school-management.png",
      technologies: ["React", "Redux", "Bootstrap", "REST API"],
      features: [
        "Student Information Management",
        "Attendance Tracking",
        "Grade Management",
        "Parent Communication Portal",
        "Fee Management",
        "Timetable Generation",
      ],
    },
    {
      id: "college-management",
      title: "College Management System",
      category: "Education ERP",
      description:
        "Feature-rich platform for college administration and student management. Includes course registration, faculty management, and student performance analytics.",
      image: "/images/college-management.png",
      technologies: ["React", "JavaScript", "CSS", "REST API"],
      features: [
        "Student Registration",
        "Course Management",
        "Faculty Portal",
        "Examination System",
        "Library Management",
        "Student Performance Analytics",
      ],
    },
    {
      id: "training-institute",
      title: "Training Institute Software",
      category: "Education ERP",
      description:
        "Custom solution for training institutes to manage courses, students, and instructors. Includes features for online course delivery and progress tracking.",
      image: "/images/training-institute.png",
      technologies: ["React", "Redux", "Responsive Design", "REST API"],
      features: [
        "Course Catalog Management",
        "Student Enrollment",
        "Instructor Assignment",
        "Progress Tracking",
        "Certificate Generation",
        "Payment Processing",
      ],
    },
    {
      id: "admin-dashboard",
      title: "Admin Dashboard",
      category: "Web Application",
      description:
        "Responsive admin dashboard with data visualization, user management, and reporting features. Built with modern UI components and real-time updates.",
      image: "/images/admin-dashboard.png",
      technologies: ["React", "Material UI", "Chart.js", "REST API"],
      features: [
        "Interactive Data Visualization",
        "User Management",
        "Role-based Access Control",
        "Real-time Updates",
        "Customizable Reports",
        "Dark/Light Theme",
      ],
    },
    {
      id: "e-learning-platform",
      title: "E-Learning Platform",
      category: "Web Application",
      description:
        "Interactive e-learning platform with course management, video lessons, quizzes, and student progress tracking.",
      image: "/images/e-learning.png",
      technologies: ["React", "Redux", "Bootstrap", "Video.js"],
      features: [
        "Course Creation Tools",
        "Video Lessons",
        "Interactive Quizzes",
        "Progress Tracking",
        "Discussion Forums",
        "Certificate Generation",
      ],
    },
    {
      id: "responsive-portfolio",
      title: "Responsive Portfolio Template",
      category: "Web Design",
      description:
        "Fully responsive portfolio template for creative professionals with customizable sections and smooth animations.",
      image: "/images/portfolio-template.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      features: [
        "Responsive Design",
        "Project Showcase",
        "Smooth Animations",
        "Contact Form",
        "Skills Display",
        "Testimonials Section",
      ],
    },
  ]

  const categories = ["All", "Education ERP", "Web Application", "Web Design"]

  return (
    <div className="container py-12 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A showcase of my work as a Front-End Developer, featuring responsive web applications and user interfaces
          built with <span className="font-semibold text-primary">React JS</span> technology.
        </p>
      </section>

      {/* Projects Filter */}
      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => category === "All" || project.category === category)
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden flex flex-col h-full">
                    <div className="relative h-[200px] w-full">
                      <Image
                        src={project.image || "/placeholder.svg?height=200&width=400"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="mb-2">
                        <Badge variant="outline">{project.category}</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <Link href={`/projects/${project.id}`} className="w-full">
                          <Button variant="default" className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
