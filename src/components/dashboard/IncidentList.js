import React, { useState } from 'react';
import i18n from '../../util/i18n';
import { StyleSheet, View, Text } from 'react-native';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.subtitle}>{i18n.t('DASHBOARD.INCIDENTS.TITLE')}</Text>
      {incidents.length > 0 ? (
        <View>
          {/* <ListItem
            title={'München Hbf'}
            subtitle={'22 Weitere Besucher'}
            badge={{ value: '10:32 - 10:50' }}
            bottomDivider
          />
          <ListItem
            title={'Starbucks Berlin Hbf'}
            subtitle={'43 Weitere Besucher'}
            badge={{ value: '06:25 - 10:38' }}
          /> */}
        </View>
      ) : (
        <Text>{i18n.t('DASHBOARD.INCIDENTS.NO_ENTRIES')}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 16
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8
  }
});

export default IncidentList;
