erDiagram
    EMPLOYEE {
        int id
        string name
        string email
        date hire_date
        int department_id
    }
    DEPARTMENT {
        int id
        string name
        string location
    }
    SALARY {
        int id
        int employee_id
        float amount
        date pay_date
    }

    EMPLOYEE }o--|| DEPARTMENT : "belongs to"
    DEPARTMENT ||--o{ EMPLOYEE : "has"
    EMPLOYEE ||--o{ SALARY : "receives"
    SALARY }o--|| EMPLOYEE : "for"

    %% Optional: Highlight the EMPLOYEE entity
    style EMPLOYEE fill:#E3F2FD,stroke:#1976D2,stroke-width:2px