const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,	// Works Same as 'required', (makes title as compulsory as cmd line argument).
			type:'string'	// type of the title is String
		},
		body: {
			describe: 'Note Body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body)
	}
})

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title)
	}
})

// Create list command
yargs.command({
	command: 'list',
	describe: 'List all Your Notes',
	handler() {
		notes.listNotes()
	}
})

// Create Read Command
yargs.command({
	command: 'read',
	describe: 'Read a Note',
	builder: {
		title: {
			describe: 'Reads a Note',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title)
	}
})

// add, remove, read, list

// console.log(yargs.argv)	//Must Required, for printing the values in the cmd prompt
yargs.parse()	//It is same as 'console.log(yargs.argv)'