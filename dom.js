window.dom = {
    find(string) {
        let arr = string.split('>')
        if (arr.length === 1) {
            return document.querySelectorAll(arr[0])
        } else if (arr.length === 2) {
            let beforeFilter = document.querySelectorAll(arr[1])
            let afterFilter = []
            let parents = document.querySelectorAll(arr[0])
            for (let i = 0; i < beforeFilter.length; i++) {
                for (let j = 0; j < parents.length; j++) {
                    if (beforeFilter[i].parentNode === parents[j]) {
                        afterFilter.push(beforeFilter[i])
                    }
                }
            }
            return afterFilter
        }
    },
    style(node, name, value) {
        node.style[name] = value
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}
