export type  Department = 'General' | 'Cardiology'| 'Pediatrics' | 'Dermatology';

export interface Visit {
    id: string;
    dateIso: string;
    doctorName: string;
    department: Department;
    reason: string;
    notes: string
}