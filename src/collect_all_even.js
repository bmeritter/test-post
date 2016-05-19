function collect_same_elements(collection_a, object_b) {
    //在此处写代码

    var c = [];
    var a =  object_b.value;
    var b = [];
    for(var i=0; i<collection_a.length; i++) {
        b.push(collection_a[i].key);
    }
    for(var i=0; i< b.length; i++) {
        for(var j=0; j< a.length; j++) {
            if(b[i] == a[j]) {
                c.push(b[i]);
            }
        }
    }
    return c;
}

module.exports = collect_same_elements;
