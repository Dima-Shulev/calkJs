class Calk{

    first = {};
    second = {};
    item;
    char = undefined;
/*
     ajax(responseBody){
         const bodyResponse = JSON.parse(responseBody);
         const xhr = new XMLHttpRequest();
         xhr.open("POST","calk.php",bodyResponse);
         xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
         xhr.onload = () => {
             if(xhr.status == 200 && xhr.readyState == 4){
                 let result = xhr.response;
                 alert("Вар результат: " + result);
             }else{
                 alert("Ошибка HTTP " + xhr.status);
             }
         }
         xhr.send(bodyResponse);
     }
    //и так тоже работает через fetch
    /*
    ajax(bodyResult){
       async function getData(url){
           let response = await fetch(url,{
               method: "POST",
               headers: {
                   "Content-Type":"application/x-www-form-urlencoded"
               },
               body: bodyResult
           });
           if(response.ok){
               let result = await response.json();
               alert("Ваш результат: "+ result);
           }else{
               alert("Ошибка HTTP " + response.status);
           }
       }
       console.log(getData("calk.php"));
   }

  // и так работает через .then самая короткая запись
 */
   /* ajax(bodyRes){
        fetch("calk.php",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: bodyRes
        })
            .then(response => response.json())
            .then(result => alert("Ваш результат: " + result));
    }*/


    setNumber(val){
        this.item = (!this.char) ? this.first : this.second;

        if(this.item.val === "0")this.item.val = "";
        if(val === "."){
            if(this.item.point){
                if(this.item.val.length === 0)this.item.val = "0.";
                else this.item.val += ".";
                this.item.point = false;
            }
        }
        else if(val === "0" && this.item.val.length > 0)this.item.val += val;
        else if(val === "0" && this.item.val.length === 0){
            //console.log(не ставим);
        }else{
            this.item.val += val;
        }
    }

    setChar(val){
        if(!this.char && val !== "="){
            this.char = val;
        }else if(!this.char && val === "="){
            return false;
        }else if(val !== "="){
            this.math();
            this.char = val;
        }else{
            this.math();
            this.char = undefined;
        }
    }

    setCmd(val) {
        this.item = (!this.char) ? this.first : this.second;
        if (val === "C"){
            this.reset();
        }else if (val === "del") {
            if(this.item.val[this.item.val.length -1] === ".")this.item.point = true;
            this.item.val = this.item.val.substr(0, this.item.val.length - 1);
        }else if (val === "+/-"){
            if(this.item.val)this.item.val = (Number(this.item.val) * -1).toString();
        }else if(val === "%"){
            this.item.val = (Number(this.item.val)/100).toString();
        }
    }

    reset(){
        this.first.val = "";
        this.first.point = true;

        this.second.val = "";
        this.second.point = true;

        this.char = undefined;
    }

    math() {
        if (!this.char || !this.first || !this.second) return false;
        else {
            let first = Number(this.first.val);
            let second = Number(this.second.val);
            if (first === 0 || second === 0) return false;
            first = eval(`first ${this.char} second`)
            this.first.val = first.toString();

            /*this.ajax(this.first.val);*/


            if(this.item.val.indexOf(".") !== -1)this.item.point = false;
            this.second.val = "";
            this.char = undefined;

        }
    }
}