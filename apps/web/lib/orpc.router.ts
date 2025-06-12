import {
  createPayment,
  listPayments,
} from "@hexastack/api/procedures/payments";

export const router = {
  payments: {
    list: listPayments,
    create: createPayment,
  },
};
