require(__dirname).test({
  xml: '<root>' +
    '<name>data< data < <</name>' +
    '<p>hello</p>' +
    '</root>',
  expect: [
    ['opentagstart', {name: 'root', attributes: {}}],
    ['opentag', {name: 'root', attributes: {}, isSelfClosing: false}],
    ['opentagstart', {name: 'name', attributes: {}}],
    ['opentag', {name: 'name', attributes: {}, isSelfClosing: false}],
    ['text', 'data< data < <'],
    ['closetag', 'name'],
    ['opentagstart', {name: 'p', attributes: {}}],
    ['opentag', {name: 'p', attributes: {}, isSelfClosing: false}],
    ['text', 'hello'],
    ['closetag', 'p'],
    ['closetag', 'root']
  ],
  strict: false,
  opt: {
    lowercase: true,
    parseAsText: ['name']
  }
})

require(__dirname).test({
  xml: '<root>' +
  '<nameTrim>  data< data < <  </nameTrim>' +
  '<p>hello</p>' +
  '</root>',
  expect: [
    ['opentagstart', {name: 'root', attributes: {}}],
    ['opentag', {name: 'root', attributes: {}, isSelfClosing: false}],
    ['opentagstart', {name: 'nametrim', attributes: {}}],
    ['opentag', {name: 'nametrim', attributes: {}, isSelfClosing: false}],
    ['text', 'data< data < <'],
    ['closetag', 'nametrim'],
    ['opentagstart', {name: 'p', attributes: {}}],
    ['opentag', {name: 'p', attributes: {}, isSelfClosing: false}],
    ['text', 'hello'],
    ['closetag', 'p'],
    ['closetag', 'root']
  ],
  strict: false,
  opt: {
    lowercase: true,
    trim: true,
    parseAsText: ['nametrim']
  }
})
