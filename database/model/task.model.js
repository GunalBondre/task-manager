const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
	{
		task: { type: String },
		status: {
			type: String,
			enum: ['backlog', 'todo', 'doing', 'done'],
			default: 'backlog',
		},
		cretedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamp: true }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
