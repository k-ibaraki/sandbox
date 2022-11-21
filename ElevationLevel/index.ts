import { Big } from "big.js";

class Level {
  static Peils: { [id: string]: string } = {
    TP: "0.00000",
    OP: "-1.3000",
    AP: "-1.1344"
  };

  big: Big

  constructor(elevation: number | string, peil: string = "TP") {
    this.big = (new Big(elevation)).plus(new Big(Level.Peils[peil]));
  }
  get(peil: string): Big {
    return this.big.minus((new Big(Level.Peils[peil])));
  }
  plus(n: number | string): Level {
    return new Level(this.big.plus(new Big(n)).toString());
  }
  minus(n: number | string): Level {
    return new Level(this.big.minus(new Big(n)).toString());
  }
}

const hoge = new Level(0, "TP");
console.log("hoge(TP):", hoge.get("TP").toNumber());
console.log("hoge(OP):", hoge.get("OP").toNumber());
console.log("hoge(AP):", hoge.get("AP").toNumber());

const fuga = new Level(0, "OP");
console.log("fuga(TP):", fuga.get("TP").toNumber());
console.log("fuga(OP):", fuga.get("OP").toNumber());
console.log("fuga(AP):", fuga.get("AP").toNumber());

const piyo = fuga.plus("12.3");
console.log("piyo(TP):", piyo.get("TP").toNumber());
console.log("piyo(OP):", piyo.get("OP").toNumber());
console.log("piyo(AP):", piyo.get("AP").toNumber());