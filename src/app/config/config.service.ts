import { Injectable } from '@angular/core';
import { InConfiguration } from '../core/models/config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public configData: InConfiguration;

  constructor() {
    this.setConfigData();
  }

  setConfigData() {
    this.configData = {
      layout: {
        variant: 'light', // options:  light & dark
        theme_color: 'light', // options:  white, black, purple, blue, cyan, green, orange
        logo_bg_color: 'dark', // options:  white, black, purple, blue, cyan, green, orange
        sidebar: {
          collapsed: false, // options:  true & false
          backgroundColor: 'dark', // options:  light & dark
        },
      },
    };
  }
}
