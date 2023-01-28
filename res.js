var count = 10;
$("#btn4").click(function () {
    var text = {};
    text.pname = $("#pname").val();
    text.pprice = $("#pprice").val();
    var option1 = $("#slc").val();
    var option2 = $("#slc").val();
    var option3 = $("#slc").val();
    var arr = [];
    arr.push(text);
    var htmllist = "";
    arr.forEach(function (value) {
        if (option1 == "Juice") {
            htmllist += data(value);
            $("#juicelist").append(htmllist);
        }
        if (option2 == "Burger") {
            htmllist += data(value);
            $("#burgerlist").append(htmllist);
        }
        if (option3 == "Sandwich") {
            htmllist += data(value);
            $("#sandwichlist").append(htmllist);
        }
    });
});
function data(value) {
    return `<tr>
<th><input type="checkbox" onclick="fan()" id="c_${count}"></th>
<td id="t_${count}">${value.pname}</td>
<td id="p_${count}">${value.pprice}</td>
<td><input type="number" min="1" max="20" style="width:100%" id="q_${count}" disabled></td>
</tr>`

}

$(document).ready(function () {
    $("#but").click(function () {
        var x = $("#name").val();
        var y = $("#mob").val();
        $("#m").html(x);
        $("#n").html(y);

    })
})


var arr = [];
var item = {};
var table = document.getElementById("tab2");
function bill() {
    $(".container1").find("input:checkbox").each(function (index, value) {
        if ($("#c" + index).prop("checked") == true) {
            item.type = $("#t" + index).text();
            item.price = $("#p" + index).text();
            item.quantity = $("#q" + index).val();
            arr.push(item);
            item = {};
        }
    });
    table.innerHTML = `<tr><th>Name</th><th>Price</th><th>Quantity</th><th>Total</th></tr>`
    $.each(arr, function (index, value) {
        var tr = document.createElement('tr')
        tr.innerHTML =
            `<td>${value.type}</td>
              <td> ${value.price} </td>
              <td> ${value.quantity} </td>
              <td id="total"> ${value.price * value.quantity}</td>`;
        {
            table.append(tr)
        }
    })
}

$(".cont2").hide();
$("#but").click(function () {
    $(".cont2").show();
})
$("#tab1 > tr").hide();


$('#c0').change(function () {
    $('#q0').attr('disabled', !this.checked)
});

$('#c1').change(function () {
    $('#q1').attr('disabled', !this.checked)
});

$('#c2').change(function () {
    $('#q2').attr('disabled', !this.checked)
});

$('#c3').change(function () {
    $('#q3').attr('disabled', !this.checked)
});

$('#c4').change(function () {
    $('#q4').attr('disabled', !this.checked)
});

$('#c5').change(function () {
    $('#q5').attr('disabled', !this.checked)
});

$('#c6').change(function () {
    $('#q6').attr('disabled', !this.checked)
});

$('#c7').change(function () {
    $('#q7').attr('disabled', !this.checked)
});

$('#c8').change(function () {
    $('#q8').attr('disabled', !this.checked)
});

function fan() {
    var cc = $("tr").find(":checked");
    jQuery.each(cc, function (i, val) {
        var checked_id = val.id;
        var last_digit = checked_id.slice(-1);

        $("#c_" + last_digit).change(function () {
            $("#q_" + last_digit).attr('disabled', !this.checked)
        });
    })
}