import React from "react";
import { Page, Text, View, Document, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
  text: { fontSize: 12 },
});

const ResumePDF = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{data.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Skills</Text>
        <Text style={styles.text}>{data.skills}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Experience</Text>
        <Text style={styles.text}>{data.experience}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Education</Text>
        <Text style={styles.text}>{data.education}</Text>
      </View>
    </Page>
  </Document>
);

const DownloadButton = ({ data }) => (
  <PDFDownloadLink document={<ResumePDF data={data} />} fileName="resume.pdf">
    {({ loading }) => (loading ? "Loading PDF..." : "Download PDF")}
  </PDFDownloadLink>
);

export { ResumePDF, DownloadButton };
