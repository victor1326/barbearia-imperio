/*
  Warnings:

  - You are about to drop the column `content` on the `schedules` table. All the data in the column will be lost.
  - Added the required column `price` to the `schedules` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "barber" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "schedules_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_schedules" ("barber", "clientId", "date", "id", "title") SELECT "barber", "clientId", "date", "id", "title" FROM "schedules";
DROP TABLE "schedules";
ALTER TABLE "new_schedules" RENAME TO "schedules";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
