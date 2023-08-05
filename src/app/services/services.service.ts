import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }




  logout() {
    console.log('You are logged out')
  }
}
