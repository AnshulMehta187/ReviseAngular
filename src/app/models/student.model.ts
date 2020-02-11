export class StudentDetails {
    studentId: number;
    firstName: string;
    lastName: string;
    dateofBirth: string;
    gender: string;
    studentAdditionalInformation: {
        studentAdditionalId: number;
        studentId: number;
        grade?: string;
        isBatchHolder?: boolean;
        batchName?: string;
    };
  }