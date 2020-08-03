const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal error'
}

exports.success = function (req, res, message, status) {
  let statusCode = status || 200;
  let statusMessage = message || statusMessages[status];
  
  res.status(statusCode).send({ 
      error: '',
      body: statusMessage
  });
}

exports.error = function (req, res, message, status, details) {
  console.error('[response error] ' + details);

  res.status(status || 500).send({ 
      error: message,
      body: '',
  });
}