import { formatDate } from '@angular/common';
export class Teachers {
  id: number;
  sno: string;
  date: string;
  clientName: string;
  investedAmount: string;
  percentage: string;
  status: string;
  uniqueID: string;
  constructor(teachers) {
    {
      this.id = teachers.id || this.getRandomID();
      this.sno = teachers.sno || '';
      this.date = teachers.date || formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.clientName = teachers.clientName || '';
      this.investedAmount = teachers.investedAmount || '';
      this.percentage = teachers.percentage || '';
      this.status = teachers.status || '';
      this.uniqueID = teachers.uniqueID || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
