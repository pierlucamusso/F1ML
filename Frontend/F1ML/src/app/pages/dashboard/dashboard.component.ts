import { Component, NgZone, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { List } from 'linqts';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})

export class DashboardComponent implements  OnInit, OnDestroy, AfterViewInit  {


  name = 'Angular';
  pointSize = 10;
  element: Element;
  root: Element;
  drivers: Driver[] = [
    {
      id: 0,
      name: 'Lewis',
      surname: 'Hamilton',
      number: 44,
      color: '#30C7D1',
      speed: 1,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      },
      strategy: {
        number: 1,
        pits: [{
          lap: 2,
          estimatedTime: 20,
          newTyre: {
            type: 2,
            color: 'yellow',
            temperature: 0,
            coefficient: 0.2
          }
        }]
      }
    }
    ,
    {
      id: 1,
      name: 'Valterri',
      surname: 'Bottas',
      number: 55,
      color: '#30C7D1',
      speed: 0.95,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      },
      strategy: {
        number: 1,
        pits: [{
          lap: 3,
          estimatedTime: 800,
          newTyre: {
            type: 4,
            color: 'purple',
            temperature: 0,
            coefficient: 0.2
          }
        }]
      }
    }, {
      id: 2,
      name: 'Sebastian',
      surname: 'Vettel',
      number: 5,
      color: '#FF2800',
      speed: 0.9,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 3,
      name: 'Charles',
      surname: 'Leclerc',
      number: 21,
      color: '#FF2800',
      speed: 0.88,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 4,
      name: 'Max',
      surname: 'Verstappen',
      number: 33,
      color: '#323A53',
      speed: 0.85,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 5,
      name: 'Alexander',
      surname: 'Albon',
      number: 71,
      color: '#323A53',
      speed: 0.80,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 6,
      name: 'Daniel',
      surname: 'Ricciardo',
      number: 4,
      color: '#FCC22B',
      speed: 0.75,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 7,
      name: 'Nikolas',
      surname: 'Hulkemberg',
      number: 6,
      color: '#FF2800',
      speed: 0.70,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 8,
      name: 'Kimi',
      surname: 'Raikkonen',
      number: 7,
      color: '#FFFFFF',
      speed: 0.65,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 9,
      name: 'Antonio',
      surname: 'Giovinazzi',
      number: 8,
      color: '#FFFFFF',
      speed: 0.60,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 10,
      name: 'Danil',
      surname: 'Kviat',
      number: 9,
      color: '#1C1E28',
      speed: 0.55,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 11,
      name: 'Pierre',
      surname: 'Gasly',
      number: 10,
      color: '#1C1E28',
      speed: 0.67,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 12,
      name: 'Carlos',
      surname: 'Sainz',
      number: 11,
      color: '#FE7E03',
      speed: 0.83,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 13,
      name: 'Lando',
      surname: 'Norris',
      number: 12,
      color: '#FE7E03',
      speed: 0.48,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 14,
      name: 'Robert',
      surname: 'Kubica',
      number: 13,
      color: '#4BDCF8',
      speed: 0.58,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 15,
      name: 'George',
      surname: 'Russel',
      number: 14,
      color: '#FF2800',
      speed: 0.71,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 16,
      name: 'Romain',
      surname: 'Grosjean',
      number: 15,
      color: '#D4AF37',
      speed: 0.73,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 17,
      name: 'Kevin',
      surname: 'Magnussen',
      number: 16,
      color: '#D4AF37',
      speed: 0.58,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 18,
      name: 'Sergio',
      surname: 'Perez',
      number: 17,
      color: '#F3B9CB',
      speed: 0.45,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }, {
      id: 19,
      name: 'Lance',
      surname: 'Stroll',
      number: 18,
      color: '#F3B9CB',
      speed: 0.72,
      lap: 1,
      GPS: 0, totalDistance: 0,
      finished: false,
      currentTyre: {
        type: 3,
        color: 'red',
        temperature: 0,
        coefficient: 0.1
      }
    }
  ];
  coordinates = [{ x: 584, y: 340 }
    , { x: 410, y: 340 }, { x: 314, y: 340 }, { x: 314, y: 326 }
    , { x: 310, y: 326 }
    , { x: 302, y: 328 }
    , { x: 298, y: 329 }
    , { x: 292, y: 333 }
    , { x: 281, y: 336 }
    , { x: 271, y: 338 }
    , { x: 260, y: 339 }
    , { x: 250, y: 338 }
    , { x: 240, y: 339 }
    , { x: 228, y: 339 }
    , { x: 215, y: 337 }
    , { x: 207, y: 334 }
    , { x: 199, y: 331 }
    , { x: 190, y: 327 }
    , { x: 181, y: 321 }
    , { x: 174, y: 316 }
    , { x: 169, y: 311 }
    , { x: 163, y: 303 }
    , { x: 154, y: 293 }
    , { x: 148, y: 283 }
    , { x: 143, y: 273 }
    , { x: 141, y: 262 }
    , { x: 139, y: 247 }
    , { x: 137, y: 233 }
    , { x: 136, y: 220 }
    , { x: 135, y: 211 }
    , { x: 130, y: 198 }
    , { x: 128, y: 187 }
    , { x: 127, y: 174 }
    , { x: 127, y: 160 }
    , { x: 123, y: 151 }
    , { x: 118, y: 147 }
    , { x: 112, y: 144 }
    , { x: 107, y: 132 }
    , { x: 102, y: 113 }
    , { x: 105, y: 123 }
    , { x: 95, y: 101 }
    , { x: 95, y: 101 }
    , { x: 90, y: 87 }
    , { x: 83, y: 75 }
    , { x: 81, y: 63 }
    , { x: 81, y: 63 }
    , { x: 83, y: 51 }
    , { x: 91, y: 43 }
    , { x: 102, y: 39 }
    , { x: 116, y: 35 }
    , { x: 125, y: 34 }
    , { x: 137, y: 31 }
    , { x: 151, y: 31 }
    , { x: 163, y: 30 }
    , { x: 168, y: 34 }
    , { x: 168, y: 34 }
    , { x: 176, y: 40 }
    , { x: 181, y: 46 }
    , { x: 188, y: 53 }
    , { x: 190, y: 60 }
    , { x: 198, y: 70 }
    , { x: 203, y: 78 }
    , { x: 208, y: 87 }
    , { x: 216, y: 97 }
    , { x: 224, y: 109 }
    , { x: 232, y: 120 }
    , { x: 239, y: 129 }
    , { x: 247, y: 137 }
    , { x: 256, y: 144 }
    , { x: 264, y: 155 }
    , { x: 275, y: 164 }
    , { x: 284, y: 172 }
    , { x: 293, y: 181 }
    , { x: 301, y: 190 }
    , { x: 312, y: 198 }
    , { x: 321, y: 209 }
    , { x: 330, y: 219 }
    , { x: 342, y: 227 }
    , { x: 352, y: 238 }
    , { x: 360, y: 248 }
    , { x: 373, y: 246 }
    , { x: 382, y: 244 }
    , { x: 392, y: 247 }
    , { x: 392, y: 247 }
    , { x: 401, y: 254 }
    , { x: 410, y: 260 }
    , { x: 416, y: 263 }
    , { x: 677, y: 263 }
    , { x: 687, y: 274 }
    , { x: 695, y: 282 }
    , { x: 697, y: 291 }
    , { x: 695, y: 302 }
    , { x: 693, y: 310 }
    , { x: 686, y: 317 }
    , { x: 679, y: 323 }
    , { x: 669, y: 329 }
    , { x: 661, y: 331 }
    , { x: 648, y: 336 }
    , { x: 636, y: 338 }
    , { x: 629, y: 338 }
    , { x: 620, y: 340 }
    , { x: 608, y: 341 }
    , { x: 600, y: 341 }
    , { x: 584, y: 340 }];
  coordinatesPitLane = [
    { x: 584, y: 334 }
    , { x: 601, y: 334 }
    , { x: 591, y: 330 }
    , { x: 591, y: 330 }
    , { x: 577, y: 323 }
    , { x: 577, y: 323 }
    , { x: 443, y: 323 }
    , { x: 443, y: 323 }
    , { x: 427, y: 323 }
    , { x: 427, y: 323 }
    , { x: 414, y: 330 }
    , { x: 414, y: 334 }
    , { x: 410, y: 336 }
    , { x: 410, y: 340 }];
  track = [];
  trackPitLane = [];
  points = [];
  DriverContext = [];
  ctx;
  originatCtx;
  canvas;
  race = [];
  totalLaps = 5;
  finished = false;
  standing = [];
  standingRefresh: any;
  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.element = this.root as Element;
    this.canvas = document.getElementById('canvasbg') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
  }

  ngAfterViewInit() {
    // this.Start();
  }

  Stop() {
    this.race.forEach((interval) => {
      clearInterval(interval);
    });

    if (this.standingRefresh) {
      clearInterval(this.standingRefresh);
    }

    this.drivers.forEach((driver) => {
      driver.lap = 1;
      driver.GPS = 0;
      driver.totalDistance = 0;
      driver.finished = false;

      if (driver.strategy) {
        driver.strategy.pits.forEach((pit) => {
          pit.estimatedTime = 20;
        });
      }
    });
  }

  Start() {
    this.Stop();

    this.GetTrackFullPoints();
    this.GetTrackPitLaneFullPoints();
    this.Standing();

    this.standingRefresh = setInterval(() => { this.Standing(); }, 10);

    const exitPoint = this.trackPitLane[this.trackPitLane.length - 1];

    this.element = this.root as Element;
    this.canvas = document.getElementById('canvasbg') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.drivers.forEach((driver) => {
      const canvas = document.getElementById('canvas' + driver.id) as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.DriverContext.push({
        driver: driver.id,
        canvas,
        ctx
      });

      this.drawCoordinates(this.track[driver.GPS].x, this.track[driver.GPS].y, driver.color, canvas, ctx, driver.number);
      driver.GPS++;
      driver.totalDistance++;

      this.race.push(setInterval(() => {
        if (driver.GPS === this.track.length) {
          driver.GPS = 0;
          driver.lap++;

          if (this.CheckPitLap(driver)) {
            driver.pit = true;
          }
        }

        if (driver.lap > this.totalLaps) {
          driver.finished = true;
          this.finished = true;
          return;
        }

        const context = new List(this.DriverContext).FirstOrDefault(w => w.driver === driver.id);

        if (driver.pit) {
          if (driver.GPS === this.trackPitLane.length) {
            driver.currentTyre = driver.strategy.pits[driver.pitIdx].newTyre;
            driver.pit = false;
            const lastX = this.trackPitLane[this.trackPitLane.length - 1].x;

            let idx = 0;
            let flag = false;
            while (!flag) {
              if (this.track[idx].x === lastX) {
                driver.GPS = idx;
                flag = true;
              }
              idx++;
            }

            if (!flag) {
              driver.GPS = 0;
            }
            driver.GPS++;
            driver.totalDistance++;
          } else if (driver.GPS > (this.trackPitLane.length * 40) / 100 && driver.strategy.pits[driver.pitIdx].estimatedTime > 0) {
            driver.strategy.pits[driver.pitIdx].estimatedTime--;
          } else {
            this.drawCoordinates(this.trackPitLane[driver.GPS].x,
              this.trackPitLane[driver.GPS].y,
              driver.color,
              context.canvas, context.ctx,
              driver.number);
            driver.GPS++;
            driver.totalDistance++;
          }
        } else {
          this.drawCoordinates(this.track[driver.GPS].x,
            this.track[driver.GPS].y,
            driver.color,
            context.canvas, context.ctx,
            driver.number);
          driver.GPS++;
          driver.totalDistance++;
        }

      }, 50 / driver.speed));
    });
  }

  ngOnDestroy() {
    this.race.forEach((interval) => {
      clearInterval(interval);
    });

    clearInterval(this.standingRefresh);
  }

  private GetTrackFullPoints() {
    for (let x = 0; x < this.coordinates.length - 1; x++) {
      if (this.coordinates[x].x === this.coordinates[x + 1].x) {
        const delta = this.coordinates[x + 1].y - this.coordinates[x].y;

        if (delta > 0) {
          for (let dy = 0; dy < this.Approx(Math.abs(delta)); dy = dy + 10) {
            this.track.push({ x: this.coordinates[x].x, y: this.coordinates[x].y + dy });
          }
        } else {
          for (let dy = 0; dy < this.Approx(Math.abs(delta)); dy = dy + 10) {
            this.track.push({ x: this.coordinates[x].x, y: this.coordinates[x].y - dy });
          }
        }
      } else if (this.coordinates[x].y === this.coordinates[x + 1].y) {
        const delta = this.coordinates[x + 1].x - this.coordinates[x].x;

        if (delta > 0) {
          for (let dx = 0; dx < this.Approx(Math.abs(delta)); dx = dx + 10) {
            this.track.push({ x: this.coordinates[x].x + dx, y: this.coordinates[x].y });
          }
        } else {
          for (let dx = 0; dx < this.Approx(Math.abs(delta)); dx = dx + 10) {
            this.track.push({ x: this.coordinates[x].x - dx, y: this.coordinates[x].y });
          }
        }
      } else {
        this.track.push(this.Interpolate(this.coordinates[x + 1], this.coordinates[x], 0.99));
      }
    }
  }

  private GetTrackPitLaneFullPoints() {
    for (let x = 0; x < this.coordinatesPitLane.length - 1; x++) {
      if (this.coordinatesPitLane[x].x === this.coordinatesPitLane[x + 1].x) {
        const delta = this.coordinatesPitLane[x + 1].y - this.coordinatesPitLane[x].y;

        if (delta > 0) {
          for (let dy = 0; dy < this.Approx(Math.abs(delta)); dy = dy + 10) {
            this.trackPitLane.push({ x: this.coordinatesPitLane[x].x, y: this.coordinatesPitLane[x].y + dy });
          }
        } else {
          for (let dy = 0; dy < this.Approx(Math.abs(delta)); dy = dy + 10) {
            this.trackPitLane.push({ x: this.coordinatesPitLane[x].x, y: this.coordinatesPitLane[x].y - dy });
          }
        }
      } else if (this.coordinatesPitLane[x].y === this.coordinatesPitLane[x + 1].y) {
        const delta = this.coordinatesPitLane[x + 1].x - this.coordinatesPitLane[x].x;

        if (delta > 0) {
          for (let dx = 0; dx < this.Approx(Math.abs(delta)); dx = dx + 10) {
            this.trackPitLane.push({ x: this.coordinatesPitLane[x].x + dx, y: this.coordinatesPitLane[x].y });
          }
        } else {
          for (let dx = 0; dx < this.Approx(Math.abs(delta)); dx = dx + 10) {
            this.trackPitLane.push({ x: this.coordinatesPitLane[x].x - dx, y: this.coordinatesPitLane[x].y });
          }
        }
      } else {
        this.trackPitLane.push(this.Interpolate(this.coordinatesPitLane[x + 1], this.coordinatesPitLane[x], 0.99));
      }
    }
  }

  private Approx(num) {
    let found = false;

    while (!found) {
      if (num % 10 === 0) {
        found = true;
      } else {
        num = num - 1;
      }
    }

    return num;
  }

  private Interpolate(a, b, frac) {
    const nx = a.x + (b.x - a.x) * frac;
    const ny = a.y + (b.y - a.y) * frac;
    return { x: nx, y: ny };
  }

  getPosition(event) {
    let curleft = 0;
    let curtop = 0;
    curleft += event.offsetX;
    curtop += event.offsetY;

    this.points.push({ x: curleft, y: curtop });
    this.drawCoordinates(curleft, curtop, '#FFFFFF', this.canvas, this.ctx, 2);
  }

  drawCoordinates(x, y, color, canvas, ctx, number) {
    this.points.push({ x, y });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, color);
    grd.addColorStop(1, color);
    ctx.fillStyle = grd;

    ctx.beginPath();
    ctx.arc(Number(x), Number(y), this.pointSize, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.fillText(number, Number(x - 5), Number(y + 5));
    ctx.fill();
  }

  CurrentLap() {
    return new List(this.drivers).Max(m => m.lap);
  }

  /**
   * Check if the team has to prepare the PIT
   * @param driver
   */
  private CheckPitLap(driver: Driver): boolean {
    /*if i have completed a lap*/
    if (driver.GPS === 0 && driver.strategy !== undefined) {
      for (let pit = 0; pit < driver.strategy.pits.length; pit++) {
        if (driver.strategy.pits[pit].lap === driver.lap) {
          driver.pitIdx = pit;
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  Standing() {
    const drivers = new List(this.drivers);

    this.standing = drivers.OrderByDescending(o => o.lap && o.totalDistance).ToArray();

  }
}

export enum TyreType {
  IceBlue = 0,
  White = 1,
  Yellow = 2,
  Red = 3,
  Purple = 4,
  Pink = 5,
  Green = 6,
  LightBlue = 7
}

export interface Tyre {
  type: TyreType;
  color: string;
  temperature: number;
  coefficient: number;
}

export interface Pit {
  lap: number;
  estimatedTime?: number;
  effectiveTime?: number;
  newTyre: Tyre;
}

export interface Strategy {
  number: number;
  pits: Pit[];
}

export interface Driver {
  id: number;
  name: string;
  surname: string;
  number: number;
  color: string;
  speed: number;
  lap: number;
  GPS: number;
  totalDistance?: number;
  finished: boolean;
  pit?: boolean;
  pitIdx?: number;
  strategy?: Strategy;
  currentTyre?: Tyre;
}
