CREATE TABLE `contacts_table` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`category` text NOT NULL,
	`rating` integer NOT NULL,
	`content` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
