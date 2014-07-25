//标签属性白名单
UE._wk_whitelist = {
    a: {
        href: true
    },
    br: {
        type: true
    },
    div: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    img: {
        src: true,
        width: true,
        height: true,
        alt: true,
        __trans: {
            'c': 'src',
            'w': 'width',
            'h': 'height'
        }
    },
    math: {}, //公式
    obj: {
        "datatype": true,
        "data": true,
        "bg-img" : true,
        "alt" : true,
        "width" : true,
        "height" : true,
        "type": true
    },
    li: {},
    ol: {
        start: true,
        type: true
    },
    p: {
        "datatype": true
    },
    span: {},
    table: {},
    td: {
        rowspan: true,
        colspan: true,
        nowrap: true
    },
    tr: {},
    ul: {
        start: true,
        type: true
    },
    sup: {},
    sub: {},
    ruby: {},
    rt: {},
    rbase: {},
    style: {}
};