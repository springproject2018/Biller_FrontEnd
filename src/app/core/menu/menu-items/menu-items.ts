import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'Home',
    type: 'link',
    icon: 'home'
  },{
    state: 'admin-settings',
    name: 'Admin Settings',
    type: 'sub',
    icon: 'security',
    children: [
      {state: 'menus', name: 'Menus'},
      {state: 'component', name: 'Component'},
      {state: 'globalItem', name: 'GlobalItem'},
      {state: 'globalType', name: 'GlobalType'},
      {state: 'menuRole', name: 'MenuRole'},
      {state: 'party', name: 'Party'},
      {state: 'partyGroup', name: 'PartyGroup'},
      {state: 'partyRole', name: 'PartyRole'},
      {state: 'person', name: 'Person'},
      {state: 'roleGroup', name: 'RoleGroup'},
      {state: 'roleType', name: 'RoleType'},
      {state: 'userLogin', name: 'UserLogin'},
      {state: 'userRole', name: 'UserRole'}
    ]
  },{
    state: 'biller',
    name: 'Add Facility',
    type: 'link',
    icon: 'receipt'
  },{
    state: 'billerprofile',
    name: 'Biller Profile',
    type: 'link',
    icon: 'insert_drive_file'
  },{
    state: 'uploadinvoice-view',
    name: 'View Upload Invoices',
    type: 'link',
    icon: 'publish'

  },{
    state: 'bank',
    name: 'Bank of Settlement',
    type: 'link',
    icon: 'layers_clear'
  },{
    state: 'uploadinvoice',
    name: 'Upload Invoices',
    type: 'link',
    icon: 'file_upload'
  },{
    state: 'enquiry',
    name: 'Enquiry',
    type: 'link',
    icon: 'help_outline'
  }];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
