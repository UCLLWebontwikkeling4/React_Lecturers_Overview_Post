export interface Course {
    name: string;
    description: string;
    phase: number;
}
export interface Lecturer {
    name: string;
    courses: Course[] | null;
}

export interface Response {
    status: 'error' | 'success';
    lecturerId?: number;
    errorMessage?: string;
}

export interface StatusMessage {
    message: string;
    type: 'error' | 'success';
}
