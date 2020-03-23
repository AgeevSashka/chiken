$(document).ready(function () {
    let blue = "<span class='men' style='color:col'>Старик</span>";
    let grey = "<span class='women' style='color:col'>Старуха</span>";
    let green = "<span class='chiken' style='color:col'>Курочка Ряба</span>";
    let yellow = "<span class='egg' style='color:col'>Яйцо</span>";
    let red = "<span class='mouse' style='color:col'>Мышка</span>";
    let black = "<span class='dan' style='color:col'>Хвост</span>";

    function searchName(name, fename, col) {
        $('.text').each(function(){
            let str2 = "";
            let str = $(this).text();
            let s = str.split(" ");
            for (let i in s)
            {
            if (s[i] == name) {
                s[i] = col;
            }

            str2 += s[i]+" ";
            console.log(s);
            }
            $(this).html(str2);
            $(fename).css('opacity', '0');
        });
    }
        $.getJSON("https://api.myjson.com/bins/jcmhn",
        function (data) {
            for(let i = 0; i < data.text.length; i++) {
            }
            const chiken = `<ul class="list-group mt-5 text-uppercase font-italic"><li class="text">${data.text[0]}</li>
                            <li class="text">${data.text[1]}</li>
                            <li class="text">${data.text[2]}</li>
                            <li class="text">${data.text[3]}</li>
                            <li class="text">${data.text[4]}</li>
                            <li class="text">${data.text[5]}</li>
                            <li class="text">${data.text[6]}</li></ul>`;
            $chiken = $(chiken);
            $chiken.prependTo(document.body);
        }
    ); 
    const btn = '<div class="d-flex justify-content-around flex-column"><button class="btn-man btn btn-outline-primary">Старик</button> <button class="btn-woman btn btn-outline-secondary">Старуха</button> <button class="btn-chiken btn btn-outline-success">Курочка Ряба</button> <button class="btn-egg btn btn-outline-warning">Яйцо</button> <button class="btn-mouse btn btn-outline-danger">Мышка</button> <button class="btn-dan btn btn-outline-dark">Хвостиком</button></div>';
    $btn = $(btn);
    $btn.appendTo(document.body);

    $('.btn-man').click(function (e) { 
        e.preventDefault();
        searchName("{var1}", ".var1", blue);
    });
    $('.btn-woman').click(function (e) { 
        e.preventDefault();
        searchName("{var2}", ".var2", grey);
    });
    $('.btn-chiken').click(function (e) { 
        e.preventDefault();
        searchName("{var3}", ".var3", green);
    });
    $('.btn-egg').click(function (e) { 
        e.preventDefault();
        searchName("{var4}", ".var4", yellow);
    });
    $('.btn-mouse').click(function (e) { 
        e.preventDefault();
        searchName("{var5}", ".var5", red);
    });
    $('.btn-dan').click(function (e) { 
        e.preventDefault();
        searchName("{var6}", ".var6", black);
    });

});