class Switcher {

    constructor() {
        this.init();
    }
    init(): void {
        const themeSwitch = <HTMLElement>document.createElement('div');
        themeSwitch.classList.add('switcher');
        themeSwitch.innerHTML="Dark";

        themeSwitch.addEventListener('click', () => {
            if(document.body.hasAttribute('dark-theme')){
                document.body.removeAttribute('dark-theme');
                themeSwitch.innerHTML="Dark";
            }
            else{
                document.body.setAttribute('dark-theme', 'dark');
                themeSwitch.innerHTML="Light";
            }
        })
        document.body.appendChild(themeSwitch);
    }
}
export default Switcher;