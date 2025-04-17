"use server";

import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";

// Create a single PrismaClient instance to reuse across the application
const prisma = new PrismaClient();

export async function getLatestProducts() {
  try {
    const data = await prisma.product.findMany({
      take: LATEST_PRODUCTS_LIMIT,
      orderBy: { createdAt: "desc" },
    });

    return convertToPlainObject(data);
  } catch (error) {
    console.error("Error fetching latest products:", error);
    throw new Error("Failed to fetch latest products");
  }
}

// get one product with slug
export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findFirst({
      where: { slug: slug },
    });

    if (!product) {
      throw new Error(`Product with slug '${slug}' not found`);
    }

    return product;
  } catch (error) {
    console.error(`Error fetching product with slug '${slug}':`, error);
    throw new Error("Failed to fetch product by slug");
  }
}
