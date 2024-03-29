export{}

class Greetings{
    //名前のプロパティ
    name:string="";

    //コンストラクタ。名前を受け取りプロパティいにっ格納する。
    constructor(name:string){
        this.name=name;
    }

    //「こんにちわ」と表示するメソッド。
    sayHello(){
        console.log(`${this.name}さんこんにちわ`)
    }
}

class GoodMorning extends Greetings{
    sayGoodMorning(){
        console.log(`${this.name}さん、おはようございます`);
    }
}

const taro=new GoodMorning("江口太郎");
taro.sayGoodMorning();
taro.sayHello();