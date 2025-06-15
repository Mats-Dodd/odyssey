ALTER TABLE "collection" ALTER COLUMN "user_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "collection_settings" ALTER COLUMN "user_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "entry" ALTER COLUMN "user_id" DROP NOT NULL;