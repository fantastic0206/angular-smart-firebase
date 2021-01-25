import { formatDate } from '@angular/common';
export class Teachers {
  id: number;
  sno: string;
  date: string;
  accountName: string;
  paidAmount: string;
  constructor(teachers) {
    {
      this.id = teachers.id || this.getRandomID();
      this.sno = teachers.sno || '';
      this.date = teachers.date || formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.accountName = teachers.clientName || '';
      this.paidAmount = teachers.investedAmount || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}