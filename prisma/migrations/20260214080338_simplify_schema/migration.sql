/*
  Warnings:

  - You are about to drop the column `stage` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the `BlogPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BlogTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventRegistration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mentor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MentorSession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Startup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StartupFile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Statistic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Testimonial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BlogPostToBlogTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventRegistration" DROP CONSTRAINT "EventRegistration_eventId_fkey";

-- DropForeignKey
ALTER TABLE "EventRegistration" DROP CONSTRAINT "EventRegistration_startupId_fkey";

-- DropForeignKey
ALTER TABLE "MentorSession" DROP CONSTRAINT "MentorSession_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "MentorSession" DROP CONSTRAINT "MentorSession_startupId_fkey";

-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "StartupFile" DROP CONSTRAINT "StartupFile_startupId_fkey";

-- DropForeignKey
ALTER TABLE "_BlogPostToBlogTag" DROP CONSTRAINT "_BlogPostToBlogTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlogPostToBlogTag" DROP CONSTRAINT "_BlogPostToBlogTag_B_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "stage";

-- DropTable
DROP TABLE "BlogPost";

-- DropTable
DROP TABLE "BlogTag";

-- DropTable
DROP TABLE "ContactRequest";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "EventRegistration";

-- DropTable
DROP TABLE "Mentor";

-- DropTable
DROP TABLE "MentorSession";

-- DropTable
DROP TABLE "Startup";

-- DropTable
DROP TABLE "StartupFile";

-- DropTable
DROP TABLE "Statistic";

-- DropTable
DROP TABLE "Testimonial";

-- DropTable
DROP TABLE "_BlogPostToBlogTag";

-- DropEnum
DROP TYPE "EventType";

-- DropEnum
DROP TYPE "FileType";

-- DropEnum
DROP TYPE "StartupStage";

-- DropEnum
DROP TYPE "StartupStatus";
