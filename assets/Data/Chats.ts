export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Kai',
		imageUri: '',
	}, {
		id: 'u2',
		name: 'Alex',
		imageUri: '',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Kai',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Alex',
		},
	}]
}

