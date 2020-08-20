import React, { Children } from 'react';
import Modal from './Modal';
import { Provider, Consumer } from './ModalContext';
import { PureComponent } from 'react';

export { Consumer };

export default function createModalProvider(ContentMap = {}) {
  return class ModalProvider extends PureComponent {
    constructor(props) {
      super(props);

      this.state = { showModal: false };
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
    handleOpen(contentId, modalProps) {
      this.contentId = contentId;
      this.modalProps = modalProps;
      this.setState({ showModal: true });
    }
    handleClose() {
      this.setState({ showModal: false });
    }
    render() {
      const { children } = this.props;
      const { showModal } = this.state;
      const ModalContent = ContentMap[this.contentId];

      return (
        <Provider value={{ openModal: this.handleOpen, closeModal: this.handleClose }}>
          {children}
          {showModal && (
            <Modal>
              <ModalContent {...this.modalProps} />
            </Modal>
          )}
        </Provider>
      );
    }
  };
}
