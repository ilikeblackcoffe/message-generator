const verses = ["Peter replied, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit. Acts 2:38", 
                "Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me. John 14:6",
                "“Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of heaven, but only the one who does the will of my Father who is in heaven. Matthew 7:21",
                "He saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit, Titus 3:5",
                "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God not by works, so that no one can boast, Ephesians 2:8-9",
                "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him. Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God’s one and only Son. John 3:16-18"
                ]

let output = document.getElementById("output")  

function generate() {
let randNum = Math.floor(Math.random() * 6)  
    output.innerHTML = verses[randNum]
}
