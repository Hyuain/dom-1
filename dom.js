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
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}
