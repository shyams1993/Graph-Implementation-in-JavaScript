class Graph
{
    constructor()
    {
        this.numberofnodes = 0;
        this.adjacentlist = [];
    }
    addVertex(node)
    {
        this.adjacentlist[node] = [];
        this.numberofnodes++;
    }

    addEdge(node1,node2)
    {
        this.adjacentlist[node1].push(node2);
        this.adjacentlist[node2].push(node1);
    }
}



m = new Graph();
m.addVertex('0');
m.addVertex('1');
m.addVertex('2');
m.addVertex('3');
m.addVertex('4');
m.addVertex('5');
m.addVertex('6');
m.addEdge('3', '1');
m.addEdge('3', '4');
m.addEdge('4', '2');
m.addEdge('4', '5');
m.addEdge('1', '2');
m.addEdge('1', '0');
m.addEdge('0', '2');
m.addEdge('6', '5');
console.log(m);