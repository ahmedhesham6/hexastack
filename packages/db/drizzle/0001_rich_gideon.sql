CREATE TYPE "public"."status" AS ENUM('PENDING', 'PROCESSING', 'SUCCESS', 'FAILED');--> statement-breakpoint
CREATE TABLE "payments" (
	"id" text PRIMARY KEY NOT NULL,
	"amount" integer NOT NULL,
	"currency" text NOT NULL,
	"status" "status" NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
