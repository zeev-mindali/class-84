class Maor {
    private name: string;
    private height: number;

    //methods - setter (height)
    public setHeight(height: number) {
        if (height > 110) {
            this.height = height;
            console.log("Height was updated");
        } else {
            console.log("Height should be between 110-220");
        }

    }
}

let maor: Maor = new Maor();
maor.setHeight(0);
