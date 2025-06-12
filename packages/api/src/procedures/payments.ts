import db from "@hexastack/db";
import { payments } from "@hexastack/db/schema";
import { os } from "@orpc/server";
import type { IncomingHttpHeaders } from "http";
import { z } from "zod/v4";

const PaymentSchema = z.object({
  id: z.number().int().min(1),
  amount: z.number().int().min(1),
  currency: z.string(),
  status: z.enum(["PENDING", "PROCESSING", "SUCCESS", "FAILED"]),
});

export const listPayments = os

  .input(
    z.object({
      limit: z.number().int().min(1).max(100).optional(),
      cursor: z.number().int().min(0).default(0),
    })
  )
  .handler(async ({ input }) => {
    // your list code here
    const payments = await db.query.payments.findMany({
      limit: input.limit,
      offset: input.cursor,
    });
    return payments;
  });

export const createPayment = os
  .$context<{ headers: IncomingHttpHeaders }>()
  .input(PaymentSchema.omit({ id: true }))
  .handler(async ({ input }) => {
    const payment = await db
      .insert(payments)
      .values({
        ...input,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    return payment;
  });
