export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  // You can connect this to Nodemailer, MongoDB, etc.
  console.log("Contact message:", { name, email, message });

  return Response.json({ success: true, message: 'Thanks! Your message has been sent.' });
}
