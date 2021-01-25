import { formatDate } from '@angular/common';
export class Teachers {
  id: number;
  sno: string;
  clientName: string;
  userName: string;
  password: string;
  uniqueID: string;
  status: string;
  role: string;
  constructor(teachers) {
    {
      this.id = teachers.id || this.getRandomID();
      this.sno = teachers.sno || '';
      // this.date = teachers.date || formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.clientName = teachers.clientName || '';
      this.userName = teachers.userName || '';
      this.password = teachers.password || '';
      this.uniqueID = teachers.uniqueID || '';
      this.status = teachers.status || '';
      this.role = teachers.role || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
