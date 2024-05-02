import { ProductType } from "@/types/products";
import axios, { AxiosResponse } from "axios";
import { NextResponse} from "next/server";

export async function GET() {
  const products = await axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
    .then((response: AxiosResponse<ProductType[]>) => response.data)
    .catch((error) => console.error(error));
  
  return NextResponse.json(products);
}