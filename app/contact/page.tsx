"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, ExternalLink } from "lucide-react"
import { sendEmail } from "../actions/email"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)

      // Create FormData object
      const formData = new FormData()
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("subject", values.subject)
      formData.append("message", values.message)

      // Send email using server action
      const result = await sendEmail(formData)

      // Show toast based on result
      toast({
        title: result.success ? "Message Sent!" : "Error",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      })

      // Reset the form if successful
      if (result.success) {
        form.reset()
      }
    } catch (error) {
      // Show error toast if something goes wrong
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      // Always set submitting to false
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-12 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
      </section>

      {/* Contact Information */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Mail className="h-8 w-8 text-primary" />,
            title: "Email",
            details: "nandhakumarkanagaraj01@gmail.com",
            link: "mailto:nandhakumarkanagaraj01@gmail.com",
          },
          {
            icon: <Phone className="h-8 w-8 text-primary" />,
            title: "Phone",
            details: "+91 6374385143",
            link: "tel:+916374385143",
          },
          {
            icon: <MapPin className="h-8 w-8 text-primary" />,
            title: "Location",
            details: "Puducherry, India",
            link: "#",
          },
        ].map((item, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                {item.details}
              </a>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Contact Form and Social Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Connect */}
        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Feel free to connect with me on social media or check out my work online.
              </p>
              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/nandhakumar-k-4683a8250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>
              </div>
              <div className="pt-6 mt-6 border-t">
                <h3 className="font-semibold mb-4">Availability</h3>
                <p className="text-muted-foreground mb-2">I'm currently open to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Freelance projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Full-time opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Collaboration on interesting projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "What is your typical project process?",
              answer:
                "I follow a structured approach that includes requirements gathering, planning, design implementation, development, testing, and deployment. I maintain clear communication throughout the process.",
            },
            {
              question: "How long does a typical project take?",
              answer:
                "Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while more complex applications can take several months. I'll provide a detailed timeline during our initial consultation.",
            },
            {
              question: "Do you offer maintenance services after project completion?",
              answer:
                "Yes, I offer maintenance packages to ensure your application remains up-to-date and functions smoothly. This includes bug fixes, security updates, and minor feature enhancements.",
            },
            {
              question: "What technologies do you specialize in?",
              answer:
                "I specialize in front-end technologies including React, Redux, JavaScript, HTML5, and CSS3. I also have experience with responsive design, UI frameworks like Bootstrap and Tailwind CSS, and various development tools.",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
