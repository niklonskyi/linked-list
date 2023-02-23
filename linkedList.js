function LinkedList() {
    const _list = [];

    function append(value) {
        _list.push(value);
    }

    function prepend(value) {
        _list.unshift(value);
    }

    function size() {
        return _list.length;
    }

    function head() {
        return _list[0];
    }

    function tail() {
        return _list[-1];
    }

    function at(index) {
        return _list[index];
    }

    function pop() {
        _list.pop();
    }

    function contains(value) {
        return _list.includes(value);
    }

    function find(value) {
        if (_list.indexOf(value) === -1) {
            return null;
        }
        else return _list.indexOf(value)
    }

    function toString() {
        for (const listElement of _list) {
            process.stdout.write(`( ${listElement.value} ) -> `)
        }
        process.stdout.write('null')
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
    }
}

function Node(value) {
    let nextNode = null;

    function changeValue(newValue) {
        value = newValue;
    }

    return {
        value,
        nextNode,
    }
}
