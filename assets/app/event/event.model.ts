export class EventModel {
    constructor (public name: string,
                 public city: string,
                 public postCode: string,
                 public address: string,
                 public location: object,
                 public latitude: number,
                 public longitude: number,
                 public urls: object,
                 public media: object,
                 public startYear: number,
                 public startMonth: number,
                 public distance: number
                 ){}
}