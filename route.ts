import { db } from "@/db";
import { appointments } from "@/db/schema";

export const dynamic = "force-dynamic";

type AppointmentPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  preferredAt?: unknown;
};

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AppointmentPayload;

    const name = cleanString(body.name);
    const phone = cleanString(body.phone);
    const email = cleanString(body.email).toLowerCase();
    const service = cleanString(body.service);
    const preferredAtInput = cleanString(body.preferredAt);
    const preferredAt = new Date(preferredAtInput);

    if (!name || name.length < 2) {
      return Response.json({ message: "Please enter your full name." }, { status: 400 });
    }

    if (!phone || phone.replace(/\D/g, "").length < 7) {
      return Response.json({ message: "Please enter a valid phone number." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (!service) {
      return Response.json({ message: "Please select a service." }, { status: 400 });
    }

    if (!preferredAtInput || Number.isNaN(preferredAt.getTime())) {
      return Response.json({ message: "Please select a valid appointment date and time." }, { status: 400 });
    }

    if (preferredAt.getTime() < Date.now()) {
      return Response.json({ message: "Please select a future appointment time." }, { status: 400 });
    }

    const [appointment] = await db
      .insert(appointments)
      .values({ name, phone, email, service, preferredAt })
      .returning({ id: appointments.id });

    return Response.json({
      id: appointment.id,
      message: "Appointment request received. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Appointment submission failed", error);
    return Response.json(
      { message: "We could not submit your request right now. Please call the clinic or try again." },
      { status: 500 },
    );
  }
}
