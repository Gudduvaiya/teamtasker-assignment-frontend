export interface UserDataType {
  UserID: string;
  password: string;
  UserName: string;
  Description: string;
  PageList: string;
  DefaultPage: string;
  ImgPath?: string;
  Unit?: string;
  Branch: string;
  Show: string;

}

export interface ProfileDetailsType  {
  rowid: number;
  PAYCODE: string;
  SAPCODE: string;
  Department: string;
  DESIGNATION: string;
  UNIT: string;
  Mobile: null;
  EMAIL: null;
  DATEOFBIRTH: string;
  DATEOFJOIN: string;
  EMPNAME: string;
}

export interface QuotesType {
  rowid: number;
  QuotesID: string;
  QuotesBody: string;
  FlashDate: string;
  UploadDate: string;
}

export interface NoticesType {
  rowid: number;
  NoticeID: string;
  Headding: string;
  Body: string;
  FlashDate: string;
  UploadDate: string;
}

export interface ContractorTableType {
  rowid: number;
  Status: string;
  EMPID: string;
  FirstName: string;
  MiddleName: null;
  LastName: string;
  FatherName: string;
  DateofBirth: string;
  Gender: string;
  ContactMobileNo: null;
  Area: string;
  Section: string;
  SubSection: string;
  Contractor: string;
  DeploymentDate: string;
  ESINO: string;
  Aadhaar: string;
  UNNo: string;
  Designation: string;
  Age: number;
  DOEs?: string;
  COB?: string;
}

export interface CompanyTableType {
  rowid: number;
  PAYCODE: string;
  SAPCODE: string;
  Department: string;
  DESIGNATION: string;
  UNIT: string;
  Mobile: string;
  EMAIL: string;
  DATEOFBIRTH: string;
  DATEOFJOIN: string;
  EMPNAME: string;
  Age: number;
  Status?: string;
  DOEs?: string;
}

export interface EmailDataListType {
  rowid: number;
  SAPCODE: string;
  Department: string;
  DESIGNATION: string;
  UNIT: string;
  Mobile: string;
  EMAIL: string;
  EMPNAME: string;
}

export interface AllEmailGroupTypes {
  rowid: number;
  GroupName: string;
  GroupID: string;
  Email: string;
  CreateDate: string;
  EmailBody: null;
  EmailSubject: null;
}

export interface UnsafeConditionsType {
  rowid: number;
  ObservationId: string;
  CATEGORY: string;
  DESCRIPTION: string;
  OBSERVATIONEVIDENCE: string;
  RECOMMENDATION: string;
  OBSERVATIONDATE: string;
  UNIT: string;
  LOCATION: string;
  PRIORITY: string;
  DETAILS: string;
  Userid: string;
  UserName: string;
  UserUnit: string;
  EntryDate: string;
  JOBASSIGNTO: string;
  TARGETDATE: string;
  COMPLIANCEEVIDENCE: string;
  COMPLIANCEREMARKS: string;
  CLOSINGDATE: string;
  COMPLIANCECLOSINGHOURS: string;
  STATUS: string;
  Hod: string;
  UserDeg: string;
  UserDept: string;
  Dispute: string;
}

export interface UnsafeActsType {
  rowid: number;
  ObservationId: string;
  CATEGORY: string;
  Org: string;
  Empid: string;
  Name: string;
  Deg: string;
  Dept: string;
  Unit: string;
  ViolationCount: string;
  UnsafeActCatagory: string;
  DESCRIPTION: string;
  UNSAFEACTEVIDENCE: string;
  ReportBy: string;
  WarningLetterIssued: string;
  CounselingofthePerson: string;
  CounselorDetails: string;
  EntryDate: string;
  STATUS: string;
  DocumentLink: string;
  Hod: string;
  UserName: string;
  UserUnit: string;
  UserDeg: string;
  UserDept: string;
}

export interface EmailGroupsType {
  rowid: number;
  GroupName: string;
  GroupID: string;
  Email: string;
  CreateDate: string;
  AssingFor: string;
  EmailBody: null;
  EmailSubject: null;
}

