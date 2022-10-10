interface IResolution {
  width: number;
  height: number;
};

class Tv {
  brand: string;
  size: number;
  resolution: IResolution;
  connections: Array<string>;
  connectedTo: string | null;

  constructor(brand: string, size: number, resolution: IResolution, connections: Array<string>) {
    this.brand  = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = null;
  }

  public turnOn() {
    const info = {
      Brand: this.brand,
      Size: this.size,
      Resolution: `${this.resolution.width} x ${this.resolution.height}`,
      Connections: this.connections.join(', '),
    }
    console.table(info);
  }
}

const television = new Tv('samsung', 65, { width: 1920, height: 1080 }, ['hdmi', 'composite', 'ethernet']);
television.turnOn();