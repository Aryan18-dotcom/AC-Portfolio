import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // BASIC FIELDS
    const full_name = formData.get("full_name");
    const email = formData.get("email");
    const phone_no = formData.get("phone_no") || "Not provided";
    const country_code = formData.get("country_code") || "Not provided";
    const contact_reason = formData.get("contact_reason");
    const message = formData.get("message") || "No message provided";

    // CONDITIONAL FIELDS
    const company_name = formData.get("company_name") || "";
    const job_role = formData.get("job_role") || "";
    const project_title = formData.get("project_title") || "";
    const project_type = formData.get("project_type") || "";
    const other_title = formData.get("other_title") || "";
    const other_description = formData.get("other_description") || "";

    // FILE
    const file = formData.get("file");
    const phone_number = country_code + " " + phone_no;

    if (!full_name || !email || !contact_reason) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Attach file if uploaded
    const attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Extra fields based on reason
    let extraFields = "";
    if (contact_reason === "Hiring / Work Opportunity") {
      extraFields = `
        <p><strong>Company / HR:</strong> ${company_name}</p>
        <p><strong>Job Role:</strong> ${job_role}</p>
      `;
    } else if (contact_reason === "Collaboration") {
      extraFields = `
        <p><strong>Project Title:</strong> ${project_title}</p>
        <p><strong>Project Type:</strong> ${project_type}</p>
      `;
    } else if (contact_reason === "Other...") {
      extraFields = `
        <p><strong>Subject / Title:</strong> ${other_title}</p>
        <p><strong>Description:</strong> ${other_description}</p>
      `;
    }

    // Email to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "aryanchheda22@gmail.com",
      subject: `📩 New ${contact_reason} Inquiry from ${full_name}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> <a href="tel:${phone_number}">${phone_number}</a></p>
          <p><strong>Reason:</strong> ${contact_reason}</p>
          ${extraFields}
          <h3>Message:</h3>
          <p>${message}</p>
        </div>
      `,
      attachments,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"Aryan Chheda" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for contacting me, ${full_name}!`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>Thank you for reaching out!</h2>
          <p>Hi <strong>${full_name}</strong>,</p>
          <p>I have received your message regarding:</p>
          <p><strong>${contact_reason}</strong></p>
          <p>I will review your details and get back to you soon.</p>
          <br/><br/>
          <p>Regards,</p>
          <strong>Aryan Chheda</strong>
        </div>
      `,
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
