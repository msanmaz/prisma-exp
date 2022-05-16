-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "post" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);
