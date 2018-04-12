// 背包问题：递归与动态规划

let value = [7, 4, 5, 1];
let weight = [5, 3, 4, 1];

let total = 7;

function dynKnapsack(total, weight, value) {
    let K = [];
    for (let i = 0; i < value.length; i++) {
        K[i] = [];
    }
    K[-1] = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < total; i++) {
        K[-1].push(0);
    }

    for (let j = 0; j < value.length; j++) {
        for (let w = 0; w <= total; w++) {
            if (w === 0) {
                K[j][w] = 0;
            } else if (weight[j] > w) {
                K[j][w] = K[j - 1][w];
            } else {
                K[j][w] = Math.max(value[j] + K[j - 1][w - weight[j]], K[j - 1][w]);
            }
        }
    }


    let MaxValue = K[value.length - 1][total];


    let remainWeight = total;
    let selectedItem = [];
    for (let i = value.length - 1; i >= 0; i--) {
        if (remainWeight >= weight[i]) {
            if (
                K[i][remainWeight] - value[i] === K[i - 1][remainWeight - weight[i]]
            ) {
                selectedItem.push(i);
                remainWeight = remainWeight - weight[i];
            }
        }
    }

    console.log(`动态规划数组：`);
    console.log(K);
    console.log(`最大价值为${MaxValue}`);
    console.log(`选择的宝物的索引值分别为：${selectedItem.join(',')}`)

}

dynKnapsack(total, weight, value);

dynKnapsack(16, [3, 4, 7, 8, 9], [4, 5, 10, 11, 13]);
