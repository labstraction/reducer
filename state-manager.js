class StateManager{

    actions = {
        'ADD_ONE': (state) => {
           return state + 1;
        },
        'REMOVE_ONE': (state) => {
           return state -1;
        }
    }

    constructor(startingState){

        this.startingState = startingState;
        this.state = startingState;

        this.actionsList = [];
        this.actionsIndex = 0;

    }

    addOne(){
        this.resetFuture();
        this.actionsList.push('ADD_ONE');
        this.actionsIndex++;
        this.limitActionsList();
        console.log(this.actionsList);
        this.reducer();
    }

    removeOne(){
        this.resetFuture();
        this.actionsList.push('REMOVE_ONE');
        this.actionsIndex++;
        this.limitActionsList();
        console.log(this.actionsList);
        this.reducer();
    }

    resetFuture(){
        this.actionsList = this.actionsList.slice(0, this.actionsIndex);
    }

    undo(){
        if (this.actionsIndex > 0) {
            this.actionsIndex--;
            this.reducer();
        }
    }

    redo(){
        if (this.actionsIndex < this.actionsList.length) {
            this.actionsIndex++;
            this.reducer();
        }
    }

    reducer(){
        this.state = this.actionsList.reduce((state, action, i) => {
            return i < this.actionsIndex ? this.actions[action](state) : state;
        }, this.startingState);
        console.log(this.state);
    }

    limitActionsList(){
        if(this.actionsList.length > 3){
            this.lostAction = this.actionsList.slice(0, 1);
            this.actionsList = this.actionsList.slice(1, this.actionsList.length);
            this.actionsIndex--;
            const actionName = this.lostAction[0];
            this.startingState = this.actions[actionName](this.startingState);
        }
        
    }

    reset(){
        this.actionsList = [];
        this.actionsIndex = 0;
        this.startingState = this.state;
    }


}