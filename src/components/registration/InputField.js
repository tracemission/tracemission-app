import React from 'react';
import i18n from '../../util/i18n';

const InputField = () => {
  return (
    <View>
      <Text>{i18n.t('REGISTRATION.FIRSTNAME')}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onLiveChange('firstName', text)}
        value={input.firstName}
      />
    </View>
  );
};

export default InputField;
