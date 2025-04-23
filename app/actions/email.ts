"use server"

import { z } from "zod"

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

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For demonstration purposes, we'll log the data and simulate sending
    console.log("Sending email to: nandhakumarkanagaraj01@gmail.com")
    console.log("From:", validatedFields.name, "(", validatedFields.email, ")")
    console.log("Subject:", validatedFields.subject)
    console.log("Message:", validatedFields.message)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Thank you for your message. I'll get back to you soon.",
    }
  } catch (error) {
    // If validation fails or any other error occurs
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "There was a problem sending your message. Please try again.",
    }
  }
}
