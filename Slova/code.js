class Add {
    constructor(...words) {
        this.words= words;
    }

    print = function() {
        let m = [];
        for (let i in this.words){
            m[i] = this.words[i];
        }
        console.log('$' + m.join('$') + '$');
    }
}

let x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
let y = new Add("this", "is", "awesome");
let z = new Add('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit');

x.print();
y.print();
z.print();