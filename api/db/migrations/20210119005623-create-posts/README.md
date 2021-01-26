# Migration `20210119005623-create-posts`

This migration has been generated by Willian Krause at 1/18/2021, 9:56:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210119005623-create-posts
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+model Post {
+  id        Int      @id @default(autoincrement())
+  title     String
+  body      String
+  createdAt DateTime @default(now())
+}
```

