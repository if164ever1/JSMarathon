//const { contains } = require("jquery");

$(document).ready(function(){
    $('button').on('click', function(){
        makeRequest();
    })
    
    function makeRequest(){
        $.ajax({
            type: 'GET',
            url: 'http://ip.jsontest.com/',
            crossDomain: true,
            success: function(data, status, xhr){
                console.log('IP', data);
            },
            error: function(){
                console.log('Error', arguments);
            }
        });
    }
});