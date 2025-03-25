import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const fishData = request.body;
      await Product.create(fishData);

      response.status(201).json({ status: "Product added" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
