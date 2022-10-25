const Contact = require("../models/Contact")

const createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body)
        const savedContact = await newContact.save()
        res.status(200).json(savedContact)
    } catch (err) {
        res.status(500).json(err)
    }

}

const deleteContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (contact) {
        try {
            await contact.delete()
            res.status(200).json({ message: "Contact has been deleted." })
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        req.status(404).json({ message: "Contact is not found!" })
    }

}

const updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedContact)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id)
        if (contact) {
            res.status(200).json(contact)
        } else {
            res.status(404).json({ message: "Contact is not found!" })
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

const getAllContact = async (req, res) => {
    const user_id = req.body.user_id
    try {
        if (user_id) {
            const contact = await Contact.find({ user_id: user_id }).limit(200)
            res.status(200).json(contact)
        }else{
            res.status(400).json("You did bad request")
        }

    } catch (err) {
        res.status(500).json(err)
    }
}



module.exports = {
    createContact,
    deleteContact,
    updateContact,
    getContact,
    getAllContact
}