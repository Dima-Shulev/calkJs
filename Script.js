class Script{

    display;
    history;
    numberAccess;
    charAccess;
    cmdAccess;
    clickClass;
    calk;

    constructor(){
        this.display = document.querySelector(".display");
        this.history = document.querySelector(".history");
        this.numberAccess = ["1","2","3","4","5","6","7","8","9","0","."];
        this.charAccess = ["+","-","/","*","="];
        this.cmdAccess = ["C","del","+/-","%"];
        this.clickClass = ["number","char","cmd"];
        this.calk = new Calk();
    }

    writeToDisplay(){
       this.display.value = (this.calk.item && this.calk.item.val.length > 0) ? this.calk.item.val : this.calk.first.val;
       this.history.value = (this.calk.first) ? this.calk.first.val : "";
       if(this.calk.char)this.history.value += `${this.calk.char} ${this.calk.second.val}`;
       if(this.display.value.length === 0)this.display.value = 0;
       if(this.history.value.length === 0)this.history.value = 0;
    }

    clickParse(input){
        let validate = true;
        if(this.numberAccess.indexOf(input) !== -1){
            this.calk.setNumber(input);
        }else if(this.charAccess.indexOf(input) !== -1){
            this.calk.setChar(input);
        }else if(this.cmdAccess.indexOf(input) !== -1){
            this.calk.setCmd(input);
        }else{
            validate = false;
        }
        if(validate)this.writeToDisplay();
    }

    reset(){
        this.display.value = 0;
        this.history.value = 0;
        this.calk.reset();
    }

    init(){
        let btn;
        this.clickClass.forEach((element)=>{
            btn = document.getElementsByClassName(element);
            for( let i = 0; i < btn.length; i++){
                btn[i].addEventListener("click",(event) =>{
                    this.clickParse(event.target.innerText);
                })
            }
        });
    this.reset();
    }
}