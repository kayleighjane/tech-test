function encrypt(str) {
            var result = "";
            for (var i = 0; i < str.length; i++) {
                var asciiNumber = str[i].toUpperCase().charCodeAt(); // Find ASCII number of string letter and converts it. 65 = A and 95 = Z. Convert lowercase to uppercase first for correct ASCII range.
                if (asciiNumber >= 65 && asciiNumber <= 77) {
                    result += String.fromCharCode(asciiNumber + 13);

                    // Execute if ASCII number is between 65 and 90, then converts the value + 13.

                } else if (asciiNumber >= 78 && asciiNumber <= 90) {
                    result += String.fromCharCode(asciiNumber - 13);

                    // Execute if ASCII number is between 78 and 90, then converts the value - 13.
                } else {
                    result += str[i];

                    // Anything not between 65 and 90 to be added to string. 
                }
            }
            return result;
        }
        console.log("My Caesar Cipher encryption is below");
        console.log(encrypt("My Caesar Cipher encryption"));

        // Should return ZL PNRFNE PVCURE RAPELCGVBA
  