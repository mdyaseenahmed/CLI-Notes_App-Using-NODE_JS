// console.log('notes.js')
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find((note) => note.title === title)

	// const duplicateNotes = notes.filter((note) => note.title === title)

	// const duplicateNotes = notes.filter(function (note){
	// 	return note.title === title
	// })


	if(!duplicateNote){
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse('New Note Added.!'))
	} else{
		console.log(chalk.red.inverse('Note title Already Taken.!'))
	}
	
}

const removeNote = (title) => {
	const notes = loadNotes()
	const notesToKeep = notes.filter((note) => note.title !== title)

	// const notesToKeep = notes.filter(function (note) {
	// 	return note.title !== title
	// })
	

	if(notes.length > notesToKeep.length) {
		console.log(chalk.green.inverse('Note Removed!'))
		saveNotes(notesToKeep)
	} else{
		console.log(chalk.red.inverse('No note Found!'))
	}
}

const listNotes = () => {
	const notes = loadNotes()

	if(notes.length === 0){
		console.log('No Notes Exists.!')
	} else{
		console.log(chalk.inverse('Your Notes ... '))
		notes.forEach((note) => console.log('Title : ' + note.title))
	}
}

const readNote = (title) => {
	const notes = loadNotes()

	const foundNote = notes.find((note) => note.title === title)

	if (foundNote){
		console.log(chalk.inverse.green(foundNote.title))
		console.log(foundNote.body)
	} else{
		console.log(chalk.bgRed('No Note Found.!'))
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
	try{
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)	
	} catch(e){
		return [] 
	}	
}

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}