export interface PPEDashboardCategoryDetailsType {
  rowid: number;
  CATOGARY: string;
  TotalIssue: string;
  MonthlyIssue: string;
  YerlyIssue: string;
  Imgpath: string;
}

export interface TimelineType {
  rowid: number;
  EmpID: string;
  Name: string;
  Deg: string;
  Dept: string;
  Unit: string;
  IssueDate: string;
  IssueTime: string;
  CATOGARY: string;
  SUBCATOGARY: string;
  TYPE: string;
  MATERIALCODE: string;
  CURRENTSTOCK: string;
  MaterialImg: null;
  Remark: null;
  Validity: string;
  PURPOSE: string;
  RESERVATION: string;
  Attach: null;
  CatagoryImg: string;
}

export interface PPEReportsType {
  rowid: number;
  EmpID: string;
  Name: string;
  Deg: string;
  Dept: string;
  Unit: string;
  IssueDate: string;
  IssueTime: string;
  CATOGARY: string;
  SUBCATOGARY: string;
  TYPE: string;
  MATERIALCODE: string;
  CURRENTSTOCK: string;
  MaterialImg: string;
  Remark: string;
  Validity: string;
  PURPOSE: string;
  RESERVATION: string;
  Attach: string;
  CatagoryImg: string;
  ExpiredDate: string;
  EntryDate: string;
  IssueBy: string;
}

export interface PendingInductionType {
  rowid: number;
  EmpID: string;
  Name: string;
  Deg: string;
  Dept: string;
  Unit: string;
  InductionDate: string;
  InductionTime: string;
  ValidTill: string;
  ValidTillDate: string;
  InductionID: string;
  Attach: null;
  Status: string;
  AttachDate: null;
  AttachTime: null;
  AttachUploaderID: string;
  InductionDoneBy: string;
  TRAININGMANHOURS?: string;
  Age?: string;
}

export interface StandardsBureauType {
  rowid: number;
  StandardsBureauID: string;
  Title: string;
  ISCODE: string;
  YEAR: string;
  REVISION: string;
  PART: string;
  REMARKS: string;
  UPLOADDATE: string;
  UPLOADEDBYID: string;
  UPLOADEDBYName: string;
  FilePath: string;
  Category: string;
}

export interface ContractorInductionType {
  rowid: number;
  AgencyName: string;
  Name: string;
  Deg: string;
  Unit: string;
  AadharNo: string;
  EntryDate: string;
  EntryTime: string;
  InductionID: string;
  FilePath: null;
  Status: string;
  InductionDoneById: string;
  Validity: string;
  Manpower: string;
  AttachmentDateTime: null;
  DocUploadedBy: null;
}

export interface CoplianceTPType {
  rowid: number;
  LiftingToolsId: string;
  Status: string;
  Unit: string;
  TestingFrequency: string;
  Catagory: string;
  Type: string;
  SSMLIdentificationNo: string;
  UnitIdentificationNo: string;
  SerialNo: string;
  Brand: string;
  Capacity: string;
  UOM: string;
  CertificateNo: string;
  Area: string;
  TestDate: string;
  ValidUpto: string;
  DockLink: string;
  UploderID: string;
  UploderName: string;
  UploderUnit: string;
  UploderDept: string;
  UploderDeg: string;
  LastModificationDate: string;
  Remarks: string;
  DefaultStatus: string;
  CostCenter: string;
  UploadStatus: string;
  ResponsiveHOD: string;
  AuthorizePerson: string;
}

export interface InstrumentTypes {
  rowid: number;
  UploderID: string;
  SYSTEMGENERATEDID: string;
  STATUS: string;
  UNIT: string;
  TESTINGFREQUENCY: string;
  TYPE: string;
  INSTRUMENTNAME: string;
  MAKE: string;
  MODELNO: string;
  SSMLIDENTIFICATIONNUMBER: string;
  CERTIFICATENO: string;
  TESTEDDATE: string;
  VALIDUPTO: string;
  UPLOAD: string;
  UPLOADERDETAILS: string;
  LASTMODIFICATIONDATE: string;
  REMARKS: string;
  UploadStatus: string;
  DefaultStatus: string;
  DocName: string;
  ResponsiveHOD: string;
  AuthorizePerson: string;
}