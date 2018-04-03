function Graph(v) {
    this.vertices = v;
    this.adj = [];
    this.marked = [];
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;

}

// 表示从 v 到 w 有一条边
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
}

function showGraph() {
    for (let i = 0; i < this.adj.length; i++) {
        let v = this.adj[i];
        let str = '';
        for (let j = 0; j < v.length; j++) {
            str += `${v[j]} `;
        }
        console.log(`${i} -> ${str}`);
    }
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);


g.showGraph();

function dfs(v) {
    this.marked[v] = true;
    console.log(`Visited vertex: ${v}`);
    for(let i =0;i<this.adj[v].length;i++) {
        let w = this.adj[v][i];
        if(!this.marked[w]) {
            this.dfs(w);
        }
    }

}

function bfs(s) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length >0) {
        let v = queue.shift();
        if(v !== undefined) {
            console.log(`Visited vertex: ${v}`);
        }
        for(let i =0;i<this.adj[v].length;i++) {
            let w = this.adj[v][i];
            if(!this.marked[w]) {
                this.marked[w] = true;
                queue.push(w);
            }
        }

    }
}

// g.dfs(1);

g.bfs(2);
