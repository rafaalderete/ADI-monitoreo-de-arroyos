export class Medicion {

  nivel: number;
  temperatura: number;
  timestamp: Date;

  constructor(nivel: number, temperatura: number, timestamp: Date) {
    this.nivel = nivel;
    this.temperatura = temperatura;
    this.timestamp = timestamp;
  }
}
