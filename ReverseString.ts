class ReverseString {
    reversedString: any;

    constructor() {
        this.reversedString = "Hi, This is Shady!";
    }
    reverseString() {
        this.reversedString = this.reversedString.split('').reverse().join('');
        console.log(this.reversedString);
    }
}
const reversedString = new ReverseString();
reversedString.reverseString();