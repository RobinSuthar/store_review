// lib/clientActions.ts
"use client";

import GetData from "@/lib/actions/getData";
import SortData from "@/lib/actions/SortData";

export async function getData(params: any) {
  return await GetData(params);
}

export async function sortData(params: any) {
  return await SortData(params);
}
