import Stripe from "stripe";

// ✅ Correct way to initialize Stripe
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-09-30.clover", // the latest stable one (as of 2025)
});

/**
 * Create a Stripe Product, Price, and Payment Link for a given trip
 */
export const createProduct = async (
  name: string,
  description: string,
  images: string[],
  price: number,
  tripId: string
) => {
  try {
    // ✅ 1. Create the product
    const product = await stripe.products.create({
      name,
      description,
      images,
      metadata: { tripId },
    });

    // ✅ 2. Create the price object
    const priceObject = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(price * 100), // cents
      currency: "usd",
    });

    // ✅ 3. Create the payment link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{ price: priceObject.id, quantity: 1 }],
      metadata: { tripId },
      after_completion: {
        type: "redirect",
        redirect: {
          url: `${process.env.VITE_BASE_URL}/travel/${tripId}/success`,
        },
      },
    });

    return paymentLink;
  } catch (error) {
    console.error("❌ Stripe createProduct error:", error);
    throw error;
  }
};
