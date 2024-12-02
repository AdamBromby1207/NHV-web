export interface TqRegister {
  id: string;
  jobId: string;
  projectId: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate?: Date;
  assignedToId?: string;
  assignedTo?: any;
  createdById: string;
  createdBy?: any;
  createdDate: Date;
  modifiedDate?: Date;
  deleted?: boolean;
  documentPath?: string;
}

export interface CreateTqRegisterDto {
  jobId: string;
  projectId: string;
  title: string;
  description: string;
  priority: string;
  dueDate?: Date;
  assignedToId?: string;
  documentPath?: string;
}

export interface UpdateTqRegisterDto {
  id: string;
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  dueDate?: Date;
  assignedToId?: string;
  documentPath?: string;
}
