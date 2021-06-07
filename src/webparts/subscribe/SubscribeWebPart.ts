import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SubscribeWebPartStrings';
import { Subscribe } from './components/Subscribe';
import { ISubscribeProps } from './components/ISubscribeProps';
import SharePointDataService from './services/SharePointDataService';
import IDataService from './services/IDataService';

export interface ISubscribeWebPartProps {
  mailist: string;
}

export default class SubscribeWebPart extends BaseClientSideWebPart<ISubscribeWebPartProps> {

  private _dataService: IDataService;

  protected onInit(): Promise<void> {
    this._dataService = new SharePointDataService();
    return super.onInit();
  }
  public render(): void {
    const element: React.ReactElement<ISubscribeProps> = React.createElement(
      Subscribe,
      {
        dataService: this._dataService,
        mailist: this.properties.mailist,
        current_user: this.context.pageContext.user.email
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('mailist', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
