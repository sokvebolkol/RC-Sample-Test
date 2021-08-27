import React from 'react';
import { View, Modal, ActivityIndicator, Platform, StyleSheet } from 'react-native';

function isIOS() {
  return Platform.OS === 'ios';
}

var _instance = null;

interface ProgressModalProps {
  indicatorColor: string;
  backgroundColor: string;
  cancellable: boolean;
}

export default class ProgressModal extends React.PureComponent<ProgressModalProps> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    _instance = this;
    this._onCancel = null;
  }

  render() {
    return (
      <Modal visible={this.state.isVisible} animationType="none" transparent onRequestClose={this._onRequestClose}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: this.props.backgroundColor,
            },
          ]}
          pointerEvents="box-only"
          onTouchEnd={isIOS() ? this._onRequestClose : undefined}>
          <ActivityIndicator size="large" color={this.props.indicatorColor} />
        </View>
      </Modal>
    );
  }

  _onRequestClose = () => {
    if (!this.props.cancellable) {
      return;
    }

    this.setState({ isVisible: false });

    if (this._onCancel) {
      this._onCancel();
      this._onCancel = null;
    }
  };

  _show(onCancel) {
    this._onCancel = onCancel;
    this.setState({
      isVisible: true,
    });
  }

  _hide() {
    this._onCancel = null;
    this.setState({ isVisible: false });
  }

  static show(onCancel) {
    _instance && _instance._show(onCancel);
  }

  static hide() {
    _instance && _instance._hide();
  }
}

ProgressModal.defaultProps = {
  backgroundColor: 'rgba(255,255,255, 0.7)',
  indicatorColor: 'black',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
