export class Building {
  constructor(id: number, address: string, dangerLevel: number, isOccupied: boolean, size: number) {
    this.id = id;
    this.address = address;
  }
    id: number;
    address: string;
    dangerLevel: number;
    isOccupied: boolean;
    size: number;
}
