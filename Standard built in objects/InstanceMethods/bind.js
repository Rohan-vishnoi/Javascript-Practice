// The bind() method of function instances creates a new function that, when called, calls this
// function with its new keyword set to the provided value

const module = {
    x:42,
    getX()  {
        return this.x;
    }
};

const unBoundX = module.getx;
console.log(unBoundX);