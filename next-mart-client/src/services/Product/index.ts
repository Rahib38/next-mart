"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createProduct = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("PRODUCT");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllProduct = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
      next: {
        tags: ["PRODUCT"],
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};


export const getSingleProduct=async(productId:string)=>{
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`);
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
}


export const updateProduct = async (productId:string,data: FormData):Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`, {
      method: "PATCH",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("PRODUCT");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};