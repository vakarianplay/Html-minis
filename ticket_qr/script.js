$('#lithird').ready(function(){        

         $('#qrcode').html('');  // <---Add this, which should clear it out on the next click

        var qrcode = new QRCode("qrcode");

        function makeCode () {      

            function randomNumber(len) {
            var randomNumber;
            var n = '';

            for(var count = 0; count < len; count++) {
                randomNumber = Math.floor(Math.random() * 10);
                n += randomNumber.toString();
            }
            return n;
        }

        var value = randomNumber(13);
            var elText = "TICKET_" + value + "_CODE";
          var elcode = elText 
document.getElementById('code').innerHTML = elcode;          
          
            qrcode.makeCode(elText);
        }

        makeCode();
  
            
    });