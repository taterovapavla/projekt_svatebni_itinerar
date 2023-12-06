import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
import { items } from '../Harmonogram/harmonogram-info';

Font.register({
  family: 'Raleway',
  src: '/Raleway-Regular.ttf',
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Raleway',
    display: 'flex',
    backgroundColor: '#EBF4FB',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    paddingTop: 0,
    alignItems: 'center',
  },
  text: {
    padding: 10,
    margin: 10,
    maxWidth: '80%',
    lineHeight: 0.9,
  },
  image: {
    maxWidth: 20,
    maxHeight: 20,
    marginLeft: 20,
  },
  title: {
    textAlign: 'center',
    paddingTop: 10,
  },
});

export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Harmonogram svatebního dne</Text>
      {items.map((item) => (
        <View style={styles.section} key={item.title}>
          <Image
            style={styles.image}
            src={item.media.source.url}
            key={item.title}
          />
          <Text style={styles.text} key={item.title}>
            {item.title}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);
