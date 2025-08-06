class card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}
let cards=[new card('A','hearts'),
    new card('B','hearts'),
    new card('C','hearts'),
    new card('D','hearts'),
    new card('E','hearts'),
    new card('F','hearts'),
    new card('G','hearts'),
    new card('H','hearts'),
]

cards.forEach((card)=> document.writeln(`${card.value} ${card.suit} <br>`))