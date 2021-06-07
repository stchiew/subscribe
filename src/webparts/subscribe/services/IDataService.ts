import { IMailListItem } from '../models/IMailListItem';

interface IDataService {

  addItem(itemUpdated: IMailListItem): Promise<IMailListItem[]>;

}

export default IDataService;