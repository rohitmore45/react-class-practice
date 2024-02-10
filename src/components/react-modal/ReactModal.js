import React, { useState } from 'react'
import Modal from 'react-modal'

export default function ReactModal() {
  let [modalIsOpen, setModalIsOpen] = useState(false);
  let openModal = () => {
    setModalIsOpen(true);
  }

  let closeModal = () => {
    setModalIsOpen(false);
  }

  return <>
    <button className='ms-4' onClick={openModal}>Open React Modal</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className='bg-warning h-25 '>
        <h2 className='mt-5'>Hello my name is rohit</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </div>

    </Modal>


  </>
}
