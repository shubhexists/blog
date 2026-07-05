import { NextResponse } from "next/server";

let initialDate = Date.now();

export function proxy() {
  const next = NextResponse.next();
  next.headers.set("x-edge-age", String(Date.now() - initialDate));
  return next;
}
