export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tqRegisters: any[];
  labour: any[];
  jobs: any[];
  tqRegisterId?: string;
  documentRegistersId?: string;
  tenderDocumentation?: string;
  projectDocs?: string;
  programAndProgress?: string;
  reports?: string;
  documentControl?: string;
  handSDocs?: string;
  testingAndComission?: string;
  timeSheets?: string;
  oandMDocs?: string;
  commercialsAndFinanceControl?: string;
}

export interface CreateProjectDto {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tqRegisters: any[];
  labour: any[];
  jobs: any[];
}

export interface UpdateProjectDto {
  id: string;
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  tqRegisters?: any[];
  labour?: any[];
  jobs?: any[];
}
