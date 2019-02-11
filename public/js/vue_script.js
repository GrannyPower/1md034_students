var vm = new Vue({
    el: '#whole',
    data: {
        burgersVue: food,
        clicked: false,
        name: "",
        email: "",
        payment: "",
        gender: "",
        orders: "",
        notFilled: "",
  },
  methods: {
  	  showOrder: function(){
          var array = customerInfo();
          this.name = array[0];
          this.email = array[1];
          this.payment = array[2];
          this.gender = array[3];
          this.orders = array[4];
          this.notFilled = "";
          /*
          if (document.getElementById("name").value != "" &&
              document.getElementById("email").value != "" &&
              document.getElementById("street").value != "" &&
              document.getElementById("house").value != "") {
              this.clicked = true;
              showOrderJS();
              this.notFilled = "";
          }
          else {
              this.notFilled = "Fill all the forms please";
          }
          */
          this.clicked = true;
          showOrderJS();

    }
  }
})
