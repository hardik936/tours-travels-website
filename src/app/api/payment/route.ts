import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles incoming webhooks from a payment provider like Stripe.
 * This is a critical security endpoint. In a real application, you would:
 * 1. Verify the webhook signature to ensure it's from the payment provider.
 * 2. Parse the event type (e.g., 'checkout.session.completed').
 * 3. Extract the booking ID from the event metadata.
 * 4. Update the booking status in your database to 'confirmed'.
 * 5. Handle any potential errors gracefully.
 */
export async function POST(request: NextRequest) {
  try {
    // In a real app, you would not parse the JSON directly without verifying the signature.
    const event = await request.json();
    
    console.log('Received payment webhook event:', event.type);
    
    // Example: Handle a successful payment event
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      const bookingId = paymentIntent.metadata.bookingId;
      
      // Here you would call your database service to update the booking
      // await updateBookingStatus(bookingId, 'confirmed');
      console.log(`Payment for booking ${bookingId} succeeded. Updating status.`);
    }

    // Return a 200 OK response to the webhook provider to acknowledge receipt
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Error handling payment webhook:', error);
    return NextResponse.json({ message: 'Webhook handler failed' }, { status: 500 });
  }
}