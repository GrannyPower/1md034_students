var vm = new Vue({
    el: '#whole',
    data: {
        burgersVue: food,
        clicked: false,
        name: "",
        email: "",
        street: "",
        house: "",
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
          this.street = array[2];
          this.house = array[3];
          this.payment = array[4];
          this.gender = array[5];
          this.orders = array[6];
          
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
    }
  }
})
