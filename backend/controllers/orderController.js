import Stripe from "stripe";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
  const url_fronend = "http://localhost:5173";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${url_fronend}/verify?success=true&orderId=${newOrder._id}`,
      cencel_url: `${url_fronend}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, success_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error PlaceOrder" });
  }
};

export { placeOrder };