export interface Labour {
  id: string;
  jobId: string;
  projectId: string;
  date: Date;
  hours: number;
  description: string;
  createdById: string;
  createdBy?: any;
  createdDate: Date;
  modifiedDate?: Date;
  deleted?: boolean;
}

export interface CreateLabourDto {
  jobId: string;
  projectId: string;
  date: Date;
  hours: number;
  description: string;
}

export interface UpdateLabourDto {
  id: string;
  date?: Date;
  hours?: number;
  description?: string;
}
