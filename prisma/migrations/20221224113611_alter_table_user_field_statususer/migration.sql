/*
  Warnings:

  - The values [FAILED] on the enum `user_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `status` ENUM('PENDING', 'APPROVED', 'INACTIVE') NOT NULL DEFAULT 'PENDING';
