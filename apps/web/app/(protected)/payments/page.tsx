import { listPayments } from "@hexastack/api/procedures/payments";
import { call } from "@orpc/server";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  const payments = await call(listPayments, {});
  return payments;
}

export default async function PaymentsPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
