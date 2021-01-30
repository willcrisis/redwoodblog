# Migration `20210130180335-create-comments`

This migration has been generated by Willian Krause at 1/30/2021, 3:03:35 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210126221824-create-contact..20210130180335-create-comments
--- datamodel.dml
+++ datamodel.dml
@@ -1,21 +1,22 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
   binaryTargets = "native"
 }
 model Post {
-  id        Int      @id @default(autoincrement())
+  id        Int       @id @default(autoincrement())
   title     String
   body      String
-  createdAt DateTime @default(now())
+  comments  Comment[]
+  createdAt DateTime  @default(now())
 }
 model Contact {
   id        Int      @id @default(autoincrement())
@@ -23,4 +24,13 @@
   email     String
   message   String
   createdAt DateTime @default(now())
 }
+
+model Comment {
+  id        Int      @id @default(autoincrement())
+  name      String
+  body      String
+  post      Post     @relation(fields: [postId], references: [id])
+  postId    Int
+  createdAt DateTime @default(now())
+}
```

