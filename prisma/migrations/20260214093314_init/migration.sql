-- CreateEnum
CREATE TYPE "MentorSpecialization" AS ENUM ('BUSINESS', 'TECHNOLOGY', 'MARKETING', 'FINANCE', 'LEGAL', 'DESIGN', 'HR', 'OTHER');

-- CreateEnum
CREATE TYPE "StartupStage" AS ENUM ('IDEA', 'MVP', 'EARLY', 'GROWTH', 'SCALE');

-- CreateEnum
CREATE TYPE "StartupIndustry" AS ENUM ('FINTECH', 'EDTECH', 'HEALTHTECH', 'AGRITECH', 'ECOMMERCE', 'LOGISTICS', 'AI_ML', 'SAAS', 'OTHER');

-- CreateEnum
CREATE TYPE "EventFormat" AS ENUM ('ONLINE', 'OFFLINE', 'HYBRID');

-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('WORKSHOP', 'CONFERENCE', 'HACKATHON', 'NETWORKING', 'DEMO_DAY', 'TRAINING', 'PITCH');

-- CreateEnum
CREATE TYPE "ContactStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'RESOLVED', 'ARCHIVED');

-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "industry" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Mentor" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "photoUrl" TEXT,
    "linkedinUrl" TEXT,
    "specialization" "MentorSpecialization" NOT NULL,
    "bioUz" TEXT,
    "bioEn" TEXT,
    "bioRu" TEXT,
    "positionUz" TEXT,
    "positionEn" TEXT,
    "positionRu" TEXT,
    "companyUz" TEXT,
    "companyEn" TEXT,
    "companyRu" TEXT,
    "experienceYears" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Startup" (
    "id" TEXT NOT NULL,
    "stage" "StartupStage",
    "industry" "StartupIndustry",
    "nameUz" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameRu" TEXT NOT NULL,
    "descriptionUz" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionRu" TEXT NOT NULL,
    "shortDescriptionUz" TEXT,
    "shortDescriptionEn" TEXT,
    "shortDescriptionRu" TEXT,
    "logoUrl" TEXT,
    "websiteUrl" TEXT,
    "pitchDeck" TEXT,
    "founderName" TEXT,
    "founderEmail" TEXT,
    "teamSize" INTEGER,
    "foundedYear" INTEGER,
    "investmentRaised" DOUBLE PRECISION,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "format" "EventFormat",
    "category" "EventCategory",
    "titleUz" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleRu" TEXT NOT NULL,
    "descriptionUz" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionRu" TEXT NOT NULL,
    "locationUz" TEXT,
    "locationEn" TEXT,
    "locationRu" TEXT,
    "coverImageUrl" TEXT,
    "onlineLink" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "registrationDeadline" TIMESTAMP(3),
    "maxParticipants" INTEGER,
    "price" DOUBLE PRECISION DEFAULT 0,
    "isFree" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "status" "ContactStatus" NOT NULL DEFAULT 'NEW',
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "adminNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
