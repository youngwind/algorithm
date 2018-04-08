// 图的最小生成树算法 https://www.youtube.com/watch?v=cplfcGZmX7I

function Graph(v) {
    this.vertices = v;
    this.adj = {};
    this.marked = [];
    for (let i = 0; i < this.vertices.length; i++) {
        let v = this.vertices[i];
        this.adj[v] = [];
    }

}

Graph.prototype.addEdge = function (v, w, weight) {
    this.adj[v].push({
        vertex: w,
        weight
    });
    this.adj[w].push({
        vertex: v,
        weight
    })
};

Graph.prototype.showGraph = function () {
    for (let key in this.adj) {
        let v = this.adj[key];
        let str = '';
        for (let j = 0; j < v.length; j++) {
            str += `${v[j].vertex} `;
        }
        console.log(`${key} -> ${str}`);
    }
};

Graph.prototype.prim = function () {
    this.primEdge = [];
    this.nextEdge = [];
    let start = Object.keys(this.adj)[0];


    this.marked.push(start);
    this.addNextEdge(start);

    while (this.marked.length !== Object.keys(this.adj).length) {


        let minEdge;
        let minEdgeIndex;
        for (let j = 0; j < this.nextEdge.length; j++) {
            let edge = this.nextEdge[j];
            if (this.marked.indexOf(edge.to) !== -1) continue; // 忽略连接到已选择的顶点的边

            if (!minEdge || (minEdge && edge.weight < minEdge.weight)) {
                minEdge = edge;
                minEdgeIndex = j;
            }

        }
        this.nextEdge.splice(minEdgeIndex, 1);
        this.primEdge.push(minEdge);
        this.marked.push(minEdge.to);
        this.addNextEdge(minEdge.to);
    }

    for (let i = 0; i < this.primEdge.length; i++) {
        let edge = this.primEdge[i];
        console.log(`${edge.from} -> ${edge.to}, weight:${edge.weight}\n`);
    }
};

Graph.prototype.addNextEdge = function (vertex) {
    for (let i = 0; i < this.adj[vertex].length; i++) {
        let v = this.adj[vertex][i];
        if (this.marked.indexOf(v.vertex) !== -1) continue;
        this.nextEdge.push({
            from: vertex,
            to: v.vertex,
            weight: v.weight
        });

    }
};

let g = new Graph(['A', 'B', 'C', 'D', 'E', 'F', 'G']);

g.addEdge('A', 'B', 2);
g.addEdge('A', 'C', 3);
g.addEdge('A', 'D', 3);
g.addEdge('B', 'C', 4);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'F', 6);
g.addEdge('C', 'E', 1);
g.addEdge('D', 'F', 7);
g.addEdge('E', 'F', 8);
g.addEdge('F', 'G', 9);


g.showGraph();

g.prim();