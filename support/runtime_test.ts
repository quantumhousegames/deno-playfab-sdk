import { setSecurityHeader } from "./runtime.ts";
import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.90.0/testing/asserts.ts";

Deno.test("set SecretKey security header", () => {
  const headers = new Headers();
  assert(setSecurityHeader(headers, { SecretKey: "123" }), "header not set");
  assertEquals(headers.get("X-SecretKey"), "123");
});

Deno.test("set SessionTicket security header", () => {
  const headers = new Headers();
  assert(
    setSecurityHeader(headers, { SessionTicket: "123" }),
    "header not set"
  );
  assertEquals(headers.get("X-Authorization"), "123");
});

Deno.test("set EntityToken security header", () => {
  const headers = new Headers();
  assert(setSecurityHeader(headers, { EntityToken: "123" }), "header not set");
  assertEquals(headers.get("X-EntityToken"), "123");
});

Deno.test("set no security header", () => {
  const headers = new Headers();
  assertEquals(setSecurityHeader(headers, undefined), false);
  assertEquals(headers.keys(), []);
});
