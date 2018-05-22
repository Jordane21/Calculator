//var fruits = ['Apple', 'Banana','Mango'];
//console.log(fruits.length);

    
//  1. Construis une fonction my_max() qui prend une array et qui retourne le nombre maximum    
    function my_array(){
    var paulo = [1, 5, 10, 15, 20];
    return Math.max(...paulo); 
    }


//  2. Construis une fonction vowel_count() qui prend un string et qui retourne le nombre de voyelles
    function vowel_count(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
    return vowel_count;
    }

//  3. Construis une fonction reverse() qui prend un string et qui renvoie les caractères en position inverse. 
//  Ainsi, Bonjour monde ! devient ! ednom ruojnoB
    function reverse() {
    var fruits = 'Coucou Paulo les bons tuyaux !';
    //return fruits.split("").reverse().join(""); // "sdlanoDcM"
    return fruits.split("").reverse().join("");
    }
document.getElementById("div3").innerHTML= reverse();
document.getElementById("div2").innerHTML= vowel_count("Paulo aime les moules friteuuuh");
document.getElementById("div1").innerHTML= my_array();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  CALCULATRICE 
        //element.addEventListener(event, function, useCapture);

function Calculator()
{
     that = this;
     this.field = "input#number";
     this.button = "#body .buttons";
     this.init = false;
            
         this.run = function() {
            $(this.button).click(function() {
                var value = $(this).html();

                // enlever le zéro ! 
                if (that.init == false)
                {
                    $(that.field).val("");
                    that.init = true ;
                }

                // ne pas afficher égal
                if (value != "=")
                    $(that.field).val($(that.field).val() + value);

                that.dispatcher(value);
            });

         //console.log("loaded")
         },

         this.dispatcher =function(value)
         {
             //Si je trouve un / dans la valeur champ, je renvoie à l'opération correspondante
             //L'équivalent des fonctions divide(), add(), substract() et multiply()
             if($(this.field).val().indexOf("/") != -1)
                this.operation(value, "/");
                //Si je trouve un + dans la valeur champ, je renvoie à l'opération correspondante
             if($(this.field).val().indexOf("+") != -1)
             this.operation(value, "+");
             //Si je trouve un - dans la valeur champ, je renvoie à l'opération correspondante
             if($(this.field).val().indexOf("-") != -1)
                this.operation(value, "-");
                //Si je trouve un * dans la valeur champ, je renvoie à l'opération correspondante
             if($(this.field).val().indexOf("*") != -1)
             this.operation(value, "*");
         },

        this.operation = function(value, symbol)
         {
             // Split : S'il trouve un symbole : permet de séparer nos valeurs sous forme de tableau
            var numbers = $(this.field).val().split(symbol),
                result;
            
                //Suivant le symbole choisit, le résultat est le premier nombre [operateur] par le deuxième
                if (symbol == "/")
                result = numbers[0] / numbers[1];
                if (symbol == "-")
                result = numbers[0] - numbers[1];
                if (symbol == "*")
                result = numbers[0] * numbers[1];
                    // pour eviter le conflit avec l'opérateur +, j'utilise la fonction parsefloat
                if (symbol == "+")
                result = parseFloat(numbers[0]) + parseFloat(numbers[1]);

                result = Math.round((result) * 100) / 100;


                // ENFIN, = ! 
                if (numbers.length > 1)
                {
                    if (value == "=")
                        $(this.field).val(result);

                     //afficher calcul intermédiaire
                    else if (numbers.length > 2)
                    $(this.field).val(result + symbol);
                }
            //console.log(numbers);
         };

}


// document.getElementById("calculatrice").innerHTML = Calculate();
