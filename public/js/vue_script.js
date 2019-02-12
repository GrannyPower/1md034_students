'use strict';
var socket = io();


var vm = new Vue({
    el: '#whole',
    data: {
        burgersVue: food,
        clicked: false,
        name: "",
        email: "",
        payment: "",
        gender: "",
        burgerOrders: "Empty order",
        orders: {},
        tmpAdress: "",
                   
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            socket.emit("addOrder", { "orderId": this.getNext(),
                                      "details": { x:this.tmpAdress.x,
                                                   y:this.tmpAdress.y},
                                      "orderItems": this.burgerOrders,
                                      "customerInfo": [this.name,this.email,this.gender,this.payment]
                                    });
        },
        displayOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.tmpAdress = { x: event.clientX - 10 - offset.x,
                               y: event.clientY - 10 - offset.y };
                             
        },
  	    showOrder: function(){
            var array = customerInfo();
            this.name = array[0];
            this.email = array[1];
            this.payment = array[2];
            this.gender = array[3];
            this.burgerOrders = array[4];
            this.clicked = true;
            showOrderJS();
        }
    }
})
