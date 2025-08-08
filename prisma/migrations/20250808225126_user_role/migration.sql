-- CreateEnum
CREATE TYPE "shop"."Role" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "shop"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "role" "shop"."Role" NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "shop"."User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "shop"."User"("email");
