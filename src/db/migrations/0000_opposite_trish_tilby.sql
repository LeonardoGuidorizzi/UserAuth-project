CREATE TABLE "tbl_users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(225) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(20) NOT NULL,
	CONSTRAINT "tbl_users_password_unique" UNIQUE("password")
);
