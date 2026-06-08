class Abhay
{
    Name = "Abhay";
    #weight = 77; // # means it is now private 
    height = 183;


    walking()
    {
        console.log("I Am Walking");
    }
    running()
    {
        console.log("I Am Running");
    }

    get Weight()
    {
        return this.#weight;
    }
    set SetWeight(v)
    {
       this.#weight = v;
    }
}

let obj  = new Abhay();
obj.walking();
obj.running();

console.log(obj.Weight);
obj.SetWeight=5;
console.log(obj.Weight);