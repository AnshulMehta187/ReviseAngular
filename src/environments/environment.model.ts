import { MsalConfig } from '@azure/msal-angular';

export interface Environment {
  production: boolean,
  apiUrl: string,
  name: string,
  azureAd: MsalConfig
}