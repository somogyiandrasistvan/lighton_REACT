class Model {
  #list = [];

  constructor() {
    this.feltolt();
  }

  feltolt() {
    for (let i = 0; i < 9; i++) {
      let szam = Math.floor(Math.random() * 2);
      this.#list[i] = szam;
    }
  }

  setAllapot(i) {
    const szomszedFelsoSor = i > 5 ? i : i + 3;
    const szomszedAlsoSor = i < 3 ? i : i - 3;
    const szomszedBal = i % 3 == 0 ? i : i - 1;
    const szomszedJobb = i % 3 == 2 ? i : i + 1;
    const szomszedok = [
      szomszedFelsoSor,
      szomszedAlsoSor,
      szomszedBal,
      szomszedJobb,
      i,
    ];
    for (const szomszed of szomszedok) {
      if (szomszed !== null) {
        if (this.#list[szomszed] == 1) {
          this.#list[szomszed] = 0;
        } else {
          this.#list[szomszed] = 1;
        }
      }
    }
  }

  getList() {
    return [...this.#list];
  }
}

export default Model;
