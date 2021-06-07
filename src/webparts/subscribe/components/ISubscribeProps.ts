import IDataService from "../services/IDataService";

export interface ISubscribeProps {
  dataService: IDataService;
  mailist: string;
  current_user: string;
}
