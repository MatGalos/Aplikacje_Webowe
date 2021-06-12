export function logGameRun(target: Object, propKey: string, descriptor: PropertyDescriptor): void{
    const originalFn=descriptor.value;
    descriptor.value=function(){
        console.log(`You Have Chosen ${this.name}`);
        return originalFn.call();
    }
}