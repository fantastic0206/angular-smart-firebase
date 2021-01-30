import { formatDate } from '@angular/common';
export class Teachers {
  id: number;
  date: string;
  accountName: string;
  paidAmount: string;
  constructor(teachers) {
    {
      this.id = teachers.id || this.getRandomID();
      this.date = formatDate(teachers.date ? teachers.date : new Date(), "yyyy-MM-dd", "en") || formatDate(new Date(), 'yyyy-MM-dd', 'en');
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
