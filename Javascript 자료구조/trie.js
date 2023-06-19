class Node {
    constructor(value='') {
        this.value = value;
        this.child = new Map();
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(string){
        let currentNode = this.root;
        string.split('').forEach(v=>{
            if(!currentNode.child.has(v)){
                currentNode.child.set(v, new Node(currentNode.value+v));
            }
            currentNode = currentNode.child.get(v);
        });
    }

    search(string){
        let currentNode = this.root;
        for(let i=0; i<string.length; i++){
            const v = string[i];
            if(currentNode.child.has(v)){
                currentNode = currentNode.child.get(v);
            }else{
                return false;
            }
        }
        return true;
    }
}
