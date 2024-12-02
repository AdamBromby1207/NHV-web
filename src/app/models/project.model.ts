export interface Project {
  id: string;
  name: string;
  description?: string;
  createdById: string;
  createdBy?: any;
  createdDate: Date;
  modifiedDate?: Date;
  startDate?: Date;
  endDate?: Date;
  status?: string;
  deleted?: boolean;
}

export interface CreateProjectDto {
  name: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface UpdateProjectDto {
  id: string;
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  status?: string;
}
