class heroiRPG {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoHeroi) {
      this.nomeDoHeroi = nomeDoHeroi;
      this.idadeDoHeroi = idadeDoHeroi;
      this.tipoHeroi = tipoHeroi;
    }
  
    atacar() {
      let tipoDeAtaque = "";
  
      switch (this.tipoHeroi) {
        case "Mago":
          tipoDeAtaque = "magia";
          break;
        case "Guerreiro":
          tipoDeAtaque = "espada";
          break;
        case "Monge":
          tipoDeAtaque = "artes marciais";
          break;
        case "Ninja":
          tipoDeAtaque = "shuriken";
          break;
        default:
          tipoDeAtaque = "ataque genérico";
      }
  
      console.log(`O ${this.tipoHeroi} atacou usando ${tipoDeAtaque}`);
    }
  }
  
  let heroiJogo = new heroiRPG("Zimn", 27, "Mago");
  
  heroiJogo.atacar();
  