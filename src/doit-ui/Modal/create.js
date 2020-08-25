//ModalProvider 생성 함수를 추가한다.

import React, { PureComponent } from 'react';
import Modal from '../Modal';
import { Provider } from './context';

export default function craeteModalProvider(ContentMap = {}) {
  return class ModalProvider extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { showModal: false };
      this.handleClose = this.handleClose.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
    }
    handleOpen(contentId, modalProps) {
      this.contentId = contentId;
      this.modalProps = modalProps;
      this.setState({ showModal: true });
    }
    handleClose() {
      this.state({ showModal: false });
    }
    render() {
      const { children } = this.props;
      const { showModal } = this.state;
      const ModalContent = ContentMap[this.contentId];

      return (
        <Provider value={{ openModal: this.handleOpen, closeModal: this.handleClose }}>
          {children}
          {showModal && ModalContent && (
            <Modal>
              <ModalContent {...this.modalProps} />
            </Modal>
          )}
        </Provider>
      );
    }
  };
}
