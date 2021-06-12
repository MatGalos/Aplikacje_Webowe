class Back {

    constructor() {
        this.init();
    }
    init(): void {
        const back = <HTMLElement>document.createElement('div');
        back.classList.add('backHidden');
        back.innerHTML = "Return";
        back.setAttribute('id', 'back');
        back.addEventListener('click', () => {
            const backer = document.getElementById('back');
            backer?.classList.add('backHidden');

            const menu = document.getElementById('menu');
            menu?.removeAttribute('hidden');

            const gameSpot = <HTMLElement>document.getElementById('gameContainer');
            gameSpot.innerHTML = "";

        })
        document.body.appendChild(back);
    }
}
export default Back;