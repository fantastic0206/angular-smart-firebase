import { formatDate } from '@angular/common';
export class Teachers {
  id: number;
  fullname: string;
  username: string;
  password: string;
  uniqueID: string;
  status: string;
  role: string;
  date: string;
  email: string;
  constructor(teachers) {
    {
      this.id = teachers.id || this.getRandomID();
      // this.date = teachers.date || formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.date = formatDate(teachers.date ? teachers.date : new Date(), "yyyy-MM-dd", "en") || formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.fullname = teachers.fullname || '';
      this.username = teachers.username || '';
      this.password = teachers.password || '';
      this.uniqueID = teachers.uniqueID || this.getRandomID();
      this.status = teachers.status || '';
      this.role = teachers.role || '';
      this.email = teachers.email || '';
      // this.date = teachers.date || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
