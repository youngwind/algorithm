function Graph(v) {
    this.vertices = v;
    this.adj = {};
    this.dijkstraDistance = {};
    this.queue = [];
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
    });
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

Graph.prototype.dijkstra = function (start, end) {
    let d = this.dijkstraDistance[start] = {};

    this.marked.push(start);
    for (let i = 0; i < this.adj[start].length; i++) {
        let v = this.adj[start][i];
        this.queue.push(v.vertex);
        d[v.vertex] = v.weight;

    }

    while (this.queue.length) {
        let curVertex = this.queue.shift();
        for (let key in this.adj[curVertex]) {
            let v = this.adj[curVertex][key];
            let vertex = v.vertex;
            if (this.marked.indexOf(vertex) !== -1) continue;
            if (!d.hasOwnProperty(vertex)) {
                d[vertex] = d[curVertex] + v.weight;
                this.queue.push(vertex);
            } else {
                let newerDistance = d[curVertex] + v.weight;
                let olderDistance = d[vertex];
                if (newerDistance < olderDistance) {
                    d[vertex] = newerDistance;
                }
            }

        }
        this.marked.push(curVertex);
    }
    console.log(this.dijkstraDistance)
};

let g = new Graph(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 3);
g.addEdge('A', 'E', 7);
g.addEdge('B', 'C', 6);
g.addEdge('C', 'E', 8);
g.addEdge('B', 'D', 5);
g.addEdge('C', 'D', 11);
g.addEdge('E', 'D', 2);
g.addEdge('D', 'G', 10);
g.addEdge('E', 'G', 5);
g.addEdge('D', 'F', 2);
g.addEdge('G', 'F', 3);

g.dijkstra('A', 'F');

// 参考资料：https://www.youtube.com/watch?v=gdmfOwyQlcI