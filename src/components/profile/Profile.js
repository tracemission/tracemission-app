import React, { useState } from 'react';
import i18n from '../../util/i18n';
import { View, StyleSheet, Text } from 'react-native';
import QRCodeDisplay from '../tracker/QRCodeDisplay';
import { Button, Dialog, DialogDefaultActions } from 'react-native-material-ui';

const Profile = props => {
  const { navigate, userData } = props;
  const [report, setReport] = useState(false);
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.bg]}>
      <Button
        style={{ container: styles.closeButton }}
        onPress={() => navigate('dashboard')}
        icon="close"
        text=""
      />
      {!report ? (
        <View style={styles.container}>
          <Text style={styles.name}>
            {userData.firstName} {userData.lastName}
          </Text>
          <Text>{userData.id}</Text>
          <View style={styles.qr}>
            <QRCodeDisplay id={userData.id} />
          </View>
          <Button
            raised
            onPress={() => setReport(true)}
            style={{ container: styles.reportButton }}
            text={i18n.t('PROFILE.REPORT')}
          />
        </View>
      ) : (
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#CCCCCC'
            }
          ]}
        >
          <Dialog style={{ alignSelf: 'center' }}>
            <Dialog.Title>
              <Text>Covid-19 Infizierung melden</Text>
            </Dialog.Title>
            <Dialog.Content>
              <Text>
                Wurdest du auf Covid-19 getestet und möchtest die Infektion
                melden? Da wir die Behörden sowie alle Leute informieren werden,
                die sich in Räumen mit dir aufgehalten haben, melde dich bitte
                NICHT als infiziert, wenn du eine Infektion lediglich vermutest.
                Konsultiere stattdessen lieber einen Arzt für das weitere
                Vorgehen.
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <DialogDefaultActions
                actions={['Abbrechen', 'Weiter']}
                onActionPress={() => setReport(false)}
              />
            </Dialog.Actions>
          </Dialog>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFFFF',
    paddingTop: 32
  },
  closeButton: {
    width: 64,
    alignSelf: 'flex-end'
  },
  reportButton: {
    borderColor: '#F92968',
    borderWidth: 2
  },
  name: {
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  qr: {
    marginVertical: 32
  }
});

export default Profile;
