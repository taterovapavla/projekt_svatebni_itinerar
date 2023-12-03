import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
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
    flexDirection: 'column',
    backgroundColor: '#EBF4FB',
  },
  section: {
    margin: 10,
    paddingTop: 100,
    flexGrow: 1,
  },
  text: {
    padding: 10,
    margin: 10,
  },
  image: {
    width: 20,
    margin: 30,
  },
});

// Create Document Component
export const MyDocument = () => (
  <PDFViewer>
    <Document>
      <Page size="A4" style={styles.page}>
        {items.map((item) => (
          <View style={styles.section}>
            <Image style={styles.image} src={item.media.source.url} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        ))}
      </Page>
    </Document>
  </PDFViewer>
);
