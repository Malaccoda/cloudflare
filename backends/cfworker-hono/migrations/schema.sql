-- DROP TABLE IF EXISTS User;

-- CreateTable
CREATE TABLE IF NOT EXISTS User(
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "isactive" BOOLEAN DEFAULT(FALSE),
    "avatar" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "nickname" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- INSERT INTO Customers (CustomerID, CompanyName, ContactName) VALUES (1, 'Alfreds Futterkiste', 'Maria Anders'), (4, 'Around the Horn', 'Thomas Hardy'), (11, 'Bs Beverages', 'Victoria Ashworth'), (13, 'Bs Beverages', 'Random Name');
