-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "domain" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "heading" TEXT,
    "profile_photo" TEXT,
    "styles" JSONB NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_domain_key" ON "Profile"("domain");
