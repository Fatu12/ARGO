for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types[0] == "poison" && pokémon[i].types.length == 1) {
        function reverseString(pokémon) {
            var newString = "";
            for (var i = pokémon.length - 1; i >= 0; i--) {
                newString += pokémon[i];
            }
            return newString;
        }
        console.log(reverseString(pokémon[i].name));
    }
}