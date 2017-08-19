import { Component } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTablesService } from '../../../tables/components/smartTables/smartTables.service';

import './photosearch.loader';
import 'ckeditor';

@Component({
  selector: 'photosearch-component',
  templateUrl: './photosearch.html',
  styleUrls: ['./photosearch.scss']
})

export class Photosearch {
  public photosearchContent: string = '<p>Hello CKEditor</p>';

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile: any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public query: string = '';

  public settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }
    }
  };

  public source: LocalDataSource = new LocalDataSource();

  constructor() {
  }
}
