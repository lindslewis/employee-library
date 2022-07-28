USE staff_db;
INSERT INTO department (department)
VALUES  ("Sales"),
        ("Finance"),
        ("Marketing"),
        ("Human Resources"),
        ("IT");
INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 1),
        ("Sales Associate", 60000, 1),
        ("Payroll Clerk", 50000, 2),
        ("Purchasing Manager", 100000, 2),
        ("Marketing Analyst", 60000, 3),
        ("Marketing Specialist", 70000, 3),
        ("Recruiter", 65000, 4),
        ("HR Coordinator", 50000, 4),
        ("System Engineer", 100000, 5),
        ("Support Specialist", 70000, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Marcelyn", "Samuel", 1, NULL),
        ("Sigmund", "Samaras", 3, 6),
        ("Legend", "Laine", 10, NULL),
        ("Mitra", "Pesty", 8, NULL),
        ("Aurora", "Richard", 7, NULL),
        ("Marshall", "Diaz", 4, NULL),
        ("Yvain", "Grahame", 2, 1),
        ("Shavon", "Pander", 2, 1),
        ("Julianna", "Mills", 5, NULL);

