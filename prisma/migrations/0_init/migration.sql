-- CreateEnum
CREATE TYPE "INTEGRATIONS" AS ENUM ('INSTAGRAM');

-- CreateEnum
CREATE TYPE "LISTENER" AS ENUM ('AI', 'MESSAGE');

-- CreateEnum
CREATE TYPE "MEDIA_TYPE" AS ENUM ('IMAGE', 'VIDEO', 'CAROUSEL');

-- CreateEnum
CREATE TYPE "SUBSCRIPTION" AS ENUM ('FREE', 'PRO');

-- CreateEnum
CREATE TYPE "TRIGGER" AS ENUM ('COMMENT', 'DM');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "clerkid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plan" "SUBSCRIPTION" NOT NULL DEFAULT 'FREE',

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Automation" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Automation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "automationId" UUID,
    "caption" TEXT,
    "postId" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "mediaType" "MEDIA_TYPE" NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listener" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "automationId" UUID NOT NULL,
    "prompt" TEXT NOT NULL,
    "type" "LISTENER" NOT NULL DEFAULT 'MESSAGE',
    "commentReply" TEXT,
    "dmCount" INTEGER NOT NULL DEFAULT 0,
    "commentCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Listener_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "automationId" UUID NOT NULL,
    "type" "TRIGGER" NOT NULL DEFAULT 'DM',

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyword" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "automationId" UUID,
    "word" TEXT NOT NULL,

    CONSTRAINT "Keyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dm" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "automationId" UUID,
    "senderId" TEXT,
    "reciever" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT,

    CONSTRAINT "Dm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Integration" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "INTEGRATIONS" NOT NULL DEFAULT 'INSTAGRAM',
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "instagramId" TEXT,

    CONSTRAINT "Integration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkid_key" ON "User"("clerkid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_userId_key" ON "Subscription"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Automation_userId_key" ON "Automation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_automationId_key" ON "Post"("automationId");

-- CreateIndex
CREATE UNIQUE INDEX "Listener_automationId_key" ON "Listener"("automationId");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_automationId_key" ON "Trigger"("automationId");

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_automationId_key" ON "Keyword"("automationId");

-- CreateIndex
CREATE UNIQUE INDEX "Dm_automationId_key" ON "Dm"("automationId");

-- CreateIndex
CREATE UNIQUE INDEX "Dm_senderId_key" ON "Dm"("senderId");

-- CreateIndex
CREATE UNIQUE INDEX "Integration_userId_key" ON "Integration"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Integration_token_key" ON "Integration"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Integration_instagramId_key" ON "Integration"("instagramId");

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Automation" ADD CONSTRAINT "Automation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listener" ADD CONSTRAINT "Listener_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Keyword" ADD CONSTRAINT "Keyword_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dm" ADD CONSTRAINT "Dm_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Integration" ADD CONSTRAINT "Integration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

