# Schema Design Fundamentals – Theory

## 1. What schema design is and what a database schema represents

Schema design is the process of planning and structuring how data will be stored in a relational database. It defines **tables**, **columns**, **data types**, **relationships**, and **constraints** before any actual data is inserted.

A **database schema** represents the blueprint of the database. It describes:

* What entities exist (for example: users, orders, products)
* What attributes each entity has (columns)
* How tables are related to each other (foreign keys)
* What rules the data must follow (constraints)

Just like a building blueprint guides construction, a schema guides how data is organized and accessed.

---

## 2. Why schema design is required before writing backend code

Schema design should be done **before backend development** because backend logic depends entirely on how data is structured.

If the schema is clear:

* APIs can be designed correctly
* Queries become simpler and efficient
* Data validation happens at the database level

If schema design is skipped or rushed:

* Backend code becomes complex and messy
* Frequent schema changes break existing APIs
* Bugs related to data inconsistency increase

A strong schema acts as a stable foundation on which backend code is built.

---

## 3. Impact of poor schema design on data consistency, maintenance, and scalability

Poor schema design causes serious long-term problems:

### Data consistency

* Same data stored in multiple places can become mismatched
* Example: storing user email in multiple tables may lead to different values

### Maintenance

* Adding new features becomes difficult
* Small changes require updating many tables and queries

### Scalability

* Queries become slow as data grows
* Schema becomes hard to extend without breaking existing data

Good schema design prevents duplication, reduces errors, and supports growth.

---

## 4. Validations in schema design and why databases enforce them

Validations are **rules applied to columns** to ensure correct and meaningful data.

Common validations include:

* **NOT NULL**: Prevents empty values
* **UNIQUE**: Ensures no duplicate values (e.g., email)
* **DEFAULT**: Assigns a value if none is provided
* **PRIMARY KEY**: Uniquely identifies each row

Databases enforce validations to:

* Protect data integrity
* Reduce reliance on backend-only checks
* Prevent invalid data from ever being stored

Example:

```sql
email TEXT UNIQUE NOT NULL
```

This guarantees every email is present and different.

---

## 5. Difference between a database schema and a database table

* A **schema** is the overall structure or design of the database
* A **table** is a single object inside the schema that stores data

Think of it this way:

* Schema = entire building plan
* Table = one room inside the building

A schema can contain many tables, relationships, and constraints.

---

## 6. Why a table should represent only one entity

Each table should represent **only one real-world entity** to maintain clarity and normalization.

Example:

* A `users` table should store only user-related data
* Order details should go into a separate `orders` table

Benefits:

* Easier understanding
* Cleaner queries
* Less duplication
* Better data integrity

Mixing multiple entities in one table leads to confusion and redundancy.

---

## 7. Why redundant or derived data should be avoided

Redundant data is data that is repeated, while derived data can be calculated from existing values.

Problems with redundancy:

* Inconsistent updates
* Wasted storage
* Increased chances of errors

Example:

* Storing `total_price` when it can be calculated from `quantity × price`

Derived values should be calculated when needed, not stored, unless performance requires it.

---

## 8. Importance of choosing correct data types

Choosing correct data types ensures:

* Data accuracy
* Better performance
* Reduced storage usage

Examples:

* Use `INTEGER` for age, not `TEXT`
* Use `DATE` or `TIMESTAMP` for dates
* Use `BOOLEAN` for true/false values

Incorrect data types can lead to:

* Invalid data entry
* Slow queries
* Extra conversion logic in backend code

---

## Conclusion

Schema design is a critical step in database development. A well-designed schema ensures data integrity, simplifies backend logic, improves performance, and supports future scalability. Investing time in schema design saves significant effort during development and maintenance.
