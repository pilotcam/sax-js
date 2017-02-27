require(__dirname).test({
  xml: '<r>Line One\nLine Two</r>',
  expect: [
    ['opentagstart', {'name': 'R', attributes: {}}],
    ['opentag', {'name': 'R', attributes: {}, isSelfClosing: false}],
    ['text', 'Line One\nLine Two'],
    ['closetag', 'R']
  ]
})
