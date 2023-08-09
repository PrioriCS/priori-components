module.exports = {
  parserOpts: {
    headerPattern: /(\w*)-(\w*) (\w*)[:\s](.*)$/,
    headerCorrespondence: ['scope', 'ticket', 'type', 'subject'],
  },
};
