import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return Response.json(
        {
          success: false,
          message: "Name and phone number are required.",
        },
        { status: 400 }
      );
    }
    
    console.log("Sending email to:", process.env.LAWYER_EMAIL);
    const { data, error } = await resend.emails.send({
      from: "LegalAI <onboarding@resend.dev>",
      to: [process.env.LAWYER_EMAIL],
      subject: "New LegalAI Consultation Request",

      html: `
        <h2>New LegalAI Consultation Request</h2>

        <p>A visitor has requested a legal consultation.</p>

        <p>
          <strong>Client Name:</strong><br>
          ${name}
        </p>

        <p>
          <strong>Phone Number:</strong><br>
          ${phone}
        </p>

        <p>Please contact the client as soon as possible.</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return Response.json(
        {
          success: false,
          message: error.message || "Unable to send email.",
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", JSON.stringify(data, null, 2));

    return Response.json({
      success: true,
      message:
        "Thank you! Your consultation request has been sent. We will contact you shortly.",
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to send your request. Please try again.",
      },
      { status: 500 }
    );
  }
}