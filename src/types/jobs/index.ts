export interface IPermission {
  key: string;
  name: string;
  status: "Running" | "Pending" | "Failed" | "Success";
  blockDef: string,
  createdBy?: string;
  createdTime?: string;
}
