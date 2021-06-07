import IDataService from "./IDataService";
import { IMailListItem } from "../models/IMailListItem";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SharePointDataService implements IDataService {
  public async addItem(mailList: IMailListItem): Promise<any> {
    const iar = await sp.web.lists.getByTitle('Maillist').items.add({
      Title: mailList.title
    });
    return null;
  }
}