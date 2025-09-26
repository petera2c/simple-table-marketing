import { STRIPE_PAYMENT_LINKS } from "@/constants/stripe";

export const redirectToCheckout = async (priceId: string, isAnnual: boolean) => {
  try {
    console.log("Starting Stripe checkout...", { priceId, isAnnual });

    const planType = isAnnual ? "annual" : "monthly";
    const paymentLink = STRIPE_PAYMENT_LINKS[planType];

    if (!paymentLink) {
      alert(
        `Payment link not configured for ${planType} plan. Please create Payment Links in your Stripe Dashboard first.`
      );
      throw new Error(`Payment link not configured for ${planType} plan`);
    }

    console.log("Redirecting to Stripe Payment Link:", paymentLink);

    // Redirect to the Payment Link
    window.location.href = paymentLink;
  } catch (error) {
    console.error("Error redirecting to checkout:", error);
    throw error;
  }
};
