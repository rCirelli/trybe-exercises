interface IResolution {
  width: number;
  height: number;
};

class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: IResolution;
  private _connections: Array<string>;
  private _connectedTo: string | null;

  constructor(_brand: string, size: number, resolution: IResolution, connections: Array<string>) {
    this._brand  = _brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = null;
  }

  public turnOn() {
    const info = {
      _Brand: this._brand,
      Size: this._size,
      Resolution: `${this._resolution.width} x ${this._resolution.height}`,
      Connections: this._connections.join(', '),
      ConnectedTo: this._connectedTo,
    }
    console.table(info);
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(newValue: string | null) {
    if (newValue === null) {
      this._connectedTo = null;
    } else if(this._connections.includes(newValue)) {
      this._connectedTo = newValue;
    } else {
      console.log("connection unavailable!")
    }
  }
}

const television = new Tv('samsung', 65, { width: 1920, height: 1080 }, ['hdmi', 'composite', 'ethernet']);
television.turnOn();

television.connectedTo = 'display port';
television.turnOn();

television.connectedTo = 'hdmi';
television.turnOn();

