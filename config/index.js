module.exports = {
	mongo: {
		connection: 'mongodb://localhost:27017/mailer'
	},

	elastic: {
		host: {
			host: 'localhost'
		},
		requestTimeout: 5000
	},

	collections: [{
		name: 'orders',
		index: 'orders',
		type: 'order',
		fields: ['_id', 'subject', 'html', 'text', 'to_address']
	}]
};
