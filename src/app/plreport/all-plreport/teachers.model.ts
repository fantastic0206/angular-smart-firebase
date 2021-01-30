import { formatDate } from '@angular/common';
export class Teachers {
  id: number;
  date: string;
  scriptType: string;
  scriptName: string;
  positionType: string;
  holdingPeriod: string;
  profitLoss: string;
  accountName: string;
  constructor(teachers) {
    {
      this.id = teachers.id || this.getRandomID();
      this.date = formatDate(teachers.date ? teachers.date : new Date(), "yyyy-MM-dd", "en") || formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.scriptType = teachers.scriptType || '';
      this.scriptName = teachers.scriptName || '';
      // this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.positionType = teachers.positionType || '';
      this.holdingPeriod = teachers.holdingPeriod || '';
      this.profitLoss = teachers.profitLoss || '';
      this.accountName = teachers.accountName || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
