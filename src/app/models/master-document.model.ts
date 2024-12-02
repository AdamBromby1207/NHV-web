export interface MasterDocument {
  id: string;
  jobId: string;
  projectId: string;
  documentNumber: string;
  title: string;
  revision: string;
  status: string;
  documentType: string;
  documentPath?: string;
  createdById: string;
  createdBy?: any;
  createdDate: Date;
  modifiedDate?: Date;
  deleted?: boolean;
}

export interface CreateMasterDocumentDto {
  jobId: string;
  projectId: string;
  documentNumber: string;
  title: string;
  revision: string;
  documentType: string;
  documentPath?: string;
}

export interface UpdateMasterDocumentDto {
  id: string;
  documentNumber?: string;
  title?: string;
  revision?: string;
  status?: string;
  documentType?: string;
  documentPath?: string;
}
